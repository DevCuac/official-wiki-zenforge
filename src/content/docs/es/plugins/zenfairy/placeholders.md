---
title: "Placeholders (Variables)"
description: "Integra ZenFairy con otros plugins usando esta lista completa de variables compatibles con PlaceholderAPI."
---

> ⚙️ **Requisito:**  
> Para usar estas variables, asegúrate de tener instalado [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/).

ZenFairy se integra perfectamente con PlaceholderAPI para que puedas mostrar el progreso de tus jugadores en cualquier lugar de tu servidor. El identificador del plugin es `zenfairy`.

---

## 🎯 Placeholders de Almas (Por Tipo)

> Todas las variables de ZenFairy requieren que reemplaces `<tipo>` por la **ID del tipo de alma** (el nombre del archivo, por ejemplo, `fairy` o `dragon`).

| Placeholder | Descripción | Ejemplo de Salida | Ejemplo de Uso |
| :--- | :--- | :--- | :--- |
| ```%zenfairy_souls_found_<tipo>%``` | Muestra el **número total de almas** de ese tipo que el jugador ha encontrado. | `15` | `%zenfairy_souls_found_fairy%` |
| ```%zenfairy_souls_total_<tipo>%``` | Muestra la **cantidad total de almas** de ese tipo que existen en el servidor. | `50` | `%zenfairy_souls_total_fairy%` |
| ```%zenfairy_souls_available_<tipo>%``` | Muestra cuántas almas de ese tipo tiene el jugador **disponibles para gastar** en el menú de intercambio. | `10` | `%zenfairy_souls_available_fairy%` |
| ```%zenfairy_souls_spent_<tipo>%``` | Muestra cuántas almas de ese tipo **ha gastado** el jugador en recompensas. | `5` | `%zenfairy_souls_spent_fairy%` |

---

## 🧩 Ejemplos Prácticos

A continuación, puedes ver cómo combinar estos placeholders para crear mensajes informativos y útiles.

### **Mostrar Progreso en un Scoreboard**

Puedes añadir una línea a tu scoreboard para que el jugador siempre vea su progreso:

```
Almas de Hada: %zenfairy_souls_found_fairy%/%zenfairy_souls_total_fairy%
```
**Resultado visual:** `Almas de Hada: 15/50`

### **Mostrar Saldo en un Menú**

En un menú personalizado (hecho con DeluxeMenus, por ejemplo), puedes recordarle al jugador cuántas almas puede gastar:

```yaml
lore:
  - "&7Almas de Dragón Disponibles: &c%zenfairy_souls_available_dragon%"
```
**Resultado visual:** `Almas de Dragón Disponibles: 2`

---

### 💡 Nota

Puedes usar estos placeholders en cualquier plugin compatible con PlaceholderAPI.
Ejemplo: en *DeluxeMenus*, *TAB*, *Scoreboard-Revamped*, *FeatherBoard*, *ActionBar*, *HolographicDisplays*, entre otros.

Para probar un placeholder rápidamente en el juego, usa el comando de PAPI:
`/papi parse me %zenfairy_souls_found_fairy%`

---