---
title: "Rewards Configuration"
description: "Learn how to define and customize rewards in ZenRewards using the rewards.yml file."
---

The `rewards.yml` file controls **all available rewards** on your server.  
Here you define their type, cooldown, required permissions, and the actions each reward will execute.

> 💡 **Tip:** Each reward must have a **unique ID** (for example, `daily_reward`).  
> This ID is also used in menus and placeholders.

---

## 🔧 Reward Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `type` | `REPEATABLE` / `UNIQUE` | ✅ | Defines whether the reward can be claimed multiple times or only once. |
| `cooldown` | Duration (`1d`, `12h`, `30m`, etc.) | ✅ | Waiting time before the reward can be claimed again. Use `0s` for unique rewards. |
| `permission` | Text | ❌ | Permission required to claim the reward. If not defined, anyone can claim it. |
| `commands` | List of commands | ✅ | Commands executed from console. Use `%player%` as the player variable. |
| `messages` | List of messages | ❌ | Messages sent to the player upon claiming. Supports `%player%` and `%prefix%`. |

---

## 🧩 Full Example (`rewards.yml`)

```yaml
# Definition of available rewards
rewards:

  # 🌞 Repeatable Daily Reward
  daily_reward:
    type: REPEATABLE
    cooldown: "1d"
    permission: "zenrewards.claim.daily"
    commands:
      - "eco give %player% 100"
    messages:
      - "%prefix%&aYou have received your daily reward."

  # 🎁 One-Time Welcome Reward
  welcome_reward:
    type: UNIQUE
    cooldown: "0s"
    permission: "zenrewards.claim.welcome"
    commands:
      - "kit starter %player%"
    messages:
      - "%prefix%&aWelcome to the server! Enjoy your starter kit."

  # 💎 Monthly VIP Reward
  vip_reward:
    type: REPEATABLE
    cooldown: "30d"
    permission: "zenrewards.claim.vip"
    commands:
      - "eco give %player% 1000"
      - "crate give %player% vip_key 1"
    messages:
      - "%prefix%&6You have received your monthly VIP reward."
````

---

## 💡 Additional Notes

* **UNIQUE** rewards can only be claimed once per player.
* The **placeholders** `%player%` and `%prefix%` work in both commands and messages.
* If a reward includes a `permission` and the player does not have it, the reward will not appear in the menu.

---