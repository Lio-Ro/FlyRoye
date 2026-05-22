/* ==========================================
   FLY ROYE – EXPERT INTERACTIVE RADAR CONTROL
   ========================================== */

// Aktiviert den dynamischen Champagner-Lichtkegel unter dem Mauszeiger
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Sendet die Koordinaten flüssig an das CSS-Design
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

// Steuert das sanfte Aufrollen des Cockpit-Menüs beim Scrollen
let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scroll nach unten: Navigationsleiste diskret ausblenden
    navbar.style.top = "-90px";
    navbar.style.background = "rgba(5, 6, 8, 0.95)";
  } else {
    // Scroll nach oben: Navigationsleiste sofort einblenden
    navbar.style.top = "0";
    navbar.style.background = "rgba(5, 6, 8, 0.85)";
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
