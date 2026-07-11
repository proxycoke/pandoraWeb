

const WHATSAPP_NUMBER = "51981004005";
const STORE_NAME = "Pandora Boutique";


const CATEGORIES = [
  { id: "velas-peq",    name: "Velas Pequeñas",      icon: "🕯️", color: "#ec1e79" },
  { id: "velas-med",    name: "Velas Medianas",      icon: "🔥", color: "#d6249f" },
  { id: "velas-gra",    name: "Velas Grandes",       icon: "🪔", color: "#b8005c" },
  { id: "velas-can",    name: "Velas Candelabro",    icon: "🏮", color: "#a855f7" },
  { id: "estrellas",    name: "Estrellas Adhesivas", icon: "⭐", color: "#f5b301" },
  { id: "candelabros",  name: "Candelabros",         icon: "✨", color: "#7c3aed" },
  { id: "luces",        name: "Luces LED",           icon: "💡", color: "#ff6fa5" },
  { id: "organizacion", name: "Organización",        icon: "🗂️", color: "#9333ea" },
];
const catById = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));


const RAW_PRODUCTS = [
  
  { name: "Velas LED tipo Misioneras", cat: "velas-peq", price: 2.50, wholesale: "6x S/14 · Doc. S/24 · Ciento S/180" },
  { name: "Velas LED chicas blancas llama traslúcida", cat: "velas-peq", price: 2.50, wholesale: "6x S/14 · Doc. S/24 · Ciento S/180" },
  { name: "Velas LED chicas rojo mate", cat: "velas-peq", price: 3.00, wholesale: "6x S/17 · Doc. S/32 · Ciento S/200" },
  { name: "Velas LED chicas dorado mate", cat: "velas-peq", price: 3.00, wholesale: "6x S/17 · Doc. S/32 · Ciento S/200" },
  { name: "Velas LED chicas efecto prisma 8cm", cat: "velas-peq", price: 4.00, wholesale: "6x S/23 · Doc. S/44 · Ciento S/325" },
  { name: "Velas LED chicas premium color crema", cat: "velas-peq", price: 3.00, wholesale: "6x S/17 · Doc. S/32 · Ciento S/200" },
  { name: "Velas LED chicas blancas flotantes", cat: "velas-peq", price: 2.50, wholesale: "Desde 3 un. S/2.80 · Doc. S/24" },

  
  { name: "Velas LED trío negro luz blanca (3 unid)", cat: "velas-med", price: 25.00, wholesale: "Trío completo, no incluye adornos" },
  { name: "Vela LED mediana crema, cera realista", cat: "velas-med", price: 10.00, wholesale: "Precio por mayor desde 1 unidad" },
  { name: "Vela LED mediana crema, movimiento de llama", cat: "velas-med", price: 6.00, wholesale: "Precio por mayor desde 1 unidad" },
  { name: "Velas LED rojas, crema y blanco, movimiento derretido", cat: "velas-med", price: 7.50, wholesale: "Precio por mayor desde 1 unidad" },
  { name: "Velas LED trío dorado, luz ámbar", cat: "velas-med", price: 12.00, wholesale: "Precio por mayor desde 1 unidad" },
  { name: "Vela LED árbol de Navidad acrílico", cat: "velas-med", price: 11.00, wholesale: "Precio por mayor desde 1 unidad" },

  
  { name: "Vela LED lisa 20cm, llama con movimiento", cat: "velas-gra", price: 14.00, wholesale: "Últimas unidades" },
  { name: "Vela LED lisa 14cm, llama con movimiento", cat: "velas-gra", price: 12.00, wholesale: "Últimas unidades" },
  { name: "Vela LED alta 17.5cm, efecto derretido", cat: "velas-gra", price: 12.00, wholesale: "Docena completa S/122" },
  { name: "Vela LED alta 22.5cm, efecto derretido", cat: "velas-gra", price: 14.00, wholesale: "Docena completa S/144" },
  { name: "Vela LED con tiras acrílicas 15cm", cat: "velas-gra", price: 13.00, wholesale: "Docena completa S/132" },
  { name: "Vela LED tipo cirio larga 20cm", cat: "velas-gra", price: 12.00, wholesale: "Docena completa S/115" },

  
  { name: "Vela LED para candelabro, llama estática", cat: "velas-can", price: 3.00, wholesale: "Doc. S/32 · Ideal para candelabros" },
  { name: "Vela LED para candelabro, efecto prisma", cat: "velas-can", price: 3.50, wholesale: "6x S/20 · Doc. S/38" },

  
  { name: "Blister grande 16 diseños, brillan en la oscuridad", cat: "estrellas", price: 7.50, wholesale: "4x S/28 · 6x S/40 · Doc. S/78" },
  { name: "Blister mediano 6 diseños, brillan en la oscuridad", cat: "estrellas", price: 7.00, wholesale: "4x S/27 · 6x S/39 · Doc. S/75" },
  { name: "Paquete figuras varias, brillan en la oscuridad", cat: "estrellas", price: 7.00, wholesale: "4x S/27 · 6x S/39 · Doc. S/75" },
  { name: "Paquete de 100 estrellas adhesivas", cat: "estrellas", price: 13.00, wholesale: "3x S/38 · 6x S/74 · Doc. S/142" },

  
  { name: "Candelabro PVC plateado", cat: "candelabros", price: 4.50, wholesale: "4x S/16 · 6x S/30 · Doc. S/58" },
  { name: "Candelabro PVC blanco con asa", cat: "candelabros", price: 4.50, wholesale: "4x S/16 · 6x S/30 · Doc. S/58" },
  { name: "Candelabro PVC dorado", cat: "candelabros", price: 4.50, wholesale: "4x S/16 · 6x S/30 · Doc. S/58" },
  { name: "Candelabros dúo metálicos, diseño prisma", cat: "candelabros", price: 28.00, wholesale: "Par (dúo) — también por separado" },
  { name: "Candelabros trío metálicos, diseño clásico", cat: "candelabros", price: 32.00, wholesale: "3x S/90 · 6x S/175 · Doc. S/345" },
  { name: "Candelabro dorado 4 en 1", cat: "candelabros", price: 35.00, wholesale: "3x S/100 · 6x S/190" },
  { name: "Candelabro negro 3 en 1", cat: "candelabros", price: 30.00, wholesale: "3x S/84 · 6x S/165" },
  { name: "Candelabro de vidrio 13.5cm, brillos", cat: "candelabros", price: 18.00, wholesale: "3x S/53 · 6x S/104" },
  { name: "Candelabro de vidrio 11.4cm, brillos", cat: "candelabros", price: 17.00, wholesale: "3x S/49 · 6x S/96" },
  { name: "Candelabro de vidrio 16cm", cat: "candelabros", price: 15.00, wholesale: "3x S/43 · 6x S/84" },

  
  { name: "Guirnalda bombillas 9.5m, cable negro multicolor", cat: "luces", price: 75.00, wholesale: "2x S/138" },
  { name: "Guirnalda bombillas 10m, transparente luz blanca", cat: "luces", price: 35.00, wholesale: "3x S/96 · 12x S/335" },
  { name: "Guirnalda bombillas 10m, cable negro", cat: "luces", price: 75.00, wholesale: "2x S/135" },
  { name: "Guirnalda bombillas 4.5m, cable blanco", cat: "luces", price: 36.00, wholesale: "3x S/96 · 12x S/335" },
  { name: "Guirnalda unicornios dormilones, luz ámbar (a pila)", cat: "luces", price: 20.00, wholesale: "Precio por mayor desde 1 unidad" },
  { name: "Guirnalda ganchos acrílicos con luz ámbar (a pila)", cat: "luces", price: 12.00, wholesale: "Precio por mayor desde 1 unidad" },
  { name: "Estrellas acrílicas tornasol a pilas, luz ámbar", cat: "luces", price: 25.00, wholesale: "Precio por mayor desde 1 unidad" },

  
  { name: "Pack binder ahorro, 12 sobres organizadores", cat: "organizacion", price: 42.00, wholesale: "Incluye stickers y lapicero a elección" },
  { name: "Binder organizador de gastos, unidad", cat: "organizacion", price: 10.00, wholesale: "4 modelos disponibles" },
  { name: "Planificador con separadores", cat: "organizacion", price: 8.00, wholesale: "Ideal para recetas, listas y planes" },
  { name: "Planner semanal", cat: "organizacion", price: 10.00, wholesale: "4 diseños disponibles" },
];

