// ===== DATA STORAGE =====
const defaultProducts = [
  // Vegetables
  { id: 1, name: "Kangkong", category: "vegetables", price: 25, stock: 50, unit: "bundle" },
  { id: 2, name: "Pechay", category: "vegetables", price: 30, stock: 45, unit: "bundle" },
  { id: 3, name: "Sitaw", category: "vegetables", price: 40, stock: 35, unit: "bundle" },
  { id: 4, name: "Talong", category: "vegetables", price: 50, stock: 60, unit: "kg" },
  { id: 5, name: "Ampalaya", category: "vegetables", price: 60, stock: 30, unit: "kg" },
  { id: 6, name: "Kalabasa", category: "vegetables", price: 35, stock: 40, unit: "kg" },
  { id: 7, name: "Sayote", category: "vegetables", price: 45, stock: 55, unit: "kg" },
  { id: 8, name: "Kamatis", category: "vegetables", price: 80, stock: 70, unit: "kg" },

  // Fruits
  { id: 9, name: "Saging na Saba", category: "fruits", price: 60, stock: 100, unit: "kg" },
  { id: 10, name: "Mangga", category: "fruits", price: 120, stock: 45, unit: "kg" },
  { id: 11, name: "Papaya", category: "fruits", price: 50, stock: 35, unit: "kg" },
  { id: 12, name: "Pinya", category: "fruits", price: 70, stock: 25, unit: "pc" },
  { id: 13, name: "Kalamansi", category: "fruits", price: 100, stock: 40, unit: "kg" },
  { id: 14, name: "Bayabas", category: "fruits", price: 80, stock: 30, unit: "kg" },

  // Meat
  { id: 15, name: "Baboy (Kasim)", category: "meat", price: 280, stock: 50, unit: "kg" },
  { id: 16, name: "Baboy (Pigue)", category: "meat", price: 320, stock: 45, unit: "kg" },
  { id: 17, name: "Baka (Tadyang)", category: "meat", price: 380, stock: 30, unit: "kg" },
  { id: 18, name: "Baka (Bulalo)", category: "meat", price: 350, stock: 25, unit: "kg" },

  // Seafood
  { id: 19, name: "Tilapia", category: "seafood", price: 150, stock: 40, unit: "kg" },
  { id: 20, name: "Bangus", category: "seafood", price: 180, stock: 35, unit: "kg" },
  { id: 21, name: "Galunggong", category: "seafood", price: 200, stock: 30, unit: "kg" },
  { id: 22, name: "Hipon", category: "seafood", price: 400, stock: 20, unit: "kg" },
  { id: 23, name: "Pusit", category: "seafood", price: 350, stock: 15, unit: "kg" },
  { id: 24, name: "Tahong", category: "seafood", price: 120, stock: 25, unit: "kg" },

  // Poultry
  { id: 25, name: "Manok (Whole)", category: "poultry", price: 180, stock: 40, unit: "kg" },
  { id: 26, name: "Manok (Paa)", category: "poultry", price: 200, stock: 35, unit: "kg" },
  { id: 27, name: "Itlog", category: "poultry", price: 8, stock: 200, unit: "pc" },
  { id: 28, name: "Pato", category: "poultry", price: 220, stock: 20, unit: "kg" },

  // Spices
  { id: 29, name: "Bawang", category: "spices", price: 150, stock: 30, unit: "kg" },
  { id: 30, name: "Sibuyas", category: "spices", price: 100, stock: 40, unit: "kg" },
  { id: 31, name: "Luya", category: "spices", price: 120, stock: 25, unit: "kg" },
  { id: 32, name: "Sili", category: "spices", price: 80, stock: 20, unit: "kg" },
];

let products = [...defaultProducts];
let cart = [];
let transactions = [];
let currentCategory = "all";
let currentPage = "pos";
let currentEditingProduct = null;
let currentStockProduct = null;

// Settings
let settings = {
  storeName: "Fresh Produce Market",
  taxRate: 12,
  currency: "PHP",
  lowStockThreshold: 10,
};

