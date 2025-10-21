---
title: "Placeholders (Variables)"
description: "Integrate ZenRewards with other plugins using this complete list of PlaceholderAPI-compatible variables."
---

> ⚙️ **Requirement:**  
> To use these variables, make sure you have [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) installed.

---

## 🔁 Streak Placeholders

> Variables related to the player’s daily login streak.

| Placeholder | Description | Example Output |
|--------------|-------------|----------------|
| ```%zenrewards_streak_current%``` | Shows the player’s current streak day count. | `7` |

---

## 🧩 General Placeholders

> General variables that display global ZenRewards information.

| Placeholder | Description | Example Output |
|--------------|-------------|----------------|
| ```%zenrewards_claimable_count%``` | Shows how many rewards the player can currently claim in the `/rewards` menu. | `3` |

---

## 🎯 Reward-Specific Placeholders

> These variables require replacing `<id>` with the **reward ID** from your `rewards.yml` file (for example, `daily_reward` or `vip_reward`).

| Placeholder | Description | Example Usage |
|--------------|-------------|---------------|
| ```%zenrewards_status_<id>%``` | Displays the **translated status** of a reward (Available, On Cooldown, etc.). The texts are configured in `config.yml`. | `%zenrewards_status_vip_reward%` |
| ```%zenrewards_cooldown_<id>%``` | Displays the **remaining cooldown time** before the reward can be claimed again. If ready, it shows the *Ready* text (configurable). | `%zenrewards_cooldown_daily_reward%` |

---

### 💡 Note
You can use these placeholders in any plugin or scoreboard compatible with PlaceholderAPI.  
Example: *DeluxeMenus*, *TAB*, *Scoreboard*, *ActionBar*, *Holograms*, and more.

---