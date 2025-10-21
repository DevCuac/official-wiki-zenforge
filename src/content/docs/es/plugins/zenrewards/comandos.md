---
title: "Comandos"
description: "Referencia completa de todos los comandos disponibles en ZenRewards para jugadores y administradores."
---

Esta es la referencia completa de comandos para jugadores y administradores.  
Incluye sus alias, funciones y permisos necesarios.  

> 💡 **Nota:** Todos los comandos pueden ser ejecutados desde el juego o la consola (salvo que se indique lo contrario).

---

## 🎮 Comandos para Jugadores

| Comando | Descripción | Alias |
|:--|:--|:--|
| ```/rewards``` | Abre el menú principal de recompensas, donde el jugador puede reclamar sus premios diarios o semanales. | `/recompensa`, `/reward` |
| ```/streak``` | Muestra el menú de rachas de conexión, indicando el progreso actual del jugador. | `/racha` |

---

## 🛠️ Comandos para Administradores

> 🔐 Requieren el permiso:  
> ```zenrewards.admin```

| Comando | Descripción | Alias |
|:--|:--|:--|
| ```/zenrewards reload``` | Recarga todos los archivos de configuración del plugin sin reiniciar el servidor.<br/><br/>✅ **Uso:** `Recarga rápida tras editar archivos YAML.` | `/zr reload` |
| ```/zenrewards reset <jugador> <id\|all>``` | Reinicia el cooldown o estado de una recompensa para un jugador específico.<br/><br/>**Argumentos:**<br/>- `<jugador>` → Nombre del jugador.<br/>- `<id\|all>` → ID de la recompensa o `all` para todas.<br/><br/>✅ **Ejemplo:** `/zr reset Notch daily_reward` | `/zr reset` |

---

## 🧾 Permisos

| Permiso | Descripción |
|:--|:--|
| `zenrewards.admin` | Permite el uso de todos los comandos administrativos. |
| `zenrewards.player` | Permite el acceso básico a los comandos de jugador. *(Activado por defecto para todos)* |

---

## 💬 Ejemplos de Uso

```bash
/rewards
````

> Abre el menú principal de ZenRewards.

```bash
/zenrewards reload
```

> Recarga el plugin tras realizar cambios en `config.yml` o `rewards.yml`.

```bash
/zenrewards reset Steve daily_reward
```

> Restablece la recompensa diaria del jugador *Steve*.

---