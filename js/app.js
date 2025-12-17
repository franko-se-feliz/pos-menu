// Estado de la aplicación
let currentCategory = 'all';

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderMenu();
    updateDateTime();
    setInterval(updateDateTime, 1000);
    loadCartFromStorage();
});

// Actualizar fecha y hora
function updateDateTime() {
    const now = new Date();
    document.getElementById('datetime').innerText = now.toLocaleDateString('es-MX', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
    });
}

// Renderizar categorías
function renderCategories() {
    const container = document.getElementById('category-container');
    container.innerHTML = categories.map(cat => `
        <button onclick="filterMenu('${cat.id}')" 
            class="px-4 py-2 rounded-lg font-semibold text-sm transition whitespace-nowrap
            ${currentCategory === cat.id ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-200'}">
            ${cat.icon} ${cat.name}
        </button>
    `).join('');
}

// Filtrar menú por categoría
function filterMenu(catId) {
    currentCategory = catId;
    renderCategories();
    renderMenu();
}

// Renderizar menú
function renderMenu() {
    const grid = document.getElementById('menu-grid');
    const filtered = currentCategory === 'all' 
        ? products 
        : products.filter(p => p.category === currentCategory);

    grid.innerHTML = filtered.map(product => `
        <div onclick="addToCart(${product.id})" class="dish-card bg-white p-3 rounded-2xl shadow hover:shadow-lg cursor-pointer transition duration-200 border border-transparent hover:border-indigo-300">
            <div class="text-4xl mb-1 transform transition hover:scale-110">${product.emoji}</div>
            <div class="w-full">
                <h3 class="font-bold text-gray-800 leading-tight mb-1 text-xs md:text-sm line-clamp-2">${product.name}</h3>
                <p class="text-indigo-600 font-extrabold text-sm">$${product.price.toFixed(2)}</p>
            </div>
        </div>
    `).join('');
}