# Migración del dossier a Astro (`app/`)

Feature: componentizar el dossier ELE A1 como proyecto Astro, dejando `index.html` intacto.

## Specs
- S1: "deja el archivo original intacto, crea una carpeta nueva para el proyecto y trabaja dentro"
- S2: "lo podemos migar a astro y utiliza context7 para componitizar este enorme archivo"
- S3: `.opencode/opencode.json` con el contenido exacto provisto por el usuario (MCP Astro docs, `type: "remote"`)
- S4: "y tambien configura a nivel de proyecto este mcp para zcode"

## Tasks
- T1: MCP configs (`.opencode/opencode.json` + `.zcode/config.json`) — DONE
- T2: Scaffold Astro en `app/` (package.json, astro.config.mjs, tsconfig, .gitignore) — DONE
- T3: Estilos globales extraídos verbatim de `index.html` → `app/src/styles/global.css` (230 líneas) — DONE
- T4: Datos a módulos ES (`src/data/`) — DONE
- T5: `lib/state.js` + `lib/utils.js` — DONE
- T6: Scripts cliente (`score`, `task-renderer`, `domino`, `widgets`, `app`) — DONE
- T7: Layout + chrome (Hero, Nav, Dock, FamilyModal, TaskMount) — DONE
- T8: 11 secciones como componentes — DONE
- T9: npm install + build + verificación — DONE (Astro 5.18.2, bundle 39.6 kB / 13.5 kB gzip; smoke test headless: 22/22 tareas, 30 fichas dominó, pill y conteos hidratados)

## Log
- L1: "analiza este proyecto" → análisis completo entregado (lectura total de index.html, 1.260 líneas).
- L2: "lo podemos migar a astro y utiliza context7 para componitizar este enorme archivo" + configs MCP.
- L3: USER: "deja el archivo original intacto, crea una carpeta nueva para el proyecto y trabaja dentro" → todo el código nuevo vive en `app/`; `index.html` solo se lee, nunca se modifica.
- L4: Arquitectura elegida: Astro estático + islas vanilla JS (sin framework UI); contenido estático renderizado en build, partes dependientes de localStorage se hidratan en cliente vía mounts `data-task-mount` / `data-*`.
- L5: Build verde. Smoke test con Chrome headless (--dump-dom tras boot): 22 tarjetas de tarea, 0 mounts sin hidratar, dominó 30/30 fichas, 22 botones "Comprobar", 8 inputs de deletreo, 9 antónimos. Conteo de marcadores estáticos exacto (11 menús, 42 can-do, 21 radios de coevaluación, 27 campos de proyecto).
- L6: `index.html` original intacto (solo lectura; CSS extraído con `sed -n '9,238p'`).
- L7: Rediseño de navegación pedido por el usuario: dock inferior ELIMINADO; 🇫🇷 FR y 👁️ Claves ahora son `.nav-btn` en la barra sticky entre 👪 familia y ☰ Contenido (labels ocultos en <640px); anillo de progreso + contadores ✔/✗ dentro del menú desplegable (`.menu-progress`); ↺ Reiniciar todo al fondo del menú (`.menu-foot`, más protegido); body sin padding-bottom:104px; toast re-anclado a bottom:24px. Verificado: 0 dock, 2 nav-btn, progreso y reset dentro de menuPanel, 22 tareas y 38 badges FR intactos.
