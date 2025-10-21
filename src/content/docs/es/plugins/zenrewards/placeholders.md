---
title: "Placeholders (Variables)"
description: "Integra ZenRewards con otros plugins usando esta lista completa de variables compatibles con PlaceholderAPI."
---

> ⚙️ **Requisito:**  
> Para usar estas variables, asegúrate de tener instalado [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/).

---

## 🔁 Placeholders de Rachas

> Variables relacionadas con las rachas diarias de conexión del jugador.

| Placeholder | Descripción | Ejemplo de salida |
|--------------|-------------|-------------------|
| ```%zenrewards_streak_current%``` | Muestra el número de días de racha actual del jugador. | `7` |

---

## 🧩 Placeholders Generales

> Variables generales que muestran información global de ZenRewards.

| Placeholder | Descripción | Ejemplo de salida |
|--------------|-------------|-------------------|
| ```%zenrewards_claimable_count%``` | Muestra cuántas recompensas tiene el jugador disponibles para reclamar en el menú `/rewards`. | `3` |

---

## 🎯 Placeholders Específicos por Recompensa

> Estas variables requieren reemplazar `<id>` por la **ID de la recompensa** en tu archivo `rewards.yml` (por ejemplo, `daily_reward` o `vip_reward`).

| Placeholder | Descripción | Ejemplo de uso |
|--------------|-------------|----------------|
| ```%zenrewards_status_<id>%``` | Muestra el **estado traducido** de una recompensa (Disponible, Enfriamiento, etc.). Los textos se configuran en `config.yml`. | `%zenrewards_status_vip_reward%` |
| ```%zenrewards_cooldown_<id>%``` | Muestra el **tiempo restante** para volver a reclamar una recompensa. Si está disponible, muestra el texto *Ready* (configurable). | `%zenrewards_cooldown_daily_reward%` |

---

### 💡 Nota
Puedes usar estos placeholders en cualquier plugin o scoreboard compatible con PlaceholderAPI.  
Ejemplo: en *DeluxeMenus*, *TAB*, *Scoreboard*, *ActionBar*, *Holograms*, entre otros.

---
