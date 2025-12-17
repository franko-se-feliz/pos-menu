// Base de datos de productos del menú
const products = [
    // DESAYUNOS (100)
    { id: 101, name: "American Breakfast", price: 18.00, category: "breakfast", emoji: "🥞" },
    { id: 102, name: "Chilaquiles Divorciados", price: 15.00, category: "breakfast", emoji: "🥘" },
    { id: 103, name: "Waffles & Maple", price: 14.00, category: "breakfast", emoji: "🧇" },
    { id: 104, name: "Tortilla Española", price: 16.00, category: "breakfast", emoji: "🍳" },
    { id: 105, name: "French Toast", price: 14.00, category: "breakfast", emoji: "🍞" },
    { id: 106, name: "Fruta de Temporada", price: 10.00, category: "breakfast", emoji: "🍉" },

    // ALMUERZOS / LUNCH (200)
    { id: 201, name: "Chicken Caesar Wrap", price: 16.00, category: "lunch", emoji: "🌯" },
    { id: 202, name: "BBQ Sirloin Burger", price: 18.00, category: "lunch", emoji: "🍔" },
    { id: 203, name: "Greek Salad", price: 14.00, category: "lunch", emoji: "🥗" },
    { id: 204, name: "Pescado Veracruz", price: 22.00, category: "lunch", emoji: "🐟" },
    { id: 205, name: "Pollo Mole", price: 20.00, category: "lunch", emoji: "🍗" },
    { id: 206, name: "Ceviche Vallarta", price: 18.00, category: "lunch", emoji: "🦐" },

    // CENAS / DINNER (300)
    { id: 301, name: "Sopa de Tortilla", price: 12.00, category: "dinner", emoji: "🥣" },
    { id: 302, name: "Chile Relleno", price: 18.00, category: "dinner", emoji: "🌶️" },
    { id: 303, name: "Filete Tikin Xic", price: 24.00, category: "dinner", emoji: "🐠" },
    { id: 304, name: "Langosta Caribeña", price: 45.00, category: "dinner", emoji: "🦞" },
    { id: 305, name: "Medallones Res", price: 35.00, category: "dinner", emoji: "🥩" },
    { id: 306, name: "Camarones Louisiana", price: 28.00, category: "dinner", emoji: "🍤" },

    // POSTRES (400)
    { id: 401, name: "NY Cheesecake", price: 9.00, category: "dessert", emoji: "🍰" },
    { id: 402, name: "Tiramisu", price: 8.00, category: "dessert", emoji: "🍮" },
    { id: 403, name: "Fresas con Crema", price: 9.00, category: "dessert", emoji: "🍓" },

    // BEBIDAS SIN ALCOHOL (500)
    { id: 501, name: "Jugo Naranja Fresco", price: 5.00, category: "drinks", emoji: "🍊" },
    { id: 502, name: "Coca-Cola / Light", price: 3.50, category: "drinks", emoji: "🥤" },
    { id: 503, name: "Limonada Mineral", price: 4.50, category: "drinks", emoji: "🍋" },
    { id: 504, name: "Agua Embotellada", price: 3.00, category: "drinks", emoji: "💧" },
    { id: 505, name: "Café Americano", price: 4.00, category: "drinks", emoji: "☕" },

    // BAR / ALCOHOL (600)
    { id: 601, name: "Cerveza Nacional", price: 6.00, category: "bar", emoji: "🍺" },
    { id: 602, name: "Margarita Clásica", price: 12.00, category: "bar", emoji: "🍸" },
    { id: 603, name: "Tequila Shot (Don Julio)", price: 10.00, category: "bar", emoji: "🥃" },
    { id: 604, name: "Copa Vino Tinto", price: 11.00, category: "bar", emoji: "🍷" },
    { id: 605, name: "Copa Vino Blanco", price: 11.00, category: "bar", emoji: "🥂" },
];

// Categorías del menú
const categories = [
    { id: "all", name: "Todo", icon: "📋" },
    { id: "breakfast", name: "Desayuno", icon: "🍳" },
    { id: "lunch", name: "Almuerzo", icon: "☀️" },
    { id: "dinner", name: "Cena", icon: "🌙" },
    { id: "dessert", name: "Postre", icon: "🍰" },
    { id: "drinks", name: "Bebidas", icon: "🥤" },
    { id: "bar", name: "Bar/Alcohol", icon: "🍺" }
];