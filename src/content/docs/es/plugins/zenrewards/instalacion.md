---
title: "Instalación"
description: "Guía paso a paso para instalar correctamente ZenRewards en tu servidor de Minecraft."
---

## 🧱 Requisitos Previos

Antes de comenzar, asegúrate de cumplir con los siguientes requisitos:

| Requisito | Detalle |
| :--- | :--- |
| **Tipo de Servidor** | Spigot, Paper, Purpur o cualquier fork compatible. |
| **Versión de Minecraft** | 1.8.8 o superior. |
| **Dependencia Opcional** | [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) (para usar placeholders personalizados). |

> 💡 **Recomendación:** Aunque PlaceholderAPI es opcional, instalarlo te permitirá aprovechar al máximo las variables dinámicas de ZenRewards.

---

## ⚙️ Guía de Instalación

Sigue estos pasos cuidadosamente para una instalación correcta:

### **1️⃣ Descargar el Plugin**

- Obtén la última versión de **`ZenRewards.jar`** desde nuestras páginas oficiales:  
  - [BuiltByBit](https://builtbybit.com/resources/zenrewards.77368)
  - [Modrinth](https://modrinth.com/project/zenrewards)

Asegúrate de descargar siempre desde fuentes oficiales para evitar archivos modificados o inseguros.

---

### **2️⃣ Subir el Plugin al Servidor**

- Mueve el archivo `ZenRewards.jar` a la carpeta:
```

/plugins

```
- Verifica que el archivo esté completo y no dañado.

---

### **3️⃣ Instalar Dependencias (Opcional)**

Si deseas usar placeholders como `%zenrewards_streak_current%` o `%zenrewards_claimable_count%`:

1. Descarga e instala **PlaceholderAPI** en la carpeta `/plugins`.
2. Reinicia tu servidor para que ZenRewards lo detecte automáticamente.

> ⚠️ **Importante:** ZenRewards detecta PlaceholderAPI de forma automática, **no es necesario configurarlo manualmente**.

---

### **4️⃣ Reiniciar el Servidor**

- Reinicia completamente tu servidor (no uses `/reload`).

> 🚫 **Evita usar `/reload`:** Puede generar errores de carga y pérdida de datos temporales.

Tras el reinicio, ZenRewards generará automáticamente la carpeta:
```

/plugins/ZenRewards/

```
con los archivos:
```

config.yml
menu.yml
streak-menu.yml
rewards.yml

```

---

### ✅ **Instalación Completada**

¡Listo! 🎉  
Tu servidor ya tiene **ZenRewards** instalado y listo para configurar tus recompensas personalizadas.  
Continúa con la sección [Configuración de Recompensas](../configuracion/recompensas) para empezar a crear tus premios.

---