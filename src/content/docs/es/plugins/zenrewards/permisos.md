---
title: "Permisos"
description: "Lista completa de todos los permisos que utiliza ZenRewards para gestionar el acceso."
---

## Permisos Principales

| Permiso | Descripción | Default |
| :--- | :--- | :--- |
| `zenrewards.use` | Permite usar el comando `/rewards`. | `true` (Todos) |
| `zenrewards.streak.use` | Permite usar el comando `/streak`. | `true` (Todos) |
| `zenrewards.admin` | Acceso a todos los comandos de administración. | `op` (Operadores) |

## Permisos de Recompensa (Dinámicos)

Puedes crear permisos personalizados para cada recompensa directamente en `rewards.yml`. Esto es ideal para crear recompensas exclusivas para rangos.

> **¿Cómo funciona?** Simplemente añade la línea `permission: tu.permiso.personalizado` a cualquier recompensa. El jugador necesitará ese permiso para poder reclamarla.

> **Ejemplo en `rewards.yml`:**
```yaml
rewards:
  vip_reward:
    type: REPEATABLE
    cooldown: "30d"
    # Solo los jugadores con este permiso podrán reclamar esta recompensa.
    permission: "zenrewards.claim.vip" 
    commands:
      - "eco give %player% 1000"
```
---