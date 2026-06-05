// ==========================================
// FLY ROYE — PREMIUM INTERACTIONS
// Mit Destination Modal & Flight Simulation
// ==========================================

// ==========================================
// DESTINATION DATEN
// ==========================================

const destinationsData = {
  zurich: {
    name: "Zürich",
    subtitle: "Schweizer Eleganz & Luxus",
    hotels: [
      { name: "Park Hyatt Zürich", desc: "5-Stern Luxus am Zürichsee mit Privatstrand", price: "CHF 1'200/Nacht" },
      { name: "Baur au Lac", desc: "Legendäres Grandhotel seit 1844, exklusive Suite", price: "CHF 950/Nacht" },
      { name: "The Dolder Grand", desc: "Ikonisches Resort mit Spa & Gourmet-Restaurant", price: "CHF 1'400/Nacht" }
    ],
    activities: [
      { name: "Private Shopping Tour", desc: "Bahnhofstrasse Luxus-Shopping mit Personal Stylist", price: "CHF 500" },
      { name: "Weinverkostung", desc: "Exklusive Zürich Wein-Tour in Top-Restaurants", price: "CHF 350" },
      { name: "Yachtfahrt am See", desc: "Private Yacht mit Champagner & Sunset Dinner", price: "CHF 2'000" }
    ],
    totalPrice: "CHF 5'500 - 8'000 pro Person (3 Tage)"
  },
  stockholm: {
    name: "Stockholm",
    subtitle: "Skandinavisches Design & Moderne",
    hotels: [
      { name: "Diplomat Hotel Stockholm", desc: "Luxuriöses Waterfront Resort mit Michelin-Stern Restaurant", price: "SEK 3'500/Nacht" },
      { name: "Hotel Skeppsholmen", desc: "Boutique-Luxury auf privater Insel", price: "SEK 2'800/Nacht" },
      { name: "At Six", desc: "Design-Hotel mit Sky-Bar & Suite Terrasse", price: "SEK 3'200/Nacht" }
    ],
    activities: [
      { name: "Archipelago Cruise", desc: "Private Yacht Tour durch die Stockholm Inseln", price: "SEK 6'000" },
      { name: "Royal Palace Tour", desc: "Exklusiver VIP-Zugang zum Königlichen Schloss", price: "SEK 1'200" },
      { name: "Design Studio Visit", desc: "Hinter-den-Kulissen Tour bei Top-Designern", price: "SEK 2'500" }
    ],
    totalPrice: "SEK 18'500 - 24'000 pro Person (3 Tage)"
  },
  lasvegas: {
    name: "Las Vegas",
    subtitle: "Glamour & VIP Entertainment",
    hotels: [
      { name: "The Venetian Suite", desc: "All-Suite Luxury Resort mit Grand Canal Shoppes", price: "USD 850/Nacht" },
      { name: "Wynn Las Vegas", desc: "5-Star Resort mit Ferrari Showroom & Golf Course", price: "USD 920/Nacht" },
      { name: "The Cosmopolitan", desc: "Ultra-Modern Luxury mit Penthouse Suites", price: "USD 1'100/Nacht" }
    ],
    activities: [
      { name: "Private Show Experience", desc: "VIP Tickets für Cirque du Soleil & Konzerte", price: "USD 1'500" },
      { name: "Helicopter Tour", desc: "Grand Canyon Helikopterflug mit Champagner", price: "USD 2'800" },
      { name: "High-Roller Dinner", desc: "Michelin-Stern Dinner mit Nightclub VIP Access", price: "USD 1'200" }
    ],
    totalPrice: "USD 7'500 - 10'000 pro Person (4 Tage)"
  },
  mexicocity: {
    name: "Mexico City",
    subtitle: "Kultur & Moderne Gastronomie",
    hotels: [
      { name: "St. Regis Mexico City", desc: "Luxury 5-Star mit Personal Butler Service", price: "MXN 24'000/Nacht" },
      { name: "Condesa DF", desc: "Boutique-Luxury auf der Terrasse mit Weltblick", price: "MXN 18'000/Nacht" },
      { name: "Four Seasons Mexico City", desc: "Premium Resort mit Spa & Rooftop Bar", price: "MXN 22'000/Nacht" }
    ],
    activities: [
      { name: "Frida Kahlo House Tour", desc: "Private VIP-Tour durch das Blaue Haus", price: "MXN 3'500" },
      { name: "Gourmet Market Tour", desc: "Street Food & Fine Dining Mix-Tour mit Chef", price: "MXN 2'800" },
      { name: "Pyramid Sunset Helikopter", desc: "Teotihuacán Pyramiden Hubschrauberflug", price: "MXN 8'500" }
    ],
    totalPrice: "MXN 120'000 - 180'000 pro Person (3 Tage)"
  },
  rio: {
    name: "Rio de Janeiro",
    subtitle: "Strände & Natur Spektakel",
    hotels: [
      { name: "Copacabana Palace", desc: "Legendäres Strandhotel seit 1923 mit Privatstrand", price: "BRL 8'000/Nacht" },
      { name: "Fasano Rio", desc: "Luxury Beachfront Resort mit Michelin-Restaurant", price: "BRL 7'500/Nacht" },
      { name: "JW Marriott Leblon", desc: "Premium Resort in Leblon Beach mit Infinity Pool", price: "BRL 6'500/Nacht" }
    ],
    activities: [
      { name: "Christ the Redeemer VIP", desc: "Private Hubschrauber-Tour über die Statue", price: "BRL 5'200" },
      { name: "Sugarloaf Sunset Cable Car", desc: "Privatgelenkt mit Champagner & Dinner", price: "BRL 3'500" },
      { name: "Yacht & Island Tour", desc: "Private Yacht zu den Inseln mit Snorkling", price: "BRL 6'800" }
    ],
    totalPrice: "BRL 45'000 - 65'000 pro Person (4 Tage)"
  },
  sydney: {
    name: "Sydney",
    subtitle: "Hafen & Extreme Eleganz",
    hotels: [
      { name: "Park Hyatt Sydney", desc: "Ikonisches Luxury Hotel mit Opera House Blick", price: "AUD 1'350/Nacht" },
      { name: "Shangri-La Sydney", desc: "5-Star Harbor-View Resort mit 3-Michelin Restaurant", price: "AUD 1'200/Nacht" },
      { name: "Quay West Suites", desc: "Ultra-Luxury Private Apartments mit Concierge", price: "AUD 1'500/Nacht" }
    ],
    activities: [
      { name: "Opera House VIP Tour", desc: "Private Backstage Tour & private Performance", price: "AUD 1'800" },
      { name: "Luxury Yacht Sailing", desc: "Private Yacht mit Crew & gourmet Dinner", price: "AUD 2'600" },
      { name: "Helicopter City Tour", desc: "30-Min Flug über Sydney mit Champagner", price: "AUD 1'950" }
    ],
    totalPrice: "AUD 9'500 - 14'000 pro Person (3 Tage)"
  },
  bali: {
    name: "Bali",
    subtitle: "Tropisches Paradies & Wellness",
    hotels: [
      { name: "Banyan Tree Bali", desc: "Private Villa-Resort mit Infinity Pools & Spa", price: "IDR 18'000'000/Nacht" },
      { name: "Aman Ubud", desc: "Luxury Retreat im Dschungel mit Yoga Studio", price: "IDR 22'000'000/Nacht" },
      { name: "Four Seasons Jimbaran", desc: "Beachfront Villas mit Private Beach Club", price: "IDR 16'000'000/Nacht" }
    ],
    activities: [
      { name: "Private Spa Week", desc: "7 Tage All-Inclusive Wellness & Ayurveda", price: "IDR 28'000'000" },
      { name: "Volcano Sunrise Trek", desc: "Private Mount Batur Hike mit Gourmet Breakfast", price: "IDR 4'500'000" },
      { name: "Temple & Culture Tour", desc: "Private Guide für Tempel & traditionelle Zeremonien", price: "IDR 3'200'000" }
    ],
    totalPrice: "IDR 150'000'000 - 200'000'000 pro Person (5 Tage)"
  },
  tokyo: {
    name: "Tokyo",
    subtitle: "Futurismus & Kulinarische Perfektion",
    hotels: [
      { name: "The Peninsula Tokyo", desc: "Luxury 5-Star mit 39 Michelin-Stern Restaurants im Gebäude", price: "JPY 500'000/Nacht" },
      { name: "Mandarin Oriental Tokyo", desc: "Sky-Luxury Resort mit Panorama-Suite", price: "JPY 450'000/Nacht" },
      { name: "Aman Tokyo", desc: "Ultra-Luxury Sanctuary mit private Onsen", price: "JPY 550'000/Nacht" }
    ],
    activities: [
      { name: "Michelin 3-Star Dinner", desc: "Private 13-Course Omakase bei Top Chef", price: "JPY 180'000" },
      { name: "Robot Restaurant & VIP", desc: "Exklusiver Backstage Access & Premium Seats", price: "JPY 95'000" },
      { name: "Mount Fuji Private Tour", desc: "Hubschrauber-Flug über Mount Fuji & Kaiseki Dinner", price: "JPY 650'000" }
    ],
    totalPrice: "JPY 3'500'000 - 5'000'000 pro Person (4 Tage)"
  }
};

