---
title: "Instalación"
description: "Guía paso a paso para instalar correctamente ZenFairy en tu servidor de Minecraft."
---

## 🧱 Requisitos Previos

Antes de comenzar, asegúrate de cumplir con los siguientes requisitos:

| Requisito | Detalle |
| :--- | :--- |
| **Tipo de Servidor** | **Paper**, Purpur u otros forks optimizados. Se recomienda Paper por su mejor manejo de la API. |
| **Versión de Minecraft** | **1.21 o superior.** ZenFairy está construido con las APIs modernas y no es compatible con versiones anteriores. |
| **Dependencia Opcional** | [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) (para usar placeholders personalizados). |
| **Dependencia Opcional** | [AuraSkills](https://www.spigotmc.org/resources/auraskills.89877/) (para usar la acción `[AURA-STAT]`). |

> 💡 **Recomendación:** Aunque las dependencias son opcionales, instalarlas te permitirá desbloquear todo el potencial de ZenFairy y enriquecer la experiencia de tus jugadores.

---

## ⚙️ Guía de Instalación

Sigue estos pasos cuidadosamente para una instalación correcta:

### **1️⃣ Descargar el Plugin**

- Obtén la última versión de **`ZenFairy.jar`** desde su página oficial.
- *(Aquí puedes añadir los enlaces cuando los tengas)*

Asegúrate de descargar siempre desde fuentes oficiales para evitar archivos modificados o inseguros.

---

### **2️⃣ Subir el Plugin al Servidor**

- Mueve el archivo `ZenFairy.jar` a la carpeta:
```
/plugins
```
- Verifica que el archivo esté completo y no dañado.

---

### **3️⃣ Instalar Dependencias (Opcional)**

Si deseas usar los placeholders o las acciones de stats:

1.  Descarga e instala **PlaceholderAPI** y/o **AuraSkills** en la carpeta `/plugins`.
2.  Reinicia tu servidor para que ZenFairy detecte automáticamente las integraciones.

> ⚠️ **Importante:** ZenFairy detecta estas dependencias de forma automática. Si las tienes instaladas, se "enganchará" a ellas al arrancar, sin necesidad de configuración adicional.

---

### **4️⃣ Reiniciar el Servidor**

- Inicia o reinicia completamente tu servidor.

> 🚫 **Evita usar `/reload`:** Este comando es inestable y puede causar errores inesperados en plugins complejos como ZenFairy. Siempre es mejor un reinicio completo.

Tras el inicio, ZenFairy generará automáticamente la carpeta:
```
/plugins/ZenFairy/
```
con los siguientes archivos y carpetas:
```
config.yml
player_data.yml
souls/
  ├── _example.yml
  └── fairy.yml
```

---

### ✅ **Instalación Completada**

¡Listo! 🎉
Tu servidor ya tiene **ZenFairy** instalado y listo para que empieces a esconder almas y configurar sus recompensas.

Continúa con la sección de **[Comandos y Permisos](../comandos/comandos)** para empezar a interactuar con el plugin.

---