// SVG Icon Definitions (Clean vector icons, no emojis)
function getCategorySvg(category) {
  const svgs = {
    vegetables: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>`,
    fruits: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>`,
    meat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 5-3-3"/><path d="m2 22 5.5-1.5L21.3 6.7a2.83 2.83 0 0 0 0-4 2.83 2.83 0 0 0-4 0L3.5 16.5 2 22z"/><circle cx="8" cy="16" r="1.5"/></svg>`,
    seafood: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.46-3.44 6-7 6s-7.56-2.54-8.5-6Z"/><path d="M18 12v.5"/><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"/><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 3.5 0 5 .5 1 .5 2 0 3-1 1.5-1 3.5 0 5 2.85-.47 4.27-2.5 4.27-5.17"/></svg>`,
    poultry: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v2"/><path d="M14 16a6 6 0 0 1-12 0c0-4 3-7 6-7 1.5 0 3 .5 4 1.5l5.5-5.5a2 2 0 0 1 2.83 0l.67.67a2 2 0 0 1 0 2.83L15.5 16"/><circle cx="7" cy="14" r="1"/></svg>`,
    spices: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  };
  return svgs[category] || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`;
}

function getProductIconMarkup(product, isSmall = false) {
  const cat = (product.category || "vegetables").toLowerCase();
  const sizeClass = isSmall ? "product-icon-small" : "product-icon-badge";
  return `
    <span class="${sizeClass} cat-${cat}" aria-hidden="true">
      ${getCategorySvg(cat)}
    </span>
  `;
}

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

  if (savedProducts) {
    try {
      const parsed = JSON.parse(savedProducts);
      if (Array.isArray(parsed) && parsed.length > 0) {
        products = parsed.map((p) => {
          const { icon, ...rest } = p;
          return {
            ...rest,
            id: Number(p.id),
            stock: Number(p.stock) || 0,
            price: Number(p.price) || 0,
          };
        });
      }
    } catch (e) {
      console.error("Failed to load products from storage", e);
    }
  }

  if (savedTransactions) {
    try {
      transactions = JSON.parse(savedTransactions);
    } catch (e) {
      console.error("Failed to load transactions", e);
    }
  }

  if (savedSettings) {
    try {
      settings = JSON.parse(savedSettings);
    } catch (e) {
      console.error("Failed to load settings", e);
    }
  }
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
    .addEventListener("click", () => openProductModal());
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

  // Checkout payment handlers
  document
    .getElementById("payment-amount")
    .addEventListener("input", calculateChange);
  document
    .getElementById("complete-sale")
    .addEventListener("click", completeSale);
  document
    .getElementById("cancel-checkout")
    .addEventListener("click", closeCheckoutModal);

  // Quick cash buttons
  const exactCashBtn = document.getElementById("exact-cash-btn");
  if (exactCashBtn) {
    exactCashBtn.addEventListener("click", () => {
      const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const tax = subtotal * (settings.taxRate / 100);
      const total = subtotal + tax;
      const input = document.getElementById("payment-amount");
      if (input) {
        input.value = total.toFixed(2);
        calculateChange();
      }
    });
  }

  document.querySelectorAll(".quick-preset").forEach((btn) => {
    btn.addEventListener("click", () => {
      const amount = parseFloat(btn.dataset.cash);
      const input = document.getElementById("payment-amount");
      if (input) {
        input.value = amount.toFixed(2);
        calculateChange();
      }
    });
  });

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

  // Global search input & clear button
  const searchInput = document.getElementById("global-search");
  const clearBtn = document.getElementById("search-clear-btn");

  if (searchInput) {
    searchInput.addEventListener("input", handleGlobalSearch);
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        clearBtn.classList.remove("visible");
        searchInput.focus();
        triggerSearch("");
      }
    });
  }

  // Mobile Floating Cart & Backdrop
  document
    .getElementById("floating-cart-btn")
    .addEventListener("click", openMobileCart);
  document
    .getElementById("close-cart-btn")
    .addEventListener("click", closeMobileCart);
  
  const backdrop = document.getElementById("cart-backdrop");
  if (backdrop) {
    backdrop.addEventListener("click", closeMobileCart);
  }

  // Close modals on outside click
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  });
}

// ===== MOBILE CART HELPERS =====
function openMobileCart() {
  const cartSection = document.getElementById("cart-section");
  const backdrop = document.getElementById("cart-backdrop");
  cartSection.classList.add("active");
  if (backdrop) backdrop.classList.add("active");
  document.body.classList.add("cart-drawer-open");
}

function closeMobileCart() {
  const cartSection = document.getElementById("cart-section");
  const backdrop = document.getElementById("cart-backdrop");
  cartSection.classList.remove("active");
  if (backdrop) backdrop.classList.remove("active");
  document.body.classList.remove("cart-drawer-open");
}

function toggleCart() {
  const cartSection = document.getElementById("cart-section");
  if (cartSection.classList.contains("active")) {
    closeMobileCart();
  } else {
    openMobileCart();
  }
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
  currentPage = page;

  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  
  const targetPage = document.getElementById(`${page}-page`);
  if (targetPage) {
    targetPage.classList.add("active");
  }

  // Close mobile cart if moving away from POS
  if (page !== "pos") {
    closeMobileCart();
  }

  // Update header titles and dynamic search placeholder
  const pageDetails = {
    pos: {
      title: "Point of Sale",
      subtitle: "Process customer transactions",
      placeholder: "Search products in POS...",
    },
    products: {
      title: "Product Management",
      subtitle: "Manage your product catalog",
      placeholder: "Search product catalog...",
    },
    inventory: {
      title: "Inventory Management",
      subtitle: "Track stock levels and inventory",
      placeholder: "Search inventory (name, category, status)...",
    },
    sales: {
      title: "Sales Report",
      subtitle: "View sales analytics and transactions",
      placeholder: "Search transactions or products...",
    },
    settings: {
      title: "Settings",
      subtitle: "Configure system preferences",
      placeholder: "Search settings...",
    },
  };

  const currentDetails = pageDetails[page];
  if (currentDetails) {
    document.getElementById("page-title").textContent = currentDetails.title;
    document.getElementById("page-subtitle").textContent = currentDetails.subtitle;
    const searchInput = document.getElementById("global-search");
    if (searchInput) {
      searchInput.placeholder = currentDetails.placeholder;
    }
  }

  // Scroll main container to top
  window.scrollTo({ top: 0, behavior: "smooth" });
  const mainContent = document.querySelector(".main-content");
  if (mainContent) mainContent.scrollTop = 0;

  // Re-run active view with whatever search query is currently entered
  const currentQuery = getActiveSearchQuery();
  if (page === "pos") renderProducts(currentQuery);
  if (page === "products") renderProductsTable(currentQuery);
  if (page === "inventory") renderInventoryTable(currentQuery);
  if (page === "sales") renderSalesTable("today", currentQuery);
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
  const elem = document.getElementById("datetime");
  if (elem) {
    elem.textContent = now.toLocaleDateString("en-PH", options);
  }
}

// ===== UNIFIED SEARCH ENGINE =====
function getActiveSearchQuery() {
  const searchInput = document.getElementById("global-search");
  return searchInput ? searchInput.value.toLowerCase().trim() : "";
}

function handleGlobalSearch(e) {
  const query = e.target.value.toLowerCase().trim();
  const clearBtn = document.getElementById("search-clear-btn");

  if (clearBtn) {
    if (query.length > 0) {
      clearBtn.classList.add("visible");
    } else {
      clearBtn.classList.remove("visible");
    }
  }

  triggerSearch(query);
}

function triggerSearch(query = null) {
  const q = query !== null ? query : getActiveSearchQuery();

  if (currentPage === "pos") {
    renderProducts(q);
  } else if (currentPage === "products") {
    renderProductsTable(q);
  } else if (currentPage === "inventory") {
    renderInventoryTable(q);
  } else if (currentPage === "sales") {
    const activeFilterBtn = document.querySelector(".filter-btn.active");
    const period = activeFilterBtn ? activeFilterBtn.dataset.period : "today";
    renderSalesTable(period, q);
  }
}

// ===== PRODUCT RENDERING (POINT OF SALE) =====
function renderProducts(searchQuery = null) {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  const query = searchQuery !== null ? searchQuery : getActiveSearchQuery();

  let filtered = products;

  // Apply category filter
  if (currentCategory !== "all") {
    filtered = filtered.filter((p) => p.category === currentCategory);
  }

  // Apply search query filter
  if (query) {
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.unit.toLowerCase().includes(query),
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-products-msg">
        <p>${query ? `No products match "${query}"` : "No products found in this category."}</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map(
      (product) => `
        <div class="product-card ${product.stock <= 0 ? "is-out-of-stock" : ""}" onclick="addToCart(${product.id})" role="button" tabindex="0" aria-label="Add ${product.name} to cart">
          <div class="product-icon-wrap">
            ${getProductIconMarkup(product)}
          </div>
          <div class="product-info-wrap">
            <div class="product-name" title="${product.name}">${product.name}</div>
            <div class="product-price">₱${product.price.toFixed(2)}</div>
            <div class="product-stock ${getStockClass(product.stock)}">
              ${product.stock} ${product.unit} ${getStockStatus(product.stock)}
            </div>
          </div>
        </div>
      `,
    )
    .join("");
}

function getStockClass(stock) {
  if (stock <= 0) return "stock-out";
  if (stock <= settings.lowStockThreshold) return "stock-low";
  return "";
}

function getStockStatus(stock) {
  if (stock <= 0) return "(Out of Stock)";
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

// ===== CART MANAGEMENT =====
function addToCart(productId) {
  const product = products.find((p) => Number(p.id) === Number(productId));

  if (!product) return;

  if (product.stock <= 0) {
    alert(`Out of stock: ${product.name} has 0 ${product.unit} remaining.`);
    return;
  }

  const existingItem = cart.find((item) => Number(item.id) === Number(productId));

  if (existingItem) {
    if (existingItem.quantity < product.stock) {
      existingItem.quantity++;
    } else {
      alert(`Only ${product.stock} ${product.unit} of ${product.name} available in stock.`);
      return;
    }
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      quantity: 1,
      unit: product.unit,
    });
  }

  renderCart();

  // Gentle pulse feedback on mobile cart floating icon
  const badge = document.getElementById("cart-count");
  if (badge) {
    badge.classList.remove("pulse");
    void badge.offsetWidth;
    badge.classList.add("pulse");
  }
}

function renderCart() {
  const cartContainer = document.getElementById("cart-items");
  if (!cartContainer) return;

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="empty-cart">
        <span class="empty-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
          </svg>
        </span>
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
            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)" aria-label="Decrease quantity">−</button>
            <span class="qty-display">${item.quantity}</span>
            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)" aria-label="Increase quantity">+</button>
            <button class="remove-btn" onclick="removeFromCart(${item.id})" aria-label="Remove item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>
              </svg>
            </button>
          </div>
        </div>
      `,
    )
    .join("");

  updateCartSummary();
}

