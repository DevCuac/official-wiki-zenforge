---
title: "Commands"
description: "Complete reference of all available ZenRewards commands for players and administrators."
---

This is the full command reference for both players and administrators.  
It includes their aliases, functions, and required permissions.  

> 💡 **Note:** All commands can be executed from the game or the console (unless otherwise specified).

---

## 🎮 Player Commands

| Command | Description | Alias |
|:--|:--|:--|
| ```/rewards``` | Opens the main rewards menu, where players can claim their daily or weekly prizes. | `/recompensa`, `/reward` |
| ```/streak``` | Displays the connection streak menu, showing the player’s current progress. | `/racha` |

---

## 🛠️ Administrator Commands

> 🔐 Require permission:  
> ```zenrewards.admin```

| Command | Description | Alias |
|:--|:--|:--|
| ```/zenrewards reload``` | Reloads all plugin configuration files without restarting the server.<br/><br/>✅ **Use:** `Quick reload after editing YAML files.` | `/zr reload` |
| ```/zenrewards reset <player> <id\|all>``` | Resets the cooldown or state of a specific reward for a player.<br/><br/>**Arguments:**<br/>- `<player>` → Player name.<br/>- `<id\|all>` → Reward ID or `all` for every reward.<br/><br/>✅ **Example:** `/zr reset Notch daily_reward` | `/zr reset` |

---

## 🧾 Permissions

| Permission | Description |
|:--|:--|
| `zenrewards.admin` | Allows use of all administrative commands. |
| `zenrewards.player` | Grants basic access to player commands. *(Enabled by default for everyone)* |

---

## 💬 Usage Examples

```bash
/rewards
````

> Opens the main ZenRewards menu.

```bash
/zenrewards reload
```

> Reloads the plugin after editing `config.yml` or `rewards.yml`.

```bash
/zenrewards reset Steve daily_reward
```

> Resets player *Steve*’s daily reward.

---