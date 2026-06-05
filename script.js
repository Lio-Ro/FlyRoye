// ==========================================
// FLY ROYE — PREMIUM INTERACTIONS V2
// Ultra-Luxury Edition
// ==========================================

// DESTINATION DATABASE
const destinations = {
  zurich: {
    title: "Zürich — Alpine Eleganz",
    subtitle: "Schweizer Luxus am Zürichsee",
    hotels: [
      { name: "Dolder Grand", desc: "Legendäres 5-Sterne Hotel mit Michelin-Restaurant", price: "CHF 2'500/Nacht" },
      { name: "Park Hyatt Zürich", desc: "Direkter Seeblick mit privatem Strand", price: "CHF 2'200/Nacht" },
      { name: "Widder Hotel", desc: "Boutique-Luxus in der Altstadt", price: "CHF 1'800/Nacht" }
    ],
    activities: [
      { name: "Private Yacht Tour", desc: "Exklusive Segelfahrt auf dem Zürichsee", price: "CHF 3'500" },
      { name: "Shopping at Bahnhofstrasse", desc: "VIP-Begleitung bei Luxus-Shopping", price: "CHF 1'200" },
      { name: "Helikopter-Rundflug", desc: "Alpen-Panorama-Flug mit Champagner", price: "CHF 4'800" }
    ]
  },
  stockholm: {
    title: "Stockholm — Skandinavischer Style",
    subtitle: "Modern Design trifft nordische Schönheit",
    hotels: [
      { name: "The Grand Hotel", desc: "Stockholms bekanntestes Luxushotel", price: "CHF 1'900/Nacht" },
      { name: "Hotel Skeppsholmen", desc: "Design-Boutique mit Insel-Lage", price: "CHF 1'600/Nacht" },
      { name: "Nobis Hotel", desc: "Skandinavisches Minimalismus-Luxus", price: "CHF 1'700/Nacht" }
    ],
    activities: [
      { name: "Archipelago Cruise", desc: "Private Bootsfahrt durch 30,000 Inseln", price: "CHF 2'800" },
      { name: "Michelin Dinner", desc: "Geheimnisvolles 8-Gänge-Menü", price: "CHF 1'500" },
      { name: "Aurora Hunt", desc: "Nordlichter-Jagd mit Privatflugzeug", price: "CHF 5'600" }
    ]
  },
  lasvegas: {
    title: "Las Vegas — Glamour & Extravaganz",
    subtitle: "Die Unterhaltungshauptstadt der Welt",
    hotels: [
      { name: "Cosmopolitan", desc: "Tech-Luxus im Herzen des Strip", price: "CHF 1'500/Nacht" },
      { name: "Wynn Las Vegas", desc: "Ikonisches Luxus-Resort mit Golf", price: "CHF 1'800/Nacht" },
      { name: "Bellagio", desc: "Klassischer Glamour seit 1998", price: "CHF 1'400/Nacht" }
    ],
    activities: [
      { name: "Private Show", desc: "Exklusive Vegas-Show mit VIP-Table", price: "CHF 2'500" },
      { name: "High-Stakes Gaming", desc: "VIP-Pokertisch mit Private Dealer", price: "CHF 5'000+" },
      { name: "Helicopter Tour", desc: "Grand Canyon Night Flight", price: "CHF 3'200" }
    ]
  },
  mexicocity: {
    title: "Mexico City — Kulturelle Fusion",
    subtitle: "Alte Tradition trifft moderne Eleganz",
    hotels: [
      { name: "Rosewood Mexico City", desc: "Kunstwerk aus Architektur und Luxus", price: "CHF 1'200/Nacht" },
      { name: "Four Seasons", desc: "Politisches Zentrum mit Diplomat-Service", price: "CHF 1'100/Nacht" },
      { name: "Condesa DF", desc: "Trendy Design-Hotel im besten Viertel", price: "CHF 900/Nacht" }
    ],
    activities: [
      { name: "Private Museum Tour", desc: "Exklusive Kunstmuseum nach Feierabend", price: "CHF 1'800" },
      { name: "Frida & Diego Experience", desc: "Geführte Künstler-Häuser Tour", price: "CHF 1'200" },
      { name: "Gourmet Cooking Class", desc: "Private Küchen-Meisterklasse", price: "CHF 2'000" }
    ]
  },
  rio: {
    title: "Rio de Janeiro — Tropische Eleganz",
    subtitle: "Berge, Strand und urbaner Glanz",
    hotels: [
      { name: "Fasano Rio", desc: "Beachfront-Eleganz mit Privatstrand", price: "CHF 1'300/Nacht" },
      { name: "Copacabana Palace", desc: "Ikonischer Glamour seit 1923", price: "CHF 1'400/Nacht" },
      { name: "Marina All Suites", desc: "Modernes Design mit Panoramablick", price: "CHF 1'100/Nacht" }
    ],
    activities: [
      { name: "Private Beach Club", desc: "Exklusive Strandclub mit Concierge", price: "CHF 800" },
      { name: "Christ Redeemer Dinner", desc: "Sonnenuntergang am Monument", price: "CHF 1'600" },
      { name: "Yacht Sunset Cruise", desc: "Luxus-Katamaran mit Gourmet", price: "CHF 2'200" }
    ]
  },
  sydney: {
    title: "Sydney — Harbour Splendor",
    subtitle: "Architektur und Naturschönheit",
    hotels: [
      { name: "Park Hyatt Sydney", desc: "Opera House View Suite", price: "CHF 1'600/Nacht" },
      { name: "Shangri-La Sydney", desc: "Circulair Quay Lage mit Peak-Views", price: "CHF 1'400/Nacht" },
      { name: "Four Seasons", desc: "The Rocks Heritage Luxury", price: "CHF 1'300/Nacht" }
    ],
    activities: [
      { name: "Opera House VIP Tour", desc: "Backstage mit Dirigent", price: "CHF 1'500" },
      { name: "Private Yacht Charter", desc: "Segeln vor dem Hafen", price: "CHF 4'000" },
      { name: "Blue Mountains Helipad", desc: "Helicopter & Gourmet Lunch", price: "CHF 3'800" }
    ]
  },
  bali: {
    title: "Bali — Paradies Wellness",
    subtitle: "Tropische Ruhe und hinduistische Kultur",
    hotels: [
      { name: "Kayuputi Villa", desc: "Private Villa mit Infinity Pool", price: "CHF 850/Nacht" },
      { name: "Bulgari Resort", desc: "Luxury Clifftop mit Ocean Spa", price: "CHF 1'200/Nacht" },
      { name: "Como Shambhala", desc: "Ultimate Wellness Retreat", price: "CHF 950/Nacht" }
    ],
    activities: [
      { name: "Private Spa Experience", desc: "Traditional Balinese 8-Stunden Spa", price: "CHF 900" },
      { name: "Temple Ceremony", desc: "Exklusive Hindu-Zeremonien", price: "CHF 600" },
      { name: "Jungle Trekking", desc: "Geführte Dschungel-Adventure", price: "CHF 450" }
    ]
  },
  tokyo: {
    title: "Tokyo — Zukunft & Tradition",
    subtitle: "Die schlagende Technologie-Metropole",
    hotels: [
      { name: "Mandarin Oriental Tokyo", desc: "Skyline-Luxus über 38 Etagen", price: "CHF 2'200/Nacht" },
      { name: "Peninsula Tokyo", desc: "Ginza District Elegance", price: "CHF 2'000/Nacht" },
      { name: "Ritz-Carlton Tokyo", desc: "Midtown Modern Luxury", price: "CHF 1'900/Nacht" }
    ],
    activities: [
      { name: "Michelin 3-Sterne Dinner", desc: "Private Sushi-Meisterclass", price: "CHF 1'800" },
      { name: "Anime & Tech Tour", desc: "Private Guide durch Innovation", price: "CHF 1'200" },
      { name: "Mount Fuji Retreat", desc: "Private Hot-Spring & Kaiseki", price: "CHF 2'400" }
    ]
  }
};

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
// DESTINATION MODAL SYSTEM
// ==========================================