function updateQuantity(productId, change) {
  const product = products.find((p) => Number(p.id) === Number(productId));
  const cartItem = cart.find((item) => Number(item.id) === Number(productId));

  if (!cartItem) return;

  const newQuantity = cartItem.quantity + change;

  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }

  if (product && newQuantity > product.stock) {
    alert(`Cannot add more than ${product.stock} ${product.unit} (current stock).`);
    return;
  }

  cartItem.quantity = newQuantity;
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => Number(item.id) !== Number(productId));
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

  const subtotalEl = document.getElementById("subtotal");
  const taxEl = document.getElementById("tax");
  const totalEl = document.getElementById("total");
  const checkoutBtn = document.getElementById("checkout-btn");
  const cartCountEl = document.getElementById("cart-count");

  if (subtotalEl) subtotalEl.textContent = `₱${subtotal.toFixed(2)}`;
  if (taxEl) taxEl.textContent = `₱${tax.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `₱${total.toFixed(2)}`;
  if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;

  // Update cart count badge
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCountEl) cartCountEl.textContent = totalItems;
}

// ===== CHECKOUT & STOCK DEDUCTION =====
function openCheckoutModal() {
  if (cart.length === 0) return;

  // Verify stock before opening modal
  for (const item of cart) {
    const product = products.find((p) => Number(p.id) === Number(item.id));
    if (!product || product.stock < item.quantity) {
      alert(`Cannot checkout: Insufficient stock for ${item.name}. Available: ${product ? product.stock : 0} ${item.unit}`);
      return;
    }
  }

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subtotal * (settings.taxRate / 100);
  const total = subtotal + tax;

  document.getElementById("checkout-total").textContent = `₱${total.toFixed(2)}`;
  
  // Pre-fill exact payment amount so user can immediately complete sale
  const paymentInput = document.getElementById("payment-amount");
  paymentInput.value = total.toFixed(2);
  calculateChange();

  document.getElementById("checkout-modal").classList.add("active");
  paymentInput.select();
}

function closeCheckoutModal() {
  document.getElementById("checkout-modal").classList.remove("active");
}

function calculateChange() {
  const paymentInput = document.getElementById("payment-amount");
  const payment = parseFloat(paymentInput.value) || 0;
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subtotal * (settings.taxRate / 100);
  const total = subtotal + tax;
  const change = payment - total;

  const changeDisplay = document.getElementById("change-amount");
  if (changeDisplay) {
    changeDisplay.textContent = `₱${Math.max(0, change).toFixed(2)}`;
    changeDisplay.style.color = change < 0 ? "var(--danger)" : "var(--forest-green)";
  }
}

function completeSale() {
  if (cart.length === 0) {
    alert("Cart is empty.");
    return;
  }

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subtotal * (settings.taxRate / 100);
  const total = subtotal + tax;

  const paymentInput = document.getElementById("payment-amount");
  let paymentVal = paymentInput.value.trim();
  let payment = paymentVal === "" ? total : parseFloat(paymentVal);

  if (isNaN(payment) || payment < total) {
    alert(`Insufficient payment amount. Total is ₱${total.toFixed(2)}.`);
    paymentInput.focus();
    return;
  }

  // Double-check stock availability before deduction
  for (const item of cart) {
    const product = products.find((p) => Number(p.id) === Number(item.id));
    if (!product || product.stock < item.quantity) {
      alert(`Insufficient stock for ${item.name}. Remaining available: ${product ? product.stock : 0} ${item.unit}.`);
      return;
    }
  }

  // DEDUCT STOCK ACCORDING TO ITEMS CHECKED OUT
  const stockDeductionSummary = [];
  cart.forEach((item) => {
    const product = products.find((p) => Number(p.id) === Number(item.id));
    if (product) {
      const initialStock = product.stock;
      product.stock = Math.max(0, product.stock - item.quantity);
      stockDeductionSummary.push(`- ${product.name}: ${initialStock} -> ${product.stock} ${product.unit} (sold ${item.quantity})`);
    }
  });

  // Create & record transaction
  const transaction = {
    id: Date.now(),
    date: new Date().toISOString(),
    items: [...cart],
    subtotal: subtotal,
    tax: tax,
    total: total,
    payment: payment,
    change: Math.max(0, payment - total),
  };
  transactions.unshift(transaction);

  // Persist updated stocks and transaction to localStorage
  saveToLocalStorage();

  // Clear cart
  cart = [];
  renderCart();

  // Refresh all screens so reduced stocks are immediately visible
  renderProducts();
  renderProductsTable();
  renderInventoryTable();
  renderSalesTable();
  updateAllStats();

  closeCheckoutModal();
  closeMobileCart();

  alert(
    `Sale Completed Successfully!\nTotal: ₱${total.toFixed(2)}\nPayment: ₱${payment.toFixed(2)}\nChange: ₱${(payment - total).toFixed(2)}\n\nStock Deducted:\n${stockDeductionSummary.join("\n")}`,
  );
}

// ===== PRODUCT MANAGEMENT (PRODUCTS PAGE) =====
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
    name: document.getElementById("product-name").value.trim(),
    category: document.getElementById("product-category").value,
    price: parseFloat(document.getElementById("product-price").value),
    stock: parseInt(document.getElementById("product-stock").value),
    unit: document.getElementById("product-unit").value,
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
  renderInventoryTable();
  closeProductModal();
  updateAllStats();
}

function renderProductsTable(searchQuery = null) {
  const tbody = document.getElementById("products-table-body");
  if (!tbody) return;

  const query = searchQuery !== null ? searchQuery : getActiveSearchQuery();

  let filtered = products;

  if (query) {
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.unit.toLowerCase().includes(query),
    );
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 2rem; color: var(--gray);">${query ? `No products match "${query}"` : "No products found"}</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered
    .map(
      (product) => `
        <tr>
          <td>
            <div class="table-product-cell">
              ${getProductIconMarkup(product, true)}
              <span class="table-product-name">${product.name}</span>
            </div>
          </td>
          <td><span class="category-pill cat-${product.category}">${capitalizeFirst(product.category)}</span></td>
          <td>₱${product.price.toFixed(2)}</td>
          <td><strong>${product.stock}</strong></td>
          <td>${product.unit}</td>
          <td>
            <div class="table-actions">
              <button class="action-btn edit-btn" onclick='editProduct(${JSON.stringify(product)})'>Edit</button>
              <button class="action-btn delete-btn" onclick="deleteProduct(${product.id})">Delete</button>
            </div>
          </td>
        </tr>
      `,
    )
    .join("");
}

function editProduct(product) {
  const actualProduct = products.find((p) => Number(p.id) === Number(product.id));
  openProductModal(actualProduct);
}

function deleteProduct(productId) {
  if (confirm("Are you sure you want to delete this product?")) {
    products = products.filter((p) => Number(p.id) !== Number(productId));
    saveToLocalStorage();
    renderProducts();
    renderProductsTable();
    renderInventoryTable();
    updateAllStats();
  }
}

// ===== INVENTORY MANAGEMENT (INVENTORY PAGE) =====
function renderInventoryTable(searchQuery = null) {
  const tbody = document.getElementById("inventory-table-body");
  if (!tbody) return;

  const query = searchQuery !== null ? searchQuery : getActiveSearchQuery();

  const mapped = products.map((product) => {
    const status =
      product.stock <= 0
        ? "Out of Stock"
        : product.stock <= settings.lowStockThreshold
          ? "Low Stock"
          : "Good";
    const statusClass =
      product.stock <= 0
        ? "status-out"
        : product.stock <= settings.lowStockThreshold
          ? "status-low"
          : "status-good";
    return { ...product, status, statusClass };
  });

  let filtered = mapped;

  if (query) {
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.unit.toLowerCase().includes(query) ||
        p.status.toLowerCase().includes(query),
    );
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 2rem; color: var(--gray);">${query ? `No inventory items match "${query}"` : "No inventory items found"}</td></tr>`;
    updateInventoryStats();
    return;
  }

  tbody.innerHTML = filtered
    .map(
      (product) => `
        <tr>
          <td>
            <div class="table-product-cell">
              ${getProductIconMarkup(product, true)}
              <span class="table-product-name">${product.name}</span>
            </div>
          </td>
          <td><span class="category-pill cat-${product.category}">${capitalizeFirst(product.category)}</span></td>
          <td><strong>${product.stock}</strong></td>
          <td>${product.unit}</td>
          <td><span class="status-badge ${product.statusClass}">${product.status}</span></td>
          <td>
            <button class="action-btn stock-btn" onclick='openStockModal(${JSON.stringify(product)})'>Update Stock</button>
          </td>
        </tr>
      `,
    )
    .join("");

  updateInventoryStats();
}

