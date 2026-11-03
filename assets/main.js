/**
 * Saffron & Charcoal - Luxury Fine Persian Dining & Saffron Products
 * Vanilla JavaScript Core Application
 * Ready for GitHub Pages deployment (no build step, no npm)
 */

// Format numbers into Persian digits
function toPersianDigits(num) {
  if (num === null || num === undefined) return '';
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num.toString().replace(/\d/g, (d) => persianDigits[parseInt(d, 10)]);
}

// Format currency in Tomans
function formatTomans(amount) {
  if (!amount && amount !== 0) return '۰ تومان';
  const formatted = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `${toPersianDigits(formatted)} تومان`;
}

// Full Dishes & Saffron Products Catalog
const PRODUCTS_DATA = [
  {
    id: 'kebab-soltani',
    titleFa: 'چلوکباب سلطانی زعفرانی',
    titleEn: 'Imperial Soltani Kebab',
    category: 'kebabs',
    price: 980000,
    calories: 850,
    prepTime: '۲۵ دقیقه',
    badge: 'signature',
    badgeText: 'پیشنهاد سرآشپز',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    desc: 'ترکیب اعجاب‌انگیز یک سیخ کباب برگ ممتاز راسته گوسفندی و یک سیخ کباب کوبیده سنتی، خوابانده شده در زعفران قائنات و پیازچه وحشی.',
    ingredients: ['راسته گوسفندی تازه', 'گوشت قلوه‌گاه گوسفندی', 'زعفران ممتاز قائنات', 'برنج دمسیاه ممتاز گیلان', 'کره محلی اردبیل', 'گوجه و فلفل زغالی'],
    pairing: 'دوغ محلی نعنا و گل سرخ یا شربت خاکشیر زعفرانی'
  },
  {
    id: 'kebab-barg',
    titleFa: 'چلوکباب برگ ممتاز گوسفندی',
    titleEn: 'Signature Saffron Barg Kebab',
    category: 'kebabs',
    price: 890000,
    calories: 720,
    prepTime: '۲۰ دقیقه',
    badge: 'gold',
    badgeText: 'ویژه اصیل',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    desc: 'راسته لطیف گوسفندی مرینیت شده با آب پیاز سفید، زعفران سرگل و فلفل سیاه آسیاب سنگی، پخته شده روی بستر آتش زغال گردو.',
    ingredients: ['راسته گوسفندی اعلا', 'زعفران خالص', 'کره گوسفندی دودی', 'چلو زعفرانی با ته‌دیگ زعفرانی'],
    pairing: 'شربت زرشک کوهی با طعم ملایم ملس'
  },
  {
    id: 'kebab-koobideh',
    titleFa: 'چلوکباب کوبیده مخصوص دو سیخ',
    titleEn: 'Dual Skewer Artisanal Koobideh',
    category: 'kebabs',
    price: 520000,
    calories: 680,
    prepTime: '۱۵ دقیقه',
    badge: 'neutral',
    badgeText: 'محبوب همیشگی',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80',
    desc: 'کوبیده دست‌ساز با ۷۰٪ قلوه‌گاه و ۳۰٪ مغز ران گوسفندی با پیاز آب‌گرفته و نمک دریا، چرخ‌شده به روش سنتی و آغشته به دم‌کرده غلیظ زعفران.',
    ingredients: ['مخلوط گوشت گوسفندی تازه', 'پیاز محلی', 'زعفران نگین', 'سماق تازه تبریز', 'نان تافتون داغ تنوری'],
    pairing: 'دوغ سنتی مشک با سبزیجات کوهی'
  },
  {
    id: 'joojeh-zaferani',
    titleFa: 'جوجه کباب ارگانیک بدون استخوان',
    titleEn: 'Saffron Citrus Joojeh Kebab',
    category: 'kebabs',
    price: 460000,
    calories: 590,
    prepTime: '۱۸ دقیقه',
    badge: 'green',
    badgeText: 'ارگانیک و سبک',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    desc: 'سینه و فیله مرغ ارگانیک مرینیت شده در زعفران قائنات، آب لیموترش شیرازی تازه، ماست چکیده و پیاز، گریل شده روی شعله ملایم زغال.',
    ingredients: ['فیله مرغ ارگانیک', 'زعفران دم‌کشیده با یخ', 'آب لیمو تازه', 'روغن زیتون فرابکر رودبار'],
    pairing: 'شربت بیدمشک و بهارنارنج'
  },
  {
    id: 'tahchin-morgh',
    titleFa: 'ته‌چین درباری مرغ و خلال پسته',
    titleEn: 'Royal Saffron Tahchin with Chicken',
    category: 'rice',
    price: 490000,
    calories: 780,
    prepTime: '۲۵ دقیقه',
    badge: 'signature',
    badgeText: 'شاهکار طلایی',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
    desc: 'ته‌چین قالبی با پوسته زرین و کریسپی ته‌دیگ زعفرانی، لایه‌های مغزپخت مرغ ریش‌شده معطر، ماست چکیده محلی، زرشک پفکی قائنات و خلال بادام و پسته.',
    ingredients: ['برنج دمسیاه دودی', 'زرده تخم‌مرغ محلی', 'ماست چکیده سنتی', 'زعفران اعلا', 'زرشک تازه', 'خلال پسته خندان'],
    pairing: 'سالاد شیرازی اصیل با آبغوره خانگی'
  },
  {
    id: 'zereshk-polo',
    titleFa: 'زرشک‌پلو مجلسی با ران مرغ شکم‌پر',
    titleEn: 'Zereshk Polo with Stuffed Chicken',
    category: 'rice',
    price: 440000,
    calories: 710,
    prepTime: '۲۰ دقیقه',
    badge: 'gold',
    badgeText: 'مجلسی اصیل',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    desc: 'ران مرغ آرام‌پز در سس عصاره گوجه، آلو بخارا و زعفران غلیظ، سرو شده روی تپه‌ای از برنج عطری با انبوه زرشک کوهی تفت‌خورده در کره و خلال بادام.',
    ingredients: ['ران مرغ مزرعه', 'برنج طارم هاشمی', 'زرشک پفکی قائنات', 'زعفران آب‌کرده', 'خلال پرتقال شیرین‌شده'],
    pairing: 'شربت آلبالو ترش و شیرین خانگی'
  },
  {
    id: 'baghali-polo',
    titleFa: 'باقالی‌پلو با ماهیچه مخصوص گوسفندی',
    titleEn: 'Baghali Polo with Braised Lamb Shank',
    category: 'rice',
    price: 1150000,
    calories: 950,
    prepTime: '۳۰ دقیقه',
    badge: 'signature',
    badgeText: 'انتخاب اشرافی',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80',
    desc: 'یک عدد ماهیچه گوسفندی کامل پخته شده به شیوه ۶ ساعته فرانسوی-ایرانی در آب‌پیاز و حریره زعفران و هل سبز، در کنار باقالی‌پلو با شوید ارگانیک کوهی.',
    ingredients: ['ماهیچه تازه گوسفندی', 'باقالی سبز تازه بهاره', 'شوید کوهی خشک', 'چوب دارچین و برگ بو', 'کره کرمانشاهی'],
    pairing: 'زیتون پرورده رودبار و سیرترشی ۷ ساله'
  },
  {
    id: 'kashk-bademjan',
    titleFa: 'کشک بادمجان دودی با نعناداغ و گردو',
    titleEn: 'Smoked Eggplant Kashk-e Bademjan',
    category: 'starters',
    price: 240000,
    calories: 380,
    prepTime: '۱۰ دقیقه',
    badge: 'green',
    badgeText: 'گیاهی / وجترین',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    desc: 'بادمجان‌های کباب شده روی هیزم با عطر اصیل دودی، کوبیده شده با سیر سرخ‌شده، پیاز کاراملی، نعناداغ غلیظ، گردوی درشت تویسرکان و کشک گوسفندی محلی.',
    ingredients: ['بادمجان کباب شده دودی', 'کشک طبیعی گوسفندی', 'گردو خرد شده', 'نعناداغ عطرآگین', 'نان سنگک کنجدی'],
    pairing: 'سبزی‌خوردن تازه و تربچه نقلی'
  },
  {
    id: 'mirza-ghasemi',
    titleFa: 'میرزاقاسمی ذغالی گیلان با تخم‌مرغ محلی',
    titleEn: 'Charred Mirza Ghasemi of Gilan',
    category: 'starters',
    price: 220000,
    calories: 340,
    prepTime: '۱۰ دقیقه',
    badge: 'green',
    badgeText: 'گیاهی / بدون گلوتن',
    image: 'https://images.unsplash.com/photo-1514944298352-78d128825c9b?auto=format&fit=crop&w=800&q=80',
    desc: 'بادمجان کاملاً زغالی، گوجه فرنگی پخته در هاون سنگی، سیر کوبیده محلی تفت‌خورده در روغن زرد، به همراه تخم‌مرغ محلی ته‌نشین در طعم دودی.',
    ingredients: ['بادمجان زغالی پوست‌کنده', 'گوجه محلی پخته', 'سیر تازه طارم', 'تخم‌مرغ محلی', 'روغن زرد حیوانی'],
    pairing: 'نان بربری داغ و ترشی لیته سنتی'
  },
  {
    id: 'zeytoon-parvardeh',
    titleFa: 'زیتون پرورده شاهانه با رب انار ترش',
    titleEn: 'Artisanal Walnut & Pomegranate Olives',
    category: 'starters',
    price: 150000,
    calories: 220,
    prepTime: 'آماده سرو',
    badge: 'green',
    badgeText: 'کاملاً گیاهی',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80',
    desc: 'زیتون شکسته رودبار مخلوط با چوچاق و اناریجه کوهی گیلان، گردوی چرخ‌شده دوآتشه، رب انار وحشی جنگلی و حبه‌های انار ترش تر و تازه.',
    ingredients: ['زیتون ماری رودبار', 'رب انار طبیعی ساوه', 'مغز گردوی درجه یک', 'سبزیجات معطر محلی (چوچاق و نعنا)', 'آب نارنج تازه'],
    pairing: 'همراه اصلی تمامی کباب‌های اصیل ایرانی'
  },
  {
    id: 'sharbat-zaferan',
    titleFa: 'اکسیر شربت زعفران، بیدمشک و تخم‌شربتی',
    titleEn: 'Saffron, Bidmeshk & Chia Elixir',
    category: 'drinks',
    price: 110000,
    calories: 140,
    prepTime: 'آماده سرو',
    badge: 'gold',
    badgeText: 'خنک‌کننده سلطنتی',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    desc: 'عصاره گلبرگ و سرگل زعفران قائنات معلق در عرق بیدمشک و بهارنارنج تقطیر دوآتشه، تخم شربتی و مقداری نبات زعفرانی اعلا.',
    ingredients: ['دم‌کرده زعفران نگین', 'عرق بیدمشک کاشان', 'عرق بهارنارنج شیراز', 'تخم شربتی', 'گلبرگ تازه گل سرخ'],
    pairing: 'ایده‌آل برای شروع ضیافت شام'
  },
  {
    id: 'sholezard-zaferani',
    titleFa: 'شله‌زرد اشرافی با خلال بادام و دارچین سنگی',
    titleEn: 'Royal Saffron Sholezard Pudding',
    category: 'drinks',
    price: 160000,
    calories: 320,
    prepTime: 'آماده سرو',
    badge: 'signature',
    badgeText: 'دسر دست‌ساز',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80',
    desc: 'برنج نیم‌دانه عنبربو پخته در گلاب ناب قمصر و غرق در زعفران سرخ قائنات، آراسته به خلال پسته اعلا، خلال بادام خیسانده در گلاب و پودر دارچین سیلان.',
    ingredients: ['برنج نیم‌دانه معطر', 'زعفران سرگل سوپر نگین', 'گلاب دوآتشه کاشان', 'کره حیوانی', 'خلال بادام و پسته'],
    pairing: 'چای دمی لاهیجان در استکان کمرباریک شاه‌عباسی'
  },
  {
    id: 'box-saffron-super-negin',
    titleFa: 'جعبه هدیه خاتم زعفران سوپر نگین قائنات (۵ مثقال)',
    titleEn: 'Royal Khatam 5-Mesghal Saffron Box',
    category: 'saffron',
    price: 2450000,
    calories: null,
    prepTime: 'ارسال فوری',
    badge: 'signature',
    badgeText: 'محصول صادراتی',
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80',
    desc: 'پنج مثقال سرگل سوپر نگین صادراتی برداشت پاییزه مزارع قائنات خراسان، دست‌چین و خشک‌شده بدون حرارت، در جعبه چوبی دست‌ساز با هنر خاتم‌کاری اصفهان و هاون برنجی اصیل.',
    ingredients: ['۵ مثقال زعفران سوپر نگین درجه یک', 'ظرف خاتم‌کاری فلزی دست‌ساز', 'هاون برنجی سنتی ساییدن زعفران', 'شناسنامه و برگه آزمایشگاهی خلوص کروسین'],
    pairing: 'هدیه‌ای ماندگار و لوکس برای ضیافت‌ها و میهمانان ویژه'
  },
  {
    id: 'box-saffron-khatam-1',
    titleFa: 'بسته کریستال مخملی زعفران سرگل نگین (۱ مثقال)',
    titleEn: 'Velvet Crystal 1-Mesghal Saffron Gift',
    category: 'saffron',
    price: 540000,
    calories: null,
    prepTime: 'ارسال فوری',
    badge: 'gold',
    badgeText: 'لوکس و هدیه',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    desc: 'یک مثقال زعفران خالص دست‌چین با بالاترین درجه رنگ‌دهی طبیعی، بسته‌بندی شده در کریستال ضد رطوبت با کاور مخمل زرشکی نشان طلایی.',
    ingredients: ['۱ مثقال زعفران خالص نگین قائنات', 'شیشه کریستال پلمپ ضد اکسیداسیون', 'کارت تضمین مرجوعی آزمایشگاهی'],
    pairing: 'مناسب مصارف خانگی و هدیه دوستانه'
  }
];

