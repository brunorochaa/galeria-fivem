// Galeria: monta os cartões a partir de TELAS (js/lista.js), busca, filtro por seção, visor e idioma.
(function () {
	const $ = (id) => document.getElementById(id);
	const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };
	const semAcento = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
	const guardar = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
	const ler = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
	const svgAmpliar = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>';

	// idioma: o escolhido nas bandeiras (lembrado neste navegador) ou o do navegador
	const IDIOMA = (() => { const s = ler("galeria-idioma"); if (s === "pt" || s === "en") return s; return (navigator.language || "").toLowerCase().startsWith("pt") ? "pt" : "en"; })();
	const EN = IDIOMA === "en";
	const T = EN ? {
		titulo: "Screen gallery", h1: "Screen <em>gallery</em>", inicio: "Back to start (all screens)", buscar: "Search",
		menores: "Smaller screenshots", maiores: "Larger screenshots", nenhuma: "No screen found", tente: "Try another name or the resource (e.g. vrp_bank).",
		visor: "View screenshot", real: "Actual size (Space)", abrirImg: "Open the image", fechar: "Close (Esc)", anterior: "Previous (←)", proximo: "Next (→)",
		tela: " screen", telas: " screens", de: " of ", todas: "All", semPrint: "Screenshot not generated yet", desligado: "Disabled",
	} : {
		titulo: "Galeria de telas", h1: "Galeria de <em>telas</em>", inicio: "Voltar ao início (todas as telas)", buscar: "Buscar",
		menores: "Prints menores", maiores: "Prints maiores", nenhuma: "Nenhuma tela encontrada", tente: "Tente outro nome ou o recurso (ex.: vrp_bank).",
		visor: "Visualizar print", real: "Tamanho real (Espaço)", abrirImg: "Abrir a imagem", fechar: "Fechar (Esc)", anterior: "Anterior (←)", proximo: "Próximo (→)",
		tela: " tela", telas: " telas", de: " de ", todas: "Todas", semPrint: "Print ainda não gerado", desligado: "Desligado",
	};
	const qtTelas = (n) => n + (n > 1 ? T.telas : T.tela);
	document.documentElement.lang = EN ? "en" : "pt-BR";
	document.title = T.titulo;
	document.querySelector(".marca").title = T.inicio;
	document.querySelector(".marca h1").innerHTML = T.h1;
	$("busca").placeholder = T.buscar;
	$("vazio").textContent = ""; $("vazio").append(el("b", null, T.nenhuma), T.tente);
	$("visor").setAttribute("aria-label", T.visor);
	$("vReal").title = T.real; $("vAbrir").title = T.abrirImg; $("vFechar").title = T.fechar; $("vAnt").title = T.anterior; $("vProx").title = T.proximo;
	document.querySelectorAll("#idiomas button").forEach((b) => {
		b.setAttribute("aria-pressed", String(b.dataset.idioma === IDIOMA));
		b.onclick = () => { if (b.dataset.idioma !== IDIOMA) { guardar("galeria-idioma", b.dataset.idioma); location.reload(); } };
	});
	$("idiomas").setAttribute("aria-label", EN ? "Language" : "Idioma");

	const todos = [];
	const secoes = [];
	const conteudo = $("conteudo");

	TELAS.forEach((secao, si) => {
		const pasta = secao.pasta, lista = secao.telas;
		const nomeSecao = EN ? secao.en : secao.pt;
		const sec = el("section");
		sec.id = "s-" + si;
		const cab = el("div", "cab");
		const qt = el("span", "qt", qtTelas(lista.length));
		cab.append(el("span", "n", String(si + 1).padStart(2, "0")), el("h2", null, nomeSecao), qt);
		const grade = el("div", "grade");
		sec.append(cab, grade);
		conteudo.append(sec);
		const s = { nome: nomeSecao, sec, qt, itens: [] };
		secoes.push(s);

		lista.forEach((tela) => {
			const { arq, rec } = tela, off = !!tela.desligado;
			if (!tela.en) console.warn("Tela sem título em inglês (en) em js/lista.js:", arq);
			const titulo = EN ? tela.en || tela.pt : tela.pt;
			const nota = tela.nota ? (EN ? tela.nota.en || tela.nota.pt : tela.nota.pt) : "";
			const fig = el("figure", "cartao" + (off ? " desligado" : ""));
			fig.id = "p-" + arq; // diferente do #link, para o navegador não rolar até o cartão ao abrir pelo link
			const a = el("a", "foto");
			const foto = "prints/" + pasta + "/" + arq + ".png";
			a.href = foto;
			const img = el("img");
			img.src = foto; img.alt = titulo; img.loading = "lazy";
			img.onerror = () => fig.classList.add("sem-print");
			const falta = el("div", "faltando");
			falta.append(el("span", null, T.semPrint), el("code", null, arq));
			const amp = el("span", "ampliar");
			amp.innerHTML = svgAmpliar;
			a.append(img, falta, amp);
			if (off) a.append(el("span", "selo", T.desligado));
			const cap = el("figcaption", "legenda");
			const bTitulo = el("b", null, titulo);
			const bRec = el("span", "rec", rec);
			cap.append(bTitulo, bRec);
			if (nota) cap.append(el("span", "nota", nota));
			fig.append(a, cap);
			grade.append(fig);
			// a busca acha pelo título nos dois idiomas, pelo recurso, pelo arquivo e pela seção
			const item = { arq, foto, titulo, rec, nota, off, secao: s, cartao: fig, bTitulo, bRec, chave: semAcento([tela.pt, tela.en, rec, arq, secao.pt, secao.en].join(" ")) };
			a.addEventListener("click", (e) => { e.preventDefault(); abrir(visiveis().indexOf(item)); });
			todos.push(item);
			s.itens.push(item);
		});
	});

	// logo = voltar ao início: tira o filtro de seção e a busca e sobe para o topo
	document.querySelector(".marca").addEventListener("click", (e) => {
		e.preventDefault();
		if (busca.value) { busca.value = ""; busca.dispatchEvent(new Event("input")); }
		escolher(-1);
		if (location.hash) history.replaceState(null, "", location.pathname);
	});

	// filtro por seção
	let secaoAtiva = -1;
	const chips = $("chips");
	const chipEls = [];
	const novoChip = (nome, n, i) => {
		const c = el("button", "chip" + (i < 0 ? " ativo" : ""), nome);
		c.append(el("span", null, String(n)));
		c.onclick = () => escolher(i);
		chips.append(c);
		chipEls.push(c);
	};
	novoChip(T.todas, todos.length, -1);
	secoes.forEach((s, i) => novoChip(s.nome, s.itens.length, i));
	// esmaece a borda direita enquanto houver seção escondida para rolar
	const atualizarMais = () => chips.classList.toggle("mais", chips.scrollLeft + chips.clientWidth < chips.scrollWidth - 4);
	chips.addEventListener("scroll", atualizarMais, { passive: true });
	window.addEventListener("resize", atualizarMais);
	atualizarMais();
	function escolher(i) {
		secaoAtiva = secaoAtiva === i ? -1 : i;
		chipEls.forEach((c, k) => c.classList.toggle("ativo", k - 1 === secaoAtiva));
		const ch = chipEls[secaoAtiva + 1]; chips.scrollLeft = ch.offsetLeft - chips.clientWidth / 2 + ch.offsetWidth / 2;
		filtrar();
		window.scrollTo({ top: 0 });
	}

	// busca com destaque
	const busca = $("busca");
	function marcar(elm, texto, termo) {
		elm.textContent = texto;
		if (!termo) return;
		const i = semAcento(texto).indexOf(termo);
		if (i < 0) return;
		elm.textContent = "";
		elm.append(texto.slice(0, i), el("mark", null, texto.slice(i, i + termo.length)), texto.slice(i + termo.length));
	}
	function filtrar() {
		const termo = semAcento(busca.value.trim());
		let total = 0;
		secoes.forEach((s, i) => {
			let n = 0;
			s.itens.forEach((t) => {
				const ok = (secaoAtiva < 0 || secaoAtiva === i) && (!termo || t.chave.includes(termo));
				t.cartao.hidden = !ok;
				if (ok) n++;
				marcar(t.bTitulo, t.titulo, termo);
				marcar(t.bRec, t.rec, termo);
			});
			s.sec.hidden = n === 0;
			s.qt.textContent = termo ? n + T.de + s.itens.length : qtTelas(s.itens.length);
			total += n;
		});
		$("vazio").hidden = total > 0;
	}
	busca.addEventListener("input", filtrar);

	// prints menores (lembrado neste navegador)
	const dens = $("densidade");
	function aplicarDensidade(c) { document.body.classList.toggle("compacta", c); dens.classList.toggle("ativo", c); dens.title = c ? T.maiores : T.menores; }
	aplicarDensidade(ler("galeria-compacta") === "1");
	dens.onclick = () => { const c = !document.body.classList.contains("compacta"); aplicarDensidade(c); guardar("galeria-compacta", c ? "1" : "0"); };

	// visor
	const visor = $("visor"), vImg = $("visorImg");
	const visiveis = () => todos.filter((t) => !t.cartao.hidden);
	let lista = [], atual = 0;
	function abrir(i) {
		lista = visiveis();
		if (!lista.length) return;
		montarTiras();
		visor.hidden = false;
		document.body.style.overflow = "hidden";
		mostrar(i < 0 ? 0 : i);
	}
	function fechar() {
		visor.hidden = true;
		visor.classList.remove("real");
		document.body.style.overflow = "";
		history.replaceState(null, "", location.pathname + location.search);
		const t = lista[atual];
		if (t) t.cartao.scrollIntoView({ block: "nearest" });
	}
	function mostrar(i) {
		atual = (i + lista.length) % lista.length;
		const t = lista[atual];
		visor.classList.remove("real");
		vImg.src = t.foto;
		vImg.alt = t.titulo;
		$("vTitulo").textContent = t.titulo;
		$("vRecurso").textContent = t.rec;
		$("vContador").textContent = (atual + 1) + T.de + lista.length + " · " + t.secao.nome;
		$("vAbrir").href = t.foto;
		const rod = $("vRodape");
		rod.textContent = "";
		const texto = (t.off ? T.desligado + ". " : "") + t.nota;
		if (texto.trim()) rod.append(el("span", "nota", texto));
		[...$("tiras").children].forEach((m, k) => m.classList.toggle("ativo", k === atual));
		const ativa = $("tiras").children[atual];
		if (ativa) { const tr = $("tiras"); tr.scrollLeft = ativa.offsetLeft - tr.clientWidth / 2 + ativa.offsetWidth / 2; }
		history.replaceState(null, "", "#" + t.arq);
		[atual + 1, atual - 1].forEach((k) => { const p = lista[(k + lista.length) % lista.length]; if (p) new Image().src = p.foto; });
	}
	function montarTiras() {
		const tiras = $("tiras");
		tiras.textContent = "";
		lista.forEach((t, k) => {
			const m = el("img");
			m.src = t.foto; m.alt = ""; m.loading = "lazy";
			m.onclick = () => mostrar(k);
			tiras.append(m);
		});
	}
	const tamanhoReal = () => visor.classList.toggle("real");
	vImg.addEventListener("click", tamanhoReal);
	$("vReal").onclick = tamanhoReal;
	$("vAnt").onclick = () => mostrar(atual - 1);
	$("vProx").onclick = () => mostrar(atual + 1);
	$("vFechar").onclick = fechar;
	$("vMoldura").addEventListener("click", (e) => { if (e.target.id === "vMoldura") fechar(); });

	let x0 = null;
	visor.addEventListener("touchstart", (e) => { if (!visor.classList.contains("real")) x0 = e.touches[0].clientX; }, { passive: true });
	visor.addEventListener("touchend", (e) => {
		if (x0 == null) return;
		const dx = e.changedTouches[0].clientX - x0;
		x0 = null;
		if (Math.abs(dx) > 50) mostrar(atual + (dx < 0 ? 1 : -1));
	});

	document.addEventListener("keydown", (e) => {
		if (!visor.hidden) {
			if (e.key === "ArrowLeft") mostrar(atual - 1);
			else if (e.key === "ArrowRight") mostrar(atual + 1);
			else if (e.key === "Escape") fechar();
			else if (e.key === " ") { e.preventDefault(); tamanhoReal(); }
			return;
		}
		if (e.key === "/" && document.activeElement !== busca) { e.preventDefault(); busca.focus(); busca.select(); }
		else if (e.key === "Escape" && document.activeElement === busca) { busca.value = ""; filtrar(); busca.blur(); }
	});

	// link direto para um print (galeria.html#loja)
	const inicial = decodeURIComponent(location.hash.slice(1));
	if (inicial) { const k = todos.findIndex((t) => t.arq === inicial); if (k >= 0) abrir(k); }
})();
