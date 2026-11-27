# Screen gallery — brnShop

[Português](README.md) · **English**

Screenshots of every screen (NUI) from a FiveM test server (vRP), rendered with fake data. All screens share the same "dark glass" theme in black, off-white and gold.

To browse: open `index.html` or the GitHub Pages link.

## Features

- English and Portuguese (flags at the top; the choice is remembered in the browser, and the first visit follows the browser language)
- Search by screen (in both languages), resource or section
- Section filter with screen counts
- Full-screen viewer with arrow keys and thumbnails
- Direct link to any screenshot: add `#<name>` to the URL (e.g. `index.html#loja`)

## Structure

```
index.html        the page (markup only)
css/galeria.css   styles
js/galeria.js     search, section filter, viewer, direct links and language
js/lista.js       the list of screens: one object per screen, with Portuguese and English titles
img/              logo and flags
prints/
  entrada/        loading screen, spawn picker, character creation
  hud/            HUD in the car and on foot, knocked-out screen
  jogador/        inventory, ID card, phone, animations
  aparencia/      clothing store, barber shop, tattoo studio
  lojas/          store, Ammunation, car dealership, real estate, police armory (disabled)
  carros/         garage and mechanic (LS Customs)
  baus/           chest, trunk, house chest
  producao/       crafting and weapon factory
  banco/          bank entrance and account
  avisos-chat/    notifications, progress bar, chat
  ferramentas/    quick menu, photo mode, vRP menu
```

Folder and file names are in Portuguese, matching the server. The screenshots themselves show the server in Portuguese.

New screen: put the PNG in `prints/<section>/` and add a line to the right section of `js/lista.js`, with `pt` and `en`. If `en` is missing, the gallery shows the Portuguese title and logs a warning in the browser console. Resources that are off get `desligado: true` (grey card with a "Disabled" badge).