// ==========================================
// FLIGHT COORDINATES & SIMULATION DATA
// ==========================================

const flightRoutes = [
  { city: "Zürich", lat: 47.45, lng: 8.55, x: 420, y: 150 },
  { city: "Stockholm", lat: 59.33, lng: 18.07, x: 520, y: 80 },
  { city: "Las Vegas", lat: 36.17, lng: -115.14, x: 180, y: 220 },
  { city: "Mexico City", lat: 19.43, lng: -99.13, x: 150, y: 350 },
  { city: "Rio de Janeiro", lat: -22.91, lng: -43.17, x: 380, y: 420 },
  { city: "Sydney", lat: -33.87, lng: 151.21, x: 700, y: 440 },
  { city: "Bali", lat: -8.65, lng: 115.21, x: 650, y: 380 },
  { city: "Tokyo", lat: 35.68, lng: 139.69, x: 800, y: 200 }
];

// ==========================================
// MOUSE GLOW EFFECT
// ==========================================

const glowCards = document.querySelectorAll(".luxury-card");

glowCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});

// ==========================================
// DESTINATION CARD MODAL POPUP
// ==========================================

const destinationCards = document.querySelectorAll(".luxury-card[data-destination]");
const modal = document.getElementById("destinationModal");
const modalClose = document.querySelector(".modal-close");

