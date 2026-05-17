/* ==============================
   BOOMINE — script.js
   ============================== */

// ===== PRODUCT DATA =====
const PRODUCTS = [
  { id: 1, name: "Classic Boomine Hoodie", category: "men", price: 18500, originalPrice: null, tag: "NEW", badge: null, desc: "Our signature hoodie crafted from 400GSM brushed fleece. Oversized fit, embroidered logo. Premium comfort for everyday wear.", colors: ["#1a1a1a", "#3d3d3d", "#8B4513", "#1a3a5c"], sizes: ["XS","S","M","L","XL","XXL"], bg: "linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)" },
  { id: 2, name: "Street Culture Tee", category: "men", price: 8500, originalPrice: null, tag: "NEW", badge: null, desc: "Heavyweight 220GSM cotton tee. Graphic front print. Boxy cut. The everyday essential from Boomine.", colors: ["#0d0d0d", "#f5f2ed", "#c9a84c"], sizes: ["XS","S","M","L","XL","XXL"], bg: "linear-gradient(135deg,#0d0d0d,#2d2d2d,#1a1a1a)" },
  { id: 3, name: "Lagos Nights Bomber", category: "men", price: 32000, originalPrice: 38000, tag: "SALE", badge: "sale", desc: "Satin bomber jacket with intricate Lagos city map embroidery on the back. Premium lining. Limited stock.", colors: ["#0d0d0d","#8B4513","#1a3a5c"], sizes: ["S","M","L","XL"], bg: "linear-gradient(135deg,#2a1a0e,#4a2e0e,#1a1a1a)" },
  { id: 4, name: "Mood Cargo Pants", category: "men", price: 22000, originalPrice: null, tag: "NEW", badge: null, desc: "6-pocket cargo pants with utility straps. Relaxed fit. Durable twill fabric. Streetwear staple.", colors: ["#3d3d2d","#1a1a0d","#2d3a2d"], sizes: ["28","30","32","34","36","38"], bg: "linear-gradient(135deg,#2d3a1a,#1a2d0d,#0d1a0d)" },
  { id: 5, name: "Femme Crop Jacket", category: "women", price: 26500, originalPrice: null, tag: "NEW", badge: null, desc: "Structured cropped jacket with puff shoulders. Tailored fit. Available in 3 colorways. A Boomine statement piece.", colors: ["#1a1a1a","#6d2b5c","#c9a84c"], sizes: ["XS","S","M","L","XL"], bg: "linear-gradient(135deg,#2d1b33,#4a1942,#6d2b5c)" },
  { id: 6, name: "Soul Sister Dress", category: "women", price: 19000, originalPrice: null, tag: "EXCLUSIVE", badge: null, desc: "Midi-length slip dress with adjustable straps. Lightweight satin feel. Perfect from day to night.", colors: ["#1a1a1a","#6d2b5c","#c9a84c","#f5f2ed"], sizes: ["XS","S","M","L","XL"], bg: "linear-gradient(135deg,#4a1942,#6d2b5c,#3a0d2e)" },
  { id: 7, name: "Culture Set (Top + Pants)", category: "women", price: 35000, originalPrice: 40000, tag: "SALE", badge: "sale", desc: "Matching two-piece set. Ribbed crop top + wide-leg pants. Ultra stretchy fabric. Sold as a set.", colors: ["#1a1a1a","#2d3a1a","#2d1b33"], sizes: ["XS","S","M","L","XL"], bg: "linear-gradient(135deg,#1a0d2e,#2d1b33,#4a1942)" },
  { id: 8, name: "Boomine Cap", category: "accessories", price: 7500, originalPrice: null, tag: "NEW", badge: null, desc: "6-panel structured cap with embroidered Boomine logo. Adjustable snapback. One size fits all.", colors: ["#0d0d0d","#1a1a2e","#3a0d0d","#c9a84c"], sizes: ["ONE SIZE"], bg: "linear-gradient(135deg,#1a1a1a,#0d0d0d,#2d2d2d)" },
  { id: 9, name: "Logo Crossbody Bag", category: "accessories", price: 14500, originalPrice: null, tag: "HOT", badge: null, desc: "Premium faux leather crossbody bag. Adjustable strap. Multiple compartments. Boomine logo hardware.", colors: ["#0d0d0d","#3d2b1a","#c9a84c"], sizes: ["ONE SIZE"], bg: "linear-gradient(135deg,#1a1205,#2d2010,#1a1a0d)" },
  { id: 10, name: "Boomine Socks (3-Pack)", category: "accessories", price: 5000, originalPrice: null, tag: "NEW", badge: null, desc: "Premium cotton socks with Boomine branding. Ribbed cuff. Pack of 3 pairs. Available in assorted colors.", colors: ["#0d0d0d","#f5f2ed","#c9a84c"], sizes: ["S/M","L/XL"], bg: "linear-gradient(135deg,#0d0d0d,#1a1a1a,#2d2d2d)" },
  { id: 11, name: "Oversize Flannel Shirt", category: "streetwear", price: 16500, originalPrice: null, tag: "NEW", badge: null, desc: "Classic plaid flannel shirt in oversized streetwear cut. Heavyweight flannel fabric. Layer or wear open.", colors: ["#3a0d0d","#1a2d0d","#1a1a2e"], sizes: ["XS","S","M","L","XL","XXL"], bg: "linear-gradient(135deg,#3a0d0d,#2d0a0a,#1a0808)" },
  { id: 12, name: "Drop Crotch Sweats", category: "streetwear", price: 14000, originalPrice: 16500, tag: "SALE", badge: "sale", desc: "Drop-crotch sweatpants with Boomine wordmark down the leg. 320GSM fleece. Relaxed tapered fit.", colors: ["#1a1a1a","#2d2d1a","#1a1a2e"], sizes: ["XS","S","M","L","XL","XXL"], bg: "linear-gradient(135deg,#1a1a2e,#0d0d1a,#1a1a1a)" },
];

