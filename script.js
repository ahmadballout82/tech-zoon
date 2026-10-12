// =========================================
// Tech Zone
// script.js
// =========================================

const products = [
  {
    id: 1,
    name: "هاتف Galaxy S24 Ultra",
    category: "phones",
    categoryName: "الهواتف الذكية",
    price: 899,
    oldPrice: 999,
    rating: 4.9,
    badge: "خصم 10%",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85",
    description: "هاتف ذكي متطور بشاشة كبيرة وأداء قوي وكاميرا عالية الجودة للاستخدام اليومي والعمل والترفيه",
    features: [
      "شاشة عالية الدقة",
      "كاميرا متطورة",
      "بطارية تدوم طويلًا",
      "أداء سريع وقوي"
    ]
  },
  {
    id: 2,
    name: "هاتف iPhone Pro",
    category: "phones",
    categoryName: "الهواتف الذكية",
    price: 949,
    oldPrice: 1049,
    rating: 4.8,
    badge: "الأكثر مبيعًا",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=85",
    description: "هاتف بتصميم أنيق وأداء سريع وكاميرات احترافية وتجربة استخدام مميزة",
    features: [
      "تصميم فاخر",
      "كاميرا احترافية",
      "أداء سريع",
      "نظام حماية متقدم"
    ]
  },
  {
    id: 3,
    name: "لابتوب MacBook Pro",
    category: "laptops",
    categoryName: "اللابتوبات",
    price: 1299,
    oldPrice: 1449,
    rating: 4.9,
    badge: "عرض خاص",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85",
    description: "لابتوب احترافي مناسب للعمل والتصميم والدراسة مع أداء قوي وشاشة واضحة",
    features: [
      "أداء احترافي",
      "شاشة عالية الجودة",
      "بطارية طويلة",
      "تصميم خفيف وأنيق"
    ]
  },
  {
    id: 4,
    name: "لابتوب للعمل والدراسة",
    category: "laptops",
    categoryName: "اللابتوبات",
    price: 649,
    oldPrice: 729,
    rating: 4.6,
    badge: "جديد",
    badgeClass: "new",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85",
    description: "لابتوب عملي للاستخدام اليومي والدراسة والأعمال المكتبية وتصفح الإنترنت",
    features: [
      "شاشة واضحة",
      "لوحة مفاتيح مريحة",
      "تخزين سريع",
      "مناسب للعمل والدراسة"
    ]
  },
  {
    id: 5,
    name: "ساعة ذكية Series Pro",
    category: "watches",
    categoryName: "الساعات الذكية",
    price: 179,
    oldPrice: 219,
    rating: 4.7,
    badge: "خصم 18%",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    description: "ساعة ذكية لمتابعة نشاطك اليومي والإشعارات مع تصميم عصري ومريح",
    features: [
      "متابعة النشاط اليومي",
      "إشعارات الهاتف",
      "تصميم مقاوم للماء",
      "بطارية طويلة"
    ]
  },
  {
    id: 6,
    name: "ساعة رياضية ذكية",
    category: "watches",
    categoryName: "الساعات الذكية",
    price: 129,
    oldPrice: null,
    rating: 4.5,
    badge: "جديد",
    badgeClass: "new",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=85",
    description: "ساعة ذكية رياضية مناسبة للتمارين والحياة اليومية مع مجموعة من المزايا العملية",
    features: [
      "تتبع التمارين",
      "قياس النشاط",
      "شاشة ملونة",
      "مقاومة للماء"
    ]
  },
  {
    id: 7,
    name: "سماعات رأس لاسلكية",
    category: "audio",
    categoryName: "السماعات",
    price: 89,
    oldPrice: 119,
    rating: 4.8,
    badge: "خصم 25%",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
    description: "سماعات لاسلكية بصوت واضح وتصميم مريح للاستماع للموسيقى والعمل والمكالمات",
    features: [
      "اتصال لاسلكي",
      "صوت عالي الجودة",
      "تصميم مريح",
      "بطارية طويلة"
    ]
  },
  {
    id: 8,
    name: "سماعات Earbuds Pro",
    category: "audio",
    categoryName: "السماعات",
    price: 69,
    oldPrice: 85,
    rating: 4.6,
    badge: "عرض",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85",
    description: "سماعات أذن صغيرة لاسلكية مناسبة للمكالمات والموسيقى والاستخدام اليومي",
    features: [
      "حجم صغير",
      "شحن سريع",
      "ميكروفون للمكالمات",
      "اتصال ثابت"
    ]
  },
  {
    id: 9,
    name: "لوحة مفاتيح ميكانيكية",
    category: "accessories",
    categoryName: "الإكسسوارات",
    price: 59,
    oldPrice: 75,
    rating: 4.7,
    badge: "خصم",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
    description: "لوحة مفاتيح ميكانيكية بتصميم أنيق واستجابة سريعة مناسبة للعمل والألعاب",
    features: [
      "مفاتيح ميكانيكية",
      "إضاءة مميزة",
      "استجابة سريعة",
      "تصميم متين"
    ]
  },
  {
    id: 10,
    name: "ماوس لاسلكي احترافي",
    category: "accessories",
    categoryName: "الإكسسوارات",
    price: 39,
    oldPrice: null,
    rating: 4.5,
    badge: "جديد",
    badgeClass: "new",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85",
    description: "ماوس لاسلكي سريع ودقيق بتصميم مريح للاستخدام الطويل في العمل والدراسة",
    features: [
      "اتصال لاسلكي",
      "دقة عالية",
      "تصميم مريح",
      "استهلاك منخفض للطاقة"
    ]
  },
  {
    id: 11,
    name: "شاحن سريع متعدد المنافذ",
    category: "accessories",
    categoryName: "الإكسسوارات",
    price: 29,
    oldPrice: 35,
    rating: 4.4,
    badge: "عرض",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=85",
    description: "شاحن سريع وعملي لشحن عدة أجهزة معًا ومناسب للاستخدام في المنزل والمكتب",
    features: [
      "شحن سريع",
      "عدة منافذ",
      "حماية من الحرارة",
      "حجم صغير"
    ]
  },
  {
    id: 12,
    name: "حامل لابتوب مكتبي",
    category: "accessories",
    categoryName: "الإكسسوارات",
    price: 34,
    oldPrice: 45,
    rating: 4.6,
    badge: "خصم",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=900&q=85",
    description: "حامل مكتبي عملي يساعد على رفع اللابتوب وتحسين وضعية العمل وتنظيم المكتب",
    features: [
      "تصميم ثابت",
      "مناسب لمقاسات متعددة",
      "سهل الاستخدام",
      "تصميم عصري"
    ]
  }
];