destinationCards.forEach((card) => {
  card.addEventListener("click", () => {
    const destination = card.getAttribute("data-destination");
    const data = destinationsData[destination];

    if (data) {
      document.getElementById("modalTitle").textContent = data.name;
      document.getElementById("modalSubtitle").textContent = data.subtitle;

      // Hotels
      const hotelsList = document.getElementById("hotelsList");
      hotelsList.innerHTML = data.hotels
        .map(
          (hotel) => `
        <div class="hotel-item">
          <div class="item-name">${hotel.name}</div>
          <div class="item-desc">${hotel.desc}</div>
          <div class="item-price">${hotel.price}</div>
        </div>
      `
        )
        .join("");

      // Activities
      const activitiesList = document.getElementById("activitiesList");
      activitiesList.innerHTML = data.activities
        .map(
          (activity) => `
        <div class="activity-item">
          <div class="item-name">${activity.name}</div>
          <div class="item-desc">${activity.desc}</div>
          <div class="item-price">${activity.price}</div>
        </div>
      `
        )
        .join("");

      // Price
      document.getElementById("priceInfo").innerHTML = `
        <div class="activity-item">
          <div class="item-name">Gesamtpreis pro Person</div>
          <div class="item-price" style="font-size: 1.3rem; margin-top: 10px;">${data.totalPrice}</div>
        </div>
      `;

      modal.classList.add("active");
    }
  });
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

// ==========================================
// FLIGHT SIMULATION CANVAS
// ==========================================

const canvas = document.getElementById("simulationCanvas");
const ctx = canvas.getContext("2d");

// Canvas Größe anpassen
function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let simulationRunning = false;
let simulationPaused = false;
let currentRouteIndex = 0;
let flightProgress = 0;

// Normalisiere Koordinaten für Canvas
function normalizeCoordinates(lat, lng) {
  const x = ((lng + 180) / 360) * canvas.width;
  const y = ((90 - lat) / 180) * canvas.height;
  return { x, y };
}

function drawFlightMap() {
  // Hintergrund
  ctx.fillStyle = "rgba(10, 15, 30, 0.8)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Gitter
  ctx.strokeStyle = "rgba(229, 207, 146, 0.1)";
  ctx.lineWidth = 1;

  for (let i = 0; i <= canvas.width; i += 60) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.height);
    ctx.stroke();
  }

  for (let i = 0; i <= canvas.height; i += 40) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(canvas.width, i);
    ctx.stroke();
  }

  // Flughafenpunkte zeichnen
  flightRoutes.forEach((route, index) => {
    const pos = normalizeCoordinates(route.lat, route.lng);

    // Puls-Effekt für aktuelle oder nächste Station
    if (index === currentRouteIndex || index === currentRouteIndex + 1) {
      ctx.fillStyle = `rgba(229, 207, 146, ${0.3 + Math.sin(Date.now() / 300) * 0.2})`;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 12, 0, Math.PI * 2);
      ctx.fill();
    }

    // Punkt
    ctx.fillStyle = index <= currentRouteIndex ? "rgba(229, 207, 146, 0.9)" : "rgba(229, 207, 146, 0.4)";
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 6, 0, Math.PI * 2);
    ctx.fill();

    // Städtenamen
    ctx.fillStyle = "rgba(229, 207, 146, 0.8)";
    ctx.font = "12px Manrope";
    ctx.textAlign = "center";
    ctx.fillText(route.city, pos.x, pos.y - 18);
  });

  // Verbindungslinien
  for (let i = 0; i < flightRoutes.length - 1; i++) {
    const from = normalizeCoordinates(flightRoutes[i].lat, flightRoutes[i].lng);
    const to = normalizeCoordinates(flightRoutes[i + 1].lat, flightRoutes[i + 1].lng);

    if (i < currentRouteIndex) {
      ctx.strokeStyle = "rgba(229, 207, 146, 0.6)";
      ctx.lineWidth = 2;
    } else if (i === currentRouteIndex) {
      ctx.strokeStyle = "rgba(229, 207, 146, 0.9)";
      ctx.lineWidth = 3;
    } else {
      ctx.strokeStyle = "rgba(229, 207, 146, 0.2)";
      ctx.lineWidth = 1;
    }

    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  }

  // Flugzeug zeichnen
  if (simulationRunning && currentRouteIndex < flightRoutes.length - 1) {
    const from = normalizeCoordinates(
      flightRoutes[currentRouteIndex].lat,
      flightRoutes[currentRouteIndex].lng
    );
    const to = normalizeCoordinates(
      flightRoutes[currentRouteIndex + 1].lat,
      flightRoutes[currentRouteIndex + 1].lng
    );

    const planeX = from.x + (to.x - from.x) * flightProgress;
    const planeY = from.y + (to.y - from.y) * flightProgress;

    const angle = Math.atan2(to.y - from.y, to.x - from.x);

    // Flugzeugrumpf
    ctx.save();
    ctx.translate(planeX, planeY);
    ctx.rotate(angle);

    ctx.fillStyle = "#e5cf92";
    ctx.beginPath();
    ctx.moveTo(12, 0);
    ctx.lineTo(-8, -6);
    ctx.lineTo(-3, 0);
    ctx.lineTo(-8, 6);
    ctx.closePath();
    ctx.fill();

    // Flugzeugtail
    ctx.fillStyle = "rgba(229, 207, 146, 0.7)";
    ctx.beginPath();
    ctx.moveTo(-3, -4);
    ctx.lineTo(-8, -4);
    ctx.lineTo(-8, 4);
    ctx.lineTo(-3, 4);
    ctx.closePath();
    ctx.fill();

    ctx.restore();

    // Trail hinter dem Flugzeug
    ctx.strokeStyle = "rgba(229, 207, 146, 0.3)";
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(planeX, planeY);
    ctx.stroke();
    ctx.setLineDash([]);
  }
}

