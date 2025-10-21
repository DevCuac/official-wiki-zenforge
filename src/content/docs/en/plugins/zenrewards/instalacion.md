---
title: "Installation"
description: "Step-by-step guide to correctly install ZenRewards on your Minecraft server."
---

## 🧱 Prerequisites

Before starting, make sure you meet the following requirements:

| Requirement | Details |
| :--- | :--- |
| **Server Type** | Spigot, Paper, Purpur, or any compatible fork. |
| **Minecraft Version** | 1.8.8 or higher. |
| **Optional Dependency** | [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) (to use custom placeholders). |

> 💡 **Recommendation:** Although PlaceholderAPI is optional, installing it allows you to make full use of ZenRewards’ dynamic variables.

---

## ⚙️ Installation Guide

Follow these steps carefully for a proper installation:

### **1️⃣ Download the Plugin**

- Get the latest version of **`ZenRewards.jar`** from our official pages:  
  - [BuiltByBit](https://builtbybit.com/resources/zenrewards.77368)
  - [Modrinth](https://modrinth.com/project/zenrewards)

Always download from official sources to avoid modified or unsafe files.

---

### **2️⃣ Upload the Plugin to the Server**

- Move the `ZenRewards.jar` file into your:
```

/plugins

```
- Make sure the file is complete and not corrupted.

---

### **3️⃣ Install Dependencies (Optional)**

If you want to use placeholders like `%zenrewards_streak_current%` or `%zenrewards_claimable_count%`:

1. Download and install **PlaceholderAPI** in the `/plugins` folder.  
2. Restart your server so ZenRewards can detect it automatically.

> ⚠️ **Important:** ZenRewards automatically detects PlaceholderAPI — **no manual configuration required.**

---

### **4️⃣ Restart the Server**

- Fully restart your server (do not use `/reload`).

> 🚫 **Avoid using `/reload`:** It may cause loading errors and temporary data loss.

After restarting, ZenRewards will automatically generate the following folder:
```

/plugins/ZenRewards/

```
with these files:
```

config.yml
menu.yml
streak-menu.yml
rewards.yml

```

---

### ✅ **Installation Complete**

Done! 🎉  
Your server now has **ZenRewards** installed and ready for you to configure custom rewards.  
Continue with the [Reward Configuration](../configuracion/recompensas) section to start creating your prizes.

---