// ===== DATA STORAGE =====
let products = [
  // Vegetables
  {
    id: 1,
    name: "Kangkong",
    category: "vegetables",
    price: 25,
    stock: 50,
    unit: "bundle",
    icon: "🥬",
  },
  {
    id: 2,
    name: "Pechay",
    category: "vegetables",
    price: 30,
    stock: 45,
    unit: "bundle",
    icon: "🥬",
  },
  {
    id: 3,
    name: "Sitaw",
    category: "vegetables",
    price: 40,
    stock: 35,
    unit: "bundle",
    icon: "🫘",
  },
  {
    id: 4,
    name: "Talong",
    category: "vegetables",
    price: 50,
    stock: 60,
    unit: "kg",
    icon: "🍆",
  },
  {
    id: 5,
    name: "Ampalaya",
    category: "vegetables",
    price: 60,
    stock: 30,
    unit: "kg",
    icon: "🥒",
  },
  {
    id: 6,
    name: "Kalabasa",
    category: "vegetables",
    price: 35,
    stock: 40,
    unit: "kg",
    icon: "🎃",
  },
  {
    id: 7,
    name: "Sayote",
    category: "vegetables",
    price: 45,
    stock: 55,
    unit: "kg",
    icon: "🥒",
  },
  {
    id: 8,
    name: "Kamatis",
    category: "vegetables",
    price: 80,
    stock: 70,
    unit: "kg",
    icon: "🍅",
  },

  // Fruits
  {
    id: 9,
    name: "Saging na Saba",
    category: "fruits",
    price: 60,
    stock: 100,
    unit: "kg",
    icon: "🍌",
  },
  {
    id: 10,
    name: "Mangga",
    category: "fruits",
    price: 120,
    stock: 45,
    unit: "kg",
    icon: "🥭",
  },
  {
    id: 11,
    name: "Papaya",
    category: "fruits",
    price: 50,
    stock: 35,
    unit: "kg",
    icon: "🍈",
  },
  {
    id: 12,
    name: "Pinya",
    category: "fruits",
    price: 70,
    stock: 25,
    unit: "pc",
    icon: "🍍",
  },
  {
    id: 13,
    name: "Kalamansi",
    category: "fruits",
    price: 100,
    stock: 40,
    unit: "kg",
    icon: "🍋",
  },
  {
    id: 14,
    name: "Bayabas",
    category: "fruits",
    price: 80,
    stock: 30,
    unit: "kg",
    icon: "🍐",
  },

  // Meat
  {
    id: 15,
    name: "Baboy (Kasim)",
    category: "meat",
    price: 280,
    stock: 50,
    unit: "kg",
    icon: "🥩",
  },
  {
    id: 16,
    name: "Baboy (Pigue)",
    category: "meat",
    price: 320,
    stock: 45,
    unit: "kg",
    icon: "🥩",
  },
  {
    id: 17,
    name: "Baka (Tadyang)",
    category: "meat",
    price: 380,
    stock: 30,
    unit: "kg",
    icon: "🥩",
  },
  {
    id: 18,
    name: "Baka (Bulalo)",
    category: "meat",
    price: 350,
    stock: 25,
    unit: "kg",
    icon: "🍖",
  },

  // Seafood
  {
    id: 19,
    name: "Tilapia",
    category: "seafood",
    price: 150,
    stock: 40,
    unit: "kg",
    icon: "🐟",
  },
  {
    id: 20,
    name: "Bangus",
    category: "seafood",
    price: 180,
    stock: 35,
    unit: "kg",
    icon: "🐟",
  },
  {
    id: 21,
    name: "Galunggong",
    category: "seafood",
    price: 200,
    stock: 30,
    unit: "kg",
    icon: "🐟",
  },
  {
    id: 22,
    name: "Hipon",
    category: "seafood",
    price: 400,
    stock: 20,
    unit: "kg",
    icon: "🦐",
  },
  {
    id: 23,
    name: "Pusit",
    category: "seafood",
    price: 350,
    stock: 15,
    unit: "kg",
    icon: "🦑",
  },
  {
    id: 24,
    name: "Tahong",
    category: "seafood",
    price: 120,
    stock: 25,
    unit: "kg",
    icon: "🦪",
  },

  // Poultry
  {
    id: 25,
    name: "Manok (Whole)",
    category: "poultry",
    price: 180,
    stock: 40,
    unit: "kg",
    icon: "🐔",
  },
  {
    id: 26,
    name: "Manok (Paa)",
    category: "poultry",
    price: 200,
    stock: 35,
    unit: "kg",
    icon: "🍗",
  },
  {
    id: 27,
    name: "Itlog",
    category: "poultry",
    price: 8,
    stock: 200,
    unit: "pc",
    icon: "🥚",
  },
  {
    id: 28,
    name: "Pato",
    category: "poultry",
    price: 220,
    stock: 20,
    unit: "kg",
    icon: "🦆",
  },

  // Spices
  {
    id: 29,
    name: "Bawang",
    category: "spices",
    price: 150,
    stock: 30,
    unit: "kg",
    icon: "🧄",
  },
  {
    id: 30,
    name: "Sibuyas",
    category: "spices",
    price: 100,
    stock: 40,
    unit: "kg",
    icon: "🧅",
  },
  {
    id: 31,
    name: "Luya",
    category: "spices",
    price: 120,
    stock: 25,
    unit: "kg",
    icon: "🫚",
  },
  {
    id: 32,
    name: "Sili",
    category: "spices",
    price: 80,
    stock: 20,
    unit: "kg",
    icon: "🌶️",
  },
];

