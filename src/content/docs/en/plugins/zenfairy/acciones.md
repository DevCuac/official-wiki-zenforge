---
title: "Actions"
description: "Make your soul system dynamic with actions like [CONSOLE], [TITLE], or [AURA-STAT] that trigger on events or menu clicks."
---

**ZenFairy** lets you run **special actions** in response to different events, such as finding a soul or clicking a menu item.  
This is the feature that makes the plugin truly powerful and customizable.

Actions are always defined inside a list called `actions:`.

---

## ⚙️ Available Actions

| Category | Action | Usage | Description |
| :--- | :--- | :--- | :--- |
| **Commands** | `[PLAYER] <command>` | `[PLAYER] spawn` | Executes a command as the player. Respects their permissions. |
| | `[CONSOLE] <command>` | `[CONSOLE] eco give %player% 100` | Executes a command from the console. Use `%player%` to reference the player. |
| **Messaging** | `[MESSAGE] <text>` | `[MESSAGE] &aReward claimed!` | Sends a chat message to the player. Use `%prefix%` to include the plugin prefix. |
| | `[BROADCAST] <text>` | `[BROADCAST] &6%player% found a soul!` | Sends a message to the entire server. |
| | `[TITLE] <title>;<subtitle>` | `[TITLE] &aSoul Found!;&fKeep searching` | Displays a title on the player’s screen. The subtitle is optional and separated by a semicolon. |
| | `[ACTIONBAR] <text>` | `[ACTIONBAR] &e+50 Coins` | Displays a message in the player’s action bar. |
| **Utilities** | `[CLOSE]` | `[CLOSE]` | Closes the player's current inventory (menu). Ideal for exit buttons. |
| | `[SOUND]` | `[SOUND] ENTITY_PLAYER_LEVELUP` | Plays a Minecraft sound for the player. |
| **Integrations** | `[AURA-STAT]` | `[AURA-STAT] strength 2` | Adds a permanent value to an AuraSkills stat. Requires AuraSkills to be installed. |

> 💡 **Tip:** You can combine multiple actions. They will execute in the order they are written in the list.

---

## 🧩 Usage Examples

Below are practical examples of how and where to apply these actions.

### **In Soul Events (`fairy.yml`)**

You can trigger things automatically when a player finds a soul.

```yaml
# Executes EVERY TIME a player finds a (new) soul.
soul-found-actions:
  - "[MESSAGE] %prefix% &6You found a Fairy Soul!"
  - "[CONSOLE] eco give %player% 100"
  - "[SOUND] ENTITY_EXPERIENCE_ORB_PICKUP"

# Executes only when the LAST soul of this type is found.
all-souls-found-actions:
  - "[BROADCAST] &b&l%player% has found all the Fairy Souls!"
  - "[TITLE] &dCollection Complete!;&fCongratulations!"
````

### **In a Menu Item (`fairy.yml`)**

Use actions to create interactive rewards in your trade menus.

```yaml
# Inside the menu -> items section:
items:
  # 🔴 Button to close the menu
  close_button:
    slot: 49
    material: BARRIER
    display-name: "&c&lClose"
    lore:
      - "&7Click to exit."
    actions:
      - "[CLOSE]"
      - "[SOUND] BLOCK_CHEST_CLOSE"

  # ❤️ AuraSkills reward that gives extra health
  health_upgrade:
    slot: 22
    material: APPLE
    display-name: "&aExchange for Health"
    souls-required: 10
    actions:
      - "[AURA-STAT] health 1"
      - "[MESSAGE] %prefix% &aYou exchanged 10 souls for extra health."
```

---

## 💡 Additional Notes

* You can use the placeholders `%player%` (player name) and `%prefix%` (plugin prefix from `config.yml`).
* The `[PLAYER]` action respects the player’s permissions, while `[CONSOLE]` runs with admin privileges.
* There is **no limit** — combine as many actions as you want to create complex reward sequences.

---