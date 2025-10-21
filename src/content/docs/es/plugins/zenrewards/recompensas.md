---
title: "Configuración de Recompensas"
description: "Aprende a definir recompensas únicas, repetibles y totalmente personalizables dentro del archivo rewards.yml."
---

El archivo `rewards.yml` controla toda la **lógica de tus recompensas**: su tipo, tiempo de reutilización, permisos necesarios y las acciones que ejecutan al ser reclamadas.  
Cada recompensa es completamente personalizable y puede adaptarse a distintos sistemas de progresión o rangos VIP.

---

## ⚙️ Estructura General

Cada recompensa se define con una **ID única**, que servirá para referenciarla en otros archivos como `menu.yml` o `streak-menu.yml`.

> 🧩 **Ejemplo de ID:** `daily_reward`, `vip_reward`, `welcome_reward`

---

## 📘 Parámetros Disponibles

| Parámetro | Requerido | Descripción |
| :--- | :---: | :--- |
| `type` | ✅ | Define si la recompensa es `REPEATABLE` (reclamable múltiples veces) o `UNIQUE` (una sola vez). |
| `cooldown` | ✅ | Tiempo de espera antes de volver a reclamar la recompensa. Formato: `10s`, `5m`, `1h`, `1d`. Para recompensas únicas, usa `0s`. |
| `permission` | ❌ | Permiso necesario para reclamar la recompensa. Si se omite, cualquiera puede hacerlo. |
| `commands` | ✅ | Lista de comandos ejecutados por la consola al reclamar la recompensa. Usa `%player%` como placeholder. |
| `messages` | ❌ | Mensajes que se enviarán al jugador al reclamar. Soporta `%player%` y `%prefix%`. |

> 💡 **Consejo:**  
> Usa permisos personalizados para crear recompensas exclusivas según rango, nivel o condición especial.

---

## 🧾 Ejemplo Completo de `rewards.yml`

A continuación tienes un ejemplo con tres tipos de recompensas diferentes, mostrando todos los parámetros posibles:

```yaml
# ===============================
# 🏆 Definición de Recompensas
# ===============================
rewards:
  # 🌅 Recompensa diaria repetible
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
      - "%prefix%&e¡Bienvenido al servidor, %player%! Has recibido tu recompensa inicial."

  # 👑 Recompensa mensual exclusiva para VIP
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

## 🔍 Notas Importantes

* **Todas las recompensas deben tener una ID única.** Si repites una ID, el plugin tomará la última definida.
* **Los comandos siempre se ejecutan desde consola.** Si necesitas ejecutar como jugador, puedes usar `[PLAYER]` en menús personalizados (ver [Acciones de Ítem](../acciones-item)).
* **El campo `cooldown` es obligatorio**, incluso para recompensas únicas (`0s` es válido).
* Puedes combinar ZenRewards con sistemas de economía, rangos o crates para ampliar su funcionalidad.

---

## 🚀 Próximo Paso

Ahora que ya configuraste tus recompensas, continúa con la sección
👉 [Configuración de Menús](../configuracion/menus)
para aprender cómo mostrarlas visualmente dentro del juego.

---