// ===== STATE =====
let cart = [];
let wishlist = [];
let currentProduct = null;
let selectedSize = null;
let selectedColor = null;
let quantity = 1;
let shownProducts = 8;
let currentFilter = "all";
let discount = 0;
let selectedPayment = "card";
let shippingCost = 2500;

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initCursor();
  initNavbar();
  initMobileMenu();
  initSearch();
  initCart();
  renderProducts();
  initFilters();
  initCheckout();
  initScrollReveal();
  initTestimonialDots();
  initBackToTop();
  setupShipping();
});

// ===== LOADER =====
function initLoader() {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
  }, 1800);
}

// ===== CURSOR =====
function initCursor() {
  const cursor = document.getElementById("cursor");
  const follower = document.getElementById("cursor-follower");
  let mx = 0, my = 0, fx = 0, fy = 0;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + "px";
    cursor.style.top = my + "px";
  });

  function animateFollower() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    follower.style.left = fx + "px";
    follower.style.top = fy + "px";
    requestAnimationFrame(animateFollower);
  }
  animateFollower();
}

// ===== NAVBAR =====
function initNavbar() {
  const nav = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  });
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        document.getElementById("mobile-menu").classList.remove("open");
      }
    });
  });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  document.getElementById("hamburger").addEventListener("click", () => menu.classList.add("open"));
  document.getElementById("mobile-close").addEventListener("click", () => menu.classList.remove("open"));
}

