---
title: "Configuración de Recompensas"
description: "Aprende a crear y configurar todas las recompensas en el archivo rewards.yml."
---

El archivo `rewards.yml` es donde defines la lógica de cada premio: su tipo, su cooldown, los permisos necesarios y qué comandos ejecutará al ser reclamado.

## Parámetros de una Recompensa

Cada recompensa se define bajo una **ID única** (ej. `daily_reward`). Estos son los parámetros que puedes configurar:

-   `type` **(Obligatorio)**
    Define si la recompensa es `REPEATABLE` (se puede reclamar múltiples veces) o `UNIQUE` (solo una vez).

-   `cooldown` **(Obligatorio)**
    Establece el tiempo de enfriamiento para las recompensas `REPEATABLE`. El formato es un número seguido de una letra: `s` (segundos), `m` (minutos), `h` (horas), `d` (días). Para recompensas `UNIQUE`, este campo debe existir pero puedes poner `0s`.

-   `permission` (Opcional)
    La permission node que el jugador necesita para poder reclamar esta recompensa. Si se omite, cualquiera puede reclamarla.

-   `commands` **(Obligatorio)**
    Una lista de comandos que se ejecutarán desde la consola. Usa el placeholder `%player%` para referirte al jugador.

-   `messages` (Opcional)
    Una lista de mensajes que se enviarán al jugador al reclamar. Usa `%player%` y `%prefix%`.

## Ejemplo Completo de `rewards.yml`

> **Ejemplo:** A continuación se muestra cómo usar todos los parámetros para crear diferentes tipos de recompensas.

```yaml
# Definición de las recompensas disponibles
rewards:
  # Recompensa diaria repetible
  daily_reward:
    type: REPEATABLE
    cooldown: "1d"
    permission: "zenrewards.claim.daily"
    commands:
      - "eco give %player% 100"
    messages:
      - "%prefix%&aHas recibido tu recompensa diaria."

  # Recompensa única de bienvenida
  welcome_reward:
    type: UNIQUE
    cooldown: "0s"
    permission: "zenrewards.claim.welcome"
    commands:
      - "kit starter %player%"
  
  # Recompensa mensual para rangos VIP
  vip_reward:
    type: REPEATABLE
    cooldown: "30d"
    permission: "zenrewards.claim.vip"
    commands:
      - "eco give %player% 1000"
      - "crate give %player% vip_key 1"
```
---