# Galeria de telas — brnShop

**Português** · [English](README.en.md)

Prints das telas do servidor FiveM de teste (vRP), com dados fictícios.

Para ver: abra o `index.html` ou o link do GitHub Pages. A galeria tem português e inglês (bandeiras no topo; a escolha fica salva no navegador e, na primeira visita, segue o idioma do navegador).

## Estrutura

```
index.html      a galeria (busca, filtro por seção, visor com setas, link direto #nome; textos nos dois idiomas)
lista.js        lista das telas: seção, pasta e prints; títulos em inglês em TELAS_EN
logo.png
flags/          bandeiras do idioma
prints/
  entrada/      loading, entrada na cidade, criação de personagem
  hud/          HUD no carro e a pé, desacordado
  jogador/      inventário, identidade, celular, animações
  aparencia/    roupas, barbearia, tatuagem
  lojas/        loja, Ammunation, concessionária, imobiliária
  carros/       garagem e mecânica
  baus/         baú, porta-malas, baú da casa
  producao-banco/
  avisos-chat/
  ferramentas/  menu rápido, modo foto, menu do vRP
  desligados/   telas de recursos fora do servidor
```

Tela nova: além da linha em `TELAS`, acrescente o título em inglês em `TELAS_EN.titulos`.