// ===== SEARCH =====
function initSearch() {
  const overlay = document.getElementById("search-overlay");
  const input = document.getElementById("search-input");
  const results = document.getElementById("search-results");

  document.getElementById("search-btn").addEventListener("click", () => {
    overlay.classList.add("open");
    setTimeout(() => input.focus(), 300);
  });
  document.getElementById("search-close").addEventListener("click", () => overlay.classList.remove("open"));

  input.addEventListener("input", () => {
    const q = input.value.toLowerCase().trim();
    if (!q) { results.innerHTML = ""; return; }
    const found = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    if (!found.length) { results.innerHTML = `<p style="color:var(--muted);font-size:0.85rem">No results for "${input.value}"</p>`; return; }
    results.innerHTML = found.slice(0, 5).map(p => `
      <div class="search-result-item" onclick="openProductModal(${p.id}); document.getElementById('search-overlay').classList.remove('open')">
        <div class="sri-img" style="background:${p.bg}"></div>
        <div>
          <div style="font-size:0.85rem;font-weight:500">${p.name}</div>
          <div style="font-size:0.75rem;color:var(--muted)">${p.category.toUpperCase()} · ${formatPrice(p.price)}</div>
        </div>
      </div>
    `).join("");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") overlay.classList.remove("open");
  });
}

// ===== CART =====
function initCart() {
  const toggle = document.getElementById("cart-toggle");
  const close = document.getElementById("cart-close");
  const overlay = document.getElementById("cart-overlay");

  toggle.addEventListener("click", openCart);
  close.addEventListener("click", closeCart);
  overlay.addEventListener("click", closeCart);
}

function openCart() {
  document.getElementById("cart-sidebar").classList.add("open");
  document.getElementById("cart-overlay").classList.add("open");
  renderCart();
}

function closeCart() {
  document.getElementById("cart-sidebar").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("open");
}

