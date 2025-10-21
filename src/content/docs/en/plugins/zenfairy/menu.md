---
title: "Menu Configuration"
description: "Customize the appearance and functionality of soul exchange menus and the location panel in ZenFairy."
--------------------------------------------------------------------------------------------------------------------

**ZenFairy** gives you full control over the appearance and structure of the two main types of menus used by players and administrators.

Unlike other plugins, ZenFairy organizes menu configurations in a logical way:

* **Reward Menus:** Configured inside **each soul type file** in the `/souls/` folder.
* **Location Menu:** Configured globally in the `config.yml` file.

---

## 🎁 Reward Menu (`souls/<type>.yml`)

This is the main menu where players exchange the souls they’ve collected for rewards. It’s accessed with `/zf menu <type>`. The configuration for this menu is located in the `menu:` section of each soul file (e.g., `fairy.yml`, `dragon.yml`).

### ⚙️ Main Menu Parameters

| Parameter | Description                                              |
| :-------- | :------------------------------------------------------- |
| `title`   | Defines the inventory title. Supports color codes (`&`). |
| `rows`    | Number of menu rows (1 to 6).                            |
| `filler`  | Item that automatically fills empty slots in the menu.   |

---

### 💎 Menu Item Structure

Each item in the `items` section has a **unique ID**. Items can be decorative or interactive. Interactive items use **dynamic lore** that changes depending on whether the player can afford the exchange.

* **`available-lore`** → Displayed when the player has enough souls (`{souls_available}` >= `souls-required`).
* **`unavailable-lore`** → Displayed when the player doesn’t have enough souls.

> **Example of a reward item:**

```yaml
# Inside your dragon.yml file
menu:
  title: "&8Dragon Rewards"
  rows: 3
  items:
    dragon_strength:
      display-name: "&cDragon’s Will"
      material: DRAGON_HEAD
      slot: 13
      souls-required: 10 # Soul cost of this reward
      available-lore:
        - "&7Exchange &c10 Dragon Souls &7to"
        - "&7gain &c+2 Strength &7permanently."
        - ""
        - "&eClick to claim!"
      unavailable-lore:
        - "&7You need &c{souls_required} Dragon Souls&7."
        - "&7You are missing &c{missing_souls} &7souls." # {missing_souls} is a useful placeholder
      actions:
        - "[AURA-STAT] strength 2"
        - "[MESSAGE] %prefix% &cYou gained +2 Strength!"
```

---

## 🗺️ Location Menu (`config.yml`)

This menu is an administrative tool accessible with `/zf location <type>`. It allows you to view the coordinates of all souls and teleport to them. It’s configured under the `location-menu:` section in `config.yml`.

### ⚙️ Key Parameters

| Parameter       | Description                                                                                                                      |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `title`         | Menu title. Supports placeholders such as `{soul_type_display_name}` and `{current_page}`.                                       |
| `rows`          | Number of inventory rows.                                                                                                        |
| `location-item` | Defines the appearance of the item representing each soul. Supports placeholders like `{index}`, `{world}`, `{x}`, `{y}`, `{z}`. |
| `control-items` | Defines pagination buttons (`previous-page`, `next-page`), the close button (`close-menu`), and the filler item (`filler-item`). |

> **Example configuration in `config.yml`:**

```yaml
location-menu:
  title: "&8Locations: {soul_type_display_name} &7(Page {current_page}/{max_pages})"
  rows: 6
  
  location-item:
    material: COMPASS
    display-name: "&aSoul #{index}"
    lore:
      - "&7World: &f{world}"
      - "&7Coordinates: &e{x}, {y}, {z}"
      - ""
      - "&eClick to teleport!"
      
  control-items:
    previous-page:
      material: ARROW
      display-name: "&a<-- Previous Page"
      slot: 48
    # ... and the rest of the control buttons ...
```

---

## 💡 Customization Tips

* Use the available placeholders in each menu (`{souls_found}`, `{x}`, `{y}`, etc.) to display dynamic and useful information.
* You can use custom heads in any menu item (`material: PLAYER_HEAD`) by adding a `texture: "eyJ0ZXh...="` line.
* If an item has `lore`, use dashes (`-`) to define multiple lines.
* Remember to restart or reload the plugin with `/zf reload` after making configuration changes.

---