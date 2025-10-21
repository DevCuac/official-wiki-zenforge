---
title: "Soul Configuration"
description: "Learn how to define collectible soul types, each with its own menus, rewards, actions, and visual effects."
---

The `souls/` folder is the heart of ZenFairy and controls all the **logic behind your collectibles**.  
Each `.yml` file you create here defines a new soul type — its rewards, its menu, and how it interacts with the world.

This system allows you to create unique collection experiences for different zones, events, or player ranks on your server.

---

## ⚙️ General Structure

Each soul type is defined by a **unique ID**, which is simply the **name of the file** you create in the `/plugins/ZenFairy/souls/` folder.

> 🧩 **Example IDs:**
> - `fairy.yml` → ID: `fairy`
> - `dragon.yml` → ID: `dragon`
> - `abyssal_soul.yml` → ID: `abyssal_soul`

---

## 📘 Sections of a Soul File

Each soul `.yml` file contains multiple sections for full customization.

| Section | Required | Description |
| :--- | :---: | :--- |
| `display-name` | ✅ | The soul’s display name shown in messages (supports color codes). |
| Sounds | ❌ | Defines sounds for events such as `soul-found-sound`, `soul-already-found-sound`, etc. |
| Effects | ❌ | Configures particles (`found-soul-particle`) and a floating head animation (`found-soul-animation`). |
| Event Actions | ❌ | Lists of actions (commands, messages, etc.) for events like `soul-found-actions`, `first-soul-found-actions`, and `all-souls-found-actions`. |
| `menu` | ✅ | The full configuration for the soul exchange menu of this specific type. |
| `locations` | ⚙️ | Stores the coordinates of all souls of this type. **Managed automatically by commands.** |

> 💡 **Tip:**  
> Start by copying `_example.yml`, renaming it, and editing it to create your first custom soul type.

---

## 🧾 Full Example: `dragon.yml`

Below is an example of a "dragon" soul type, showing how all sections work together to create a complete experience:

```yaml
# 🐉 Definition of the "Dragon" Soul Type

# Visible name of the soul
display-name: "&cDragon Soul"

# Sound when a soul is found for the first time
soul-found-sound:
  enabled: true
  sound: ENTITY_ENDER_DRAGON_GROWL
  volume: 0.5
  pitch: 1.2

# Floating head animation when found
found-soul-animation:
  enabled: true
  texture: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvM2Y1ZDIxM2MyZWM5MGZiM2MyNWE0YmRiY2I0M2MyYjgyYmMyNTg0ZGYzY2ZmYTRkNjRiZGUzZjc2N2E0ZDYzZCJ9fX0="
  duration: 60

# Actions executed when ANY dragon soul is found
soul-found-actions:
  - "[ACTIONBAR] &c+1 Dragon Soul"

# Reward menu for this soul type
menu:
  title: "&8Dragon Rewards"
  rows: 3
  filler:
    material: RED_STAINED_GLASS_PANE
    name: " "
  items:
    dragon_strength:
      display-name: "&cWill of the Dragon"
      material: DRAGON_HEAD
      slot: 13
      souls-required: 10 # Cost in dragon souls
      available-lore:
        - "&7Trade &c10 Dragon Souls &7to"
        - "&7gain &c+2 Strength &7permanently."
        - ""
        - "&eClick to claim!"
      unavailable-lore:
        - "&7You need &c{souls_required} Dragon Souls&7."
        - "&7You are missing &c{missing_souls}&7."
      actions:
        - "[AURA-STAT] strength 2"
        - "[MESSAGE] %prefix% &cYou’ve absorbed the power of the dragon! (+2 Strength)"
        - "[SOUND] ENTITY_ENDER_DRAGON_DEATH"

# Coordinates. DO NOT EDIT MANUALLY.
locations: []
````

---

## 🔍 Important Notes

* **Each `.yml` file inside `/souls` is a new collectible.**
  This is the core feature of the plugin.
* **Do not manually edit the `locations` section.**
  Always use `/zf set <type>` and `/zf remove` to add or remove souls.
* **The `souls-required` value in the menu is per item.**
  You can have multiple rewards with different costs in the same menu.
* Combine ZenFairy with other plugins through actions (`[CONSOLE]`, `[PLAYER]`) to create a truly integrated reward system for your server.

---

## 🚀 Next Step

Now that you understand how to structure a soul type, explore all the possibilities in the
👉 [Actions List](../acciones/acciones)
to learn how to create powerful and interactive rewards.

---