const PRODUCTS = RAW_PRODUCTS.map((p, i) => ({
  id: i + 1,
  name: p.name,
  catId: p.cat,
  price: p.price,
  wholesale: p.wholesale || "",
  sold: false,
  img: placeholderImage(p.cat, p.name),
}));


function placeholderImage(catId, text) {
  const c = catById[catId] || { color: "#999", icon: "🛍️" };
  const initials = text.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase();
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='${c.color}'/>
        <stop offset='1' stop-color='${shade(c.color, -25)}'/>
      </linearGradient>
    </defs>
    <rect width='400' height='400' fill='url(#g)'/>
    <text x='200' y='230' font-size='120' font-family='Arial' font-weight='bold' fill='rgba(255,255,255,.9)' text-anchor='middle'>${initials}</text>
    <text x='200' y='330' font-size='26' font-family='Arial' fill='rgba(255,255,255,.85)' text-anchor='middle'>${c.icon} ${catById[catId] ? catById[catId].name : ""}</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}
function shade(hex, percent) {
  const num = parseInt(hex.replace("#", ""), 16);
  let r = (num >> 16) + percent, g = ((num >> 8) & 0x00ff) + percent, b = (num & 0x0000ff) + percent;
  r = Math.min(255, Math.max(0, r)); g = Math.min(255, Math.max(0, g)); b = Math.min(255, Math.max(0, b));
  return "#" + (0x1000000 + r * 0x10000 + g * 0x100 + b).toString(16).slice(1);
}


