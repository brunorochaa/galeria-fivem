// Lista dos prints da galeria (index.html lê daqui).
// [arquivo (sem .png), título, recurso, observação, desligado]
const TELAS = [
	["HUD", [
		["1-atual-carro", "HUD no carro", "vrp_hud"],
		["2-atual-a-pe", "HUD a pé", "vrp_hud"],
		["3-atual-vida-baixa", "HUD com vida e combustível baixos", "vrp_hud"],
		["hud-limite", "HUD com limite de velocidade (J)", "vrp_hud"],
		["morte", "Desacordado (contagem)", "vrp_hud"],
		["morte-pronto", "Desacordado (pode acordar)", "vrp_hud"],
	]],
	["Entrada e personagem", [
		["loading", "Tela de loading", "vrp_loading"],
		["login", "Escolha do local de entrada", "vrp_login"],
		["personagem-1", "Criação de personagem — etapa 1", "vrp_character"],
		["personagem-2", "Criação de personagem — etapa 2", "vrp_character"],
		["personagem-3", "Criação de personagem — etapa 3", "vrp_character"],
		["identidade", "Identidade (F11)", "vrp_identity"],
		["animacoes", "Menu de animações (F4)", "vrp_animations"],
		["celular", "Celular (K) — início", "vrp_phone"],
		["celular-gps", "Celular — GPS", "vrp_phone"],
	]],
	["Aparência", [
		["roupas", "Loja de roupas", "vrp_skinshop"],
		["barbearia", "Barbearia", "vrp_barbershop"],
		["tatuagens", "Estúdio de tatuagem", "vrp_tattoos"],
	]],
	["Lojas", [
		["loja", "Loja de conveniência", "vrp_store"],
		["loja-armas", "Ammunation", "vrp_gunshop"],
		["concessionaria", "Concessionária", "vrp_dealership"],
		["imobiliaria", "Imobiliária", "vrp_realestate"],
	]],
	["Inventário e baús", [
		["inventario", "Inventário", "vrp_inventory"],
		["bau", "Baú", "vrp_chest"],
		["porta-malas", "Porta-malas", "vrp_trunkchest"],
		["bau-casa", "Baú da casa", "vrp_homes"],
	]],
	["Produção e armas", [
		["producao", "Produção", "vrp_production"],
		["armas", "Fábrica de armas", "vrp_weapons"],
		["arsenal", "Arsenal da polícia", "vrp_arsenal", "Fora do server.cfg (em resources/[desligados]).", true],
	]],
	["Carros", [
		["garagem", "Garagem", "vrp_garages"],
		["mecanica", "Mecânica — categorias", "vrp_lscustoms"],
		["mecanica-rodas", "Mecânica — rodas", "vrp_lscustoms"],
		["mecanica-pintura", "Mecânica — pintura", "vrp_lscustoms"],
		["mecanica-motor", "Mecânica — motor", "vrp_lscustoms"],
	]],
	["Banco", [
		["banco-entrada", "Banco — entrada", "vrp_bank"],
		["banco", "Banco — conta", "vrp_bank"],
	]],
	["Ferramentas de teste", [
		["menu-rapido", "Menu rápido (F3) — carro", "vrp_quickmenu"],
		["menu-rapido-lugares", "Menu rápido (F3) — lugares", "vrp_quickmenu"],
		["menu-rapido-itens", "Menu rápido (F3) — itens", "vrp_quickmenu"],
		["menu-rapido-ajuda", "Menu rápido (F3) — ajuda", "vrp_quickmenu"],
		["modo-foto", "Modo foto (F9)", "vrp_photomode"],
		["menu-vrp", "Menu do vRP", "vrp"],
	]],
	["Avisos e chat", [
		["avisos", "Notificações", "vrp_notify"],
		["avisos-itens", "Item recebido / removido", "vrp_notifyitens"],
		["chamados", "Chamado da polícia", "vrp_notifypush"],
		["progresso", "Barra de progresso (canto inferior direito)", "vrp_progressbar"],
		["chat", "Chat aberto", "vrp_chat"],
	]],
];

// Prints que não saem do telas.js (feitos à parte)
const SEM_SCRIPT = ["loading"];
