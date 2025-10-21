---
title: "Configuración de Menús"
description: "Personaliza la apariencia y funcionalidad de los menús de intercambio de almas y del panel de localizaciones en ZenFairy."
---

**ZenFairy** te ofrece control total sobre la apariencia y estructura de los dos tipos de menús que los jugadores y administradores utilizarán.

A diferencia de otros plugins, la configuración de los menús está distribuida de forma lógica:
-   **Menús de Recompensas:** Se configuran dentro de **cada archivo de tipo de alma** en la carpeta `/souls/`.
-   **Menú de Ubicaciones:** Se configura globalmente en el archivo `config.yml`.

---

## 🎁 Menú de Recompensas (`souls/<tipo>.yml`)

Este es el menú principal donde los jugadores intercambian las almas que han encontrado por premios. Se accede con `/zf menu <tipo>`. La configuración de este menú se encuentra dentro de la sección `menu:` de cada archivo de alma (ej: `fairy.yml`, `dragon.yml`).

### ⚙️ Parámetros Principales del Menú

| Parámetro | Descripción |
|:--|:--|
| `title` | Define el título del inventario. Soporta códigos de color (`&`). |
| `rows` | Número de filas del menú (de 1 a 6). |
| `filler` | Ítem que rellenará automáticamente los espacios vacíos del menú. |

---

### 💎 Estructura de un Ítem de Menú

Cada ítem dentro de la sección `items` tiene una **ID única**. Los ítems pueden ser decorativos o interactivos. Los ítems interactivos usan **lore dinámico** que cambia según si el jugador puede permitirse el intercambio.

- **`available-lore`** → Se muestra cuando el jugador tiene suficientes almas (`{souls_available}` >= `souls-required`).
- **`unavailable-lore`** → Se muestra cuando al jugador le faltan almas.

> **Ejemplo de un ítem de recompensa:**

```yaml
# Dentro de tu archivo dragon.yml
menu:
  title: "&8Recompensas del Dragón"
  rows: 3
  items:
    fuerza_del_dragon:
      display-name: "&cVoluntad del Dragón"
      material: DRAGON_HEAD
      slot: 13
      souls-required: 10 # Coste en almas de este tipo
      available-lore:
        - "&7Intercambia &c10 Almas de Dragón &7para"
        - "&7ganar &c+2 de Fuerza &7permanentemente."
        - ""
        - "&e¡Haz clic para reclamar!"
      unavailable-lore:
        - "&7Necesitas &c{souls_required} Almas de Dragón&7."
        - "&7Te faltan &c{missing_souls} &7almas." # {missing_souls} es un placeholder útil
      actions:
        - "[AURA-STAT] strength 2"
        - "[MESSAGE] %prefix% &c¡Has ganado +2 de Fuerza!"```

---

## 🗺️ Menú de Ubicaciones (`config.yml`)

Este menú es una herramienta de administración accesible con `/zf location <tipo>`. Te permite ver las coordenadas de todas las almas y teletransportarte a ellas. Se configura en la sección `location-menu:` del `config.yml`.

### ⚙️ Parámetros Clave

| Parámetro | Descripción |
| :--- | :--- |
| `title` | Título del menú. Soporta placeholders como `{soul_type_display_name}` y `{current_page}`. |
| `rows` | Número de filas del inventario. |
| `location-item` | Define la apariencia del ítem que representa cada alma. Soporta placeholders como `{index}`, `{world}`, `{x}`, `{y}`, `{z}`. |
| `control-items` | Define los botones de paginación (`previous-page`, `next-page`), el de cerrar (`close-menu`) y el de relleno (`filler-item`). |

> **Ejemplo de configuración en `config.yml`:**

```yaml
location-menu:
  title: "&8Ubicaciones: {soul_type_display_name} &7(Pág. {current_page}/{max_pages})"
  rows: 6
  
  location-item:
    material: COMPASS
    display-name: "&aAlma #{index}"
    lore:
      - "&7Mundo: &f{world}"
      - "&7Coordenadas: &e{x}, {y}, {z}"
      - ""
      - "&e¡Haz clic para teletransportarte!"
      
  control-items:
    previous-page:
      material: ARROW
      display-name: "&a<-- Página Anterior"
      slot: 48
    # ... y los demás botones de control ...
```

---

## 💡 Consejos de Personalización

*   Usa los placeholders disponibles en cada menú (`{souls_found}`, `{x}`, `{y}`, etc.) para mostrar información útil y dinámica.
*   Puedes usar cabezas personalizadas en cualquier ítem del menú (`material: PLAYER_HEAD`) añadiendo una línea `texture: "eyJ0ZXh...="`.
*   Si un ítem tiene `lore`, usa guiones (`-`) para definir múltiples líneas.
*   Recuerda reiniciar o recargar el plugin con `/zf reload` tras hacer cambios en la configuración.

---