let cart = [];
let transactions = [];
let currentCategory = "all";
let currentEditingProduct = null;
let currentStockProduct = null;

// Settings
let settings = {
  storeName: "Fresh Produce Market",
  taxRate: 12,
  currency: "PHP",
  lowStockThreshold: 10,
};

// ===== INITIALIZATION =====
document.addEventListener("DOMContentLoaded", () => {
  loadFromLocalStorage();
  initializeEventListeners();
  renderProducts();
  updateDateTime();
  setInterval(updateDateTime, 1000);
  updateAllStats();
});

// ===== LOCAL STORAGE =====
function loadFromLocalStorage() {
  const savedProducts = localStorage.getItem("products");
  const savedTransactions = localStorage.getItem("transactions");
  const savedSettings = localStorage.getItem("settings");

  if (savedProducts) products = JSON.parse(savedProducts);
  if (savedTransactions) transactions = JSON.parse(savedTransactions);
  if (savedSettings) settings = JSON.parse(savedSettings);
}

function saveToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(products));
  localStorage.setItem("transactions", JSON.stringify(transactions));
  localStorage.setItem("settings", JSON.stringify(settings));
}

// ===== EVENT LISTENERS =====
function initializeEventListeners() {
  // Sidebar navigation
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", () => handleNavigation(item));
  });

  // Category filters
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", () => handleCategoryFilter(btn));
  });

  // Cart actions
  document.getElementById("clear-cart").addEventListener("click", clearCart);
  document
    .getElementById("checkout-btn")
    .addEventListener("click", openCheckoutModal);

  // Product management
  document
    .getElementById("add-product-btn")
    .addEventListener("click", openProductModal);
  document
    .getElementById("product-form")
    .addEventListener("submit", handleProductSubmit);
  document
    .getElementById("cancel-form")
    .addEventListener("click", closeProductModal);

  // Modal close buttons
  document
    .getElementById("close-modal")
    .addEventListener("click", closeProductModal);
  document
    .getElementById("close-checkout")
    .addEventListener("click", closeCheckoutModal);
  document
    .getElementById("close-stock")
    .addEventListener("click", closeStockModal);

  // Checkout
  document
    .getElementById("payment-amount")
    .addEventListener("input", calculateChange);
  document
    .getElementById("complete-sale")
    .addEventListener("click", completeSale);
  document
    .getElementById("cancel-checkout")
    .addEventListener("click", closeCheckoutModal);

  // Stock update
  document
    .getElementById("stock-form")
    .addEventListener("submit", handleStockUpdate);
  document
    .getElementById("cancel-stock")
    .addEventListener("click", closeStockModal);

  // Settings
  document
    .getElementById("save-settings")
    .addEventListener("click", saveSettings);

  // Sales filters
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => handleSalesFilter(btn));
  });

  // Global search
  document
    .getElementById("global-search")
    .addEventListener("input", handleGlobalSearch);

  // Close modals on outside click
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  });
}

