---
title: "Configuración de Menús"
description: "Personaliza la apariencia y funcionalidad de los menús de recompensas y rachas en ZenRewards."
---

**ZenRewards** te ofrece control total sobre la apariencia y estructura de los menús que los jugadores ven al usar los comandos principales.  
Todo se gestiona desde dos archivos: `menu.yml` y `streak-menu.yml`.

---

## 🗂️ Archivo: `menu.yml`

Este archivo controla el **menú principal de recompensas**, accesible con el comando `/rewards`.

### ⚙️ Parámetros Principales

| Parámetro | Descripción |
|:--|:--|
| `title` | Define el título del inventario. Soporta códigos de color (`&`). |
| `rows` | Número de filas del menú (1 a 6). |
| `filler_item` | Ítem que rellenará automáticamente los espacios vacíos del menú. |

---

### 🎁 Estructura de un Ítem

Cada ítem dentro de `items` tiene una **ID única**.  
Las recompensas pueden tener varios estados visuales según su disponibilidad:  
- `claimable-item` → Cuando la recompensa está lista para reclamar.  
- `cooldown-item` → Cuando el jugador debe esperar.  
- `no-permission-item` → Cuando el jugador no tiene acceso.

El plugin selecciona automáticamente cuál mostrar según la situación.

> **Ejemplo de ítem de recompensa:**

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
        - "&7Tiempo restante: &f%cooldown_status%"
    no-permission-item:
      material: BARRIER
      name: "&cNo tienes acceso a esta recompensa"
````

---

## 🔁 Archivo: `streak-menu.yml`

Controla el menú de **rachas diarias**, accesible con `/streak`.
Permite mostrar visualmente el progreso de conexión del jugador (día 1, día 2, etc.).

### ⚙️ Parámetros Clave

| Parámetro      | Descripción                                                                  |
| :------------- | :--------------------------------------------------------------------------- |
| `title`        | Título del menú de rachas. Soporta códigos de color.                         |
| `rows`         | Número de filas del inventario.                                              |
| `reward_slots` | Lista de posiciones donde aparecerán las recompensas según el orden del día. |

---

### 🪙 Estructura de los Ítems de Recompensa

En la sección `reward_item`, defines cómo se mostrará una recompensa según su estado actual.
Los estados disponibles son:

| Estado         | Descripción                     |
| :------------- | :------------------------------ |
| `claimable`    | Recompensa lista para reclamar. |
| `claimed`      | Recompensa ya reclamada.        |
| `locked`       | Día aún no alcanzado.           |
| `unconfigured` | Día sin recompensa asignada.    |

> **Ejemplo de configuración:**

```yaml
reward_item:
  claimable:
    material: CHEST
    name: "&e¡Recompensa del Día {day}! &a(Click)"
  claimed:
    material: STAINED_GLASS_PANE:5
    name: "&aDía {day} - Reclamado"
  locked:
    material: STAINED_GLASS_PANE:14
    name: "&cDía {day} - Bloqueado"
  unconfigured:
    material: BARRIER
    name: "&7Sin recompensa configurada"
```

---

## 💡 Consejos de Personalización

* Usa placeholders como `%cooldown_status%` o `%status%` para mostrar información dinámica.
* Puedes usar materiales de cualquier versión de Minecraft soportada por tu servidor.
* Si un ítem tiene `lore`, usa guiones (`-`) para definir múltiples líneas.
* Recuerda reiniciar o recargar el plugin con `/zenrewards reload` tras hacer cambios.

---