const modal = document.getElementById("destinationModal");
const modalClose = document.querySelector(".modal-close");

glowCards.forEach((card) => {
  card.addEventListener("click", () => {
    const destination = card.dataset.destination;
    if (destination && destinations[destination]) {
      showDestinationModal(destination);
    }
  });
});

function showDestinationModal(destination) {
  const data = destinations[destination];
  
  document.getElementById("modalTitle").textContent = data.title;
  document.getElementById("modalSubtitle").textContent = data.subtitle;
  
  // Hotels
  const hotelsList = document.getElementById("hotelsList");
  hotelsList.innerHTML = data.hotels.map(h => `
    <div class="hotel-item">
      <div class="item-name">${h.name}</div>
      <div class="item-desc">${h.desc}</div>
      <div class="item-price">${h.price}</div>
    </div>
  `).join("");
  
  // Activities
  const activitiesList = document.getElementById("activitiesList");
  activitiesList.innerHTML = data.activities.map(a => `
    <div class="activity-item">
      <div class="item-name">${a.name}</div>
      <div class="item-desc">${a.desc}</div>
      <div class="item-price">${a.price}</div>
    </div>
  `).join("");
  
  // Price info
  const totalHotel = data.hotels[0].price.match(/CHF ([\d']+)/)[1];
  const totalActivity = data.activities.reduce((sum, a) => sum + parseInt(a.price.match(/[\d']+/)[0].replace("'", "")), 0);
  
  document.getElementById("priceInfo").innerHTML = `
    <div style="background:linear-gradient(135deg, rgba(218,177,93,0.15), rgba(218,177,93,0.05)); padding:20px; border-radius:12px; border:1px solid rgba(218,177,93,0.3);">
      <p style="margin-bottom:12px; color:#d8d8d8;"><strong>Durchschnittliche Tageskosten:</strong> CHF 2'500–4'000</p>
      <p style="color:var(--gold); font-weight:700; font-size:1.2rem;">7 Tage ab CHF 18'500</p>
    </div>
  `;
  
  modal.classList.add("active");
}

modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if(window.scrollY > 50){
    navbar.style.background = "rgba(0,0,0,0.95)";
    navbar.style.borderBottom = "1px solid rgba(218,177,93,0.2)";
    navbar.style.boxShadow = "0 15px 50px rgba(0,0,0,0.5)";
  } else {
    navbar.style.background = "rgba(10,10,10,0.85)";
    navbar.style.borderBottom = "1px solid rgba(218,177,93,0.15)";
    navbar.style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)";
  }
});

// ==========================================
// SMOOTH REVEAL ANIMATION
// ==========================================

const revealElements = document.querySelectorAll(
  ".luxury-card, .package-card, .contact-info, .contact-form, .map-wrapper, .flight-simulator"
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
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
// FLIGHT SIMULATION
// ==========================================

const canvas = document.getElementById("simulationCanvas");
const ctx = canvas.getContext("2d");

let animationRunning = false;
let animationProgress = 0;

// Destination coordinates (relative to canvas)
const flightPath = [
  { name: "Zürich", x: 200, y: 250 },
  { name: "Stockholm", x: 350, y: 150 },
  { name: "Las Vegas", x: 150, y: 380 },
  { name: "Mexico City", x: 200, y: 450 },
  { name: "Rio", x: 320, y: 500 },
  { name: "Sydney", x: 550, y: 450 },
  { name: "Bali", x: 500, y: 380 },
  { name: "Tokyo", x: 600, y: 200 },
  { name: "Zürich", x: 200, y: 250 }
];

function resizeCanvas() {
  const wrapper = canvas.parentElement;
  canvas.width = wrapper.offsetWidth;
  canvas.height = 550;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function drawSimulation() {
  const w = canvas.width;
  const h = canvas.height;
  
  // Clear canvas
  ctx.fillStyle = "rgba(10, 10, 10, 1)";
  ctx.fillRect(0, 0, w, h);
  
  // Draw grid
  ctx.strokeStyle = "rgba(218, 177, 93, 0.1)";
  ctx.lineWidth = 1;
  for(let i = 0; i < w; i += 40) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, h);
    ctx.stroke();
  }
  for(let i = 0; i < h; i += 40) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(w, i);
    ctx.stroke();
  }
  
  // Scale path to canvas size
  const scaledPath = flightPath.map(p => ({
    name: p.name,
    x: (p.x / 700) * w,
    y: (p.y / 550) * h
  }));
  
  // Draw flight route
  ctx.strokeStyle = "rgba(218, 177, 93, 0.4)";
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(scaledPath[0].x, scaledPath[0].y);
  for(let i = 1; i < scaledPath.length; i++) {
    ctx.lineTo(scaledPath[i].x, scaledPath[i].y);
  }
  ctx.stroke();
  ctx.setLineDash([]);
  
  // Draw destination points
  scaledPath.forEach((point, index) => {
    if(index < scaledPath.length - 1) {
      ctx.fillStyle = "rgba(218, 177, 93, 0.8)";
      ctx.beginPath();
      ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
      ctx.fill();
      
      // City name
      ctx.fillStyle = "rgba(218, 177, 93, 0.6)";
      ctx.font = "12px 'Montserrat', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(point.name, point.x, point.y + 20);
    }
  });
  
  // Draw airplane
  if(animationRunning || animationProgress > 0) {
    const currentIndex = Math.floor(animationProgress * (scaledPath.length - 1));
    const nextIndex = Math.min(currentIndex + 1, scaledPath.length - 1);
    
    const progress = (animationProgress * (scaledPath.length - 1)) % 1;
    const current = scaledPath[currentIndex];
    const next = scaledPath[nextIndex];
    
    const planeX = current.x + (next.x - current.x) * progress;
    const planeY = current.y + (next.y - current.y) * progress;
    
    // Airplane glow
    const gradient = ctx.createRadialGradient(planeX, planeY, 0, planeX, planeY, 20);
    gradient.addColorStop(0, "rgba(218, 177, 93, 0.4)");
    gradient.addColorStop(1, "rgba(218, 177, 93, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(planeX - 20, planeY - 20, 40, 40);
    
    // Airplane
    ctx.fillStyle = "#dab15d";
    ctx.font = "bold 24px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("✈", planeX, planeY);
  }
}

function animate() {
  drawSimulation();
  
  if(animationRunning) {
    animationProgress += 0.005;
    if(animationProgress > 1) {
      animationProgress = 0;
    }
  }
  
  requestAnimationFrame(animate);
}

animate();

// Controls
document.getElementById("startBtn").addEventListener("click", () => {
  animationRunning = true;
  document.getElementById("startBtn").classList.add("active");
  document.getElementById("pauseBtn").classList.remove("active");
});

document.getElementById("pauseBtn").addEventListener("click", () => {
  animationRunning = false;
  document.getElementById("startBtn").classList.remove("active");
  document.getElementById("pauseBtn").classList.add("active");
});

document.getElementById("resetBtn").addEventListener("click", () => {
  animationRunning = false;
  animationProgress = 0;
  document.getElementById("startBtn").classList.remove("active");
  document.getElementById("pauseBtn").classList.remove("active");
  drawSimulation();
});

// ==========================================
// BUTTON RIPPLE LIGHT EFFECT
// ==========================================

const luxuryButtons = document.querySelectorAll(".luxury-btn");

luxuryButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.boxShadow = "0 20px 60px rgba(218,177,93,0.4)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.boxShadow = "0 10px 40px rgba(218,177,93,0.3)";
  });
});

