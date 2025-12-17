# 🍽️ FRANKO POS - Sistema de Punto de Venta

Sistema POS (Point of Sale) moderno y responsive para restaurantes, desarrollado con HTML, CSS y JavaScript vanilla.

## ✨ Características

- ✅ Interfaz intuitiva tipo aplicación móvil
- ✅ 6 categorías de menú (Desayuno, Almuerzo, Cena, Postre, Bebidas, Bar)
- ✅ 30+ productos predefinidos
- ✅ Carrito de compras interactivo
- ✅ Cálculo automático de IVA (16%)
- ✅ Sistema de pago (Efectivo/Tarjeta)
- ✅ Persistencia de datos con localStorage
- ✅ Diseño responsive con Tailwind CSS

## 📁 Estructura del Proyecto

```
pos-menu/
├── index.html          # Estructura HTML principal
├── css/
│   └── styles.css     # Estilos personalizados
├── js/
│   ├── data.js        # Base de datos de productos
│   ├── cart.js        # Lógica del carrito de compras
│   └── app.js         # Inicialización y control de UI
└── README.md          # Este archivo
```

## 🚀 Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/franko-se-feliz/pos-menu.git
cd pos-menu
```

2. Abre `index.html` en tu navegador:
```bash
# En Windows
start index.html

# En macOS
open index.html

# En Linux
xdg-open index.html
```

O usa un servidor local:
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server
```

3. Visita `http://localhost:8000` en tu navegador

## 📖 Uso

1. **Seleccionar Categoría**: Haz clic en las categorías del menú superior
2. **Agregar Productos**: Clic en cualquier producto para agregarlo al carrito
3. **Modificar Cantidad**: Usa los botones + / - en el carrito
4. **Procesar Pago**: Clic en "COBRAR" y selecciona método de pago
5. **Nueva Orden**: El sistema genera automáticamente un nuevo número de orden

## 🎨 Personalización

### Modificar Productos
Edita `js/data.js` para agregar/modificar productos:

```javascript
{ 
  id: 701, 
  name: "Tu Platillo", 
  price: 25.00, 
  category: "lunch", 
  emoji: "🍕" 
}
```

### Cambiar IVA
En `js/cart.js`, línea del cálculo de impuestos:
```javascript
const tax = subtotal * 0.16; // Cambiar 0.16 por tu porcentaje
```

### Estilos
Modifica `css/styles.css` o usa clases de Tailwind CSS en `index.html`

## 🛠️ Tecnologías

- **HTML5** - Estructura
- **CSS3** - Estilos personalizados
- **JavaScript ES6+** - Lógica de negocio
- **Tailwind CSS** - Framework de utilidades CSS
- **LocalStorage** - Persistencia de datos

## 📄 Licencia

Apache License 2.0

## 👨‍💻 Autor

**Chef Franko POS Team**

---

**Versión:** 2.0  
**Última actualización:** Diciembre 2025