function animateSimulation() {
  drawFlightMap();

  if (simulationRunning && !simulationPaused) {
    flightProgress += 0.005;

    if (flightProgress >= 1) {
      flightProgress = 0;
      currentRouteIndex++;

      if (currentRouteIndex >= flightRoutes.length - 1) {
        simulationRunning = false;
        currentRouteIndex = 0;
      }
    }
  }

  requestAnimationFrame(animateSimulation);
}

// Control Buttons
document.getElementById("startBtn").addEventListener("click", () => {
  simulationRunning = true;
  simulationPaused = false;
  document.getElementById("startBtn").classList.add("active");
  document.getElementById("pauseBtn").classList.remove("active");
});

document.getElementById("pauseBtn").addEventListener("click", () => {
  simulationPaused = !simulationPaused;
  if (simulationPaused) {
    document.getElementById("pauseBtn").classList.add("active");
  } else {
    document.getElementById("pauseBtn").classList.remove("active");
  }
});

document.getElementById("resetBtn").addEventListener("click", () => {
  simulationRunning = false;
  simulationPaused = false;
  currentRouteIndex = 0;
  flightProgress = 0;
  document.getElementById("startBtn").classList.remove("active");
  document.getElementById("pauseBtn").classList.remove("active");
});

animateSimulation();

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,0.92)";
    navbar.style.borderBottom = "1px solid rgba(229,207,146,0.12)";
    navbar.style.boxShadow = "0 10px 40px rgba(0,0,0,0.45)";
  } else {
    navbar.style.background = "rgba(5,5,5,0.75)";
    navbar.style.borderBottom = "1px solid rgba(255,255,255,0.05)";
    navbar.style.boxShadow = "none";
  }
});