// Shopping Cart Management
class CartManager {
  constructor() {
    this.storageKey = 'saffron_charcoal_cart_v1';
    this.items = this.loadCart();
    this.initListeners();
    this.updateCartUI();
  }

  loadCart() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn('LocalStorage error:', e);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.items));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    this.updateCartUI();
  }

  addItem(productId, qty = 1) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = this.items.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      this.items[existingIndex].qty += qty;
    } else {
      this.items.push({
        id: product.id,
        titleFa: product.titleFa,
        titleEn: product.titleEn,
        price: product.price,
        image: product.image,
        qty: qty
      });
    }
    this.saveCart();
    showToast(`«${product.titleFa}» به سبد سفارش اضافه شد.`);
  }

  updateQuantity(productId, delta) {
    const itemIndex = this.items.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
      this.items[itemIndex].qty += delta;
      if (this.items[itemIndex].qty <= 0) {
        this.items.splice(itemIndex, 1);
      }
      this.saveCart();
    }
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.saveCart();
  }

  clearCart() {
    this.items = [];
    this.saveCart();
  }

  getTotalCount() {
    return this.items.reduce((total, item) => total + item.qty, 0);
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + (item.price * item.qty), 0);
  }

  updateCartUI() {
    const badges = document.querySelectorAll('.cart-badge');
    const totalCount = this.getTotalCount();
    badges.forEach(badge => {
      badge.textContent = toPersianDigits(totalCount);
      badge.style.display = totalCount > 0 ? 'flex' : 'none';
    });

    // Update floating cart visibility or state
    const floatingCart = document.querySelector('.floating-btn-cart');
    if (floatingCart) {
      floatingCart.style.display = totalCount > 0 ? 'flex' : 'none';
    }

    // Render cart items if cart drawer exists
    const cartContainer = document.getElementById('cart-items-container');
    const cartEmptyState = document.getElementById('cart-empty-state');
    const cartSubtotalEl = document.getElementById('cart-subtotal-price');
    const cartTotalEl = document.getElementById('cart-total-price');
    const cartSubmitBtn = document.getElementById('cart-telegram-order-btn');

    if (cartContainer) {
      if (this.items.length === 0) {
        cartContainer.innerHTML = '';
        if (cartEmptyState) cartEmptyState.style.display = 'flex';
        if (cartSubtotalEl) cartSubtotalEl.textContent = '۰ تومان';
        if (cartTotalEl) cartTotalEl.textContent = '۰ تومان';
        if (cartSubmitBtn) cartSubmitBtn.classList.add('disabled');
      } else {
        if (cartEmptyState) cartEmptyState.style.display = 'none';
        if (cartSubmitBtn) cartSubmitBtn.classList.remove('disabled');

        cartContainer.innerHTML = this.items.map(item => `
          <div class="cart-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.titleFa}" class="cart-item-img" />
            <div class="cart-item-info">
              <div class="cart-item-title">${item.titleFa}</div>
              <div class="cart-item-price">${formatTomans(item.price * item.qty)}</div>
            </div>
            <div class="quantity-controls">
              <button type="button" class="qty-btn" onclick="window.appCart.updateQuantity('${item.id}', 1)" title="افزایش">+</button>
              <span class="qty-number">${toPersianDigits(item.qty)}</span>
              <button type="button" class="qty-btn" onclick="window.appCart.updateQuantity('${item.id}', -1)" title="کاهش">-</button>
            </div>
            <button type="button" class="btn-icon" style="width: 28px; height: 28px; border: none; background: transparent; color: #ff9f95;" onclick="window.appCart.removeItem('${item.id}')" title="حذف">
              ✕
            </button>
          </div>
        `).join('');

        const subtotal = this.getTotalPrice();
        if (cartSubtotalEl) cartSubtotalEl.textContent = formatTomans(subtotal);
        if (cartTotalEl) cartTotalEl.textContent = formatTomans(subtotal);
      }
    }
  }

  initListeners() {
    // Open cart drawer triggers
    document.querySelectorAll('.open-cart-trigger').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        openCartDrawer();
      });
    });

    // Close cart drawer triggers
    document.querySelectorAll('.close-cart-trigger').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        closeCartDrawer();
      });
    });
  }
}

