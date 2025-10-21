---
title: "Configuración de Recompensas"
description: "Aprende a definir y personalizar las recompensas en ZenRewards mediante el archivo rewards.yml."
---

El archivo `rewards.yml` controla **todas las recompensas disponibles** en tu servidor.  
Aquí defines su tipo, su enfriamiento, los permisos requeridos y las acciones que ejecutará cada una.

> 💡 **Consejo:** Cada recompensa debe tener una **ID única** (por ejemplo, `daily_reward`).  
> Esta ID se usa también en menús y placeholders.

---

## 🔧 Parámetros de una Recompensa

| Parámetro | Tipo | Requerido | Descripción |
| :--- | :--- | :---: | :--- |
| `type` | `REPEATABLE` / `UNIQUE` | ✅ | Define si la recompensa puede reclamarse varias veces o solo una vez. |
| `cooldown` | Duración (`1d`, `12h`, `30m`, etc.) | ✅ | Tiempo de espera antes de volver a reclamar. Usa `0s` para recompensas únicas. |
| `permission` | Texto | ❌ | Permiso necesario para reclamar la recompensa. Si no se define, cualquiera puede hacerlo. |
| `commands` | Lista de comandos | ✅ | Comandos ejecutados desde consola. Usa `%player%` como variable del jugador. |
| `messages` | Lista de mensajes | ❌ | Mensajes enviados al jugador al reclamar. Soporta `%player%` y `%prefix%`. |

---

## 🧩 Ejemplo Completo (`rewards.yml`)

```yaml
# Definición de las recompensas disponibles
rewards:

  # 🌞 Recompensa diaria repetible
  daily_reward:
    type: REPEATABLE
    cooldown: "1d"
    permission: "zenrewards.claim.daily"
    commands:
      - "eco give %player% 100"
    messages:
      - "%prefix%&aHas recibido tu recompensa diaria."

  # 🎁 Recompensa única de bienvenida
  welcome_reward:
    type: UNIQUE
    cooldown: "0s"
    permission: "zenrewards.claim.welcome"
    commands:
      - "kit starter %player%"
    messages:
      - "%prefix%&aBienvenido al servidor, disfruta tu kit inicial."

  # 💎 Recompensa mensual para VIPs
  vip_reward:
    type: REPEATABLE
    cooldown: "30d"
    permission: "zenrewards.claim.vip"
    commands:
      - "eco give %player% 1000"
      - "crate give %player% vip_key 1"
    messages:
      - "%prefix%&6Has recibido tu recompensa VIP mensual."
````

---

## 💡 Notas Adicionales

* Las recompensas **UNIQUE** solo pueden reclamarse una vez por jugador.
* Los **placeholders** `%player%` y `%prefix%` funcionan tanto en comandos como en mensajes.
* Si una recompensa tiene `permission` y el jugador no la posee, no podrá verla en el menú.

---