// ==========================================
// SMOOTH REVEAL ANIMATION
// ==========================================

const revealElements = document.querySelectorAll(
  ".luxury-card, .package-card, .contact-info, .contact-form, .map-wrapper"
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach((el) => {
  el.classList.add("hidden-reveal");
  revealObserver.observe(el);
});

// ==========================================
// BUTTON RIPPLE LIGHT EFFECT
// ==========================================

const luxuryButtons = document.querySelectorAll(".luxury-btn");

luxuryButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.boxShadow = "0 0 35px rgba(229,207,146,0.18)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.boxShadow = "none";
  });
});

// ==========================================
// FLOATING PACKAGE EFFECT
// ==========================================

const packageCards = document.querySelectorAll(".package-card");

packageCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-16px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    if (card.classList.contains("featured")) {
      card.style.transform = "scale(1.03)";
    } else {
      card.style.transform = "translateY(0px) scale(1)";
    }
  });
});

// ==========================================
// ACTIVE NAVIGATION LINKS
// ==========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 160;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-link");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-link");
    }
  });
});

// ==========================================
// TYPEWRITER EFFECT FOR HERO TAG
// ==========================================

const heroTag = document.querySelector(".hero-tag");
const originalText = heroTag.textContent;

heroTag.textContent = "";

let index = 0;

function typeWriter() {
  if (index < originalText.length) {
    heroTag.textContent += originalText.charAt(index);
    index++;
    setTimeout(typeWriter, 45);
  }
}