// ===== NAVIGATION =====
function handleNavigation(item) {
  // Update active menu item
  document
    .querySelectorAll(".menu-item")
    .forEach((i) => i.classList.remove("active"));
  item.classList.add("active");

  // Show corresponding page
  const page = item.dataset.page;
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById(`${page}-page`).classList.add("active");

  // Update header
  const titles = {
    pos: { title: "Point of Sale", subtitle: "Process customer transactions" },
    products: {
      title: "Product Management",
      subtitle: "Manage your product catalog",
    },
    inventory: {
      title: "Inventory Management",
      subtitle: "Track stock levels and inventory",
    },
    sales: {
      title: "Sales Report",
      subtitle: "View sales analytics and transactions",
    },
    settings: { title: "Settings", subtitle: "Configure system preferences" },
  };

  document.getElementById("page-title").textContent = titles[page].title;
  document.getElementById("page-subtitle").textContent = titles[page].subtitle;

  // Refresh page-specific data
  if (page === "products") renderProductsTable();
  if (page === "inventory") renderInventoryTable();
  if (page === "sales") renderSalesTable();
  if (page === "settings") loadSettings();
}

// ===== DATE & TIME =====
function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  document.getElementById("datetime").textContent = now.toLocaleDateString(
    "en-PH",
    options,
  );
}

// ===== PRODUCT RENDERING =====
function renderProducts() {
  const grid = document.getElementById("products-grid");
  const filteredProducts =
    currentCategory === "all"
      ? products
      : products.filter((p) => p.category === currentCategory);

  grid.innerHTML = filteredProducts
    .map(
      (product) => `
        <div class="product-card" onclick="addToCart(${product.id})">
            <div class="product-icon">${product.icon}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">₱${product.price.toFixed(2)}</div>
            <div class="product-stock ${getStockClass(product.stock)}">
                ${product.stock} ${product.unit} ${getStockStatus(product.stock)}
            </div>
        </div>
    `,
    )
    .join("");
}

function getStockClass(stock) {
  if (stock === 0) return "stock-out";
  if (stock <= settings.lowStockThreshold) return "stock-low";
  return "";
}

function getStockStatus(stock) {
  if (stock === 0) return "(Out of Stock)";
  if (stock <= settings.lowStockThreshold) return "(Low Stock)";
  return "";
}

function handleCategoryFilter(btn) {
  document
    .querySelectorAll(".category-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  currentCategory = btn.dataset.category;
  renderProducts();
}

function handleGlobalSearch(e) {
  const query = e.target.value.toLowerCase();
  const grid = document.getElementById("products-grid");

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query),
  );

  grid.innerHTML = filteredProducts
    .map(
      (product) => `
        <div class="product-card" onclick="addToCart(${product.id})">
            <div class="product-icon">${product.icon}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">₱${product.price.toFixed(2)}</div>
            <div class="product-stock ${getStockClass(product.stock)}">
                ${product.stock} ${product.unit} ${getStockStatus(product.stock)}
            </div>
        </div>
    `,
    )
    .join("");
}

// ===== CART MANAGEMENT =====
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);

  if (!product || product.stock === 0) {
    alert("Product is out of stock!");
    return;
  }

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    if (existingItem.quantity < product.stock) {
      existingItem.quantity++;
    } else {
      alert("Not enough stock available!");
      return;
    }
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      unit: product.unit,
    });
  }

  renderCart();
}