const HERO_SLIDES = [
  { title: "Catálogo Pandora Boutique", subtitle: "Velas LED, luces y decoración — por mayor y menor", cta: "Ver catálogo", bg: "linear-gradient(120deg,#ec1e79,#8b0a52)", cat: "all" },
  { title: "Luces LED para tu espacio", subtitle: "Guirnaldas de bombillas para interior y exterior", cta: "Explorar", bg: "linear-gradient(120deg,#ff6fa5,#7c3aed)", cat: "luces" },
  { title: "Candelabros y velas LED", subtitle: "Dale un toque especial a tu hogar o evento", cta: "Ver candelabros", bg: "linear-gradient(120deg,#7c3aed,#4c1d95)", cat: "candelabros" },
];


let cart = {};           
let currentCat = "all";
let currentSearch = "";
let heroIndex = 0;


function renderCatNav() {
  const list = document.getElementById("catNavList");
  const items = [{ id: "all", name: "Todo", icon: "🏬" }, ...CATEGORIES];
  list.innerHTML = items.map(c =>
    `<li><a href="#productos" data-cat="${c.id}" class="cat-nav-link ${c.id === currentCat ? "active" : ""}">${c.icon} ${c.name}</a></li>`
  ).join("");
  list.querySelectorAll(".cat-nav-link").forEach(a => {
    a.addEventListener("click", (e) => { setCategory(a.dataset.cat); });
  });

  const mList = document.getElementById("mobileCatList");
  mList.innerHTML = items.map(c =>
    `<li><a href="#productos" data-cat="${c.id}">${c.icon} &nbsp; ${c.name}</a></li>`
  ).join("");
  mList.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => { setCategory(a.dataset.cat); closeMobileCatPanel(); });
  });
}


function renderCatGrid() {
  const grid = document.getElementById("catGrid");
  grid.innerHTML = CATEGORIES.map(c => `
    <div class="cat-card" data-cat="${c.id}">
      <div class="cat-icon" style="background:${c.color}">${c.icon}</div>
      <span>${c.name}</span>
    </div>`).join("");
  grid.querySelectorAll(".cat-card").forEach(el => {
    el.addEventListener("click", () => setCategory(el.dataset.cat));
  });
}


function renderFilterBar() {
  const bar = document.getElementById("filterBar");
  const items = [{ id: "all", name: "Todo" }, ...CATEGORIES];
  bar.innerHTML = items.map(c =>
    `<button class="filter-chip ${c.id === currentCat ? "active" : ""}" data-cat="${c.id}">${c.name}</button>`
  ).join("");
  bar.querySelectorAll(".filter-chip").forEach(btn => {
    btn.addEventListener("click", () => setCategory(btn.dataset.cat));
  });
}

function setCategory(catId) {
  currentCat = catId;
  renderCatNav();
  renderFilterBar();
  renderProducts();
  document.getElementById("productos").scrollIntoView({ behavior: "smooth", block: "start" });
}


