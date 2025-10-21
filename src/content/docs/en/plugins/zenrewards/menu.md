---
title: "Menu Configuration"
description: "Customize the appearance and functionality of the rewards and streak menus in ZenRewards."
---

**ZenRewards** gives you full control over the appearance and structure of the menus players see when using the main commands.  
Everything is managed through two files: `menu.yml` and `streak-menu.yml`.

---

## 🗂️ File: `menu.yml`

This file controls the **main rewards menu**, accessible with the `/rewards` command.

### ⚙️ Main Parameters

| Parameter | Description |
|:--|:--|
| `title` | Defines the inventory title. Supports color codes (`&`). |
| `rows` | Number of menu rows (1 to 6). |
| `filler_item` | Item that automatically fills the empty slots in the menu. |

---

### 🎁 Item Structure

Each item inside `items` has a **unique ID**.  
Rewards can have multiple visual states depending on their availability:  
- `claimable-item` → When the reward is ready to claim.  
- `cooldown-item` → When the player must wait.  
- `no-permission-item` → When the player doesn’t have access.

The plugin automatically selects which one to display based on the situation.

> **Example of a reward item:**

```yaml
items:
  daily_reward:
    slot: 21
    reward_id: "daily_reward"
    claimable-item:
      material: CHEST
      name: "&aDaily Reward (%status%)"
    cooldown-item:
      material: CLOCK
      name: "&eDaily Reward (%status%)"
      lore:
        - "&7Time remaining: &f%cooldown_status%"
    no-permission-item:
      material: BARRIER
      name: "&cYou don't have access to this reward"
````

---

## 🔁 File: `streak-menu.yml`

Controls the **daily streak menu**, accessible with `/streak`.
It allows you to visually display the player’s connection progress (day 1, day 2, etc.).

### ⚙️ Key Parameters

| Parameter      | Description                                                       |
| :------------- | :---------------------------------------------------------------- |
| `title`        | Title of the streak menu. Supports color codes.                   |
| `rows`         | Number of inventory rows.                                         |
| `reward_slots` | List of slot positions where rewards will appear in order by day. |

---

### 🪙 Reward Item Structure

In the `reward_item` section, you define how each reward appears depending on its current state.
The available states are:

| State          | Description                     |
| :------------- | :------------------------------ |
| `claimable`    | Reward ready to be claimed.     |
| `claimed`      | Reward already claimed.         |
| `locked`       | Day not yet reached.            |
| `unconfigured` | Day without an assigned reward. |

> **Example configuration:**

```yaml
reward_item:
  claimable:
    material: CHEST
    name: "&eDay {day} Reward! &a(Click)"
  claimed:
    material: STAINED_GLASS_PANE:5
    name: "&aDay {day} - Claimed"
  locked:
    material: STAINED_GLASS_PANE:14
    name: "&cDay {day} - Locked"
  unconfigured:
    material: BARRIER
    name: "&7No reward configured"
```

---

## 💡 Customization Tips

* Use placeholders like `%cooldown_status%` or `%status%` to display dynamic information.
* You can use materials from any Minecraft version supported by your server.
* If an item includes `lore`, use dashes (`-`) to define multiple lines.
* Remember to restart or reload the plugin using `/zenrewards reload` after making changes.

---