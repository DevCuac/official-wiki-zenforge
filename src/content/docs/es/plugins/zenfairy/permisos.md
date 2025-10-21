---
title: "Comandos y Permisos"
description: "Descubre todos los comandos disponibles en ZenFairy y los permisos necesarios para gestionarlo todo."
---

ZenFairy utiliza un sistema de permisos para diferenciar entre las acciones que pueden realizar los jugadores y las que están reservadas para los administradores.

El comando principal es `/zenfairy`, que también responde a los alias `/zf` y `/souls`.

---

## 🔑 Permisos Principales

| Permiso | Descripción | Concedido a |
| :--- | :--- | :--- |
| `zenfairy.command.use` | Permite a los jugadores usar los comandos básicos del plugin. | Todos (por defecto) |
| `zenfairy.admin` | Otorga acceso a la mayoría de los comandos de administración, como `/zf set` y `/zf reload`. | OP (por defecto) |
| `zenfairy.admin.reset` | Otorga acceso al comando sensible `/zf reset`, que permite borrar datos de jugadores. | OP (por defecto) |

> 💡 **Consejo:** Para un control más granular, puedes asignar `zenfairy.admin.reset` solo a los administradores de más alto rango.

---

## 🎮 Comandos de Jugador

Estos son los comandos que los jugadores pueden usar por defecto.

| Comando | Permiso Requerido | Descripción |
| :--- | :---: | :--- |
| `/zf menu [tipo]` | `zenfairy.command.use` | Abre el menú interactivo para intercambiar las almas encontradas de un tipo específico. Si no se especifica un tipo, por defecto abre el menú de `fairy`. |

---

## 🛠️ Comandos de Administración

Estos comandos requieren permisos de administrador y son esenciales para configurar y mantener el plugin.

| Comando | Permiso Requerido | Descripción |
| :--- | :---: | :--- |
| `/zf set <tipo>` | `zenfairy.admin` | **Convierte el bloque que estás mirando en un alma** del tipo especificado. Esta es la principal herramienta para colocar tus almas en el mundo. |
| `/zf remove` | `zenfairy.admin` | **Elimina el alma del bloque que estás mirando.** El bloque físico no se destruye, solo se borra del registro del plugin. |
| `/zf location <tipo>` | `zenfairy.admin` | Abre un menú especial que muestra las **coordenadas de todas las almas** de un tipo. Permite teletransportarse a ellas con un clic, ideal para encontrarlas o eliminarlas. |
| `/zf reset <jugador> <tipo>` | `zenfairy.admin.reset` | **Borra todos los datos** de un jugador para un tipo de alma específico (almas encontradas y gastadas). Útil para pruebas o para corregir errores. |
| `/zf reload` | `zenfairy.admin` | **Recarga todos los archivos de configuración** de ZenFairy (incluyendo `config.yml` y todos los archivos en la carpeta `souls/`) sin necesidad de reiniciar el servidor. |

> ⚠️ **Importante:** Recuerda siempre usar los comandos `/zf set` y `/zf remove` para gestionar las ubicaciones. Editar la sección `locations:` manualmente en los archivos `.yml` puede causar problemas.

---