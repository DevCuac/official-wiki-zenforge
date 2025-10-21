---
title: "Acciones de Ítem"
description: "Haz que tus menús sean interactivos con acciones personalizadas como [CLOSE], [PLAYER] y [CONSOLE]."
---

ZenRewards permite asignar **acciones especiales a los ítems de tus menús**, lo que te da la posibilidad de ejecutar comandos o cerrar inventarios con un simple clic.  
Estas acciones se definen dentro de la lista `commands:` de cualquier ítem decorativo o interactivo en `menu.yml` o `streak-menu.yml`.

---

## ⚙️ Acciones Disponibles

| Acción | Uso | Descripción |
| :--- | :--- | :--- |
| `[CLOSE]` | `[CLOSE]` | Cierra el inventario actual del jugador. Ideal para botones de salida. |
| `[PLAYER] <comando>` | `[PLAYER] spawn` | Ejecuta un comando como si lo escribiera el jugador. Respeta sus permisos. |
| `[CONSOLE] <comando>` | `[CONSOLE] eco give %player% 100` | Ejecuta un comando desde la consola. Usa `%player%` para referirte al jugador. |

> 💡 **Consejo:** Puedes combinar múltiples acciones en un mismo ítem.  
> El orden en la lista define el orden de ejecución.

---

## 🧩 Ejemplo de Uso en `menu.yml`

A continuación, se muestran ejemplos prácticos de cómo aplicar estas acciones en ítems del menú:

```yaml
items:
  # 🔴 Botón para cerrar el menú
  close_button:
    slot: 49
    material: BARRIER
    name: "&c&lCerrar"
    lore:
      - "&7Haz clic para salir."
    commands:
      - "[CLOSE]"

  # 💰 Ítem que otorga una pequeña bonificación
  bonus_item:
    slot: 40
    material: SUNFLOWER
    name: "&e¡Bonus!"
    lore:
      - "&7Haz clic para recibir 50 monedas."
    commands:
      - "[CONSOLE] eco give %player% 50"
      - "[PLAYER] me ¡He recibido un bonus!"

  # 🧭 Ítem que envía al jugador al spawn
  go_spawn:
    slot: 4
    material: COMPASS
    name: "&aIr al Spawn"
    lore:
      - "&7Vuelve al punto de inicio."
    commands:
      - "[PLAYER] spawn"
      - "[CLOSE]"
````

---

## 💡 Notas Adicionales

* Puedes usar **placeholders** en los comandos (`%player%`, `%prefix%`, etc.).
* Las acciones **no requieren permisos adicionales**, a menos que el comando del jugador lo solicite.
* Es posible combinar acciones de **jugador + consola + cierre** en un mismo ítem.
* Ideal para crear botones de navegación, confirmaciones o accesos rápidos en tus menús.

---