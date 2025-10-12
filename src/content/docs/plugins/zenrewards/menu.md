---
title: "Configuración de Menús"
description: "Personaliza la apariencia y funcionalidad de tus menús de recompensas y rachas."
---

ZenRewards te da control total sobre la apariencia de tus menús a través de dos archivos principales.

## Archivo: `menu.yml`

Este archivo controla el menú principal que se abre con `/rewards`.

### Parámetros Principales

-   `title`: El título del inventario. Soporta códigos de color.
-   `rows`: El número de filas del inventario (de 1 a 6).
-   `filler_item`: Define un ítem que rellenará todos los slots vacíos.

### Estructura de un Ítem

Cada ítem en la sección `items` tiene una ID única. Para los ítems de recompensa, puedes definir diferentes apariencias (`claimable-item`, `cooldown-item`, `no-permission-item`). El plugin mostrará automáticamente la correcta.

> **Ejemplo de un ítem de recompensa:**
```yaml
items:
  daily_reward:
    slot: 21
    reward_id: "daily_reward"
    claimable-item:
      material: CHEST
      name: "&aRecompensa Diaria (%status%)"
    cooldown-item:
      material: CLOCK
      name: "&eRecompensa Diaria (%status%)"
      lore:
        - "&7Tiempo restante: &f%cooldown_status%"```

## Archivo: `streak-menu.yml`

Este archivo controla el menú de rachas que se abre con `/streak`.

### Parámetros Clave

-   `title`: El título del menú de rachas.
-   `rows`: El número de filas del inventario.
-   `reward_slots`: Una lista de los slots donde se mostrarán las recompensas de racha, en orden (día 1, día 2, etc.).

### Estructura de los Items de Recompensa

En la sección `reward_item`, defines la apariencia para cada estado posible (`claimable`, `claimed`, `locked`, `unconfigured`).

> **Ejemplo:**```yaml
reward_item:
  claimable:
    material: CHEST
    name: "&e¡Recompensa del Día {day}! &a(Click)"
  claimed:
    material: STAINED_GLASS_PANE:5
    name: "&aDía {day} - Reclamado"
```
---