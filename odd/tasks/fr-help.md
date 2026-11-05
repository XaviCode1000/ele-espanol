# Ayudas de comprensión en francés (consignes)

Feature: badge "FR" de revelado progresivo junto a las consignas, para que el estudiante
entienda qué se le pide sin traducir el contenido del ejercicio.

## Specs
- S1: "tenemos que anadir parte en frances para darle la opcion al usuario de comprender las preguntas, sobre todo las principales, asi el estudiante sabra que debe hacer"
- S2: USER eligió "Solo francés" (fase 2 posible: árabe + RTL).

## Alcance
- Se traducen: las 22 consignas de TASKS + 15 instrucciones estáticas clave
  (ruta, dados, prod26, prod44, rueda, dictado, dominó, entrevista, detectives,
  deletreo, proyecto 8.1-8.4, can-do, muro).
- NO se traduce: contenido de ejercicios (es el input de español).

## Tasks
- T1: `src/data/fr.js` (diccionario FR por task-id + claves estáticas) — DONE
- T2: Estado `frAll` en blank() + botón 🇫🇷 en Dock (preferencia persistida) — DONE
- T3: Badge + revelado en renderTask (cliente) y enhanceFr() para estáticos — DONE
- T4: Delegación de click en app.js (badge individual + toggle global) — DONE
- T5: data-fr en las 9 secciones estáticas — DONE
- T6: CSS (.fr-badge, .cons-fr) en global.css — DONE
- T7: Build + verificación — DONE

## Log
- L1: Decisión de producto: traducir solo consignas (metalenguaje), contenido en español intacto.
- L2: Mecánica: revelado progresivo (badge FR por consigna) + preferencia global persistida (`S.frAll`).
- L3: Fase 2 posible: árabe (requiere dir="rtl" y decisión de registro darija/fósḥā).
- L4: La página principal (Ruta) pasó a francés NATIVO a pedido del usuario ("contiene solamente información"): contenido informativo para la familia → francés (Ruta.astro + route.js traducidos); los ejercicios siguen en español con ayudas FR. Badge data-fr="ruta" eliminado (redundante) → 37 badges. Claves de estado (k, j) intactas.
- L5: Rediseño nav: dock eliminado; FR + Claves como .nav-btn entre familia y Contenido; progreso + reset dentro del menú ☰ (ver astro-migration.md L7).
- L6: Cobertura FR EXHAUSTIVA (pedido: "analizar todo el contenido que deba tener una traduccion"): +20 títulos/desc de las 10 secciones de ejercicio, +7 tarjetas guía (cuesta ×2, antes, reglas dominó, notario, contrato, modal familia), +11 títulos de fichas Herramientas (TOOLS_FR, se abren solo con toggle global dentro del acordeón), +2 spans inline (solución i2_4 en renderTask, hint dominó en renderDom). Total: 65 badges + 77 spans. Queda en español SOLO el contenido de ejercicio (preguntas, palabras, frases a producir, cuerpos de las fichas Herramientas, banco de frases) + hero + labels de nav.
