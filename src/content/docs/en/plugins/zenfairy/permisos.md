---
title: "Commands and Permissions"
description: "Discover all available ZenFairy commands and the permissions required to manage everything."
----------------------------------------------------------------------------------------------------------

ZenFairy uses a permission system to distinguish between actions that can be performed by regular players and those reserved for administrators.

The main command is `/zenfairy`, which also responds to the aliases `/zf` and `/souls`.

---

## 🔑 Main Permissions

| Permission             | Description                                                                        | Granted To         |
| :--------------------- | :--------------------------------------------------------------------------------- | :----------------- |
| `zenfairy.command.use` | Allows players to use the basic plugin commands.                                   | Everyone (default) |
| `zenfairy.admin`       | Grants access to most administrative commands, such as `/zf set` and `/zf reload`. | OP (default)       |
| `zenfairy.admin.reset` | Grants access to the sensitive `/zf reset` command, which can delete player data.  | OP (default)       |

> 💡 **Tip:** For finer control, you can assign `zenfairy.admin.reset` only to your highest-ranking administrators.

---

## 🎮 Player Commands

These are the commands that regular players can use by default.

| Command           |   Required Permission  | Description                                                                                                                          |
| :---------------- | :--------------------: | :----------------------------------------------------------------------------------------------------------------------------------- |
| `/zf menu [type]` | `zenfairy.command.use` | Opens the interactive menu to exchange collected souls of a specific type. If no type is specified, it defaults to the `fairy` menu. |

---

## 🛠️ Admin Commands

These commands require admin permissions and are essential for configuring and maintaining the plugin.

| Command                     |   Required Permission  | Description                                                                                                                                                    |
| :-------------------------- | :--------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/zf set <type>`            |    `zenfairy.admin`    | **Turns the block you’re looking at into a soul** of the specified type. This is the main tool used to place souls in the world.                               |
| `/zf remove`                |    `zenfairy.admin`    | **Removes the soul from the block you’re looking at.** The physical block remains intact; it’s only removed from the plugin’s registry.                        |
| `/zf location <type>`       |    `zenfairy.admin`    | Opens a special menu showing the **coordinates of all souls** of a given type. Allows teleportation with a single click—perfect for locating or removing them. |
| `/zf reset <player> <type>` | `zenfairy.admin.reset` | **Deletes all data** for a specific player and soul type (found and spent souls). Useful for testing or fixing inconsistencies.                                |
| `/zf reload`                |    `zenfairy.admin`    | **Reloads all configuration files** of ZenFairy (including `config.yml` and all files inside the `souls/` folder) without restarting the server.               |

> ⚠️ **Important:** Always use the `/zf set` and `/zf remove` commands to manage soul locations. Manually editing the `locations:` section in `.yml` files can cause issues.

---