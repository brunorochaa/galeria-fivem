// Lista das telas da galeria (lida por js/galeria.js).
// Seção: { pasta, pt, en, telas }. As imagens ficam em prints/<pasta>/<arq>.png.
// Tela:  { arq, pt, en, rec, nota?: { pt, en }, desligado?: true }
//   arq        nome do arquivo sem .png (também é o link direto: index.html#arq)
//   pt, en     título em português e em inglês
//   rec        recurso do servidor que mostra a tela
//   nota       observação que aparece no cartão e no visor
//   desligado  recurso fora do server.cfg: o cartão fica cinza e com o selo "Desligado"
// Tela nova: gere o print, ponha o PNG na pasta da seção e acrescente uma linha aqui (com pt e en).
const TELAS = [
	{ pasta: "entrada", pt: "Entrada", en: "Joining", telas: [
		{ arq: "loading", pt: "Tela de loading", en: "Loading screen", rec: "vrp_loading" },
		{ arq: "login", pt: "Escolha do local de entrada", en: "Spawn location picker", rec: "vrp_login" },
		{ arq: "personagem-1", pt: "Criação de personagem — etapa 1", en: "Character creation — step 1", rec: "vrp_character" },
		{ arq: "personagem-2", pt: "Criação de personagem — etapa 2", en: "Character creation — step 2", rec: "vrp_character" },
		{ arq: "personagem-3", pt: "Criação de personagem — etapa 3", en: "Character creation — step 3", rec: "vrp_character" },
	] },
	{ pasta: "hud", pt: "HUD", en: "HUD", telas: [
		{ arq: "hud-carro", pt: "HUD no carro", en: "HUD in a car", rec: "vrp_hud" },
		{ arq: "hud-a-pe", pt: "HUD a pé", en: "HUD on foot", rec: "vrp_hud" },
		{ arq: "hud-vida-baixa", pt: "HUD com vida e combustível baixos", en: "HUD with low health and fuel", rec: "vrp_hud" },
		{ arq: "hud-limite", pt: "HUD com limite de velocidade (J)", en: "HUD with speed limiter (J)", rec: "vrp_hud" },
		{ arq: "morte", pt: "Desacordado (contagem)", en: "Knocked out (countdown)", rec: "vrp_hud" },
		{ arq: "morte-pronto", pt: "Desacordado (pode acordar)", en: "Knocked out (can get up)", rec: "vrp_hud" },
	] },
	{ pasta: "jogador", pt: "Do jogador", en: "Player", telas: [
		{ arq: "inventario", pt: "Inventário", en: "Inventory", rec: "vrp_inventory" },
		{ arq: "identidade", pt: "Identidade (F11)", en: "ID card (F11)", rec: "vrp_identity" },
		{ arq: "celular", pt: "Celular (K) — início", en: "Phone (K) — home", rec: "vrp_phone" },
		{ arq: "celular-gps", pt: "Celular — GPS", en: "Phone — GPS", rec: "vrp_phone" },
		{ arq: "animacoes", pt: "Menu de animações (F4)", en: "Animations menu (F4)", rec: "vrp_animations" },
	] },
	{ pasta: "aparencia", pt: "Aparência", en: "Appearance", telas: [
		{ arq: "roupas", pt: "Loja de roupas", en: "Clothing store", rec: "vrp_skinshop" },
		{ arq: "barbearia", pt: "Barbearia", en: "Barber shop", rec: "vrp_barbershop" },
		{ arq: "tatuagens", pt: "Estúdio de tatuagem", en: "Tattoo studio", rec: "vrp_tattoos" },
	] },
	{ pasta: "lojas", pt: "Lojas", en: "Shops", telas: [
		{ arq: "loja", pt: "Loja de conveniência", en: "Convenience store", rec: "vrp_store" },
		{ arq: "loja-armas", pt: "Ammunation", en: "Ammunation", rec: "vrp_gunshop" },
		{ arq: "concessionaria", pt: "Concessionária", en: "Car dealership", rec: "vrp_dealership" },
		{ arq: "imobiliaria", pt: "Imobiliária", en: "Real estate", rec: "vrp_realestate" },
		{ arq: "arsenal", pt: "Arsenal da polícia", en: "Police armory", rec: "vrp_arsenal", desligado: true,
			nota: { pt: "Fora do server.cfg (em resources/[desligados]).", en: "Not in server.cfg (in resources/[desligados])." } },
	] },
	{ pasta: "carros", pt: "Carros", en: "Cars", telas: [
		{ arq: "garagem", pt: "Garagem", en: "Garage", rec: "vrp_garages" },
		{ arq: "mecanica", pt: "Mecânica — categorias", en: "Mechanic — categories", rec: "vrp_lscustoms" },
		{ arq: "mecanica-rodas", pt: "Mecânica — rodas", en: "Mechanic — wheels", rec: "vrp_lscustoms" },
		{ arq: "mecanica-pintura", pt: "Mecânica — pintura", en: "Mechanic — paint", rec: "vrp_lscustoms" },
		{ arq: "mecanica-motor", pt: "Mecânica — motor", en: "Mechanic — engine", rec: "vrp_lscustoms" },
	] },
	{ pasta: "baus", pt: "Baús", en: "Storage", telas: [
		{ arq: "bau", pt: "Baú", en: "Chest", rec: "vrp_chest" },
		{ arq: "porta-malas", pt: "Porta-malas", en: "Car trunk", rec: "vrp_trunkchest" },
		{ arq: "bau-casa", pt: "Baú da casa", en: "House chest", rec: "vrp_homes" },
	] },
	{ pasta: "producao", pt: "Produção", en: "Crafting", telas: [
		{ arq: "producao", pt: "Produção", en: "Crafting", rec: "vrp_production" },
		{ arq: "armas", pt: "Fábrica de armas", en: "Weapon factory", rec: "vrp_weapons" },
	] },
	{ pasta: "banco", pt: "Banco", en: "Bank", telas: [
		{ arq: "banco-entrada", pt: "Banco — entrada", en: "Bank — entrance", rec: "vrp_bank" },
		{ arq: "banco", pt: "Banco — conta", en: "Bank — account", rec: "vrp_bank" },
	] },
	{ pasta: "avisos-chat", pt: "Avisos e chat", en: "Notifications and chat", telas: [
		{ arq: "avisos", pt: "Notificações", en: "Notifications", rec: "vrp_notify" },
		{ arq: "avisos-itens", pt: "Item recebido / removido", en: "Item received / removed", rec: "vrp_notifyitens" },
		{ arq: "chamados", pt: "Chamado da polícia", en: "Police call", rec: "vrp_notifypush" },
		{ arq: "progresso", pt: "Barra de progresso (canto inferior direito)", en: "Progress bar (bottom right)", rec: "vrp_progressbar" },
		{ arq: "chat", pt: "Chat aberto", en: "Chat open", rec: "vrp_chat" },
	] },
	{ pasta: "ferramentas", pt: "Ferramentas de teste", en: "Test tools", telas: [
		{ arq: "menu-rapido", pt: "Menu rápido (F3) — carro", en: "Quick menu (F3) — car", rec: "vrp_quickmenu" },
		{ arq: "menu-rapido-lugares", pt: "Menu rápido (F3) — lugares", en: "Quick menu (F3) — places", rec: "vrp_quickmenu" },
		{ arq: "menu-rapido-itens", pt: "Menu rápido (F3) — itens", en: "Quick menu (F3) — items", rec: "vrp_quickmenu" },
		{ arq: "menu-rapido-ajuda", pt: "Menu rápido (F3) — ajuda", en: "Quick menu (F3) — help", rec: "vrp_quickmenu" },
		{ arq: "modo-foto", pt: "Modo foto (F9)", en: "Photo mode (F9)", rec: "vrp_photomode" },
		{ arq: "menu-vrp", pt: "Menu do vRP", en: "vRP menu", rec: "vrp" },
	] },
];
