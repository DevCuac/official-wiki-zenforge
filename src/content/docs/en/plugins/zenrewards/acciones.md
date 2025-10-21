---
title: "Item Actions"
description: "Make your menus interactive with custom actions like [CLOSE], [PLAYER], and [CONSOLE]."
---

ZenRewards allows you to **assign special actions to your menu items**, giving you the ability to run commands or close inventories with a single click.  
These actions are defined inside the `commands:` list of any decorative or interactive item in `menu.yml` or `streak-menu.yml`.

---

## ⚙️ Available Actions

| Action | Usage | Description |
| :--- | :--- | :--- |
| `[CLOSE]` | `[CLOSE]` | Closes the player's current inventory. Ideal for exit buttons. |
| `[PLAYER] <command>` | `[PLAYER] spawn` | Executes a command as if the player typed it. Respects their permissions. |
| `[CONSOLE] <command>` | `[CONSOLE] eco give %player% 100` | Executes a command from the console. Use `%player%` to reference the player. |

> 💡 **Tip:** You can combine multiple actions in the same item.  
> The order in the list determines the execution order.

---

## 🧩 Example Usage in `menu.yml`

Below are practical examples showing how to apply these actions to menu items:

```yaml
items:
  # 🔴 Button to close the menu
  close_button:
    slot: 49
    material: BARRIER
    name: "&c&lClose"
    lore:
      - "&7Click to exit."
    commands:
      - "[CLOSE]"

  # 💰 Item that grants a small bonus
  bonus_item:
    slot: 40
    material: SUNFLOWER
    name: "&eBonus!"
    lore:
      - "&7Click to receive 50 coins."
    commands:
      - "[CONSOLE] eco give %player% 50"
      - "[PLAYER] me I've received a bonus!"

  # 🧭 Item that sends the player to spawn
  go_spawn:
    slot: 4
    material: COMPASS
    name: "&aGo to Spawn"
    lore:
      - "&7Return to the starting point."
    commands:
      - "[PLAYER] spawn"
      - "[CLOSE]"
````

---

## 💡 Additional Notes

* You can use **placeholders** in commands (`%player%`, `%prefix%`, etc.).
* Actions **do not require additional permissions**, unless the player's command itself does.
* It's possible to combine **player + console + close** actions in a single item.
* Perfect for creating navigation buttons, confirmations, or quick-access shortcuts in your menus.

---