typeWriter();

// ==========================================
// LUXURY LOADING SCREEN
// ==========================================

const loader = document.createElement("div");
loader.classList.add("luxury-loader");
loader.innerHTML = `<div class="loader-logo">Fly Roye</div>`;
document.body.appendChild(loader);

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("loader-hidden");
  }, 1200);
});

// ==========================================
// DYNAMIC YEAR
// ==========================================

const footer = document.querySelector("footer");
footer.innerHTML = `© ${new Date().getFullYear()} Fly Roye`;

// ==========================================
// EXTRA CSS VIA JAVASCRIPT
// ==========================================

const extraStyles = document.createElement("style");

extraStyles.innerHTML = `
  .hidden-reveal{
    opacity:0;
    transform:translateY(70px);
    transition: opacity 1s ease, transform 1s ease;
  }

  .visible{
    opacity:1;
    transform:translateY(0);
  }

  .cursor-glow{
    position:fixed;
    width:340px;
    height:340px;
    border-radius:50%;
    background: radial-gradient(circle, rgba(229,207,146,0.10), transparent 70%);
    pointer-events:none;
    transform:translate(-50%, -50%);
    z-index:0;
    mix-blend-mode:screen;
  }

  .scroll-progress{
    position:fixed;
    top:0;
    left:0;
    height:2px;
    width:0%;
    z-index:99999;
    background:linear-gradient(90deg, #e5cf92, #fff4cf, #e5cf92);
    box-shadow:0 0 12px rgba(229,207,146,0.7);
  }

  .active-link{
    color:#e5cf92 !important;
  }

  .active-link::after{
    width:100% !important;
  }

  .luxury-loader{
    position:fixed;
    inset:0;
    background:#050505;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:999999;
    transition:opacity 1s ease, visibility 1s ease;
  }

  .loader-logo{
    color:#e5cf92;
    font-size:2.5rem;
    letter-spacing:10px;
    font-weight:800;
    animation:pulse 2s infinite ease-in-out;
  }

  .loader-hidden{
    opacity:0;
    visibility:hidden;
  }

  @keyframes pulse{
    0%{
      opacity:0.4;
      transform:scale(0.98);
    }
    50%{
      opacity:1;
      transform:scale(1.03);
    }
    100%{
      opacity:0.4;
      transform:scale(0.98);
    }
  }

  html{
    scroll-behavior:smooth;
  }

  @media(max-width:768px){
    .cursor-glow{
      display:none;
    }
  }
`;

document.head.appendChild(extraStyles);

// ==========================================
// CINEMATIC HERO ENTRANCE
// ==========================================

window.addEventListener("load", () => {
  const heroContent = document.querySelector(".hero-content");
  heroContent.animate([
    { opacity: 0, transform: "translateY(60px)" },
    { opacity: 1, transform: "translateY(0px)" }
  ], {
    duration: 1400,
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    fill: "forwards"
  });
});

// ==========================================
// LANDO NORRIS STYLE CURSOR
// ==========================================

const cursor = document.querySelector(".custom-cursor");
const ring = document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;
});

function animateRing() {
  ringX += (mouseX - ringX) * 0.18;
  ringY += (mouseY - ringY) * 0.18;
  ring.style.left = `${ringX}px`;
  ring.style.top = `${ringY}px`;
  requestAnimationFrame(animateRing);
}

animateRing();

const hoverTargets = document.querySelectorAll(
  ".luxury-btn, .nav-links a, .luxury-card, .package-card"
);

hoverTargets.forEach((target) => {
  target.addEventListener("mouseenter", () => {
    document.body.classList.add("cursor-hover");
  });

  target.addEventListener("mouseleave", () => {
    document.body.classList.remove("cursor-hover");
  });
});

// ==========================================
// MAGNETIC BUTTON EFFECT
// ==========================================

const magneticItems = document.querySelectorAll(".luxury-btn, .package-card");

magneticItems.forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    item.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "translate(0px, 0px)";
  });
});
