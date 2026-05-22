// ==========================================
// FLY ROYE — PREMIUM INTERACTIONS
// Schritt 2 — JavaScript
// ==========================================



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
// NAVBAR SCROLL EFFECT
// ==========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

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
// HERO PARALLAX EFFECT
// ==========================================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  hero.style.backgroundPositionY = `${scrollY * 0.4}px`;

});



// ==========================================
// BUTTON RIPPLE LIGHT EFFECT
// ==========================================

const luxuryButtons = document.querySelectorAll(".luxury-btn");

luxuryButtons.forEach((button) => {

  button.addEventListener("mouseenter", () => {

    button.style.boxShadow =
      "0 0 35px rgba(229,207,146,0.18)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.boxShadow = "none";

  });

});



// ==========================================
// PREMIUM CURSOR GLOW
// ==========================================

const cursorGlow = document.createElement("div");

cursorGlow.classList.add("cursor-glow");

document.body.appendChild(cursorGlow);

document.addEventListener("mousemove", (e) => {

  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;

});



// ==========================================
// SCROLL PROGRESS BAR
// ==========================================

const progressBar = document.createElement("div");

progressBar.classList.add("scroll-progress");

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

  const scrollTop = window.scrollY;

  const docHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress = (scrollTop / docHeight) * 100;

  progressBar.style.width = `${progress}%`;

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

    if(card.classList.contains("featured")){

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
// TYPEWRITER EFFECT FOR HERO TAG
// ==========================================

const heroTag = document.querySelector(".hero-tag");

const originalText = heroTag.textContent;

heroTag.textContent = "";

let index = 0;

function typeWriter(){

  if(index < originalText.length){

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

loader.innerHTML = `
  <div class="loader-logo">Fly Roye</div>
`;

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

/* ==========================================
   REVEAL ANIMATIONS
========================================== */

.hidden-reveal{
  opacity:0;
  transform:translateY(70px);
  transition:
  opacity 1s ease,
  transform 1s ease;
}

.visible{
  opacity:1;
  transform:translateY(0);
}



/* ==========================================
   CURSOR GLOW
========================================== */

.cursor-glow{
  position:fixed;
  width:340px;
  height:340px;
  border-radius:50%;
  background:
  radial-gradient(
    circle,
    rgba(229,207,146,0.10),
    transparent 70%
  );
  pointer-events:none;
  transform:translate(-50%, -50%);
  z-index:0;
  mix-blend-mode:screen;
}



/* ==========================================
   SCROLL BAR
========================================== */

.scroll-progress{
  position:fixed;
  top:0;
  left:0;
  height:2px;
  width:0%;
  z-index:99999;
  background:linear-gradient(
    90deg,
    #e5cf92,
    #fff4cf,
    #e5cf92
  );
  box-shadow:0 0 12px rgba(229,207,146,0.7);
}



/* ==========================================
   ACTIVE NAVIGATION
========================================== */

.active-link{
  color:#e5cf92 !important;
}

.active-link::after{
  width:100% !important;
}



/* ==========================================
   LOADER
========================================== */

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



/* ==========================================
   ANIMATIONS
========================================== */

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



/* ==========================================
   SMOOTH SCROLLING
========================================== */

html{
  scroll-behavior:smooth;
}



/* ==========================================
   MOBILE OPTIMIZATION
========================================== */

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

    {
      opacity:0,
      transform:"translateY(60px)"
    },

    {
      opacity:1,
      transform:"translateY(0px)"
    }

  ], {

    duration:1400,
    easing:"cubic-bezier(0.22, 1, 0.36, 1)",
    fill:"forwards"

  });

});



// ==========================================
// END
// ==========================================