// Global Toast Notifications
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span style="color: var(--primary); font-size: 1.25rem;">✦</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Cart Drawer open/close
function openCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Mobile Nav Menu open/close
function openMobileMenu() {
  const drawer = document.getElementById('mobile-nav-drawer');
  if (drawer) {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobile-nav-drawer');
  if (drawer) {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Quick View Dish Modal
function openDishModal(dishId) {
  const dish = PRODUCTS_DATA.find(p => p.id === dishId);
  if (!dish) return;

  const modalOverlay = document.getElementById('dish-detail-modal');
  const modalContent = document.getElementById('dish-detail-content');

  if (modalOverlay && modalContent) {
    modalContent.innerHTML = `
      <div style="position: relative; aspect-ratio: 16/9; overflow: hidden; border-radius: var(--radius-xl) var(--radius-xl) 0 0;">
        <img src="${dish.image}" alt="${dish.titleFa}" style="width: 100%; height: 100%; object-fit: cover;" />
        <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(18,17,16,0.1) 40%, rgba(18,17,16,0.95) 100%);"></div>
        <div style="position: absolute; bottom: 1rem; right: 1.5rem; left: 1.5rem; display: flex; justify-content: space-between; align-items: flex-end;">
          <div>
            <h3 style="font-size: 1.5rem; font-weight: 800; color: #fff; margin-bottom: 0.25rem;">${dish.titleFa}</h3>
            <div style="font-family: var(--font-display); font-size: 0.85rem; color: var(--primary-light); font-style: italic;">${dish.titleEn}</div>
          </div>
          <div style="font-size: 1.35rem; font-weight: 800; color: var(--primary); text-shadow: 0 2px 10px rgba(0,0,0,0.8);">
            ${formatTomans(dish.price)}
          </div>
        </div>
      </div>
      
      <div style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1.25rem;">
        <div>
          <h4 style="font-size: 0.95rem; color: var(--primary-light); margin-bottom: 0.4rem; display: flex; align-items: center; gap: 0.4rem;">
            <span>📖</span> شرح داستان طعم و شیوه طبخ
          </h4>
          <p style="font-size: 0.92rem; color: var(--on-surface); line-height: 1.8;">${dish.desc}</p>
        </div>

        <div>
          <h4 style="font-size: 0.95rem; color: var(--primary-light); margin-bottom: 0.4rem; display: flex; align-items: center; gap: 0.4rem;">
            <span>🌿</span> اجزای اصیل و ترکیبات
          </h4>
          <div style="display: flex; flex-wrap: wrap; gap: 0.45rem;">
            ${dish.ingredients.map(ing => `<span class="badge badge-neutral">${ing}</span>`).join('')}
          </div>
        </div>

        ${dish.pairing ? `
          <div style="background: rgba(217, 119, 6, 0.08); border: 1px solid rgba(217, 119, 6, 0.25); border-radius: var(--radius-md); padding: 0.85rem 1rem;">
            <div style="font-size: 0.85rem; font-weight: 700; color: var(--primary); margin-bottom: 0.25rem;">✨ پیشنهاد هم‌نشینی طعم (پیرینگ):</div>
            <div style="font-size: 0.88rem; color: var(--on-surface-variant);">${dish.pairing}</div>
          </div>
        ` : ''}

        <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle); margin-top: 0.5rem;">
          <div style="display: flex; gap: 1.5rem; font-size: 0.85rem; color: var(--on-surface-muted);">
            ${dish.calories ? `<span>🔥 کالری: ${toPersianDigits(dish.calories)} کیلوکالری</span>` : ''}
            <span>⏳ زمان آماده‌سازی: ${dish.prepTime}</span>
          </div>
          <button type="button" class="btn btn-primary" onclick="window.appCart.addItem('${dish.id}'); closeDishModal();">
            <span>افزودن به سبد</span>
            <span>+</span>
          </button>
        </div>
      </div>
    `;

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeDishModal() {
  const modalOverlay = document.getElementById('dish-detail-modal');
  if (modalOverlay) {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Telegram Order Generation & Submission
function triggerTelegramOrder() {
  const cart = window.appCart;
  if (!cart || cart.items.length === 0) {
    showToast('سبد سفارش شما در حال حاضر خالی است.');
    return;
  }

  // Open Telegram Customer Info Modal
  const modal = document.getElementById('telegram-checkout-modal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    
    // Fill summary in modal
    const countEl = document.getElementById('tg-modal-count');
    const totalEl = document.getElementById('tg-modal-total');
    if (countEl) countEl.textContent = toPersianDigits(cart.getTotalCount());
    if (totalEl) totalEl.textContent = formatTomans(cart.getTotalPrice());
  } else {
    // Direct submission fallback
    submitTelegramOrderDirect();
  }
}

function closeTelegramModal() {
  const modal = document.getElementById('telegram-checkout-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function submitTelegramOrder(event) {
  if (event) event.preventDefault();

  const cart = window.appCart;
  if (!cart || cart.items.length === 0) return;

  const customerName = (document.getElementById('tg-name')?.value || 'مشتری گرامی').trim();
  const customerPhone = (document.getElementById('tg-phone')?.value || 'ذکر نشده').trim();
  const orderType = document.getElementById('tg-type')?.value || 'سفارش بیرون‌بر / پیک';
  const customerAddress = (document.getElementById('tg-address')?.value || 'تهران (هماهنگی در چت)').trim();
  const customerNotes = (document.getElementById('tg-notes')?.value || 'بدون یادداشت اضافه').trim();

  // Build items text
  let itemsListText = '';
  cart.items.forEach((item, index) => {
    const num = toPersianDigits(index + 1);
    const qty = toPersianDigits(item.qty);
    const itemTotal = formatTomans(item.price * item.qty);
    itemsListText += `${num}. ${item.titleFa}\n   تعداد: ${qty} | مجموع: ${itemTotal}\n`;
  });

  const grandTotal = formatTomans(cart.getTotalPrice());
  const now = new Date();
  const timeString = `${toPersianDigits(now.getHours())}:${toPersianDigits(now.getMinutes().toString().padStart(2, '0'))}`;

  const message = 
`👑 سفارش جدید از وب‌سایت زعفران و زغال
━━━━━━━━━━━━━━━━━━━━
👤 نام و نام‌خانوادگی: ${customerName}
📞 شماره تماس: ${customerPhone}
📍 نحوه تحویل: ${orderType}
🏢 آدرس / شماره میز: ${customerAddress}
📝 توضیحات: ${customerNotes}
⏰ ساعت ثبت: ${timeString}
━━━━━━━━━━━━━━━━━━━━
📋 ریز اقلام سفارش:
${itemsListText}━━━━━━━━━━━━━━━━━━━━
💰 مبلغ کل فاکتور: ${grandTotal}
━━━━━━━━━━━━━━━━━━━━
✨ با سپاس از انتخاب مجموعه مجلل زعفران و زغال`;

  // Encode message for URL
  const encodedText = encodeURIComponent(message);
  
  // Telegram username / bot for the restaurant
  // Primary: Direct message link to Telegram admin/bot
  const telegramBotUsername = 'saffron_charcoal_admin'; 
  const telegramUrl = `https://t.me/${telegramBotUsername}?text=${encodedText}`;
  const shareFallbackUrl = `https://t.me/share/url?url=${encodeURIComponent(window.location.origin)}&text=${encodedText}`;

  // Try opening Telegram
  try {
    window.open(telegramUrl, '_blank');
  } catch (e) {
    window.location.href = shareFallbackUrl;
  }

  // Copy to clipboard as convenient backup
  if (navigator.clipboard) {
    navigator.clipboard.writeText(message).then(() => {
      showToast('متن فاکتور نیز در کلیپ‌بورد شما ذخیره شد.');
    }).catch(() => {});
  }

  closeTelegramModal();
  closeCartDrawer();
  showToast('سفارش شما در تلگرام آماده شد. در حال انتقال به تلگرام...', 'success');
}

// Table Reservation Handler (on contact.html)
function handleReservationSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.res_name?.value || '';
  const phone = form.res_phone?.value || '';
  const guests = form.res_guests?.value || '۲';
  const date = form.res_date?.value || '';
  const time = form.res_time?.value || '';
  const area = form.res_area?.value || 'سالن اصلی زعفران';
  const notes = form.res_notes?.value || '';

  const reservationMessage = 
`✨ درخواست رزرو میز در رستوران زعفران و زغال
━━━━━━━━━━━━━━━━━━━━
👤 نام میزبان: ${name}
📞 شماره تماس: ${phone}
👥 تعداد مهمانان: ${toPersianDigits(guests)} نفر
📅 تاریخ مدنظر: ${date}
⏰ ساعت حضور: ${time}
🏛️ فضای انتخابی: ${area}
📝 یادداشت ویژه: ${notes || 'ندارد'}
━━━━━━━━━━━━━━━━━━━━
لطفاً تایید نهایی رزرو را اعلام بفرمایید.`;

  const encoded = encodeURIComponent(reservationMessage);
  const telegramUrl = `https://t.me/saffron_charcoal_admin?text=${encoded}`;
  
  window.open(telegramUrl, '_blank');

  // Show confirmation modal
  const confirmEl = document.getElementById('reservation-success-box');
  if (confirmEl) {
    confirmEl.style.display = 'block';
    form.style.display = 'none';
  } else {
    showToast('درخواست رزرو شما ثبت و به تلگرام ارسال شد.');
    form.reset();
  }
}

// Sticky Header scroll styling
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (header) {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});

// Setup click ripples and scale press micro-interactions
function initMicroInteractions() {
  document.querySelectorAll('.btn, .chip-btn, .card').forEach(elem => {
    elem.addEventListener('mousedown', () => {
      elem.style.transform = 'scale(0.98)';
    });
    elem.addEventListener('mouseup', () => {
      elem.style.transform = '';
    });
    elem.addEventListener('mouseleave', () => {
      elem.style.transform = '';
    });
  });
}

// Filter and Search for products.html
function initProductFilters() {
  const filterButtons = document.querySelectorAll('.category-chips .chip-btn');
  const searchInput = document.getElementById('product-search-input');
  const productsGrid = document.getElementById('products-catalog-grid');

  if (!productsGrid) return;

  let activeCategory = 'all';
  let searchTerm = '';

  function renderFiltered() {
    const filtered = PRODUCTS_DATA.filter(item => {
      const matchCat = (activeCategory === 'all' || item.category === activeCategory);
      const matchSearch = searchTerm === '' || 
        item.titleFa.includes(searchTerm) || 
        item.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.desc.includes(searchTerm);
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--on-surface-muted);">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <h3 style="font-size: 1.25rem; color: #fff; margin-bottom: 0.5rem;">موردی یافت نشد</h3>
          <p>لطفاً دسته‌بندی دیگری انتخاب کنید یا عبارت جستجو را تغییر دهید.</p>
        </div>
      `;
      return;
    }

    productsGrid.innerHTML = filtered.map(dish => `
      <div class="card dish-card" data-category="${dish.category}">
        <div class="dish-image-wrapper">
          <img src="${dish.image}" alt="${dish.titleFa}" class="dish-img" loading="lazy" />
          <div class="dish-image-vignette"></div>
          <div class="dish-badges">
            ${dish.badge === 'signature' ? `<span class="badge badge-signature">✦ ${dish.badgeText}</span>` : ''}
            ${dish.badge === 'green' ? `<span class="badge badge-green">● ${dish.badgeText}</span>` : ''}
            ${dish.badge === 'gold' ? `<span class="badge badge-gold">★ ${dish.badgeText}</span>` : ''}
          </div>
        </div>

        <div class="dish-content">
          <div class="dish-title-row">
            <h3 class="dish-title-fa">${dish.titleFa}</h3>
          </div>
          <div class="dish-title-en">${dish.titleEn}</div>
          <p class="dish-desc">${dish.desc}</p>

          <div class="dish-footer">
            <div class="dish-price">
              <span class="dish-price-amount">${formatTomans(dish.price)}</span>
              ${dish.prepTime ? `<span class="dish-price-unit">زمان پخت: ${dish.prepTime}</span>` : ''}
            </div>
            <div class="flex gap-2">
              <button type="button" class="btn btn-ghost btn-sm" onclick="openDishModal('${dish.id}')" title="مشاهده جزییات">
                جزییات
              </button>
              <button type="button" class="btn btn-primary btn-sm" onclick="window.appCart.addItem('${dish.id}')" title="افزودن به سبد">
                + سفارش
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    initMicroInteractions();
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category') || 'all';
      renderFiltered();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim();
      renderFiltered();
    });
  }

  // Initial render
  renderFiltered();
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  window.appCart = new CartManager();
  initMicroInteractions();
  initProductFilters();

  // Close modals on overlay backdrop click
  document.querySelectorAll('.modal-overlay, .cart-drawer-overlay, .mobile-drawer').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // ESC key listener to close active overlays
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDishModal();
      closeCartDrawer();
      closeMobileMenu();
      closeTelegramModal();
    }
  });
});
