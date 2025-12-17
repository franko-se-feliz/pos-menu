// Estado del carrito
let cart = [];
let orderCount = 1;

// Agregar producto al carrito
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(c => c.id === id);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    
    updateCartUI();
    saveCartToStorage();
}

// Cambiar cantidad de un producto
function changeQty(id, delta) {
    const itemIndex = cart.findIndex(c => c.id === id);
    if (itemIndex === -1) return;

    cart[itemIndex].qty += delta;

    if (cart[itemIndex].qty <= 0) {
        cart.splice(itemIndex, 1);
    }
    updateCartUI();
    saveCartToStorage();
}

// Limpiar carrito
function clearCart() {
    if(confirm('¿Estás seguro de borrar la orden actual?')) {
        cart = [];
        updateCartUI();
        saveCartToStorage();
    }
}

// Actualizar UI del carrito
function updateCartUI() {
    const container = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-gray-400 opacity-50">
                <span class="text-6xl mb-2">🛒</span>
                <p>Orden vacía</p>
            </div>`;
    } else {
        container.innerHTML = cart.map((item, index) => `
            <div class="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100 animate-fadeIn">
                <div class="flex-1">
                    <h4 class="font-bold text-sm text-gray-800">${item.name}</h4>
                    <p class="text-xs text-gray-500">$${item.price.toFixed(2)} x ${item.qty}</p>
                </div>
                <div class="flex items-center gap-2">
                    <p class="font-bold text-gray-800">$${(item.price * item.qty).toFixed(2)}</p>
                    <div class="flex flex-col gap-1">
                        <button onclick="changeQty(${item.id}, 1)" class="w-6 h-6 bg-gray-100 rounded text-xs hover:bg-green-200 text-green-700 font-bold border border-gray-300">+</button>
                        <button onclick="changeQty(${item.id}, -1)" class="w-6 h-6 bg-gray-100 rounded text-xs hover:bg-red-200 text-red-700 font-bold border border-gray-300">-</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Calcular totales
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const tax = subtotal * 0.16;
    const total = subtotal + tax;

    document.getElementById('subtotal-display').innerText = formatMoney(subtotal);
    document.getElementById('tax-display').innerText = formatMoney(tax);
    document.getElementById('total-display').innerText = formatMoney(total);
    document.getElementById('btn-total').innerText = formatMoney(total);
    document.getElementById('modal-total').innerText = formatMoney(total);
}

// Proceso de pago
function openCheckout() {
    if (cart.length === 0) {
        alert("El carrito está vacío.");
        return;
    }
    document.getElementById('checkout-modal').classList.remove('hidden');
    document.getElementById('checkout-modal').classList.add('flex');
}

function closeCheckout() {
    document.getElementById('checkout-modal').classList.add('hidden');
    document.getElementById('checkout-modal').classList.remove('flex');
}

function processPayment(method) {
    const total = document.getElementById('total-display').innerText;
    alert(`✅ PAGO APROBADO\n\nMétodo: ${method}\nTotal: ${total}\n\n¡Imprimiendo recibo!`);
    
    cart = [];
    orderCount++;
    document.getElementById('order-id').innerText = orderCount.toString().padStart(3, '0');
    closeCheckout();
    updateCartUI();
    saveCartToStorage();
}

// Formatear dinero
function formatMoney(amount) {
    return '$' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Guardar carrito en localStorage
function saveCartToStorage() {
    localStorage.setItem('franko-pos-cart', JSON.stringify(cart));
    localStorage.setItem('franko-pos-order-count', orderCount);
}

// Cargar carrito desde localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('franko-pos-cart');
    const savedOrderCount = localStorage.getItem('franko-pos-order-count');
    
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
    
    if (savedOrderCount) {
        orderCount = parseInt(savedOrderCount);
        document.getElementById('order-id').innerText = orderCount.toString().padStart(3, '0');
    }
}