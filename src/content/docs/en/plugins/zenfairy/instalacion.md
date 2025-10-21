---
title: "Installation"
description: "Step-by-step guide to properly install ZenFairy on your Minecraft server."
---

## 🧱 Prerequisites

Before getting started, make sure you meet the following requirements:

| Requirement | Details |
| :--- | :--- |
| **Server Type** | **Paper**, Purpur, or other optimized forks. Paper is recommended for its better API handling. |
| **Minecraft Version** | **1.21 or higher.** ZenFairy is built on modern APIs and is not compatible with older versions. |
| **Optional Dependency** | [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) (to use custom placeholders). |
| **Optional Dependency** | [AuraSkills](https://www.spigotmc.org/resources/auraskills.89877/) (to use the `[AURA-STAT]` action). |

> 💡 **Recommendation:**  
> Although the dependencies are optional, installing them will unlock the full potential of ZenFairy and enhance your players' experience.

---

## ⚙️ Installation Guide

Follow these steps carefully to ensure a proper installation:

### **1️⃣ Download the Plugin**

- Get the latest version of **`ZenFairy.jar`** from its official page.  
- *(You can add the download links here once they’re available.)*

Always download from official sources to avoid tampered or unsafe files.

---

### **2️⃣ Upload the Plugin to Your Server**

- Move the file `ZenFairy.jar` into the following folder:
```

/plugins

```
- Make sure the file is complete and not corrupted.

---

### **3️⃣ Install Optional Dependencies**

If you want to use placeholders or stat-based actions:

1. Download and install **PlaceholderAPI** and/or **AuraSkills** into your `/plugins` folder.  
2. Restart your server so ZenFairy can automatically detect the integrations.

> ⚠️ **Important:**  
> ZenFairy automatically detects these dependencies. If they are installed, it will “hook” into them during startup without requiring any extra configuration.

---

### **4️⃣ Restart the Server**

- Start or fully restart your Minecraft server.

> 🚫 **Avoid using `/reload`:**  
> This command is unstable and can cause unexpected issues with complex plugins like ZenFairy. A full restart is always safer.

After startup, ZenFairy will automatically generate the following directory:
```

/plugins/ZenFairy/

```
with these files and folders:
```

config.yml
player_data.yml
souls/
├── _example.yml
└── fairy.yml

```

---

### ✅ **Installation Complete**

Done! 🎉  
Your server now has **ZenFairy** installed and ready for you to start hiding souls and configuring their rewards.

Continue with the **[Commands and Permissions](../commands/commands)** section to start interacting with the plugin.

---