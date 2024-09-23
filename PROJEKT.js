// Kosár tömb, amely tárolja a hozzáadott termékeket
let cart = [];

// Termékek tömb, amely tartalmazza az elérhető termékeket
let products = [
    { id: 1, name: "PlayStation 5", price: 200000 },
    { id: 2, name: "Xbox Series X", price: 180000 },
    { id: 3, name: "Nintendo Switch", price: 120000 }
];

// Termékek kosárba helyezése
function addToCart(productId) {
    let product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} hozzáadva a kosárhoz!`);
    updateCartDisplay();
}

// Keresési funkció
function searchProducts() {
    let searchTerm = document.querySelector('.search-bar input').value.toLowerCase();
    let filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );
    
    displayProducts(filteredProducts);
}

// Termékek megjelenítése
function displayProducts(productList) {
    let productContainer = document.querySelector('.products');
    productContainer.innerHTML = ""; // Előző termékek törlése

    productList.forEach(product => {
        productContainer.innerHTML += `
            <div class="product-item">
                <img src="console.jpg" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Ár: ${product.price.toLocaleString()} Ft</p>
                <button onclick="addToCart(${product.id})">Kosárba</button>
            </div>
        `;
    });
}

// Kosár tartalmának frissítése
function updateCartDisplay() {
    let cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;
}

// Az oldal betöltésekor az összes termék megjelenítése
window.onload = function() {
    displayProducts(products);
    updateCartDisplay();
};

// Keresési funkció összekapcsolása a keresés gombbal
document.querySelector('.search-bar button').addEventListener('click', searchProducts);