function renderCart() {
  const cartContainer = document.getElementById("cart-items");

  if (cart.length === 0) {
    cartContainer.innerHTML = `
            <div class="empty-cart">
                <span class="empty-icon">🛒</span>
                <p>Cart is empty</p>
            </div>
        `;
    updateCartSummary();
    return;
  }

  cartContainer.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-details">₱${item.price.toFixed(2)} × ${item.quantity} ${item.unit}</div>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                <span class="qty-display">${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑️</button>
            </div>
        </div>
    `,
    )
    .join("");

  updateCartSummary();
}

function updateQuantity(productId, change) {
  const product = products.find((p) => p.id === productId);
  const cartItem = cart.find((item) => item.id === productId);

  if (!cartItem) return;

  const newQuantity = cartItem.quantity + change;

  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }

  if (newQuantity > product.stock) {
    alert("Not enough stock available!");
    return;
  }

  cartItem.quantity = newQuantity;
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  renderCart();
}

function clearCart() {
  if (cart.length === 0) return;

  if (confirm("Are you sure you want to clear the cart?")) {
    cart = [];
    renderCart();
  }
}

function updateCartSummary() {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subtotal * (settings.taxRate / 100);
  const total = subtotal + tax;

  document.getElementById("subtotal").textContent = `₱${subtotal.toFixed(2)}`;
  document.getElementById("tax").textContent = `₱${tax.toFixed(2)}`;
  document.getElementById("total").textContent = `₱${total.toFixed(2)}`;

  const checkoutBtn = document.getElementById("checkout-btn");
  checkoutBtn.disabled = cart.length === 0;
}

// ===== CHECKOUT =====
function openCheckoutModal() {
  if (cart.length === 0) return;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subtotal * (settings.taxRate / 100);
  const total = subtotal + tax;

  document.getElementById("checkout-total").textContent =
    `₱${total.toFixed(2)}`;
  document.getElementById("payment-amount").value = "";
  document.getElementById("change-amount").textContent = "₱0.00";

  document.getElementById("checkout-modal").classList.add("active");
  document.getElementById("payment-amount").focus();
}

function closeCheckoutModal() {
  document.getElementById("checkout-modal").classList.remove("active");
}

function calculateChange() {
  const payment =
    parseFloat(document.getElementById("payment-amount").value) || 0;
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subtotal * (settings.taxRate / 100);
  const total = subtotal + tax;
  const change = payment - total;

  document.getElementById("change-amount").textContent =
    `₱${change.toFixed(2)}`;
}

function completeSale() {
  const payment =
    parseFloat(document.getElementById("payment-amount").value) || 0;
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subtotal * (settings.taxRate / 100);
  const total = subtotal + tax;

  if (payment < total) {
    alert("Insufficient payment amount!");
    return;
  }

  // Create transaction
  const transaction = {
    id: Date.now(),
    date: new Date().toISOString(),
    items: [...cart],
    subtotal: subtotal,
    tax: tax,
    total: total,
    payment: payment,
    change: payment - total,
  };

  transactions.push(transaction);

  // Update stock
  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.id);
    if (product) {
      product.stock -= item.quantity;
    }
  });

  saveToLocalStorage();

  // Clear cart
  cart = [];
  renderCart();
  renderProducts();

  closeCheckoutModal();

  alert(
    `Sale completed!\nTotal: ₱${total.toFixed(2)}\nPayment: ₱${payment.toFixed(2)}\nChange: ₱${(payment - total).toFixed(2)}`,
  );

  updateAllStats();
}

// ===== PRODUCT MANAGEMENT =====
function openProductModal(product = null) {
  currentEditingProduct = product;

  if (product) {
    document.getElementById("modal-title").textContent = "Edit Product";
    document.getElementById("product-name").value = product.name;
    document.getElementById("product-category").value = product.category;
    document.getElementById("product-price").value = product.price;
    document.getElementById("product-stock").value = product.stock;
    document.getElementById("product-unit").value = product.unit;
  } else {
    document.getElementById("modal-title").textContent = "Add New Product";
    document.getElementById("product-form").reset();
  }

  document.getElementById("product-modal").classList.add("active");
}

function closeProductModal() {
  document.getElementById("product-modal").classList.remove("active");
  currentEditingProduct = null;
}

function handleProductSubmit(e) {
  e.preventDefault();

  const productData = {
    name: document.getElementById("product-name").value,
    category: document.getElementById("product-category").value,
    price: parseFloat(document.getElementById("product-price").value),
    stock: parseInt(document.getElementById("product-stock").value),
    unit: document.getElementById("product-unit").value,
    icon: getCategoryIcon(document.getElementById("product-category").value),
  };

  if (currentEditingProduct) {
    // Update existing product
    Object.assign(currentEditingProduct, productData);
  } else {
    // Add new product
    productData.id = Date.now();
    products.push(productData);
  }

  saveToLocalStorage();
  renderProducts();
  renderProductsTable();
  closeProductModal();
  updateAllStats();
}

function getCategoryIcon(category) {
  const icons = {
    vegetables: "🥬",
    fruits: "🍎",
    meat: "🥩",
    seafood: "🐟",
    poultry: "🐔",
    spices: "🌶️",
  };
  return icons[category] || "📦";
}

function renderProductsTable() {
  const tbody = document.getElementById("products-table-body");

  tbody.innerHTML = products
    .map(
      (product) => `
        <tr>
            <td>${product.icon} ${product.name}</td>
            <td>${capitalizeFirst(product.category)}</td>
            <td>₱${product.price.toFixed(2)}</td>
            <td>${product.stock}</td>
            <td>${product.unit}</td>
            <td>
                <button class="action-btn edit-btn" onclick='editProduct(${JSON.stringify(product)})'>Edit</button>
                <button class="action-btn delete-btn" onclick="deleteProduct(${product.id})">Delete</button>
            </td>
        </tr>
    `,
    )
    .join("");
}

function editProduct(product) {
  const actualProduct = products.find((p) => p.id === product.id);
  openProductModal(actualProduct);
}

function deleteProduct(productId) {
  if (confirm("Are you sure you want to delete this product?")) {
    products = products.filter((p) => p.id !== productId);
    saveToLocalStorage();
    renderProducts();
    renderProductsTable();
    updateAllStats();
  }
}

// ===== INVENTORY MANAGEMENT =====
function renderInventoryTable() {
  const tbody = document.getElementById("inventory-table-body");

  tbody.innerHTML = products
    .map((product) => {
      const status =
        product.stock === 0
          ? "Out of Stock"
          : product.stock <= settings.lowStockThreshold
            ? "Low Stock"
            : "Good";
      const statusClass =
        product.stock === 0
          ? "status-out"
          : product.stock <= settings.lowStockThreshold
            ? "status-low"
            : "status-good";

      return `
            <tr>
                <td>${product.icon} ${product.name}</td>
                <td>${capitalizeFirst(product.category)}</td>
                <td>${product.stock}</td>
                <td>${product.unit}</td>
                <td><span class="status-badge ${statusClass}">${status}</span></td>
                <td>
                    <button class="action-btn stock-btn" onclick='openStockModal(${JSON.stringify(product)})'>Update Stock</button>
                </td>
            </tr>
        `;
    })
    .join("");

  updateInventoryStats();
}

function updateInventoryStats() {
  const totalProducts = products.length;
  const lowStock = products.filter(
    (p) => p.stock > 0 && p.stock <= settings.lowStockThreshold,
  ).length;
  const outOfStock = products.filter((p) => p.stock === 0).length;
  const inventoryValue = products.reduce(
    (sum, p) => sum + p.price * p.stock,
    0,
  );

  document.getElementById("total-products").textContent = totalProducts;
  document.getElementById("low-stock").textContent = lowStock;
  document.getElementById("out-of-stock").textContent = outOfStock;
  document.getElementById("inventory-value").textContent =
    `₱${inventoryValue.toFixed(2)}`;
}

function openStockModal(product) {
  currentStockProduct = products.find((p) => p.id === product.id);
  document.getElementById("stock-product-name").textContent =
    `Update stock for: ${product.name}`;
  document.getElementById("stock-quantity").value = product.stock;
  document.getElementById("stock-modal").classList.add("active");
}

function closeStockModal() {
  document.getElementById("stock-modal").classList.remove("active");
  currentStockProduct = null;
}

function handleStockUpdate(e) {
  e.preventDefault();

  if (!currentStockProduct) return;

  const newStock = parseInt(document.getElementById("stock-quantity").value);
  currentStockProduct.stock = newStock;

  saveToLocalStorage();
  renderProducts();
  renderInventoryTable();
  closeStockModal();
  updateAllStats();
}

// ===== SALES REPORTING =====
function renderSalesTable(period = "today") {
  const tbody = document.getElementById("sales-table-body");
  const filteredTransactions = filterTransactionsByPeriod(period);

  if (filteredTransactions.length === 0) {
    tbody.innerHTML =
      '<tr><td colspan="5" style="text-align: center; padding: 2rem; color: var(--gray);">No transactions found</td></tr>';
    return;
  }

  tbody.innerHTML = filteredTransactions
    .map((transaction) => {
      const date = new Date(transaction.date);
      const formattedDate = date.toLocaleDateString("en-PH", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      return `
            <tr>
                <td>#${transaction.id}</td>
                <td>${formattedDate}</td>
                <td>${transaction.items.length} items</td>
                <td>₱${transaction.total.toFixed(2)}</td>
                <td>
                    <button class="action-btn edit-btn" onclick="viewTransactionDetails(${transaction.id})">View</button>
                </td>
            </tr>
        `;
    })
    .join("");

  updateSalesStats(filteredTransactions);
}

function filterTransactionsByPeriod(period) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  switch (period) {
    case "today":
      return transactions.filter((t) => new Date(t.date) >= today);
    case "week":
      const weekAgo = new Date(today);
      weekAgo.setDate(weekAgo.getDate() - 7);
      return transactions.filter((t) => new Date(t.date) >= weekAgo);
    case "month":
      const monthAgo = new Date(today);
      monthAgo.setMonth(monthAgo.getMonth() - 1);
      return transactions.filter((t) => new Date(t.date) >= monthAgo);
    case "all":
    default:
      return transactions;
  }
}

function updateSalesStats(filteredTransactions) {
  const totalSales = filteredTransactions.reduce((sum, t) => sum + t.total, 0);
  const totalTransactions = filteredTransactions.length;
  const avgTransaction =
    totalTransactions > 0 ? totalSales / totalTransactions : 0;

  // Find top product
  const productSales = {};
  filteredTransactions.forEach((t) => {
    t.items.forEach((item) => {
      if (!productSales[item.name]) {
        productSales[item.name] = 0;
      }
      productSales[item.name] += item.quantity;
    });
  });

  const topProduct =
    Object.keys(productSales).length > 0
      ? Object.keys(productSales).reduce((a, b) =>
          productSales[a] > productSales[b] ? a : b,
        )
      : "-";

  document.getElementById("total-sales").textContent =
    `₱${totalSales.toFixed(2)}`;
  document.getElementById("total-transactions").textContent = totalTransactions;
  document.getElementById("avg-transaction").textContent =
    `₱${avgTransaction.toFixed(2)}`;
  document.getElementById("top-product").textContent = topProduct;
}

function handleSalesFilter(btn) {
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderSalesTable(btn.dataset.period);
}

function viewTransactionDetails(transactionId) {
  const transaction = transactions.find((t) => t.id === transactionId);
  if (!transaction) return;

  const itemsList = transaction.items
    .map(
      (item) =>
        `${item.name} - ${item.quantity} ${item.unit} × ₱${item.price.toFixed(2)} = ₱${(item.quantity * item.price).toFixed(2)}`,
    )
    .join("\n");

  alert(
    `Transaction #${transaction.id}\n\nItems:\n${itemsList}\n\nSubtotal: ₱${transaction.subtotal.toFixed(2)}\nTax: ₱${transaction.tax.toFixed(2)}\nTotal: ₱${transaction.total.toFixed(2)}\nPayment: ₱${transaction.payment.toFixed(2)}\nChange: ₱${transaction.change.toFixed(2)}`,
  );
}

// ===== SETTINGS =====
function loadSettings() {
  document.getElementById("store-name").value = settings.storeName;
  document.getElementById("tax-rate").value = settings.taxRate;
  document.getElementById("currency").value = settings.currency;
  document.getElementById("low-stock-threshold").value =
    settings.lowStockThreshold;
}

function saveSettings() {
  settings.storeName = document.getElementById("store-name").value;
  settings.taxRate = parseFloat(document.getElementById("tax-rate").value);
  settings.currency = document.getElementById("currency").value;
  settings.lowStockThreshold = parseInt(
    document.getElementById("low-stock-threshold").value,
  );

  saveToLocalStorage();
  updateCartSummary();
  renderProducts();
  renderInventoryTable();

  alert("Settings saved successfully!");
}

// ===== UTILITY FUNCTIONS =====
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function updateAllStats() {
  updateInventoryStats();
  updateSalesStats(transactions);
}