function renderProducts() {
  const grid = document.getElementById("productGrid");
  const search = currentSearch.trim().toLowerCase();
  const list = PRODUCTS.filter(p => {
    const matchCat = currentCat === "all" || p.catId === currentCat;
    const matchSearch = !search || p.name.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });

  if (list.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--gray);padding:40px 0;">No encontramos productos con ese criterio.</p>`;
    return;
  }

  grid.innerHTML = list.map(p => {
    const cat = catById[p.catId];
    return `
    <div class="product-card">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}">
        ${p.sold ? `<div class="badge-sold">Agotado</div>` : ""}
      </div>
      <div class="product-info">
        <span class="product-cat">${cat.name}</span>
        <span class="product-name">${p.name}</span>
        <div class="price-row">
          <span class="price-new">S/ ${p.price.toFixed(2)}</span>
        </div>
        ${p.wholesale ? `<span class="price-wholesale">🛍️ Por mayor: ${p.wholesale}</span>` : ""}
        <button class="add-btn" data-id="${p.id}" ${p.sold ? "disabled" : ""}>
          ${p.sold ? "No disponible" : "🛒 Añadir al carrito"}
        </button>
      </div>
    </div>`;
  }).join("");

  grid.querySelectorAll(".add-btn:not(:disabled)").forEach(btn => {
    btn.addEventListener("click", () => addToCart(Number(btn.dataset.id)));
  });
}


function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  updateCartUI();
  openCart();
}
function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id] += delta;
  if (cart[id] <= 0) delete cart[id];
  updateCartUI();
}
function removeFromCart(id) {
  delete cart[id];
  updateCartUI();
}
function cartCountTotal() {
  return Object.values(cart).reduce((a, b) => a + b, 0);
}
function cartMoneyTotal() {
  return Object.entries(cart).reduce((sum, [id, qty]) => {
    const p = PRODUCTS.find(p => p.id === Number(id));
    return sum + (p ? p.price * qty : 0);
  }, 0);
}
function updateCartUI() {
  document.getElementById("cartCount").textContent = cartCountTotal();
  renderCartItems();
}
function renderCartItems() {
  const wrap = document.getElementById("cartItems");
  const entries = Object.entries(cart);
  if (entries.length === 0) {
    wrap.innerHTML = `<div class="cart-empty">🛒<br>Tu carrito está vacío</div>`;
  } else {
    wrap.innerHTML = entries.map(([id, qty]) => {
      const p = PRODUCTS.find(p => p.id === Number(id));
      if (!p) return "";
      return `
      <div class="cart-item">
        <img src="${p.img}" alt="${p.name}">
        <div class="cart-item-info">
          <span class="ci-name">${p.name}</span>
          <span class="ci-price">S/ ${(p.price * qty).toFixed(2)}</span>
          <div class="qty-row">
            <button data-id="${p.id}" data-d="-1">−</button>
            <span>${qty}</span>
            <button data-id="${p.id}" data-d="1">+</button>
          </div>
        </div>
        <button class="remove-btn" data-remove="${p.id}">Quitar</button>
      </div>`;
    }).join("");

    wrap.querySelectorAll("[data-d]").forEach(btn => {
      btn.addEventListener("click", () => changeQty(Number(btn.dataset.id), Number(btn.dataset.d)));
    });
    wrap.querySelectorAll("[data-remove]").forEach(btn => {
      btn.addEventListener("click", () => removeFromCart(Number(btn.dataset.remove)));
    });
  }

  const total = cartMoneyTotal();
  document.getElementById("cartTotal").textContent = `S/ ${total.toFixed(2)}`;
  const checkoutBtn = document.getElementById("checkoutBtn");
  checkoutBtn.disabled = entries.length === 0;
  checkoutBtn.onclick = () => checkoutViaWhatsapp();
}