function renderCart() {
  const container = document.getElementById("cart-items");
  const footer = document.getElementById("cart-footer");
  const countEl = document.getElementById("cart-count");
  const totalEl = document.getElementById("cart-subtotal");
  const badge = document.getElementById("cart-count");

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  badge.textContent = totalItems;
  badge.classList.toggle("show", totalItems > 0);

  if (!cart.length) {
    container.innerHTML = `<div class="cart-empty">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <p>Your cart is empty</p>
    </div>`;
    footer.style.display = "none";
    return;
  }

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  container.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <div class="ci-img">
        <div class="ci-img-placeholder" style="background:${item.bg}">
          <span style="font-family:var(--font-display);font-size:0.7rem;letter-spacing:0.1em">${item.name.split(" ")[0].toUpperCase()}</span>
        </div>
      </div>
      <div class="ci-details">
        <div class="ci-name">${item.name}</div>
        <div class="ci-meta">Size: ${item.size} · Qty: ${item.qty}</div>
        <div class="ci-price">${formatPrice(item.price * item.qty)}</div>
        <span class="ci-remove" onclick="removeFromCart(${idx})">Remove</span>
      </div>
    </div>
  `).join("");

  totalEl.textContent = formatPrice(subtotal);
  footer.style.display = "block";
}

function addToCart(productId, size, color, qty) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(i => i.id === productId && i.size === size);
  if (existing) { existing.qty += qty; }
  else { cart.push({ ...product, size: size || "M", color: color || product.colors[0], qty }); }
  renderCart();
  updateCartBadge();
  showToast(`${product.name} added to cart`);
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  renderCart();
  updateCartBadge();
}

function updateCartBadge() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById("cart-count");
  badge.textContent = total;
  badge.classList.toggle("show", total > 0);
}

// ===== WISHLIST =====
function addToWishlist() {
  if (!currentProduct) return;
  if (!wishlist.find(w => w.id === currentProduct.id)) {
    wishlist.push(currentProduct);
    const wl = document.getElementById("wishlist-count");
    wl.textContent = wishlist.length;
    wl.classList.add("show");
    showToast(`${currentProduct.name} added to wishlist ♡`);
  } else {
    showToast("Already in your wishlist");
  }
}

// ===== PRODUCTS =====
function renderProducts() {
  const grid = document.getElementById("products-grid");
  const filtered = currentFilter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === currentFilter);
  const toShow = filtered.slice(0, shownProducts);

  grid.innerHTML = toShow.map(p => `
    <div class="product-card reveal-up" onclick="openProductModal(${p.id})">
      <div class="product-img">
        <div class="product-img-placeholder" style="background:${p.bg}">
          <span>${p.name.split(" ").slice(0,2).join(" ").toUpperCase()}</span>
          <span class="pimg-sub">BOOMINE</span>
        </div>
        ${p.badge ? `<div class="product-tag-badge ${p.badge}">${p.tag}</div>` : `<div class="product-tag-badge">${p.tag}</div>`}
        <div class="product-actions" onclick="event.stopPropagation()">
          <button onclick="quickAdd(${p.id})">QUICK ADD</button>
          <button class="btn-wl" onclick="quickWishlist(${p.id})">♡</button>
        </div>
      </div>
      <div class="product-name">${p.name}</div>
      <div class="product-category">${p.category.toUpperCase()}</div>
      <div class="product-price">
        ${formatPrice(p.price)}
        ${p.originalPrice ? `<span class="original">${formatPrice(p.originalPrice)}</span>` : ""}
      </div>
    </div>
  `).join("");

  document.getElementById("load-more").style.display = toShow.length < filtered.length ? "inline-flex" : "none";

  setTimeout(() => {
    document.querySelectorAll(".reveal-up").forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), i * 80);
    });
  }, 100);
}

function quickAdd(id) {
  addToCart(id, "M", null, 1);
  openCart();
}

function quickWishlist(id) {
  const p = PRODUCTS.find(p => p.id === id);
  if (p && !wishlist.find(w => w.id === id)) {
    wishlist.push(p);
    const wl = document.getElementById("wishlist-count");
    wl.textContent = wishlist.length;
    wl.classList.add("show");
    showToast(`${p.name} added to wishlist ♡`);
  } else {
    showToast("Already in your wishlist");
  }
}

function initFilters() {
  document.querySelectorAll(".filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentFilter = tab.dataset.filter;
      shownProducts = 8;
      renderProducts();
    });
  });

  document.getElementById("load-more").addEventListener("click", () => {
    shownProducts += 4;
    renderProducts();
  });
}

// ===== PRODUCT MODAL =====
function openProductModal(id) {
  const p = PRODUCTS.find(p => p.id === id);
  if (!p) return;
  currentProduct = p;
  selectedSize = null;
  selectedColor = p.colors[0];
  quantity = 1;

  document.getElementById("modal-tag").textContent = p.category.toUpperCase() + " · BOOMINE";
  document.getElementById("modal-name").textContent = p.name;
  document.getElementById("modal-price").textContent = formatPrice(p.price) + (p.originalPrice ? ` · ${formatPrice(p.originalPrice)} original` : "");
  document.getElementById("modal-desc").textContent = p.desc;
  document.getElementById("modal-qty").textContent = 1;
  document.getElementById("modal-img").style.background = p.bg;
  document.getElementById("modal-img").innerHTML = `<span style="font-family:var(--font-display);font-size:2rem;color:rgba(255,255,255,0.15);letter-spacing:0.2em">PHOTO</span>`;

  document.getElementById("modal-sizes").innerHTML = p.sizes.map(s => `
    <button class="size-btn" onclick="selectSize('${s}', this)">${s}</button>
  `).join("");

  document.getElementById("modal-colors").innerHTML = p.colors.map((c, i) => `
    <button class="color-btn ${i === 0 ? 'active' : ''}" style="background:${c}" onclick="selectColor('${c}', this)"></button>
  `).join("");

  document.getElementById("modal-overlay").classList.add("open");
  document.getElementById("product-modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
  document.getElementById("product-modal").classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("modal-close").addEventListener("click", closeModal);
document.getElementById("modal-overlay").addEventListener("click", closeModal);

function selectSize(size, btn) {
  selectedSize = size;
  document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

function selectColor(color, btn) {
  selectedColor = color;
  document.querySelectorAll(".color-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

function changeQty(delta) {
  quantity = Math.max(1, quantity + delta);
  document.getElementById("modal-qty").textContent = quantity;
}

function addToCartFromModal() {
  if (!currentProduct) return;
  if (!selectedSize) {
    showToast("Please select a size");
    return;
  }
  addToCart(currentProduct.id, selectedSize, selectedColor, quantity);
  closeModal();
  openCart();
}

// ===== CHECKOUT =====
function openCheckout() {
  closeCart();
  updateCheckoutSummary();
  document.getElementById("checkout-overlay").classList.add("open");
  document.getElementById("checkout-modal").classList.add("open");
  document.body.style.overflow = "hidden";
  goToStep(1);
}

function closeCheckout() {
  document.getElementById("checkout-overlay").classList.remove("open");
  document.getElementById("checkout-modal").classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("checkout-close").addEventListener("click", closeCheckout);
document.getElementById("checkout-overlay").addEventListener("click", closeCheckout);

function goToStep(n) {
  [1,2,3].forEach(i => {
    document.getElementById(`checkout-step${i}`).classList.add("hidden");
    document.getElementById(`step${i}-btn`).classList.remove("active");
  });
  document.getElementById(`checkout-step${n}`).classList.remove("hidden");
  document.getElementById(`step${n}-btn`).classList.add("active");
  if (n === 2 || n === 3) updateCheckoutSummary();
  if (n === 3) updateFinalTotal();
}

function initCheckout() {
  // Shipping radio
  document.querySelectorAll('input[name="shipping"]').forEach(radio => {
    radio.addEventListener("change", () => {
      document.querySelectorAll(".shipping-option").forEach(o => o.classList.remove("selected"));
      radio.closest(".shipping-option").classList.add("selected");
      shippingCost = radio.value === "express" ? 5000 : radio.value === "free" ? 0 : 2500;
      updateCheckoutSummary();
    });
  });
}

function setupShipping() {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  if (subtotal >= 25000) {
    document.getElementById("ship-free").querySelector("input").disabled = false;
  }
}

function updateCheckoutSummary() {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const discountAmt = Math.round(subtotal * discount);
  const total = subtotal + shippingCost - discountAmt;

  // Items list
  const listEl = document.getElementById("checkout-items-list");
  if (listEl) {
    listEl.innerHTML = cart.map(i => `
      <div class="checkout-items-line">
        <span>${i.name} × ${i.qty}</span>
        <span>${formatPrice(i.price * i.qty)}</span>
      </div>
    `).join("");
  }

  document.getElementById("co-subtotal").textContent = formatPrice(subtotal);
  document.getElementById("co-shipping").textContent = shippingCost === 0 ? "FREE" : formatPrice(shippingCost);

  const discLine = document.getElementById("discount-line");
  if (discountAmt > 0) {
    discLine.classList.remove("hidden");
    document.getElementById("co-discount").textContent = `-${formatPrice(discountAmt)}`;
  } else {
    discLine.classList.add("hidden");
  }

  document.getElementById("co-total").textContent = formatPrice(total);
  setupShipping();
}

function updateFinalTotal() {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const discountAmt = Math.round(subtotal * discount);
  const total = subtotal + shippingCost - discountAmt;
  document.getElementById("final-total-amount").textContent = formatPrice(total);
}

function applyCoupon() {
  const code = document.getElementById("coupon-code").value.trim().toUpperCase();
  const msg = document.getElementById("coupon-msg");
  const validCodes = {
    "BOOMINE20": 0.20,
    "FIRST10": 0.10,
    "SAVE15": 0.15,
  };
  if (validCodes[code]) {
    discount = validCodes[code];
    const pct = Math.round(discount * 100);
    msg.textContent = `✓ Promo code applied! ${pct}% discount activated.`;
    msg.style.color = "#2ecc71";
    updateCheckoutSummary();
  } else {
    msg.textContent = "✗ Invalid promo code. Try BOOMINE20, FIRST10, or SAVE15.";
    msg.style.color = "#e74c3c";
  }
}

function selectPayment(type) {
  selectedPayment = type;
  ["card","paystack","flutterwave","transfer"].forEach(t => {
    document.getElementById(`pm-${t === "flutterwave" ? "flutter" : t}`).classList.remove("active");
    document.getElementById(`${t}-form`).classList.add("hidden");
  });
  document.getElementById(`pm-${type === "flutterwave" ? "flutter" : type}`).classList.add("active");
  document.getElementById(`${type}-form`).classList.remove("hidden");
}

// Card number formatting
document.getElementById("card-num").addEventListener("input", (e) => {
  let v = e.target.value.replace(/\D/g, "").substring(0, 16);
  e.target.value = v.replace(/(.{4})/g, "$1 ").trim();
});

function placeOrder() {
  // Validate step 1 fields
  const email = document.getElementById("co-email").value;
  const fname = document.getElementById("co-fname").value;
  const addr = document.getElementById("co-addr").value;

  if (!email || !fname || !addr) {
    showToast("Please fill in all required fields");
    goToStep(1);
    return;
  }

  if (!cart.length) {
    showToast("Your cart is empty");
    return;
  }

  // Payment gateway integration point
  if (selectedPayment === "paystack") {
    initPaystackPayment();
  } else if (selectedPayment === "flutterwave") {
    initFlutterwavePayment();
  } else {
    processOrder();
  }
}

// ===== PAYSTACK INTEGRATION =====
// REPLACE 'pk_test_YOUR_PAYSTACK_PUBLIC_KEY_HERE' with your actual Paystack public key
function initPaystackPayment() {
  const PAYSTACK_PUBLIC_KEY = "pk_test_YOUR_PAYSTACK_PUBLIC_KEY_HERE";
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const discountAmt = Math.round(subtotal * discount);
  const total = subtotal + shippingCost - discountAmt;
  const email = document.getElementById("co-email").value;

  if (typeof PaystackPop === "undefined") {
    // Load Paystack script dynamically
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.onload = () => {
      launchPaystack(PAYSTACK_PUBLIC_KEY, email, total);
    };
    document.head.appendChild(script);
  } else {
    launchPaystack(PAYSTACK_PUBLIC_KEY, email, total);
  }
}

function launchPaystack(key, email, total) {
  const handler = PaystackPop.setup({
    key: key,
    email: email,
    amount: total * 100, // Paystack uses kobo
    currency: "NGN",
    ref: "BOOM-" + Date.now(),
    metadata: {
      custom_fields: [{ display_name: "Brand", variable_name: "brand", value: "Boomine" }]
    },
    callback: function(response) {
      processOrder(response.reference);
    },
    onClose: function() {
      showToast("Payment cancelled");
    }
  });
  handler.openIframe();
}

// ===== FLUTTERWAVE INTEGRATION =====
// REPLACE 'FLWPUBK_TEST_YOUR_FLUTTERWAVE_PUBLIC_KEY' with your actual key
function initFlutterwavePayment() {
  const FLUTTERWAVE_PUBLIC_KEY = "FLWPUBK_TEST_YOUR_FLUTTERWAVE_PUBLIC_KEY";
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const discountAmt = Math.round(subtotal * discount);
  const total = subtotal + shippingCost - discountAmt;
  const email = document.getElementById("co-email").value;
  const fname = document.getElementById("co-fname").value;
  const lname = document.getElementById("co-lname").value;
  const phone = document.getElementById("co-phone").value;

  if (typeof FlutterwaveCheckout === "undefined") {
    const script = document.createElement("script");
    script.src = "https://checkout.flutterwave.com/v3.js";
    script.onload = () => {
      launchFlutterwave(FLUTTERWAVE_PUBLIC_KEY, email, fname, lname, phone, total);
    };
    document.head.appendChild(script);
  } else {
    launchFlutterwave(FLUTTERWAVE_PUBLIC_KEY, email, fname, lname, phone, total);
  }
}

function launchFlutterwave(key, email, fname, lname, phone, total) {
  FlutterwaveCheckout({
    public_key: key,
    tx_ref: "BOOM-" + Date.now(),
    amount: total,
    currency: "NGN",
    payment_options: "card, mobilemoney, ussd, banktransfer",
    customer: { email, phone_number: phone, name: `${fname} ${lname}` },
    customizations: {
      title: "Boomine Clothing",
      description: "Order Payment",
      logo: "https://placeholder.com/60"
    },
    callback: (data) => {
      if (data.status === "successful") processOrder(data.transaction_id);
      else showToast("Payment failed. Please try again.");
    },
    onclose: () => showToast("Payment window closed"),
  });
}

function processOrder(ref) {
  // Order ID generation
  const orderId = "BOOM-" + Math.random().toString(36).substr(2, 8).toUpperCase();
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const discountAmt = Math.round(subtotal * discount);
  const total = subtotal + shippingCost - discountAmt;

  closeCheckout();
  cart = [];
  updateCartBadge();
  renderCart();

  // Show success state
  document.getElementById("checkout-modal").innerHTML = `
    <div style="padding:3rem;text-align:center">
      <div style="font-size:3rem;margin-bottom:1rem">✅</div>
      <div style="font-family:var(--font-display);font-size:2rem;letter-spacing:0.1em;color:var(--gold);margin-bottom:1rem">ORDER PLACED!</div>
      <p style="color:rgba(245,242,237,0.7);margin-bottom:0.5rem">Order ID: <strong style="color:var(--gold)">${orderId}</strong></p>
      ${ref ? `<p style="color:rgba(245,242,237,0.7);margin-bottom:0.5rem">Payment Ref: ${ref}</p>` : ""}
      <p style="color:rgba(245,242,237,0.7);margin-bottom:2rem">Total: <strong>${formatPrice(total)}</strong></p>
      <p style="color:rgba(245,242,237,0.5);font-size:0.8rem;margin-bottom:2rem">You'll receive a confirmation email shortly.<br>Estimated delivery: 3–7 business days.</p>
      <button class="btn-primary" onclick="closeCheckout()">CONTINUE SHOPPING</button>
    </div>
  `;
  document.getElementById("checkout-modal").classList.add("open");
  document.getElementById("checkout-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

// ===== NEWSLETTER =====
function subscribeNewsletter() {
  const email = document.getElementById("newsletter-email").value;
  if (!email || !email.includes("@")) {
    showToast("Please enter a valid email");
    return;
  }
  // Replace with your actual newsletter service (Mailchimp, etc.)
  showToast(`${email} subscribed! Welcome to Boomine ✦`);
  document.getElementById("newsletter-email").value = "";
}

// ===== CONTACT FORM =====
function submitContact(e) {
  e.preventDefault();
  showToast("Message sent! We'll get back to you soon.");
  e.target.reset();
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal-up").forEach(el => observer.observe(el));
}

// ===== TESTIMONIAL DOTS =====
function initTestimonialDots() {
  const track = document.getElementById("testimonials-track");
  const dots = document.getElementById("testimonial-dots");
  const cards = track.querySelectorAll(".testimonial-card");

  dots.innerHTML = Array.from(cards).map((_, i) => `
    <div class="t-dot ${i === 0 ? 'active' : ''}" onclick="scrollToTestimonial(${i})"></div>
  `).join("");

  track.addEventListener("scroll", () => {
    const idx = Math.round(track.scrollLeft / 336);
    document.querySelectorAll(".t-dot").forEach((d, i) => d.classList.toggle("active", i === idx));
  });
}

function scrollToTestimonial(idx) {
  document.getElementById("testimonials-track").scrollTo({ left: idx * 336, behavior: "smooth" });
}

// ===== BACK TO TOP =====
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => btn.classList.toggle("visible", window.scrollY > 600));
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

// ===== UTILS =====
function formatPrice(n) {
  return "₦" + Number(n).toLocaleString("en-NG");
}

// ===== COLLECTION CARD CLICKS =====
document.querySelectorAll(".collection-card").forEach(card => {
  card.addEventListener("click", () => {
    const cat = card.dataset.cat;
    currentFilter = cat;
    shownProducts = 8;
    document.querySelectorAll(".filter-tab").forEach(t => {
      t.classList.toggle("active", t.dataset.filter === cat);
    });
    renderProducts();
    document.getElementById("new-arrivals").scrollIntoView({ behavior: "smooth" });
  });
});