function updateInventoryStats() {
  const totalProducts = products.length;
  const lowStock = products.filter(
    (p) => p.stock > 0 && p.stock <= settings.lowStockThreshold,
  ).length;
  const outOfStock = products.filter((p) => p.stock <= 0).length;
  const inventoryValue = products.reduce(
    (sum, p) => sum + p.price * p.stock,
    0,
  );

  const totalEl = document.getElementById("total-products");
  const lowEl = document.getElementById("low-stock");
  const outEl = document.getElementById("out-of-stock");
  const valEl = document.getElementById("inventory-value");

  if (totalEl) totalEl.textContent = totalProducts;
  if (lowEl) lowEl.textContent = lowStock;
  if (outEl) outEl.textContent = outOfStock;
  if (valEl) valEl.textContent = `₱${inventoryValue.toFixed(2)}`;
}

function openStockModal(product) {
  currentStockProduct = products.find((p) => Number(p.id) === Number(product.id));
  document.getElementById("stock-product-name").textContent = `Product: ${product.name}`;
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
  currentStockProduct.stock = Math.max(0, newStock);

  saveToLocalStorage();
  renderProducts();
  renderProductsTable();
  renderInventoryTable();
  closeStockModal();
  updateAllStats();
}

// ===== SALES REPORTING =====
function renderSalesTable(period = "today", searchQuery = null) {
  const tbody = document.getElementById("sales-table-body");
  if (!tbody) return;

  let filteredTransactions = filterTransactionsByPeriod(period);
  const query = searchQuery !== null ? searchQuery : getActiveSearchQuery();

  if (query && currentPage === "sales") {
    filteredTransactions = filteredTransactions.filter(
      (t) =>
        t.id.toString().includes(query) ||
        t.items.some((item) => item.name.toLowerCase().includes(query)),
    );
  }

  if (filteredTransactions.length === 0) {
    tbody.innerHTML =
      `<tr><td colspan="5" style="text-align: center; padding: 2rem; color: var(--gray);">${query ? `No transactions match "${query}"` : "No transactions found"}</td></tr>`;
    updateSalesStats(filteredTransactions);
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
          <td><span class="tx-id">#${transaction.id}</span></td>
          <td>${formattedDate}</td>
          <td>${transaction.items.length} items</td>
          <td><strong>₱${transaction.total.toFixed(2)}</strong></td>
          <td>
            <button class="action-btn edit-btn" onclick="viewTransactionDetails(${transaction.id})">View Details</button>
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
    case "week": {
      const weekAgo = new Date(today);
      weekAgo.setDate(weekAgo.getDate() - 7);
      return transactions.filter((t) => new Date(t.date) >= weekAgo);
    }
    case "month": {
      const monthAgo = new Date(today);
      monthAgo.setMonth(monthAgo.getMonth() - 1);
      return transactions.filter((t) => new Date(t.date) >= monthAgo);
    }
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

  const salesEl = document.getElementById("total-sales");
  const countEl = document.getElementById("total-transactions");
  const avgEl = document.getElementById("avg-transaction");
  const topEl = document.getElementById("top-product");

  if (salesEl) salesEl.textContent = `₱${totalSales.toFixed(2)}`;
  if (countEl) countEl.textContent = totalTransactions;
  if (avgEl) avgEl.textContent = `₱${avgTransaction.toFixed(2)}`;
  if (topEl) topEl.textContent = topProduct;
}

function handleSalesFilter(btn) {
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderSalesTable(btn.dataset.period);
}

function viewTransactionDetails(transactionId) {
  const transaction = transactions.find((t) => Number(t.id) === Number(transactionId));
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
  settings.storeName = document.getElementById("store-name").value.trim() || "Fresh Produce Market";
  settings.taxRate = parseFloat(document.getElementById("tax-rate").value) || 0;
  settings.currency = document.getElementById("currency").value;
  settings.lowStockThreshold = parseInt(
    document.getElementById("low-stock-threshold").value,
  ) || 10;

  saveToLocalStorage();
  updateCartSummary();
  renderProducts();
  renderProductsTable();
  renderInventoryTable();

  alert("Settings saved successfully.");
}

// ===== UTILITY FUNCTIONS =====
function capitalizeFirst(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function updateAllStats() {
  updateInventoryStats();
  updateSalesStats(transactions);
}
