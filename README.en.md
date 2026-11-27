# Screen gallery — brnShop

[Português](README.md) · **English**

Screenshots of every screen (NUI) from a FiveM test server (vRP), rendered with fake data. All screens share the same "dark glass" theme in black, off-white and gold.

To browse: open `index.html` or the GitHub Pages link.

## Features

- Search by screen, resource or section
- Section filter with screen counts
- Full-screen viewer with arrow keys and thumbnails
- Direct link to any screenshot: add `#<name>` to the URL (e.g. `index.html#loja`)

## Structure

```
index.html      the gallery
lista.js        list of screens: section, folder and screenshots
logo.png
prints/
  entrada/        loading screen, spawn picker, character creation
  hud/            HUD in the car and on foot, knocked-out screen
  jogador/        inventory, ID card, phone, animations
  aparencia/      clothing store, barber shop, tattoo studio
  lojas/          store, Ammunation, car dealership, real estate
  carros/         garage and mechanic (LS Customs)
  baus/           chest, trunk, house chest
  producao-banco/ crafting and bank
  avisos-chat/    notifications, progress bar, chat
  ferramentas/    quick menu, photo mode, vRP menu
  desligados/     screens from resources that are turned off
```

Folder and file names are in Portuguese, matching the server.
