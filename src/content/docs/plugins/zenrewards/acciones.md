---
title: "Acciones de Ítem"
description: "Aprende a usar acciones especiales como [CLOSE] y [PLAYER] para añadir interactividad a tus menús."
---

Además de las recompensas, puedes crear ítems en tus menús que ejecuten acciones especiales al ser clickeados. Estas acciones se definen en la lista `commands` de cualquier ítem decorativo en `menu.yml` o `streak-menu.yml`.

## Acciones Disponibles

| Acción | Descripción |
| :--- | :--- |
| `[CLOSE]` | Cierra el inventario actual. |
| `[PLAYER] <comando>` | Ejecuta un comando como si lo escribiera el jugador. Respeta sus permisos. |
| `[CONSOLE] <comando>` | Ejecuta un comando desde la consola. Usa `%player%` para referirte al jugador. |

## Ejemplos de Uso

A continuación, se muestra cómo usar estas acciones para crear ítems interactivos en `menu.yml`.

> **Ejemplo:** Aquí creamos dos ítems: uno para cerrar el menú y otro que da 50 monedas al jugador y le hace enviar un mensaje al chat.

```yaml
items:
  # Botón para cerrar el menú
  close_button:
    slot: 49
    material: BARRIER
    name: "&c&lCerrar"
    lore:
      - "&7Haz clic para salir."
    commands:
      - "[CLOSE]"

  # Ítem que da una pequeña bonificación
  bonus_item:
    slot: 40
    material: SUNFLOWER
    name: "&e¡Bonus!"
    lore:
      - "&7¡Haz clic para recibir 50 monedas!"
    commands:
      - "[CONSOLE] eco give %player% 50"
      - "[PLAYER] me ¡He recibido un bonus!"

  # Ítem que envía al jugador al spawn
  go_spawn:
    slot: 4
    material: COMPASS
    name: "&aIr al Spawn"
    lore:
      - "&7Vuelve al punto de inicio."
    commands:
      - "[PLAYER] spawn"
      - "[CLOSE]"
```
---