---
title: "Configuración de Almas"
description: "Aprende a definir tipos de almas coleccionables, cada una con sus propios menús, recompensas, acciones y efectos visuales."
---

La carpeta `souls/` es el corazón de ZenFairy y controla toda la **lógica de tus coleccionables**. Cada archivo `.yml` que crees aquí define un nuevo tipo de alma, sus recompensas, su menú y cómo interactúa con el mundo.

Este sistema te permite crear experiencias de recolección únicas para diferentes zonas, eventos o rangos de tu servidor.

---

## ⚙️ Estructura General

Cada tipo de alma se define con una **ID única**, que es simplemente el **nombre del archivo** que creas en la carpeta `/plugins/ZenFairy/souls/`.

> 🧩 **Ejemplo de IDs:**
> - `fairy.yml` → ID: `fairy`
> - `dragon.yml` → ID: `dragon`
> - `abyssal_soul.yml` → ID: `abyssal_soul`

---

## 📘 Secciones de un Archivo de Alma

Cada archivo `.yml` de un alma tiene múltiples secciones para una personalización completa.

| Sección | Requerido | Descripción |
| :--- | :---: | :--- |
| `display-name` | ✅ | El nombre del alma que se muestra en los mensajes, con códigos de color. |
| Sonidos | ❌ | Define sonidos para eventos como `soul-found-sound`, `soul-already-found-sound`, etc. |
| Efectos | ❌ | Configura partículas (`found-soul-particle`) y una animación de cabeza flotante (`found-soul-animation`). |
| Acciones de Evento | ❌ | Listas de acciones (comandos, mensajes, etc.) para eventos como `soul-found-actions`, `first-soul-found-actions` y `all-souls-found-actions`. |
| `menu` | ✅ | La configuración completa del menú de intercambio de almas para este tipo específico. |
| `locations` | ⚙️ | Almacena las coordenadas de todas las almas de este tipo. **Se gestiona automáticamente con comandos.** |

> 💡 **Consejo:**  
> Comienza copiando y pegando `_example.yml` y renómbralo para crear tu primer tipo de alma personalizado.

---

## 🧾 Ejemplo Completo de `dragon.yml`

A continuación tienes un ejemplo con un tipo de alma "dragón", mostrando cómo se combinan las secciones para crear una experiencia completa:

```yaml
# 🐉 Definición del Tipo de Alma "Dragón"

# Nombre visible del alma
display-name: "&cAlma de Dragón"

# Sonido al encontrar un alma por primera vez
soul-found-sound:
  enabled: true
  sound: ENTITY_ENDER_DRAGON_GROWL
  volume: 0.5
  pitch: 1.2

# Animación de cabeza flotante al encontrarla
found-soul-animation:
  enabled: true
  texture: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvM2Y1ZDIxM2MyZWM5MGZiM2MyNWE0YmRiY2I0M2MyYjgyYmMyNTg0ZGYzY2ZmYTRkNjRiZGUzZjc2N2E0ZDYzZCJ9fX0="
  duration: 60

# Acciones que se ejecutan al encontrar CUALQUIER alma de dragón
soul-found-actions:
  - "[ACTIONBAR] &c+1 Alma de Dragón"

# Menú de recompensas para este tipo de alma
menu:
  title: "&8Recompensas del Dragón"
  rows: 3
  filler:
    material: RED_STAINED_GLASS_PANE
    name: " "
  items:
    fuerza_del_dragon:
      display-name: "&cVoluntad del Dragón"
      material: DRAGON_HEAD
      slot: 13
      souls-required: 10 # Coste en almas de dragón
      available-lore:
        - "&7Intercambia &c10 Almas de Dragón &7para"
        - "&7ganar &c+2 de Fuerza &7permanentemente."
        - ""
        - "&e¡Haz clic para reclamar!"
      unavailable-lore:
        - "&7Necesitas &c{souls_required} Almas de Dragón&7."
        - "&7Te faltan &c{missing_souls} &7almas."
      actions:
        - "[AURA-STAT] strength 2"
        - "[MESSAGE] %prefix% &c¡Has absorbido el poder del dragón! (+2 Fuerza)"
        - "[SOUND] ENTITY_ENDER_DRAGON_DEATH"

# Coordenadas. NO TOCAR MANUALMENTE.
locations: []
```

---

## 🔍 Notas Importantes

*   **Cada archivo `.yml` en `/souls` es un nuevo coleccionable.** Esta es la característica principal del plugin.
*   **No edites la sección `locations` manualmente.** Usa siempre `/zf set <tipo>` y `/zf remove` para añadir o quitar almas.
*   **La `souls-required` en el menú es por ítem.** Puedes tener varias recompensas con diferentes costes en el mismo menú.
*   Combina ZenFairy con otros plugins a través de las acciones (`[CONSOLE]`, `[PLAYER]`) para crear un sistema de recompensas verdaderamente integrado en tu servidor.

---

## 🚀 Próximo Paso

Ahora que entiendes cómo estructurar un tipo de alma, explora todas las posibilidades en la
👉 [Lista de Acciones](../acciones/acciones)
para aprender a crear recompensas potentes e interactivas.

---