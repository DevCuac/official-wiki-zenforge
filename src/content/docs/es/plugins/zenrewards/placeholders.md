---
title: "Placeholders (Variables)"
description: "Integra ZenRewards con otros plugins usando esta completa lista de placeholders de PlaceholderAPI."
---

> **Requisito:** Para usar estas variables, necesitas tener [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) instalado.

## Placeholders de Rachas

-   `%zenrewards_streak_current%`
    Muestra el número de días de racha de conexión actual del jugador.
    *(Ejemplo de salida: `7`)*

## Placeholders Generales

-   `%zenrewards_claimable_count%`
    Muestra cuántas recompensas del menú `/rewards` tiene el jugador disponibles para reclamar.
    *(Ejemplo de salida: `3`)*

## Placeholders Específicos por Recompensa

Estos placeholders requieren que reemplaces `<id>` con la ID de la recompensa de tu `rewards.yml` (ej. `daily_reward`).

-   `%zenrewards_status_<id>%`
    Muestra el estado traducido de una recompensa (Disponible, Enfriamiento, etc.). Los textos se configuran en `config.yml`.
    *(Ejemplo de uso: `%zenrewards_status_vip_reward%`)*

-   `%zenrewards_cooldown_<id>%`
    Muestra el tiempo restante para una recompensa. Si está disponible, muestra el texto 'Ready' (configurable).
    *(Ejemplo de uso: `%zenrewards_cooldown_daily_reward%`)*
---