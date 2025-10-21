---
title: "Placeholders (Variables)"
description: "Integrate ZenFairy with other plugins using this complete list of PlaceholderAPI-compatible variables."
---

> ⚙️ **Requirement:**  
> To use these variables, make sure you have [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) installed.

ZenFairy integrates seamlessly with PlaceholderAPI, allowing you to display your players’ progress anywhere on your server.  
The plugin’s identifier is `zenfairy`.

---

## 🎯 Soul Placeholders (By Type)

> All ZenFairy variables require you to replace `<type>` with the **Soul Type ID** (the file name, for example, `fairy` or `dragon`).

| Placeholder | Description | Example Output | Example Usage |
| :--- | :--- | :--- | :--- |
| ```%zenfairy_souls_found_<type>%``` | Shows the **total number of souls** of that type the player has found. | `15` | `%zenfairy_souls_found_fairy%` |
| ```%zenfairy_souls_total_<type>%``` | Shows the **total amount of souls** of that type that exist on the server. | `50` | `%zenfairy_souls_total_fairy%` |
| ```%zenfairy_souls_available_<type>%``` | Shows how many souls of that type the player **has available to spend** in the exchange menu. | `10` | `%zenfairy_souls_available_fairy%` |
| ```%zenfairy_souls_spent_<type>%``` | Shows how many souls of that type the player **has spent** on rewards. | `5` | `%zenfairy_souls_spent_fairy%` |

---

## 🧩 Practical Examples

Below you can see how to combine these placeholders to create informative and useful messages.

### **Display Progress on a Scoreboard**

You can add a line to your scoreboard so that the player always sees their progress:

````

Fairy Souls: %zenfairy_souls_found_fairy%/%zenfairy_souls_total_fairy%

````

**Visual result:** `Fairy Souls: 15/50`

---

### **Display Balance in a Menu**

In a custom menu (for example, made with DeluxeMenus), you can remind the player how many souls they can spend:

```yaml
lore:
  - "&7Available Dragon Souls: &c%zenfairy_souls_available_dragon%"
````

**Visual result:** `Available Dragon Souls: 2`

---

### 💡 Note

You can use these placeholders in any plugin compatible with PlaceholderAPI.
Examples include *DeluxeMenus*, *TAB*, *Scoreboard-Revamped*, *FeatherBoard*, *ActionBar*, *HolographicDisplays*, and others.

To quickly test a placeholder in-game, use the PAPI command:
`/papi parse me %zenfairy_souls_found_fairy%`

---