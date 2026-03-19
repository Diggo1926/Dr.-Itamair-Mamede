// ========================================
//  SITE DR. CARLOS MENDES — JAVASCRIPT
// ========================================
 
 
// ── 1. ANIMAÇÃO DE ENTRADA AO ROLAR (SCROLL REVEAL) ──
// Seleciona todos os elementos com classe "reveal"
const revealEls = document.querySelectorAll('.reveal');
 
// Cria um "observador" que detecta quando cada elemento
// aparece na tela conforme o usuário rola a página
const obs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Adiciona a classe "visible" com um pequeno atraso
      // escalonado para criar efeito de cascata
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
 
      // Para de observar o elemento depois que ele apareceu
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 }); // Dispara quando 12% do elemento está visível
 
// Começa a observar cada elemento
revealEls.forEach(el => obs.observe(el));
 
 
// ── 2. ABAS INTERATIVAS DA SEÇÃO "ÁREAS DE ATUAÇÃO" ──
// Chamada pelo onclick de cada aba no HTML: onclick="switchArea(0)"
function switchArea(idx) {
  // Ativa/desativa a aba clicada
  document.querySelectorAll('.area-tab').forEach((tab, i) => {
    tab.classList.toggle('active', i === idx);
  });
 
  // Mostra/oculta o painel correspondente
  document.querySelectorAll('.area-panel').forEach((panel, i) => {
    panel.classList.toggle('active', i === idx);
  });
}
 
 
// ── 3. NAVEGAÇÃO DINÂMICA (ENCOLHE AO ROLAR) ──
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.style.padding = window.scrollY > 60 ? '1rem 6%' : '1.6rem 6%';
});
 
 
// ── 4. MENU HAMBURGUER (MOBILE) ──
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');
 
function closeMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}
 
hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  // Trava o scroll da página enquanto o menu estiver aberto
  document.body.style.overflow = isOpen ? 'hidden' : '';
});
 
// Fecha o menu ao pressionar ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});