// ==========================================
// EXTRA CSS VIA JAVASCRIPT
// ==========================================

const extraStyles = document.createElement("style");

extraStyles.innerHTML = `

/* REVEAL ANIMATIONS */

.hidden-reveal{
  opacity:0;
  transform:translateY(80px);
  transition:
  opacity 1.2s cubic-bezier(0.34, 1.56, 0.64, 1),
  transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.visible{
  opacity:1;
  transform:translateY(0);
}

/* ACTIVE NAVIGATION */

.active-link{
  color:#dab15d !important;
}

.active-link::after{
  width:100% !important;
}

/* LOADER */

.luxury-loader{
  position:fixed;
  inset:0;
  background:#0a0a0a;
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:999999;
  transition:opacity 1s ease, visibility 1s ease;
}

.loader-logo{
  color:#dab15d;
  font-size:3rem;
  letter-spacing:12px;
  font-weight:900;
  animation:pulse 2s infinite ease-in-out;
  font-family:'Playfair Display', serif;
}

.loader-hidden{
  opacity:0;
  visibility:hidden;
}

@keyframes pulse{
  0%{
    opacity:0.3;
    transform:scale(0.95);
  }
  50%{
    opacity:1;
    transform:scale(1.05);
  }
  100%{
    opacity:0.3;
    transform:scale(0.95);
  }
}

/* SMOOTH SCROLLING */

html{
  scroll-behavior:smooth;
}

/* MOBILE OPTIMIZATION */

@media(max-width:768px){

  .cursor-glow{
    display:none;
  }

}

`;

document.head.appendChild(extraStyles);

// ==========================================
// DYNAMIC YEAR
// ==========================================

const footer = document.querySelector("footer");
footer.innerHTML = `© ${new Date().getFullYear()} FLY ROYE™ — Luxury World Travel Agency. All rights reserved.`;

// ==========================================
// ACTIVE NAVIGATION LINKS
// ==========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 200;
    if(window.scrollY >= sectionTop){
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-link");
    if(link.getAttribute("href") === `#${current}`){
      link.classList.add("active-link");
    }
  });
});

// ==========================================
// PREMIUM CURSOR GLOW
// ==========================================

const cursor = document.querySelector(".custom-cursor");
const ring = document.querySelector(".cursor-ring");

if(cursor && ring) {
  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  function animateRing(){
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
}

// ==========================================
// MAGNETIC BUTTON EFFECT
// ==========================================

const magneticItems = document.querySelectorAll(
  ".luxury-btn, .package-card"
);

magneticItems.forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    item.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "translate(0px, 0px)";
  });
});

// ==========================================
// HERO PARALLAX EFFECT
// ==========================================

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const hero = document.querySelector(".hero");
  if(hero) {
    hero.style.backgroundPositionY = `${scrollY * 0.3}px`;
  }
});
