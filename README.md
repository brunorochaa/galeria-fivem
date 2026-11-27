# Galeria de telas — brnShop

**Português** · [English](README.en.md)

Prints das telas do servidor FiveM de teste (vRP), com dados fictícios.

Para ver: abra o `index.html` ou o link do GitHub Pages. A galeria tem português e inglês (bandeiras no topo; a escolha fica salva no navegador e, na primeira visita, segue o idioma do navegador).

## Estrutura

```
index.html        a página (só a estrutura)
css/galeria.css   o visual
js/galeria.js     busca, filtro por seção, visor com setas, link direto #nome e idioma
js/lista.js       a lista das telas: um objeto por tela, com título em português e em inglês
img/              logo e bandeiras
prints/
  entrada/        loading, entrada na cidade, criação de personagem
  hud/            HUD no carro e a pé, desacordado
  jogador/        inventário, identidade, celular, animações
  aparencia/      roupas, barbearia, tatuagem
  lojas/          loja, Ammunation, concessionária, imobiliária, arsenal (desligado)
  carros/         garagem e mecânica
  baus/           baú, porta-malas, baú da casa
  producao/       produção e fábrica de armas
  banco/          entrada e conta
  avisos-chat/    notificações, barra de progresso, chat
  ferramentas/    menu rápido, modo foto, menu do vRP
```

Tela nova: ponha o PNG em `prints/<seção>/` e acrescente uma linha na seção certa de `js/lista.js`, com `pt` e `en`. Se faltar o `en`, a galeria mostra o título em português e avisa no console do navegador. Recurso fora do servidor leva `desligado: true` (cartão cinza com o selo "Desligado").
