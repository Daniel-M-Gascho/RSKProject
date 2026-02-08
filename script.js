// Menu mobile básico
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if(burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

// Scroll Suave para os links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // Scroll para baixo: Esconde o menu
    header.style.top = '-100px'; 
  } else {
    // Scroll para cima: Mostra o menu
    header.style.top = '0';
  }
  lastScrollTop = scrollTop;
});

// --- FUNÇÕES DO LIGHTBOX RSK PROJETOS ---

function openLightbox(src) {
    const lightbox = document.getElementById('custom-lightbox');
    const img = document.getElementById('lightbox-img');
    
    if (lightbox && img) {
        img.src = src;
        lightbox.style.display = 'flex';
        // Impede que o fundo do site role enquanto a imagem está aberta
        document.body.style.overflow = 'hidden'; 
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('custom-lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
        // Devolve o scroll ao site
        document.body.style.overflow = 'auto'; 
    }
}

// Fechar automaticamente ao apertar a tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});