function checkoutViaWhatsapp() {
  const entries = Object.entries(cart);
  if (entries.length === 0) return;
  let msg = `¡Hola ${STORE_NAME}! 👋 Quiero hacer el siguiente pedido:%0A%0A`;
  entries.forEach(([id, qty]) => {
    const p = PRODUCTS.find(p => p.id === Number(id));
    if (p) msg += `• ${qty}x ${p.name} — S/ ${(p.price * qty).toFixed(2)}%0A`;
  });
  msg += `%0ATotal: S/ ${cartMoneyTotal().toFixed(2)}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
}


function renderHero() {
  const track = document.getElementById("heroTrack");
  track.innerHTML = HERO_SLIDES.map(s => `
    <div class="hero-slide" style="background:${s.bg}">
      <div class="slide-content">
        <h2>${s.title}</h2>
        <p>${s.subtitle}</p>
        <a href="#productos" class="btn" data-cat="${s.cat || "all"}">${s.cta}</a>
      </div>
    </div>`).join("");
  track.querySelectorAll(".btn").forEach(b => {
    b.addEventListener("click", (e) => setCategory(b.dataset.cat));
  });

  const dots = document.getElementById("heroDots");
  dots.innerHTML = HERO_SLIDES.map((_, i) => `<button data-i="${i}" class="${i === 0 ? "active" : ""}"></button>`).join("");
  dots.querySelectorAll("button").forEach(d => {
    d.addEventListener("click", () => goToSlide(Number(d.dataset.i)));
  });

  updateHeroPosition();
}
function updateHeroPosition() {
  const track = document.getElementById("heroTrack");
  track.style.transform = `translateX(-${heroIndex * 100}%)`;
  document.querySelectorAll("#heroDots button").forEach((d, i) => {
    d.classList.toggle("active", i === heroIndex);
  });
}
function goToSlide(i) {
  heroIndex = (i + HERO_SLIDES.length) % HERO_SLIDES.length;
  updateHeroPosition();
}
let heroTimer = setInterval(() => goToSlide(heroIndex + 1), 5000);


function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("overlay").classList.add("open");
}
function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  if (!document.getElementById("mobileCatPanel").classList.contains("open")) {
    document.getElementById("overlay").classList.remove("open");
  }
}
function openMobileCatPanel() {
  document.getElementById("mobileCatPanel").classList.add("open");
  document.getElementById("overlay").classList.add("open");
}
function closeMobileCatPanel() {
  document.getElementById("mobileCatPanel").classList.remove("open");
  if (!document.getElementById("cartDrawer").classList.contains("open")) {
    document.getElementById("overlay").classList.remove("open");
  }
}


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("¡Hola Pandora Boutique! Quisiera más información sobre sus productos.")}`;
  document.getElementById("waFloat").href = waLink;
  document.getElementById("bnWhatsapp").href = waLink;

  renderCatNav();
  renderCatGrid();
  renderFilterBar();
  renderProducts();
  renderHero();
  updateCartUI();

  
  const doSearch = (val) => { currentSearch = val; renderProducts(); document.getElementById("productos").scrollIntoView({behavior:"smooth"}); };
  document.getElementById("searchBtn").addEventListener("click", () => doSearch(document.getElementById("searchInput").value));
  document.getElementById("searchInput").addEventListener("keydown", (e) => { if (e.key === "Enter") doSearch(e.target.value); });
  document.getElementById("searchBtnMobile").addEventListener("click", () => doSearch(document.getElementById("searchInputMobile").value));
  document.getElementById("searchInputMobile").addEventListener("keydown", (e) => { if (e.key === "Enter") doSearch(e.target.value); });

  
  document.getElementById("btnOpenCart").addEventListener("click", openCart);
  document.getElementById("btnOpenCartMobile").addEventListener("click", openCart);
  document.getElementById("btnCloseCart").addEventListener("click", closeCart);

  
  document.getElementById("btnOpenCatMobile").addEventListener("click", openMobileCatPanel);
  document.getElementById("btnOpenCatMobile2").addEventListener("click", openMobileCatPanel);
  document.getElementById("btnCloseCatMobile").addEventListener("click", closeMobileCatPanel);

  
  document.getElementById("btnFocusSearchMobile").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => document.getElementById("searchInputMobile").focus(), 300);
  });

  
  document.getElementById("overlay").addEventListener("click", () => { closeCart(); closeMobileCatPanel(); });

  
  document.getElementById("heroPrev").addEventListener("click", () => goToSlide(heroIndex - 1));
  document.getElementById("heroNext").addEventListener("click", () => goToSlide(heroIndex + 1));

  
  document.getElementById("newsletterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alertReplacement("¡Gracias por suscribirte! (demo, sin envío real de correos)");
    e.target.reset();
  });
});


function alertReplacement(text) {
  const el = document.createElement("div");
  el.textContent = text;
  el.style.cssText = "position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:#5b1049;color:#fff;padding:10px 18px;border-radius:24px;font-size:13px;z-index:300;box-shadow:0 4px 16px rgba(0,0,0,.3);";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2500);
}