// =========================================
// State
// =========================================

let cart = JSON.parse(localStorage.getItem("techZoneCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("techZoneWishlist")) || [];
let activeCategory = "all";
let searchTerm = "";
let sortType = "default";


// =========================================
// Elements
// =========================================

const productsGrid = document.getElementById("productsGrid");
const noProducts = document.getElementById("noProducts");

const cartBtn = document.getElementById("cartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartItemsText = document.getElementById("cartItemsText");
const cartSubtotal = document.getElementById("cartSubtotal");
const shippingCost = document.getElementById("shippingCost");
const cartTotal = document.getElementById("cartTotal");

const wishlistBtn = document.getElementById("wishlistBtn");
const wishlistDrawer = document.getElementById("wishlistDrawer");
const wishlistOverlay = document.getElementById("wishlistOverlay");
const closeWishlist = document.getElementById("closeWishlist");
const wishlistItems = document.getElementById("wishlistItems");
const wishlistCount = document.getElementById("wishlistCount");

const productModal = document.getElementById("productModal");
const productModalContent = document.getElementById("productModalContent");
const closeProductModal = document.getElementById("closeProductModal");

const checkoutBtn = document.getElementById("checkoutBtn");
const checkoutModal = document.getElementById("checkoutModal");
const closeCheckoutModal = document.getElementById("closeCheckoutModal");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutTotal = document.getElementById("checkoutTotal");

const successModal = document.getElementById("successModal");
const closeSuccessModal = document.getElementById("closeSuccessModal");
const orderNumber = document.getElementById("orderNumber");

const productSearch = document.getElementById("productSearch");
const mainSearchInput = document.getElementById("mainSearchInput");
const sortProducts = document.getElementById("sortProducts");

const searchToggle = document.getElementById("searchToggle");
const searchPanel = document.getElementById("searchPanel");
const closeSearch = document.getElementById("closeSearch");

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

const backToTop = document.getElementById("backToTop");
const mainHeader = document.getElementById("mainHeader");
const toastContainer = document.getElementById("toastContainer");


// =========================================
// Helpers
// =========================================

function formatPrice(price) {
  return `${Number(price).toFixed(2)} د.أ`;
}

function saveCart() {
  localStorage.setItem("techZoneCart", JSON.stringify(cart));
}

function saveWishlist() {
  localStorage.setItem("techZoneWishlist", JSON.stringify(wishlist));
}

function getProduct(id) {
  return products.find(product => product.id === Number(id));
}

function isWishlisted(id) {
  return wishlist.includes(Number(id));
}


// =========================================
// Toast
// =========================================

function showToast(message, type = "success") {
  const toast = document.createElement("div");

  toast.className = `toast ${type}`;

  toast.innerHTML = `
    <i class="fa-solid ${
      type === "error" ? "fa-circle-exclamation" : "fa-circle-check"
    }"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(15px)";

    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2500);
}


// =========================================
// Render Products
// =========================================

function renderProducts() {
  let filteredProducts = [...products];

  if (activeCategory !== "all") {
    filteredProducts = filteredProducts.filter(
      product => product.category === activeCategory
    );
  }

  if (searchTerm.trim()) {
    const term = searchTerm.trim().toLowerCase();

    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(term) ||
      product.categoryName.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term)
    );
  }

  if (sortType === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortType === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sortType === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  productsGrid.innerHTML = "";

  if (!filteredProducts.length) {
    noProducts.classList.add("show");
    return;
  }

  noProducts.classList.remove("show");

  filteredProducts.forEach(product => {
    const card = document.createElement("article");

    card.className = "product-card";

    card.innerHTML = `
      <div class="product-image">

        ${
          product.badge
            ? `<span class="product-badge ${product.badgeClass}">
                ${product.badge}
               </span>`
            : ""
        }

        <button
          class="product-wishlist ${isWishlisted(product.id) ? "active" : ""}"
          data-wishlist="${product.id}"
          aria-label="إضافة للمفضلة"
        >
          <i class="${
            isWishlisted(product.id)
              ? "fa-solid"
              : "fa-regular"
          } fa-heart"></i>
        </button>

        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >

        <button
          class="quick-view"
          data-view="${product.id}"
        >
          عرض التفاصيل
        </button>

      </div>

      <div class="product-info">

        <span class="product-category">
          ${product.categoryName}
        </span>

        <h3>${product.name}</h3>

        <div class="product-rating">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>

          <span>${product.rating}</span>
        </div>

        <div class="product-price-row">

          <strong class="product-price">
            ${formatPrice(product.price)}
          </strong>

          ${
            product.oldPrice
              ? `<del class="old-price">
                   ${formatPrice(product.oldPrice)}
                 </del>`
              : ""
          }

        </div>

        <button
          class="add-cart-btn"
          data-cart="${product.id}"
        >
          <i class="fa-solid fa-cart-plus"></i>
          إضافة إلى السلة
        </button>

      </div>
    `;

    productsGrid.appendChild(card);
  });
}


// =========================================
// Product Events
// =========================================

productsGrid.addEventListener("click", event => {
  const cartButton = event.target.closest("[data-cart]");
  const wishlistButton = event.target.closest("[data-wishlist]");
  const viewButton = event.target.closest("[data-view]");

  if (cartButton) {
    addToCart(Number(cartButton.dataset.cart));
  }

  if (wishlistButton) {
    toggleWishlist(Number(wishlistButton.dataset.wishlist));
  }

  if (viewButton) {
    openProductDetails(Number(viewButton.dataset.view));
  }
});


// =========================================
// Cart
// =========================================

function addToCart(id) {
  const product = getProduct(id);

  if (!product) return;

  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id,
      quantity: 1
    });
  }

  saveCart();
  updateCart();

  showToast(`تمت إضافة ${product.name} إلى السلة`);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);

  saveCart();
  updateCart();

  showToast("تم حذف المنتج من السلة");
}

function changeQuantity(id, amount) {
  const item = cart.find(item => item.id === id);

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    removeFromCart(id);
    return;
  }

  saveCart();
  updateCart();
}

function calculateCart() {
  let subtotal = 0;
  let count = 0;

  cart.forEach(item => {
    const product = getProduct(item.id);

    if (!product) return;

    subtotal += product.price * item.quantity;
    count += item.quantity;
  });

  const shipping = subtotal === 0 || subtotal >= 100 ? 0 : 5;
  const total = subtotal + shipping;

  return {
    subtotal,
    shipping,
    total,
    count
  };
}

function updateCart() {
  const totals = calculateCart();

  cartCount.textContent = totals.count;

  cartItemsText.textContent =
    totals.count === 0
      ? "السلة فارغة"
      : `${totals.count} منتج في السلة`;

  cartSubtotal.textContent = formatPrice(totals.subtotal);

  shippingCost.textContent =
    totals.shipping === 0
      ? "مجاني"
      : formatPrice(totals.shipping);

  cartTotal.textContent = formatPrice(totals.total);

  checkoutTotal.textContent = formatPrice(totals.total);

  if (!cart.length) {
    cartItems.innerHTML = `
      <div class="empty-state">

        <i class="fa-solid fa-cart-shopping"></i>

        <h3>سلتك فارغة</h3>

        <p>
          أضف بعض المنتجات لتظهر هنا
        </p>

      </div>
    `;

    return;
  }

  cartItems.innerHTML = "";

  cart.forEach(item => {
    const product = getProduct(item.id);

    if (!product) return;

    const element = document.createElement("div");

    element.className = "cart-item";

    element.innerHTML = `
      <img
        src="${product.image}"
        alt="${product.name}"
      >

      <div class="cart-item-info">

        <h4>${product.name}</h4>

        <div class="cart-item-price">
          ${formatPrice(product.price * item.quantity)}
        </div>

        <div class="quantity-control">

          <button
            data-increase="${product.id}"
            aria-label="زيادة الكمية"
          >
            <i class="fa-solid fa-plus"></i>
          </button>

          <span>${item.quantity}</span>

          <button
            data-decrease="${product.id}"
            aria-label="تقليل الكمية"
          >
            <i class="fa-solid fa-minus"></i>
          </button>

        </div>

      </div>

      <button
        class="remove-item"
        data-remove-cart="${product.id}"
        aria-label="حذف المنتج"
      >
        <i class="fa-solid fa-trash"></i>
      </button>
    `;

    cartItems.appendChild(element);
  });
}

cartItems.addEventListener("click", event => {
  const increaseButton = event.target.closest("[data-increase]");
  const decreaseButton = event.target.closest("[data-decrease]");
  const removeButton = event.target.closest("[data-remove-cart]");

  if (increaseButton) {
    changeQuantity(Number(increaseButton.dataset.increase), 1);
  }

  if (decreaseButton) {
    changeQuantity(Number(decreaseButton.dataset.decrease), -1);
  }

  if (removeButton) {
    removeFromCart(Number(removeButton.dataset.removeCart));
  }
});


// =========================================
// Cart Drawer
// =========================================

function openCartDrawer() {
  closeWishlistDrawer();

  cartDrawer.classList.add("open");
  cartOverlay.classList.add("open");

  document.body.classList.add("no-scroll");
}

function closeCartDrawer() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("open");

  document.body.classList.remove("no-scroll");
}

cartBtn.addEventListener("click", openCartDrawer);
closeCart.addEventListener("click", closeCartDrawer);
cartOverlay.addEventListener("click", closeCartDrawer);


// =========================================
// Wishlist
// =========================================

function toggleWishlist(id) {
  const product = getProduct(id);

  if (!product) return;

  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(productId => productId !== id);

    showToast("تم حذف المنتج من المفضلة");
  } else {
    wishlist.push(id);

    showToast(`تمت إضافة ${product.name} إلى المفضلة`);
  }

  saveWishlist();
  updateWishlist();
  renderProducts();
}

function updateWishlist() {
  wishlistCount.textContent = wishlist.length;

  if (!wishlist.length) {
    wishlistItems.innerHTML = `
      <div class="empty-state">

        <i class="fa-regular fa-heart"></i>

        <h3>
          لا توجد منتجات في المفضلة
        </h3>

        <p>
          اضغط على القلب لإضافة منتج
        </p>

      </div>
    `;

    return;
  }

  wishlistItems.innerHTML = "";

  wishlist.forEach(id => {
    const product = getProduct(id);

    if (!product) return;

    const item = document.createElement("div");

    item.className = "wishlist-item";

    item.innerHTML = `
      <img
        src="${product.image}"
        alt="${product.name}"
      >

      <div class="wishlist-item-info">

        <h4>${product.name}</h4>

        <div class="wishlist-item-price">
          ${formatPrice(product.price)}
        </div>

        <button
          class="wishlist-add-cart"
          data-wishlist-cart="${product.id}"
        >
          إضافة للسلة
        </button>

      </div>

      <button
        class="remove-item"
        data-remove-wishlist="${product.id}"
      >
        <i class="fa-solid fa-trash"></i>
      </button>
    `;

    wishlistItems.appendChild(item);
  });
}

wishlistItems.addEventListener("click", event => {
  const addButton = event.target.closest("[data-wishlist-cart]");
  const removeButton = event.target.closest("[data-remove-wishlist]");

  if (addButton) {
    addToCart(Number(addButton.dataset.wishlistCart));
  }

  if (removeButton) {
    toggleWishlist(Number(removeButton.dataset.removeWishlist));
  }
});

function openWishlistDrawer() {
  closeCartDrawer();

  wishlistDrawer.classList.add("open");
  wishlistOverlay.classList.add("open");

  document.body.classList.add("no-scroll");
}

function closeWishlistDrawer() {
  wishlistDrawer.classList.remove("open");
  wishlistOverlay.classList.remove("open");

  document.body.classList.remove("no-scroll");
}

wishlistBtn.addEventListener("click", openWishlistDrawer);
closeWishlist.addEventListener("click", closeWishlistDrawer);
wishlistOverlay.addEventListener("click", closeWishlistDrawer);


// =========================================
// Product Details
// =========================================

function openProductDetails(id) {
  const product = getProduct(id);

  if (!product) return;

  productModalContent.innerHTML = `
    <div class="modal-product-image">

      <img
        src="${product.image}"
        alt="${product.name}"
      >

    </div>

    <div class="modal-product-info">

      <span class="product-category">
        ${product.categoryName}
      </span>

      <h2>${product.name}</h2>

      <div class="product-rating">

        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>

        <span>${product.rating}</span>

      </div>

      <p class="modal-product-description">
        ${product.description}
      </p>

      <div class="modal-product-price">

        <strong>
          ${formatPrice(product.price)}
        </strong>

        ${
          product.oldPrice
            ? `<del>${formatPrice(product.oldPrice)}</del>`
            : ""
        }

      </div>

      <ul class="modal-features">

        ${product.features
          .map(
            feature => `
              <li>
                <i class="fa-solid fa-circle-check"></i>
                ${feature}
              </li>
            `
          )
          .join("")}

      </ul>

      <button
        class="modal-add-cart"
        data-modal-cart="${product.id}"
      >
        <i class="fa-solid fa-cart-plus"></i>
        إضافة إلى السلة
      </button>

    </div>
  `;

  productModal.classList.add("open");

  document.body.classList.add("no-scroll");
}

function hideProductModal() {
  productModal.classList.remove("open");

  document.body.classList.remove("no-scroll");
}

productModalContent.addEventListener("click", event => {
  const button = event.target.closest("[data-modal-cart]");

  if (!button) return;

  addToCart(Number(button.dataset.modalCart));

  hideProductModal();

  setTimeout(openCartDrawer, 200);
});

closeProductModal.addEventListener("click", hideProductModal);

productModal.addEventListener("click", event => {
  if (event.target === productModal) {
    hideProductModal();
  }
});


// =========================================
// Filters
// =========================================

document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.filter;

    document.querySelectorAll(".filter-btn").forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    renderProducts();
  });
});

document.querySelectorAll(".category-card").forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;

    updateFilterButton();

    renderProducts();

    document
      .getElementById("products")
      .scrollIntoView({
        behavior: "smooth"
      });
  });
});

document.querySelectorAll(".promo-filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.promoCategory;

    updateFilterButton();

    renderProducts();

    document
      .getElementById("products")
      .scrollIntoView({
        behavior: "smooth"
      });
  });
});

document.querySelectorAll(".footer-category").forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.footerCategory;

    updateFilterButton();

    renderProducts();

    document
      .getElementById("products")
      .scrollIntoView({
        behavior: "smooth"
      });
  });
});

function updateFilterButton() {
  document.querySelectorAll(".filter-btn").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.filter === activeCategory
    );
  });
}


// =========================================
// Search
// =========================================

function performSearch(value) {
  searchTerm = value;

  if (productSearch) {
    productSearch.value = value;
  }

  if (mainSearchInput) {
    mainSearchInput.value = value;
  }

  renderProducts();
}

productSearch.addEventListener("input", event => {
  performSearch(event.target.value);
});

mainSearchInput.addEventListener("input", event => {
  performSearch(event.target.value);

  document
    .getElementById("products")
    .scrollIntoView({
      behavior: "smooth"
    });
});


// =========================================
// Sort
// =========================================

sortProducts.addEventListener("change", event => {
  sortType = event.target.value;

  renderProducts();
});


// =========================================
// Search Panel
// =========================================

searchToggle.addEventListener("click", () => {
  searchPanel.classList.toggle("open");

  if (searchPanel.classList.contains("open")) {
    setTimeout(() => {
      mainSearchInput.focus();
    }, 150);
  }
});

closeSearch.addEventListener("click", () => {
  searchPanel.classList.remove("open");
});


// =========================================
// Mobile Menu
// =========================================

menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("open");

  const icon = menuToggle.querySelector("i");

  icon.className = mobileNav.classList.contains("open")
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
});

mobileNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");

    menuToggle.querySelector("i").className =
      "fa-solid fa-bars";
  });
});


// =========================================
// Checkout
// =========================================

checkoutBtn.addEventListener("click", () => {
  if (!cart.length) {
    showToast("السلة فارغة أضف منتجًا أولًا", "error");
    return;
  }

  const totals = calculateCart();

  checkoutTotal.textContent = formatPrice(totals.total);

  closeCartDrawer();

  checkoutModal.classList.add("open");

  document.body.classList.add("no-scroll");
});

function hideCheckoutModal() {
  checkoutModal.classList.remove("open");

  document.body.classList.remove("no-scroll");
}

closeCheckoutModal.addEventListener("click", hideCheckoutModal);

checkoutModal.addEventListener("click", event => {
  if (event.target === checkoutModal) {
    hideCheckoutModal();
  }
});

checkoutForm.addEventListener("submit", event => {
  event.preventDefault();

  if (!cart.length) {
    hideCheckoutModal();
    showToast("السلة فارغة", "error");
    return;
  }

  const customerName =
    document.getElementById("customerName").value.trim();

  const customerPhone =
    document.getElementById("customerPhone").value.trim();

  const customerAddress =
    document.getElementById("customerAddress").value.trim();

  if (!customerName || !customerPhone || !customerAddress) {
    showToast("يرجى تعبئة البيانات المطلوبة", "error");
    return;
  }

  const newOrderNumber =
    "TZ-" +
    Date.now()
      .toString()
      .slice(-7);

  orderNumber.textContent =
    `رقم الطلب ${newOrderNumber}`;

  cart = [];

  saveCart();
  updateCart();

  checkoutForm.reset();

  hideCheckoutModal();

  setTimeout(() => {
    successModal.classList.add("open");

    document.body.classList.add("no-scroll");
  }, 200);
});

function hideSuccessModal() {
  successModal.classList.remove("open");

  document.body.classList.remove("no-scroll");
}

closeSuccessModal.addEventListener("click", hideSuccessModal);

successModal.addEventListener("click", event => {
  if (event.target === successModal) {
    hideSuccessModal();
  }
});


// =========================================
// Newsletter
// =========================================

const newsletterForm =
  document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", event => {
  event.preventDefault();

  const email =
    document.getElementById("newsletterEmail");

  if (!email.value.trim()) return;

  showToast("تم الاشتراك بنجاح في عروض تك زون");

  newsletterForm.reset();
});


// =========================================
// Countdown
// =========================================

const countdownEnd =
  Date.now() +
  3 * 24 * 60 * 60 * 1000 +
  8 * 60 * 60 * 1000 +
  35 * 60 * 1000;

function updateCountdown() {
  const remaining =
    Math.max(0, countdownEnd - Date.now());

  const days =
    Math.floor(remaining / (1000 * 60 * 60 * 24));

  const hours =
    Math.floor(
      (remaining / (1000 * 60 * 60)) % 24
    );

  const minutes =
    Math.floor(
      (remaining / (1000 * 60)) % 60
    );

  const seconds =
    Math.floor(
      (remaining / 1000) % 60
    );

  document.getElementById("days").textContent =
    String(days).padStart(2, "0");

  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


// =========================================
// Header + Back To Top
// =========================================

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    mainHeader.classList.add("scrolled");
  } else {
    mainHeader.classList.remove("scrolled");
  }

  if (window.scrollY > 500) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }

  updateActiveNavigation();
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// =========================================
// Active Navigation
// =========================================

function updateActiveNavigation() {
  const sections =
    document.querySelectorAll(
      "main section[id]"
    );

  let currentSection = "home";

  sections.forEach(section => {
    const top =
      section.offsetTop - 160;

    if (window.scrollY >= top) {
      currentSection = section.id;
    }
  });

  document
    .querySelectorAll(".desktop-nav .nav-link")
    .forEach(link => {
      link.classList.remove("active");

      if (
        link.getAttribute("href") ===
        `#${currentSection}`
      ) {
        link.classList.add("active");
      }
    });
}


// =========================================
// Smooth Navigation
// =========================================

document
  .querySelectorAll('a[href^="#"]')
  .forEach(link => {
    link.addEventListener("click", event => {
      const targetId =
        link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });


// =========================================
// Keyboard
// =========================================

document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;

  closeCartDrawer();
  closeWishlistDrawer();
  hideProductModal();
  hideCheckoutModal();
  hideSuccessModal();

  searchPanel.classList.remove("open");

  mobileNav.classList.remove("open");

  menuToggle.querySelector("i").className =
    "fa-solid fa-bars";
});


// =========================================
// Current Year
// =========================================

document.getElementById("currentYear").textContent =
  new Date().getFullYear();


// =========================================
// Initial Load
// =========================================

renderProducts();
updateCart();
updateWishlist();
updateActiveNavigation();