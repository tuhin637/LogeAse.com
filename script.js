/* ═══════════════════════════════════════════════════════════════
   LogeAse.com — Premium E-Commerce JavaScript
   Founder: MD Rakib Babu
   Version: 3.0 — With Images & More Products
═══════════════════════════════════════════════════════════════ */

'use strict';

/* ══════════════════════════════════════
   1. PRODUCT DATA
══════════════════════════════════════ */
const PRODUCTS = [
  { id: 1,  name: 'iPhone 15 Pro Max',          cat: 'electronics', emoji: '📱', img: 'https://images.unsplash.com/photo-1695048133142-1a20484429be?w=400&h=400&fit=crop&auto=format', price: 149999, original: 169999, discount: 12, rating: 5, reviews: 2841, tag: 'Hot',      badge: 'bestseller' },
  { id: 2,  name: 'Samsung Galaxy S24 Ultra',    cat: 'electronics', emoji: '📲', img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop&auto=format', price: 124999, original: 139999, discount: 11, rating: 5, reviews: 1923, tag: 'New',      badge: 'new' },
  { id: 3,  name: 'Sony WH-1000XM5 Headphones', cat: 'electronics', emoji: '🎧', img: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop&auto=format', price: 34999,  original: 42000,  discount: 17, rating: 5, reviews: 3102, tag: 'Top Rated', badge: 'sale' },
  { id: 4,  name: 'Apple MacBook Air M3',        cat: 'electronics', emoji: '💻', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop&auto=format', price: 139999, original: 155000, discount: 10, rating: 5, reviews: 987,  tag: 'Premium',  badge: 'bestseller' },
  { id: 5,  name: "Men's Premium Panjabi Set",   cat: 'fashion',     emoji: '👘', img: 'https://images.unsplash.com/photo-1594938298603-c8148c4b3bff?w=400&h=400&fit=crop&auto=format', price: 3499,   original: 4999,   discount: 30, rating: 4, reviews: 5312, tag: 'Trending', badge: 'sale' },
  { id: 6,  name: "Women's Silk Saree",          cat: 'fashion',     emoji: '👗', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=400&fit=crop&auto=format', price: 4999,   original: 6500,   discount: 23, rating: 5, reviews: 2198, tag: 'Popular',  badge: 'bestseller' },
  { id: 7,  name: 'Casual Sneakers – Men',       cat: 'fashion',     emoji: '👟', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&auto=format', price: 2999,   original: 3999,   discount: 25, rating: 4, reviews: 4200, tag: 'Hot',      badge: 'sale' },
  { id: 8,  name: 'Luxury Handbag',              cat: 'fashion',     emoji: '👜', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop&auto=format', price: 7499,   original: 9999,   discount: 25, rating: 5, reviews: 1089, tag: 'Premium',  badge: 'new' },
  { id: 9,  name: 'Smart LED TV 55" 4K',         cat: 'home',        emoji: '📺', img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=400&fit=crop&auto=format', price: 59999,  original: 74999,  discount: 20, rating: 5, reviews: 762,  tag: 'Hot',      badge: 'sale' },
  { id: 10, name: 'Robot Vacuum Cleaner',        cat: 'home',        emoji: '🤖', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&auto=format', price: 24999,  original: 32000,  discount: 22, rating: 4, reviews: 1342, tag: 'Smart',    badge: 'new' },
  { id: 11, name: 'Air Fryer XL 5.5L',           cat: 'home',        emoji: '🍳', img: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop&auto=format', price: 8999,   original: 12000,  discount: 25, rating: 5, reviews: 2891, tag: 'Top Rated',badge: 'bestseller' },
  { id: 12, name: 'Korean Skincare Kit',         cat: 'beauty',      emoji: '🧴', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&auto=format', price: 2499,   original: 3500,   discount: 29, rating: 5, reviews: 6721, tag: 'Viral',    badge: 'bestseller' },
  { id: 13, name: 'Luxury Perfume Set',          cat: 'beauty',      emoji: '🌸', img: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&h=400&fit=crop&auto=format', price: 5999,   original: 8000,   discount: 25, rating: 5, reviews: 3201, tag: 'Premium',  badge: 'sale' },
  { id: 14, name: 'Yoga Mat Premium',            cat: 'beauty',      emoji: '🧘', img: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=400&fit=crop&auto=format', price: 1999,   original: 2800,   discount: 29, rating: 4, reviews: 4100, tag: 'Trending', badge: 'new' },
  { id: 15, name: 'Apple Watch Series 9',        cat: 'electronics', emoji: '⌚', img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop&auto=format', price: 54999,  original: 65000,  discount: 15, rating: 5, reviews: 2012, tag: 'Premium',  badge: 'bestseller' },
  { id: 16, name: 'Luxury Bedding Set',          cat: 'home',        emoji: '🛏️', img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop&auto=format', price: 12999,  original: 18000,  discount: 28, rating: 5, reviews: 891,  tag: 'Premium',  badge: 'sale' },
  /* ── নতুন items ── */
  { id: 17, name: 'DJI Mini 4 Pro Drone',        cat: 'electronics', emoji: '🚁', img: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=400&h=400&fit=crop&auto=format', price: 89999,  original: 109999, discount: 18, rating: 5, reviews: 642,  tag: 'New',      badge: 'new' },
  { id: 18, name: 'Mechanical Gaming Keyboard',  cat: 'electronics', emoji: '⌨️', img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop&auto=format', price: 6999,   original: 9500,   discount: 26, rating: 4, reviews: 1820, tag: 'Hot',      badge: 'sale' },
  { id: 19, name: 'Wireless Earbuds Pro',        cat: 'electronics', emoji: '🎵', img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop&auto=format', price: 8499,   original: 12000,  discount: 29, rating: 5, reviews: 4502, tag: 'Trending', badge: 'bestseller' },
  { id: 20, name: 'Smart Security Camera',       cat: 'electronics', emoji: '📷', img: 'https://images.unsplash.com/photo-1602526219187-9e8d9f8e4c2a?w=400&h=400&fit=crop&auto=format', price: 4999,   original: 7000,   discount: 29, rating: 4, reviews: 988,  tag: 'Smart',    badge: 'new' },
  { id: 21, name: "Men's Formal Shirt Set",      cat: 'fashion',     emoji: '👔', img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop&auto=format', price: 1999,   original: 2800,   discount: 29, rating: 4, reviews: 3100, tag: 'Trending', badge: 'sale' },
  { id: 22, name: "Women's Summer Dress",        cat: 'fashion',     emoji: '👒', img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop&auto=format', price: 2499,   original: 3500,   discount: 29, rating: 5, reviews: 2700, tag: 'Popular',  badge: 'bestseller' },
  { id: 23, name: 'Leather Wallet – Premium',    cat: 'fashion',     emoji: '💼', img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop&auto=format', price: 1299,   original: 1999,   discount: 35, rating: 4, reviews: 1543, tag: 'Hot',      badge: 'sale' },
  { id: 24, name: 'Sports Running Shoes',        cat: 'fashion',     emoji: '🏃', img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop&auto=format', price: 4999,   original: 6500,   discount: 23, rating: 5, reviews: 3890, tag: 'New',      badge: 'new' },
  { id: 25, name: 'Electric Coffee Maker',       cat: 'home',        emoji: '☕', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop&auto=format', price: 7499,   original: 10000,  discount: 25, rating: 5, reviews: 2103, tag: 'Top Rated',badge: 'bestseller' },
  { id: 26, name: 'Smart Table Lamp LED',        cat: 'home',        emoji: '💡', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format', price: 2999,   original: 4200,   discount: 29, rating: 4, reviews: 876,  tag: 'Smart',    badge: 'new' },
  { id: 27, name: 'Non-Stick Cookware Set',      cat: 'home',        emoji: '🥘', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&auto=format', price: 5999,   original: 8500,   discount: 29, rating: 5, reviews: 1620, tag: 'Hot',      badge: 'sale' },
  { id: 28, name: 'Face Serum Vitamin C',        cat: 'beauty',      emoji: '✨', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop&auto=format', price: 1499,   original: 2200,   discount: 32, rating: 5, reviews: 5430, tag: 'Viral',    badge: 'bestseller' },
  { id: 29, name: 'Hair Care Complete Kit',      cat: 'beauty',      emoji: '💆', img: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&h=400&fit=crop&auto=format', price: 2999,   original: 4200,   discount: 29, rating: 4, reviews: 3120, tag: 'Trending', badge: 'sale' },
  { id: 30, name: 'Electric Face Massager',      cat: 'beauty',      emoji: '🌟', img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop&auto=format', price: 3499,   original: 5000,   discount: 30, rating: 5, reviews: 1870, tag: 'Premium',  badge: 'new' },
];

const FLASH_PRODUCTS = [
  { id: 101, name: 'Xiaomi Redmi Note 13 Pro', emoji: '📱', img: 'https://images.unsplash.com/photo-1598327106026-d9521da673d1?w=400&h=400&fit=crop&auto=format', price: 28999, original: 39999, discount: 28, rating: 4, reviews: 3201 },
  { id: 102, name: 'JBL Bluetooth Speaker',    emoji: '🔊', img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&auto=format', price: 7499,  original: 12000, discount: 38, rating: 5, reviews: 1892 },
  { id: 103, name: 'Gaming Mouse RGB',         emoji: '🖱️', img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&auto=format', price: 2999,  original: 4999,  discount: 40, rating: 4, reviews: 2741 },
  { id: 104, name: 'iPad 10th Gen 64GB',       emoji: '📲', img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&auto=format', price: 64999, original: 82000, discount: 21, rating: 5, reviews: 987  },
  { id: 105, name: 'Noise Cancelling Buds',    emoji: '🎧', img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop&auto=format', price: 4999,  original: 8500,  discount: 41, rating: 5, reviews: 2100 },
  { id: 106, name: 'Smart Fitness Band',       emoji: '⌚', img: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop&auto=format', price: 3499,  original: 5999,  discount: 42, rating: 4, reviews: 1560 },
];

/* ══════════════════════════════════════
   2. STATE
══════════════════════════════════════ */
let cart       = JSON.parse(localStorage.getItem('logeaseCart')   || '[]');
let wishlist   = JSON.parse(localStorage.getItem('logeaseWishlist')|| '[]');
let darkMode   = JSON.parse(localStorage.getItem('logeaseDark')   || 'false');
let currentFilter  = 'all';
let visibleCount   = 8;
let flashEndTime   = null;

/* ══════════════════════════════════════
   3. INIT — runs after DOM is ready
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  applyDarkMode(false);
  renderFlashProducts();
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  initCountdown();
  initParticles();
  initHeroSlider();
  initScrollEffects();
  initCounters();
  initAOS();
  setupSearchListener();
  updateDarkIcon();
});

/* ══════════════════════════════════════
   4. DARK MODE
══════════════════════════════════════ */
function applyDarkMode(animate) {
  if (animate) {
    document.body.style.transition = 'background 0.4s, color 0.4s';
  }
  document.body.classList.toggle('dark', darkMode);
  updateDarkIcon();
}

function updateDarkIcon() {
  const icon = document.getElementById('darkIcon');
  if (!icon) return;
  if (darkMode) {
    icon.innerHTML = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
  } else {
    icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
  }
}

function toggleDark() {
  darkMode = !darkMode;
  localStorage.setItem('logeaseDark', JSON.stringify(darkMode));
  applyDarkMode(true);
  showToast(darkMode ? '🌙 Dark mode on' : '☀️ Light mode on');
}

/* ══════════════════════════════════════
   5. TOAST NOTIFICATION
══════════════════════════════════════ */
let toastTimer = null;
function showToast(msg, type = 'success') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.style.borderLeftColor = type === 'error' ? '#ef4444' : type === 'warn' ? '#f97316' : '#2563EB';
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

/* ══════════════════════════════════════
   6. PRODUCT CARD BUILDER
══════════════════════════════════════ */
function buildProductCard(p, isFlash = false) {
  const inWishlist = wishlist.includes(p.id);
  const stars = '⭐'.repeat(Math.min(p.rating, 5));
  const badgeMap = { bestseller: '#D4AF37', new: '#10B981', sale: '#EF4444' };
  const badgeColor = badgeMap[p.badge] || '#2563EB';

  const imgHTML = p.img
    ? `<img src="${p.img}" alt="${p.name}" class="product-real-img" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" /><div class="emoji" style="display:none">${p.emoji}</div>`
    : `<div class="emoji">${p.emoji}</div>`;

  return `
    <div class="product-card" data-id="${p.id}" data-cat="${p.cat || ''}">
      <div class="product-img-wrap">
        ${p.badge ? `<span class="product-badge" style="background:${badgeColor}">${p.badge.toUpperCase()}</span>` : ''}
        <span class="product-tag">${p.tag}</span>
        ${imgHTML}
        <div class="product-overlay">
          <button class="overlay-btn" onclick="toggleWishlist(${p.id})" title="Wishlist">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${inWishlist ? '#ef4444' : 'none'}" stroke="${inWishlist ? '#ef4444' : 'currentColor'}" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <button class="overlay-btn" onclick="quickView(${p.id})" title="Quick View">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
        </div>
        ${isFlash ? `<div class="flash-discount-badge">-${p.discount}%</div>` : ''}
      </div>
      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating">
          <span class="stars">${stars}</span>
          <span class="rating-count">(${p.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price-row">
          <span class="price-current">৳${p.price.toLocaleString()}</span>
          <span class="price-original">৳${p.original.toLocaleString()}</span>
          <span class="price-save">-${p.discount}%</span>
        </div>
        <button class="add-cart-btn" onclick="addToCart(${p.id})">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          Add to Cart
        </button>
      </div>
    </div>`;
}

/* ══════════════════════════════════════
   7. RENDER FLASH PRODUCTS
══════════════════════════════════════ */
function renderFlashProducts() {
  const grid = document.getElementById('flashProducts');
  if (!grid) return;
  grid.innerHTML = FLASH_PRODUCTS.map(p => buildProductCard(p, true)).join('');
  injectProductCardStyles();
}

/* ══════════════════════════════════════
   8. RENDER TRENDING PRODUCTS
══════════════════════════════════════ */
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  const filtered = currentFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.cat === currentFilter);
  const slice = filtered.slice(0, visibleCount);
  grid.innerHTML = slice.map(p => buildProductCard(p)).join('');

  const btn = document.querySelector('.load-more');
  if (btn) btn.style.display = filtered.length > visibleCount ? 'inline-flex' : 'none';
}

/* ══════════════════════════════════════
   9. FILTER TABS
══════════════════════════════════════ */
function filterProducts(cat, el) {
  currentFilter = cat;
  visibleCount = 8;
  renderProducts();
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
}

/* ══════════════════════════════════════
   10. LOAD MORE
══════════════════════════════════════ */
function loadMoreProducts() {
  visibleCount += 4;
  renderProducts();
}

/* ══════════════════════════════════════
   11. CART SYSTEM
══════════════════════════════════════ */
function saveCart() {
  localStorage.setItem('logeaseCart', JSON.stringify(cart));
}

function addToCart(id) {
  const product = [...PRODUCTS, ...FLASH_PRODUCTS].find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += 1;
    showToast(`✅ ${product.name} quantity updated!`);
  } else {
    cart.push({ ...product, qty: 1 });
    showToast(`🛒 ${product.name} added to cart!`);
  }
  saveCart();
  updateCartUI();
  animateCartBadge();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
  showToast('🗑️ Item removed from cart', 'warn');
}

function updateCartUI() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);

  ['cartBadge', 'cartCount'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = count;
  });

  const totalEl = document.getElementById('cartTotal');
  if (totalEl) totalEl.textContent = `৳${total.toLocaleString()}`;

  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <p>Your cart is empty</p>
        <button onclick="toggleCart()" class="btn-primary" style="margin-top:1rem;">Continue Shopping</button>
      </div>`;
    if (footerEl) footerEl.style.display = 'none';
  } else {
    itemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-img">${item.img ? `<img src="${item.img}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;" onerror="this.style.display='none'">` : item.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">৳${(item.price * item.qty).toLocaleString()}</div>
          <div style="display:flex;align-items:center;gap:8px;margin-top:6px;">
            <button onclick="changeQty(${item.id},-1)" style="width:24px;height:24px;background:var(--bg);border-radius:6px;font-weight:700;font-size:1rem;display:flex;align-items:center;justify-content:center;cursor:pointer;">−</button>
            <span style="font-size:0.85rem;font-weight:600;">${item.qty}</span>
            <button onclick="changeQty(${item.id},1)"  style="width:24px;height:24px;background:var(--bg);border-radius:6px;font-weight:700;font-size:1rem;display:flex;align-items:center;justify-content:center;cursor:pointer;">+</button>
          </div>
          <span class="cart-item-remove" onclick="removeFromCart(${item.id})">✕ Remove</span>
        </div>
      </div>`).join('');
    if (footerEl) footerEl.style.display = 'block';
  }
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { saveCart(); updateCartUI(); }
}

function toggleCart() {
  document.getElementById('cartDrawer')?.classList.toggle('open');
  document.getElementById('cartOverlay')?.classList.toggle('active');
  document.body.style.overflow = document.getElementById('cartDrawer')?.classList.contains('open') ? 'hidden' : '';
}

function animateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge) return;
  badge.style.transform = 'scale(1.5)';
  badge.style.transition = 'transform 0.2s';
  setTimeout(() => { badge.style.transform = 'scale(1)'; }, 200);
}

/* ══════════════════════════════════════
   12. WISHLIST SYSTEM
══════════════════════════════════════ */
function saveWishlist() {
  localStorage.setItem('logeaseWishlist', JSON.stringify(wishlist));
}

function toggleWishlist(id) {
  const product = [...PRODUCTS, ...FLASH_PRODUCTS].find(p => p.id === id);
  if (!product) return;
  const idx = wishlist.indexOf(id);
  if (idx === -1) {
    wishlist.push(id);
    showToast(`❤️ ${product.name} added to wishlist!`);
  } else {
    wishlist.splice(idx, 1);
    showToast(`💔 ${product.name} removed from wishlist`, 'warn');
  }
  saveWishlist();
  updateWishlistUI();
  renderProducts();
  renderFlashProducts();
}

function updateWishlistUI() {
  const badge = document.getElementById('wishlistBadge');
  if (badge) badge.textContent = wishlist.length;
}

function showWishlist() {
  if (wishlist.length === 0) {
    showToast('💔 Your wishlist is empty', 'warn');
    return;
  }
  const items = wishlist.map(id => {
    const p = [...PRODUCTS, ...FLASH_PRODUCTS].find(pr => pr.id === id);
    return p ? `${p.emoji} ${p.name} — ৳${p.price.toLocaleString()}` : '';
  }).filter(Boolean).join('\n');
  alert(`❤️ Your Wishlist (${wishlist.length} items):\n\n${items}`);
}

/* ══════════════════════════════════════
   13. QUICK VIEW MODAL
══════════════════════════════════════ */
function quickView(id) {
  const p = [...PRODUCTS, ...FLASH_PRODUCTS].find(pr => pr.id === id);
  if (!p) return;
  removeModal();
  const modal = document.createElement('div');
  modal.id = 'quickModal';
  modal.style.cssText = `
    position:fixed;inset:0;z-index:3000;display:flex;align-items:center;justify-content:center;
    background:rgba(15,23,42,0.7);backdrop-filter:blur(6px);padding:20px;
    animation:fadeIn 0.25s ease;
  `;
  const imgContent = p.img
    ? `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:16px;" onerror="this.style.display='none'" />`
    : `<div style="font-size:6rem;line-height:1;display:flex;align-items:center;justify-content:center;width:100%;height:100%">${p.emoji}</div>`;

  modal.innerHTML = `
    <div style="background:var(--white);border-radius:24px;padding:36px;max-width:560px;width:100%;position:relative;box-shadow:0 32px 80px rgba(0,0,0,0.3);display:flex;gap:24px;flex-wrap:wrap;">
      <button onclick="removeModal()" style="position:absolute;top:16px;right:16px;width:36px;height:36px;border-radius:10px;background:var(--bg);font-size:1rem;display:flex;align-items:center;justify-content:center;cursor:pointer;border:none;">✕</button>
      <div style="width:180px;height:180px;border-radius:16px;overflow:hidden;background:var(--bg);flex-shrink:0;">${imgContent}</div>
      <div style="flex:1;min-width:200px;">
        <h2 style="font-family:var(--font-heading);font-size:1.3rem;font-weight:800;color:var(--text);margin-bottom:8px;">${p.name}</h2>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;">
          <span>${'⭐'.repeat(p.rating)}</span>
          <span style="font-size:0.82rem;color:var(--text-light)">(${p.reviews.toLocaleString()} reviews)</span>
        </div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;">
          <span style="font-size:1.6rem;font-weight:900;color:var(--secondary);font-family:var(--font-heading)">৳${p.price.toLocaleString()}</span>
          <span style="text-decoration:line-through;color:var(--text-light);font-size:1rem;">৳${p.original.toLocaleString()}</span>
          <span style="background:#fef2f2;color:#ef4444;padding:4px 12px;border-radius:20px;font-weight:700;font-size:0.85rem;">-${p.discount}%</span>
        </div>
        <button onclick="addToCart(${p.id});removeModal();" style="width:100%;padding:14px;border-radius:14px;background:linear-gradient(135deg,var(--secondary),#1d4ed8);color:#fff;font-size:1rem;font-weight:700;cursor:pointer;border:none;font-family:var(--font-body);">
          🛒 Add to Cart
        </button>
      </div>
    </div>`;
  modal.addEventListener('click', e => { if (e.target === modal) removeModal(); });
  document.body.appendChild(modal);
}

function removeModal() {
  document.getElementById('quickModal')?.remove();
}

/* ══════════════════════════════════════
   14. COUNTDOWN TIMER
══════════════════════════════════════ */
function initCountdown() {
  const stored = localStorage.getItem('logeaseFlashEnd');
  const now = Date.now();
  if (stored && parseInt(stored) > now) {
    flashEndTime = parseInt(stored);
  } else {
    flashEndTime = now + (23 * 3600 + 59 * 60 + 59) * 1000;
    localStorage.setItem('logeaseFlashEnd', flashEndTime);
  }
  tickCountdown();
  setInterval(tickCountdown, 1000);
}

function tickCountdown() {
  const diff = flashEndTime - Date.now();
  if (diff <= 0) {
    flashEndTime = Date.now() + (23 * 3600 + 59 * 60 + 59) * 1000;
    localStorage.setItem('logeaseFlashEnd', flashEndTime);
    return;
  }
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  const fmt = n => String(n).padStart(2, '0');
  const el = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = fmt(val); };
  el('cdHours', h);
  el('cdMinutes', m);
  el('cdSeconds', s);
}

/* ══════════════════════════════════════
   15. ANIMATED COUNTERS
══════════════════════════════════════ */
function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.counter').forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target) || 0;
  const duration = 1800;
  const step = 16;
  const increment = target / (duration / step);
  let current = 0;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = formatCounterValue(target);
      clearInterval(timer);
    } else {
      el.textContent = formatCounterValue(Math.floor(current));
    }
  }, step);
}

function formatCounterValue(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace('.0', '');
  if (n >= 1000)    return (n / 1000).toFixed(0);
  return n.toLocaleString();
}

/* ══════════════════════════════════════
   16. HERO PARTICLES
══════════════════════════════════════ */
function initParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      width:${2 + Math.random() * 4}px;
      height:${2 + Math.random() * 4}px;
      animation-delay:${Math.random() * 8}s;
      animation-duration:${6 + Math.random() * 6}s;
      opacity:${0.2 + Math.random() * 0.5};
    `;
    container.appendChild(p);
  }
}

/* ══════════════════════════════════════
   17. HERO SLIDER
══════════════════════════════════════ */
let currentSlide = 0;
let slideTotal   = 0;
let sliderTimer  = null;

function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  slideTotal = slides.length;
  if (!slideTotal) return;
  goToSlide(0);
  startSliderAuto();

  // Sidebar category click → change slide
  document.querySelectorAll('.sidebar-list li[data-slide]').forEach(li => {
    li.addEventListener('click', e => {
      e.preventDefault();
      const idx = parseInt(li.dataset.slide);
      stopSliderAuto();
      goToSlide(idx);
      startSliderAuto();
    });
    // Also trigger on hover (mouseenter)
    li.addEventListener('mouseenter', () => {
      const idx = parseInt(li.dataset.slide);
      stopSliderAuto();
      goToSlide(idx);
      startSliderAuto();
    });
  });

  // Touch / swipe support
  let touchStartX = 0;
  const slider = document.getElementById('heroSlider');
  if (slider) {
    slider.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
    slider.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) slideHero(diff > 0 ? 1 : -1);
    });
  }
}

function goToSlide(n) {
  const slides  = document.querySelectorAll('.hero-slide');
  const dots    = document.querySelectorAll('.slider-dot');
  const sideItems = document.querySelectorAll('.sidebar-list li[data-slide]');
  if (!slides.length) return;

  slides[currentSlide]?.classList.remove('active');
  dots[currentSlide]?.classList.remove('active');
  sideItems[currentSlide]?.classList.remove('sb-active');

  currentSlide = (n + slideTotal) % slideTotal;

  slides[currentSlide]?.classList.add('active');
  dots[currentSlide]?.classList.add('active');
  sideItems[currentSlide]?.classList.add('sb-active');
}

function slideHero(dir) {
  stopSliderAuto();
  goToSlide(currentSlide + dir);
  startSliderAuto();
}

function startSliderAuto() {
  stopSliderAuto();
  sliderTimer = setInterval(() => goToSlide(currentSlide + 1), 2000);
}

function stopSliderAuto() {
  clearInterval(sliderTimer);
}

/* ══════════════════════════════════════
   19. SCROLL EFFECTS
══════════════════════════════════════ */
function initScrollEffects() {
  window.addEventListener('scroll', onScroll, { passive: true });
}

function onScroll() {
  const y = window.scrollY;
  const header = document.getElementById('mainHeader');
  if (header) header.classList.toggle('scrolled', y > 60);
  const btt = document.getElementById('backToTop');
  if (btt) btt.classList.toggle('visible', y > 400);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ══════════════════════════════════════
   18. AOS (Animate On Scroll)
══════════════════════════════════════ */
function initAOS() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('animated'), parseInt(delay));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════
   19. LIVE SEARCH
══════════════════════════════════════ */
function setupSearchListener() {
  const input = document.getElementById('searchInput');
  const dropdown = document.getElementById('searchDropdown');
  if (!input || !dropdown) return;

  input.addEventListener('input', debounce(() => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) { dropdown.classList.remove('active'); return; }
    const results = [...PRODUCTS, ...FLASH_PRODUCTS].filter(p =>
      p.name.toLowerCase().includes(q)
    ).slice(0, 6);
    if (!results.length) {
      dropdown.innerHTML = `<div class="search-item" style="color:var(--text-light);">No products found for "${q}"</div>`;
    } else {
      dropdown.innerHTML = results.map(p => `
        <div class="search-item" onclick="selectSearchResult(${p.id})">
          <span style="font-size:1.5rem;">${p.img ? `<img src="${p.img}" style="width:36px;height:36px;object-fit:cover;border-radius:8px;" onerror="this.style.display='none'">` : p.emoji}</span>
          <div>
            <div style="font-weight:600;font-size:0.88rem;">${highlight(p.name, q)}</div>
            <div style="font-size:0.78rem;color:var(--text-light);">৳${p.price.toLocaleString()}</div>
          </div>
        </div>`).join('');
    }
    dropdown.classList.add('active');
  }, 220));

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap')) dropdown.classList.remove('active');
  });
}

function highlight(text, query) {
  const re = new RegExp(`(${query})`, 'gi');
  return text.replace(re, '<mark style="background:rgba(249,115,22,0.2);color:var(--accent);border-radius:2px;">$1</mark>');
}

function handleSearch() {
  const q = document.getElementById('searchInput')?.value.trim();
  if (!q) return;
  showToast(`🔍 Searching for "${q}"...`);
  document.getElementById('searchDropdown')?.classList.remove('active');
  currentFilter = 'all';
  visibleCount = 16;
  renderProducts();
  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function selectSearchResult(id) {
  document.getElementById('searchDropdown')?.classList.remove('active');
  quickView(id);
}

function debounce(fn, delay) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), delay); };
}

/* ══════════════════════════════════════
   20. MOBILE MENU
══════════════════════════════════════ */
function toggleMobileMenu() {
  const nav = document.getElementById('mobileNav');
  const btn = document.getElementById('mobileMenuBtn');
  if (!nav || !btn) return;
  const open = nav.classList.toggle('open');
  btn.classList.toggle('active', open);
  const spans = btn.querySelectorAll('span');
  if (open) {
    spans[0].style.cssText = 'transform:rotate(45deg) translate(5px,5px)';
    spans[1].style.cssText = 'opacity:0;transform:scaleX(0)';
    spans[2].style.cssText = 'transform:rotate(-45deg) translate(5px,-5px)';
  } else {
    spans.forEach(s => s.style.cssText = '');
  }
}

/* ══════════════════════════════════════
   22. NEWSLETTER
══════════════════════════════════════ */
function handleNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  const email = input?.value?.trim();
  if (!email) return;
  showToast(`🎉 Thank you! "${email}" subscribed successfully!`);
  if (input) input.value = '';
}

/* ══════════════════════════════════════
   23. INJECT PRODUCT CARD STYLES
══════════════════════════════════════ */
function injectProductCardStyles() {
  if (document.getElementById('productCardStyles')) return;
  const style = document.createElement('style');
  style.id = 'productCardStyles';
  style.textContent = `
    .product-card {
      background: var(--white);
      border-radius: var(--radius-lg);
      overflow: hidden;
      border: 1px solid var(--border);
      transition: var(--transition);
      position: relative;
    }
    .product-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-lg);
      border-color: transparent;
    }
    .product-img-wrap {
      height: 220px;
      background: var(--bg);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }
    .product-real-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.45s ease;
      display: block;
    }
    .product-card:hover .product-real-img { transform: scale(1.07); }
    .product-img-wrap .emoji {
      font-size: 5rem;
      transition: transform 0.35s ease;
      user-select: none;
    }
    .product-card:hover .emoji { transform: scale(1.12) rotate(-3deg); }
    .product-badge {
      position: absolute; top: 12px; left: 12px;
      color: #fff; padding: 3px 10px; border-radius: 20px;
      font-size: 0.65rem; font-weight: 800; letter-spacing: 0.06em; z-index: 2;
    }
    .product-tag {
      position: absolute; top: 12px; right: 12px;
      background: rgba(15,23,42,0.75); color: #fff;
      padding: 3px 10px; border-radius: 20px;
      font-size: 0.68rem; font-weight: 700; z-index: 2;
      backdrop-filter: blur(4px);
    }
    .flash-discount-badge {
      position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%);
      background: #EF4444; color: #fff;
      padding: 4px 14px; border-radius: 20px;
      font-size: 0.8rem; font-weight: 800; z-index: 2;
    }
    .product-overlay {
      position: absolute; inset: 0;
      background: rgba(15,23,42,0.08);
      display: flex; align-items: flex-end; justify-content: flex-end;
      gap: 8px; padding: 12px;
      opacity: 0; transition: opacity 0.25s;
    }
    .product-card:hover .product-overlay { opacity: 1; }
    .overlay-btn {
      width: 36px; height: 36px; background: var(--white);
      border-radius: 10px; display: flex; align-items: center; justify-content: center;
      color: var(--text); box-shadow: var(--shadow); cursor: pointer;
      transition: var(--transition); border: none;
    }
    .overlay-btn:hover { background: var(--secondary); color: #fff; transform: scale(1.1); }
    .product-info { padding: 16px; }
    .product-name {
      font-size: 0.9rem; font-weight: 700; color: var(--text);
      margin-bottom: 8px; line-height: 1.4;
      display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
    }
    .product-rating { display: flex; align-items: center; gap: 6px; margin-bottom: 10px; }
    .stars { font-size: 0.72rem; letter-spacing: -1px; }
    .rating-count { font-size: 0.75rem; color: var(--text-light); }
    .product-price-row { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; flex-wrap: wrap; }
    .price-current { font-size: 1.05rem; font-weight: 900; color: var(--secondary); font-family: var(--font-heading); }
    .price-original { font-size: 0.8rem; text-decoration: line-through; color: var(--text-light); }
    .price-save { font-size: 0.72rem; background: rgba(239,68,68,0.1); color: #ef4444; padding: 2px 8px; border-radius: 20px; font-weight: 700; }
    .add-cart-btn {
      width: 100%; padding: 10px 0; border-radius: 10px;
      background: linear-gradient(135deg, var(--secondary), #1d4ed8);
      color: #fff; font-size: 0.82rem; font-weight: 700;
      display: flex; align-items: center; justify-content: center; gap: 6px;
      border: none; cursor: pointer; transition: var(--transition);
      font-family: var(--font-body);
    }
    .add-cart-btn:hover { background: linear-gradient(135deg, #1d4ed8, var(--accent)); transform: translateY(-1px); }
    .add-cart-btn:active { transform: translateY(0); }
    .products-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }
    @media (max-width: 1280px) { .products-grid { grid-template-columns: repeat(3, 1fr); } }
    @media (max-width: 768px)  { .products-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; } }
    @media (max-width: 480px)  { .products-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; } .product-img-wrap { height: 160px; } .product-img-wrap .emoji { font-size: 3.5rem; } .product-info { padding: 12px; } .price-current { font-size: 0.95rem; } .add-cart-btn { font-size: 0.72rem; padding: 8px 0; } }
    @keyframes fadeIn { from { opacity:0; transform:scale(0.96); } to { opacity:1; transform:scale(1); } }
    .filter-tab { padding: 8px 20px; border-radius: 25px; border: 2px solid var(--border); background: transparent; font-size: 0.85rem; font-weight: 600; color: var(--text); cursor: pointer; transition: var(--transition); font-family: var(--font-body); }
    .filter-tab:hover { border-color: var(--secondary); color: var(--secondary); }
    .filter-tab.active { background: linear-gradient(135deg, var(--secondary), #1d4ed8); border-color: transparent; color: #fff; }
    .filter-tabs { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-bottom: 36px; }
    .load-more-wrap { text-align: center; margin-top: 40px; }
  `;
  document.head.appendChild(style);
}

/* ══════════════════════════════════════
   24. KEYBOARD NAVIGATION
══════════════════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    removeModal();
    const drawer = document.getElementById('cartDrawer');
    if (drawer?.classList.contains('open')) toggleCart();
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav?.classList.contains('open')) toggleMobileMenu();
  }
});

/* ══════════════════════════════════════
   25. PAGE VISIBILITY — pause timers
══════════════════════════════════════ */
document.addEventListener('visibilitychange', () => {
  const track = document.getElementById('brandsTrack');
  if (!track) return;
  track.style.animationPlayState = document.hidden ? 'paused' : 'running';
});

/* ══════════════════════════════════════
   26. UTILITY — smooth reveal on load
══════════════════════════════════════ */
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.4s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });
  injectProductCardStyles();
});

/* ══════════════════════════════════════
   AUTH SYSTEM
══════════════════════════════════════ */
let currentUser = JSON.parse(localStorage.getItem('logeaseUser') || 'null');

// Init auth state on load
document.addEventListener('DOMContentLoaded', () => {
  updateAuthUI();
  // Close dropdown on outside click
  document.addEventListener('click', e => {
    const btn = document.getElementById('userBtn');
    const dd = document.getElementById('userDropdown');
    if (dd && btn && !btn.contains(e.target) && !dd.contains(e.target)) {
      dd.style.display = 'none';
    }
  });
});

function openAuthModal(tab = 'login') {
  if (currentUser) {
    // If logged in, toggle dropdown instead
    const dd = document.getElementById('userDropdown');
    if (dd) dd.style.display = dd.style.display === 'block' ? 'none' : 'block';
    return;
  }
  document.getElementById('authOverlay').classList.add('open');
  document.getElementById('authModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  switchTab(tab);
}

function closeAuthModal() {
  document.getElementById('authOverlay').classList.remove('open');
  document.getElementById('authModal').classList.remove('open');
  document.body.style.overflow = '';
}

function switchTab(tab) {
  const isLogin = tab === 'login';
  document.getElementById('tabLogin').classList.toggle('active', isLogin);
  document.getElementById('tabRegister').classList.toggle('active', !isLogin);
  document.getElementById('panelLogin').style.display = isLogin ? 'block' : 'none';
  document.getElementById('panelRegister').style.display = isLogin ? 'none' : 'block';
}

function togglePassword(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const isText = input.type === 'text';
  input.type = isText ? 'password' : 'text';
  btn.innerHTML = isText
    ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`
    : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
}

function checkPasswordStrength(pass) {
  const fill = document.getElementById('strengthFill');
  const label = document.getElementById('strengthLabel');
  if (!fill || !label) return;
  let score = 0;
  if (pass.length >= 8) score++;
  if (/[A-Z]/.test(pass)) score++;
  if (/[0-9]/.test(pass)) score++;
  if (/[^A-Za-z0-9]/.test(pass)) score++;
  const configs = [
    { w: '0%',   color: '#e2e8f0', text: '' },
    { w: '25%',  color: '#ef4444', text: 'Weak' },
    { w: '50%',  color: '#f97316', text: 'Fair' },
    { w: '75%',  color: '#eab308', text: 'Good' },
    { w: '100%', color: '#22c55e', text: 'Strong' },
  ];
  const cfg = configs[score];
  fill.style.width = cfg.w;
  fill.style.background = cfg.color;
  label.textContent = cfg.text;
  label.style.color = cfg.color;
}

function handleLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPassword').value;
  if (!email || !pass) { showToast('⚠️ Please fill in all fields', 'warn'); return; }
  if (!isValidEmail(email)) { showToast('⚠️ Enter a valid email', 'warn'); return; }
  if (pass.length < 4) { showToast('⚠️ Password too short', 'warn'); return; }
  // Simulate login
  const name = email.split('@')[0];
  loginUser({ name: capitalize(name), email });
}

function handleRegister() {
  const first   = document.getElementById('regFirst').value.trim();
  const last    = document.getElementById('regLast').value.trim();
  const email   = document.getElementById('regEmail').value.trim();
  const phone   = document.getElementById('regPhone').value.trim();
  const pass    = document.getElementById('regPassword').value;
  const confirm = document.getElementById('regConfirm').value;
  const agreed  = document.getElementById('agreeTerms').checked;
  if (!first || !email || !pass) { showToast('⚠️ Please fill in required fields', 'warn'); return; }
  if (!isValidEmail(email)) { showToast('⚠️ Enter a valid email', 'warn'); return; }
  if (pass.length < 8) { showToast('⚠️ Password must be at least 8 characters', 'warn'); return; }
  if (pass !== confirm) { showToast('⚠️ Passwords do not match', 'warn'); return; }
  if (!agreed) { showToast('⚠️ Please agree to Terms & Conditions', 'warn'); return; }
  loginUser({ name: `${first} ${last}`.trim(), email, phone });
}

function loginUser(user) {
  currentUser = user;
  localStorage.setItem('logeaseUser', JSON.stringify(user));
  updateAuthUI();
  closeAuthModal();
  showToast(`🎉 Welcome, ${user.name.split(' ')[0]}!`);
}

function logoutUser() {
  currentUser = null;
  localStorage.removeItem('logeaseUser');
  updateAuthUI();
  document.getElementById('userDropdown').style.display = 'none';
  showToast('👋 Logged out successfully');
}

function socialLogin(provider) {
  const user = { name: 'Demo User', email: `demo@${provider.toLowerCase()}.com` };
  loginUser(user);
}

function showForgotPassword() {
  closeAuthModal();
  setTimeout(() => showToast('📧 Password reset link sent! (demo)', 'warn'), 200);
}

function updateAuthUI() {
  const btn = document.getElementById('userBtn');
  const dd  = document.getElementById('userDropdown');
  if (!btn) return;
  if (currentUser) {
    const initials = currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2);
    btn.innerHTML = `<div class="user-avatar-sm">${initials}</div>`;
    if (dd) {
      document.getElementById('dropdownAvatar').textContent = initials;
      document.getElementById('dropdownName').textContent = currentUser.name;
      document.getElementById('dropdownEmail').textContent = currentUser.email;
      dd.style.display = 'none';
    }
  } else {
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
    if (dd) dd.style.display = 'none';
  }
}

// ESC key close auth modal
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeAuthModal();
});

function isValidEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }
function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
/* ══════════════════════════════════════
   PAYMENT MODAL SYSTEM
══════════════════════════════════════ */
let selectedPayMethod = null;

// Open payment modal
function openPaymentModal() {
  if (cart.length === 0) {
    showToast('🛒 Your cart is empty!', 'warn');
    return;
  }
  // ── Login required ──
  if (!currentUser) {
    // Close cart drawer first
    const drawer = document.getElementById('cartDrawer');
    if (drawer?.classList.contains('open')) toggleCart();
    setTimeout(() => {
      openAuthModal('login');
      showToast('🔒 Please login to proceed to checkout', 'warn');
    }, 300);
    return;
  }
  const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const count = cart.reduce((sum, i) => sum + i.qty, 0);

  document.getElementById('pmItemCount').textContent = count + ' item(s)';
  document.getElementById('pmOrderTotal').textContent = '৳' + total.toLocaleString();

  // Reset to step 1
  pmGoToPanel('pmPanel1');
  updatePmSteps(1);
  selectedPayMethod = null;
  document.querySelectorAll('.pm-method-card').forEach(c => c.classList.remove('selected'));

  document.getElementById('paymentOverlay').classList.add('open');
  document.getElementById('paymentModal').classList.add('open');
  document.body.style.overflow = 'hidden';

  // Setup method card click events
  document.querySelectorAll('.pm-method-card').forEach(card => {
    card.onclick = () => {
      document.querySelectorAll('.pm-method-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedPayMethod = card.dataset.method;
    };
  });
}

function closePaymentModal() {
  document.getElementById('paymentOverlay').classList.remove('open');
  document.getElementById('paymentModal').classList.remove('open');
  document.body.style.overflow = '';
}

// Step navigation helpers
function pmGoToPanel(panelId) {
  ['pmPanel1','pmPanel2','pmPanel3','pmPanelSuccess'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
  const target = document.getElementById(panelId);
  if (target) target.style.display = 'block';
}

function updatePmSteps(active) {
  [1,2,3].forEach(n => {
    const el = document.getElementById('pmStep' + n);
    if (!el) return;
    el.classList.remove('active','done');
    if (n < active) el.classList.add('done');
    else if (n === active) el.classList.add('active');
  });
  // Step lines
  document.querySelectorAll('.pm-step-line').forEach((line, i) => {
    line.classList.toggle('done', active > i + 1);
  });
}

function pmGoToStep1() {
  pmGoToPanel('pmPanel1');
  updatePmSteps(1);
}

function pmGoToStep2() {
  if (!selectedPayMethod) {
    showToast('⚠️ Please select a payment method', 'warn');
    return;
  }
  pmGoToPanel('pmPanel2');
  updatePmSteps(2);
  loadPaymentFields();
}

function pmGoToStep3() {
  // Validate
  const name = document.getElementById('pmFullName')?.value?.trim();
  const phone = document.getElementById('pmPhone')?.value?.trim();
  const address = document.getElementById('pmAddress')?.value?.trim();
  if (!name || !phone || !address) {
    showToast('⚠️ Please fill in delivery details', 'warn');
    return;
  }
  if (selectedPayMethod === 'bkash' || selectedPayMethod === 'nagad' || selectedPayMethod === 'rocket') {
    const mobileNum = document.getElementById('pmMobileNum')?.value?.trim();
    const trxId = document.getElementById('pmTrxId')?.value?.trim();
    if (!mobileNum || !trxId) {
      showToast('⚠️ Please enter your number and TrxID', 'warn');
      return;
    }
  }
  if (selectedPayMethod === 'card') {
    const cardNum = document.getElementById('pmCardNum')?.value?.trim();
    const expiry = document.getElementById('pmExpiry')?.value?.trim();
    const cvv = document.getElementById('pmCvv')?.value?.trim();
    const cardName = document.getElementById('pmCardName')?.value?.trim();
    if (!cardNum || !expiry || !cvv || !cardName) {
      showToast('⚠️ Please fill in all card details', 'warn');
      return;
    }
  }

  pmGoToPanel('pmPanel3');
  updatePmSteps(3);
  buildConfirmBox();
}

function loadPaymentFields() {
  // Hide all
  ['pmMobileFields','pmCardFields','pmCodFields'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });

  const methodConfig = {
    bkash:  { color: '#E2136E', label: 'bKash', merchant: '01700-000000 (bKash)' },
    nagad:  { color: '#F6821F', label: 'Nagad', merchant: '01700-000000 (Nagad)' },
    rocket: { color: '#8C3494', label: 'Rocket', merchant: '01700-000000 (Rocket)' },
  };

  if (methodConfig[selectedPayMethod]) {
    const cfg = methodConfig[selectedPayMethod];
    document.getElementById('pmMobileFields').style.display = 'block';
    document.getElementById('pmMethodLabel').textContent = cfg.label;
    document.getElementById('pmMerchantNum').textContent = cfg.merchant;
    const banner = document.getElementById('pmMethodBanner');
    banner.style.background = 'linear-gradient(135deg, ' + cfg.color + ', ' + cfg.color + 'cc)';
    banner.textContent = '💳 ' + cfg.label + ' Payment Selected';
  } else if (selectedPayMethod === 'card') {
    document.getElementById('pmCardFields').style.display = 'block';
  } else if (selectedPayMethod === 'cod') {
    document.getElementById('pmCodFields').style.display = 'block';
  }
}

function buildConfirmBox() {
  const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  const name = document.getElementById('pmFullName')?.value?.trim();
  const phone = document.getElementById('pmPhone')?.value?.trim();
  const address = document.getElementById('pmAddress')?.value?.trim();

  const methodNames = {
    bkash: '💳 bKash', nagad: '💳 Nagad',
    rocket: '💳 Rocket', card: '💳 Card', cod: '💵 Cash on Delivery'
  };

  const items = cart.map(i => `${i.name} × ${i.qty}`).join(', ');

  const html = `
    <div class="pm-confirm-row"><span class="label">Items (${count})</span><span class="val">${items}</span></div>
    <div class="pm-confirm-row"><span class="label">Payment</span><span class="val">${methodNames[selectedPayMethod] || selectedPayMethod}</span></div>
    <div class="pm-confirm-row"><span class="label">Recipient</span><span class="val">${name}</span></div>
    <div class="pm-confirm-row"><span class="label">Phone</span><span class="val">${phone}</span></div>
    <div class="pm-confirm-row"><span class="label">Address</span><span class="val">${address}</span></div>
    <div class="pm-confirm-row total-row"><span class="label">Total Amount</span><span class="val">৳${total.toLocaleString()}</span></div>
  `;
  document.getElementById('pmConfirmBox').innerHTML = html;
}

function placeOrder() {
  const btn = document.getElementById('pmPlaceBtn');
  btn.disabled = true;
  btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/></svg> Processing...';
  btn.style.opacity = '0.7';

  setTimeout(() => {
    // Generate order ID
    const orderId = 'LE-' + Date.now().toString().slice(-6) + '-' + Math.floor(Math.random() * 1000);
    document.getElementById('pmOrderId').textContent = orderId;

    // Clear cart
    cart = [];
    saveCart();
    updateCartUI();

    // Show success
    pmGoToPanel('pmPanelSuccess');
    // Reset button
    btn.disabled = false;
    btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Place Order Now';
    btn.style.opacity = '1';

    showToast('🎉 Order placed successfully!');
  }, 1800);
}

// Card number formatter: 0000 0000 0000 0000
function formatCardNum(input) {
  let v = input.value.replace(/\D/g, '').slice(0, 16);
  input.value = v.replace(/(.{4})/g, '$1 ').trim();
}

// Expiry formatter: MM / YY
function formatExpiry(input) {
  let v = input.value.replace(/\D/g, '').slice(0, 4);
  if (v.length >= 3) v = v.slice(0,2) + ' / ' + v.slice(2);
  input.value = v;
}

// Close on ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closePaymentModal();
});

/* ══════════════════════════════════════
   PROFILE MODAL SYSTEM
══════════════════════════════════════ */
let orderHistory = JSON.parse(localStorage.getItem('logeaseOrders') || '[]');

function openProfileModal(tab = 'profile') {
  if (!currentUser) { openAuthModal('login'); return; }

  // Close user dropdown
  const dd = document.getElementById('userDropdown');
  if (dd) dd.style.display = 'none';

  // Fill sidebar info
  const initials = currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2);
  const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setTxt('sidebarAvatar', initials);
  setTxt('sidebarName', currentUser.name);
  setTxt('sidebarEmail', currentUser.email || '');
  setTxt('profileAvatar', initials);
  setTxt('profileName', currentUser.name);
  setTxt('profileEmail', currentUser.email || '—');
  setTxt('profilePhone', currentUser.phone || 'Not set');
  setTxt('profileJoined', currentUser.joinedDate || new Date().toLocaleDateString('en-BD', { year:'numeric', month:'long' }));
  setTxt('statOrders', orderHistory.length);
  setTxt('statWishlist', wishlist.length);
  setTxt('ordersNavCount', orderHistory.length);
  setTxt('wishlistNavCount', wishlist.length);
  setTxt('udWishlistCount', wishlist.length);

  switchProfileTab(tab);

  document.getElementById('profileOverlay').classList.add('open');
  document.getElementById('profileModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProfileModal() {
  document.getElementById('profileOverlay').classList.remove('open');
  document.getElementById('profileModal').classList.remove('open');
  document.body.style.overflow = '';
}

function switchProfileTab(tab) {
  // Nav items
  document.querySelectorAll('.pm-nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.tab === tab);
  });
  // Tab contents
  ['profile','orders','wishlist'].forEach(t => {
    const el = document.getElementById('tab' + t.charAt(0).toUpperCase() + t.slice(1));
    if (el) el.style.display = t === tab ? 'block' : 'none';
  });
  if (tab === 'orders') renderProfileOrders();
  if (tab === 'wishlist') renderProfileWishlist();
}

function renderProfileOrders() {
  const container = document.getElementById('ordersContainer');
  if (!container) return;
  if (orderHistory.length === 0) {
    container.innerHTML = `<div class="pm-empty-state"><div>📦</div><p>No orders yet. Start shopping!</p></div>`;
    return;
  }
  container.innerHTML = orderHistory.slice().reverse().map(order => `
    <div class="pm-order-card">
      <div class="pm-order-card-header">
        <div class="pm-order-id-text">Order <strong>${order.id}</strong></div>
        <span class="pm-order-status status-${order.status.toLowerCase()}">${order.status}</span>
      </div>
      <div class="pm-order-items">${order.items}</div>
      <div class="pm-order-footer">
        <div class="pm-order-total-text">৳${order.total.toLocaleString()}</div>
        <div class="pm-order-date">${order.date}</div>
      </div>
    </div>`).join('');
}

function renderProfileWishlist() {
  const container = document.getElementById('wishlistContainer');
  if (!container) return;
  if (wishlist.length === 0) {
    container.innerHTML = `<div class="pm-empty-state"><div>💔</div><p>Your wishlist is empty.</p></div>`;
    return;
  }
  const items = wishlist.map(id => [...PRODUCTS, ...FLASH_PRODUCTS].find(p => p.id === id)).filter(Boolean);
  container.innerHTML = `<div class="pm-wishlist-grid">` + items.map(p => `
    <div class="pm-wl-card">
      <div class="pm-wl-img">
        ${p.img ? `<img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'">` : p.emoji}
      </div>
      <div class="pm-wl-info">
        <div class="pm-wl-name">${p.name}</div>
        <div class="pm-wl-price">৳${p.price.toLocaleString()}</div>
        <div class="pm-wl-actions">
          <button class="pm-wl-cart-btn" onclick="addToCart(${p.id}); showToast('🛒 Added to cart!')">Add to Cart</button>
          <button class="pm-wl-remove-btn" onclick="toggleWishlist(${p.id}); renderProfileWishlist(); document.getElementById('wishlistNavCount').textContent = wishlist.length; document.getElementById('udWishlistCount').textContent = wishlist.length;">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </div>`).join('') + `</div>`;
}

// Override loginUser to save join date and update wishlist badge
const _origLoginUser = loginUser;
loginUser = function(user) {
  if (!user.joinedDate) user.joinedDate = new Date().toLocaleDateString('en-BD', { year:'numeric', month:'long' });
  _origLoginUser(user);
  const el = document.getElementById('udWishlistCount');
  if (el) el.textContent = wishlist.length;
};

// Override placeOrder to save to order history
const _origPlaceOrder = placeOrder;
placeOrder = function() {
  const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const items = cart.map(i => `${i.name} ×${i.qty}`).join(', ');
  const orderId = 'LE-' + Date.now().toString().slice(-6) + '-' + Math.floor(Math.random() * 1000);

  const btn = document.getElementById('pmPlaceBtn');
  if (btn) { btn.disabled = true; btn.style.opacity = '0.7'; btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/></svg> Processing...'; }

  setTimeout(() => {
    // Save order
    orderHistory.push({
      id: orderId,
      items: items,
      total: total,
      date: new Date().toLocaleDateString('en-BD', { year:'numeric', month:'short', day:'numeric' }),
      status: 'Processing',
      method: selectedPayMethod
    });
    localStorage.setItem('logeaseOrders', JSON.stringify(orderHistory));

    // Show success
    document.getElementById('pmOrderId').textContent = orderId;
    cart = []; saveCart(); updateCartUI();
    pmGoToPanel('pmPanelSuccess');

    if (btn) { btn.disabled = false; btn.style.opacity = '1'; btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Place Order Now'; }
    showToast('🎉 Order placed successfully!');
  }, 1800);
};

// ESC key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeProfileModal();
});