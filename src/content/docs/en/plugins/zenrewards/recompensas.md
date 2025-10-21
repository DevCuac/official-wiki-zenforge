---
title: "Reward Configuration"
description: "Learn how to define unique, repeatable, and fully customizable rewards within the rewards.yml file."
---

The `rewards.yml` file controls all the **logic behind your rewards** — their type, cooldown time, required permissions, and the actions executed when claimed.  
Each reward is fully customizable and can be adapted to different progression systems or VIP ranks.

---

## ⚙️ General Structure

Each reward is defined with a **unique ID**, which will be used to reference it in other files such as `menu.yml` or `streak-menu.yml`.

> 🧩 **Example IDs:** `daily_reward`, `vip_reward`, `welcome_reward`

---

## 📘 Available Parameters

| Parameter | Required | Description |
| :--- | :---: | :--- |
| `type` | ✅ | Defines whether the reward is `REPEATABLE` (can be claimed multiple times) or `UNIQUE` (only once). |
| `cooldown` | ✅ | Waiting time before the reward can be claimed again. Format: `10s`, `5m`, `1h`, `1d`. For unique rewards, use `0s`. |
| `permission` | ❌ | Permission required to claim the reward. If omitted, anyone can claim it. |
| `commands` | ✅ | List of console commands executed when the reward is claimed. Use `%player%` as a placeholder. |
| `messages` | ❌ | Messages sent to the player upon claiming. Supports `%player%` and `%prefix%`. |

> 💡 **Tip:**  
> Use custom permissions to create exclusive rewards based on rank, level, or special conditions.

---

## 🧾 Complete Example of `rewards.yml`

Below is an example with three different reward types showing all possible parameters:

```yaml
# ===============================
# 🏆 Reward Definitions
# ===============================
rewards:
  # 🌅 Repeatable Daily Reward
  daily_reward:
    type: REPEATABLE
    cooldown: "1d"
    permission: "zenrewards.claim.daily"
    commands:
      - "eco give %player% 100"
    messages:
      - "%prefix%&aYou have received your daily reward."

  # 🎁 Unique Welcome Reward
  welcome_reward:
    type: UNIQUE
    cooldown: "0s"
    permission: "zenrewards.claim.welcome"
    commands:
      - "kit starter %player%"
    messages:
      - "%prefix%&eWelcome to the server, %player%! You have received your starter reward."

  # 👑 Monthly VIP Reward
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

## 🔍 Important Notes

* **Every reward must have a unique ID.** If an ID is repeated, the plugin will only recognize the last one defined.
* **All commands are executed from the console.** If you need to run them as the player, you can use `[PLAYER]` in custom menus (see [Item Actions](../acciones-item)).
* **The `cooldown` field is mandatory**, even for unique rewards (`0s` is valid).
* You can combine ZenRewards with economy systems, ranks, or crate plugins to expand its functionality.

---

## 🚀 Next Step

Now that your rewards are configured, continue with
👉 [Menu Configuration](../configuracion/menus)
to learn how to visually display them in-game.

---