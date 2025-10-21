---
title: "Acciones"
description: "Haz que tu sistema de almas sea dinámico con acciones como [CONSOLE], [TITLE] o [AURA-STAT] que se ejecutan en eventos o clics de menú."
---

**ZenFairy** te permite ejecutar **acciones especiales** en respuesta a diferentes eventos, como encontrar un alma o hacer clic en un ítem de menú. Esta es la característica que hace que el plugin sea realmente potente y personalizable.

Las acciones se definen siempre dentro de una lista llamada `actions:`.

---

## ⚙️ Acciones Disponibles

| Categoría | Acción | Uso | Descripción |
| :--- | :--- | :--- | :--- |
| **Comandos** | `[PLAYER] <comando>` | `[PLAYER] spawn` | Ejecuta un comando como si lo escribiera el jugador. Respeta sus permisos. |
| | `[CONSOLE] <comando>` | `[CONSOLE] eco give %player% 100` | Ejecuta un comando desde la consola. Usa `%player%` para referirte al jugador. |
| **Mensajería** | `[MESSAGE] <texto>` | `[MESSAGE] &a¡Recompensa reclamada!` | Envía un mensaje de chat al jugador. Usa `%prefix%` para añadir el prefijo del plugin. |
| | `[BROADCAST] <texto>` | `[BROADCAST] &6¡%player% encontró un alma!` | Envía un mensaje a todo el servidor. |
| | `[TITLE] <título>;<subtítulo>` | `[TITLE] &a¡Alma encontrada!;&fBusca más` | Muestra un título en la pantalla del jugador. El subtítulo es opcional y se separa con un punto y coma. |
| | `[ACTIONBAR] <texto>` | `[ACTIONBAR] &e+50 Monedas` | Muestra un mensaje en la barra de acción del jugador. |
| **Utilidades** | `[CLOSE]` | `[CLOSE]` | Cierra el inventario (menú) actual del jugador. Ideal para botones de salida. |
| | `[SOUND]` | `[SOUND] ENTITY_PLAYER_LEVELUP` | Reproduce un sonido de Minecraft para el jugador. |
| **Integraciones** | `[AURA-STAT]` | `[AURA-STAT] strength 2` | Añade un valor permanente a una estadística de AuraSkills. Requiere que AuraSkills esté instalado. |

> 💡 **Consejo:** Puedes combinar múltiples acciones. Se ejecutarán en el orden en que las escribas en la lista.

---

## 🧩 Ejemplos de Uso

A continuación, se muestran ejemplos prácticos de cómo y dónde aplicar estas acciones.

### **En Eventos del Alma (`fairy.yml`)**

Puedes hacer que sucedan cosas automáticamente cuando un jugador encuentra un alma.

```yaml
# Se ejecuta CADA VEZ que un jugador encuentra un alma (nueva).
soul-found-actions:
  - "[MESSAGE] %prefix% &6¡Has encontrado una Fairy Soul!"
  - "[CONSOLE] eco give %player% 100"
  - "[SOUND] ENTITY_EXPERIENCE_ORB_PICKUP"

# Se ejecuta solo cuando se encuentra la ÚLTIMA alma de este tipo.
all-souls-found-actions:
  - "[BROADCAST] &b&l¡%player% ha encontrado todas las Fairy Souls!"
  - "[TITLE] &d¡Colección Completada!;&f¡Felicidades!"
```

### **En un Ítem de Menú (`fairy.yml`)**

Usa las acciones para crear recompensas interactivas en tus menús de intercambio.

```yaml
# En la sección menu -> items:
items:
  # 🔴 Botón para cerrar el menú
  close_button:
    slot: 49
    material: BARRIER
    display-name: "&c&lCerrar"
    lore:
      - "&7Haz clic para salir."
    actions:
      - "[CLOSE]"
      - "[SOUND] BLOCK_CHEST_CLOSE"

  # ❤️ Recompensa de AuraSkills que da vida
  health_upgrade:
    slot: 22
    material: APPLE
    display-name: "&aIntercambiar por Salud"
    souls-required: 10
    actions:
      - "[AURA-STAT] health 1"
      - "[MESSAGE] %prefix% &aHas intercambiado 10 almas por más salud."
````

---

## 💡 Notas Adicionales

*   Puedes usar los placeholders `%player%` (nombre del jugador) y `%prefix%` (prefijo del plugin de `config.yml`).
*   La acción `[PLAYER]` respeta los permisos del jugador, mientras que `[CONSOLE]` tiene permisos de administrador.
*   ¡No hay límite! Combina tantas acciones como quieras para crear secuencias de recompensas complejas.

---