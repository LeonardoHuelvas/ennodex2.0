 document.addEventListener("DOMContentLoaded", function() {
     // Esperar a que el chatbot aparezca
     const observer = new MutationObserver(() => {
         const chatbotBtn = document.querySelector('img[src*="Sin-titulo-1-768x257.png"]');

         if (chatbotBtn && !chatbotBtn.classList.contains('chatbot-icon')) {
             chatbotBtn.classList.add('chatbot-icon');
         }
     });

     observer.observe(document.body, {
         childList: true,
         subtree: true
     });
 });

 // js/index.js (o inline)
 particlesJS.load('particles-js', '/particles.json', () => {
     console.log('particles.json cargado');
 });
 document.addEventListener('DOMContentLoaded', function() {
     const carousel = document.querySelector('.carousel');
     const allSlides = carousel.querySelectorAll('img');
     const nav = document.querySelector('.carousel-nav');
     let currentIndex = 0;
     let interval;

     // Número de slides que queremos
     const VISIBLE_SLIDES = 3;
     const slides = Array.from(allSlides).slice(0, VISIBLE_SLIDES);

     // ¡Limpia cualquier botón previo!
     nav.innerHTML = '';

     // Crear botones nuevos
     slides.forEach((_, idx) => {
         const btn = document.createElement('button');
         if (idx === 0) btn.classList.add('active');
         btn.addEventListener('click', () => goToSlide(idx));
         nav.appendChild(btn);
     });
     const navButtons = nav.querySelectorAll('button');

     function goToSlide(index) {
         slides[currentIndex].classList.remove('active');
         navButtons[currentIndex].classList.remove('active');
         slides[index].classList.add('active');
         navButtons[index].classList.add('active');
         currentIndex = index;
         resetInterval();
     }

     function nextSlide() {
         goToSlide((currentIndex + 1) % slides.length);
     }

     function resetInterval() {
         clearInterval(interval);
         interval = setInterval(nextSlide, 5000);
     }

     // Marca el primero como activo y lanza autoplay
     slides[0].classList.add('active');
     resetInterval();
 });

 document.addEventListener('DOMContentLoaded', () => {
     const btn = document.getElementById('back-to-top');
     const showAfter = 200; // píxeles de scroll

     // Mostrar u ocultar según scroll
     window.addEventListener('scroll', () => {
         if (window.scrollY > showAfter) {
             btn.style.display = 'block';
         } else {
             btn.style.display = 'none';
         }
     });

     // Al hacer clic: scroll suave al top
     btn.addEventListener('click', () => {
         window.scrollTo({
             top: 0,
             behavior: 'smooth'
         });
     });
 });


 window.addEventListener('scroll', () => {
     const btn = document.getElementById('back-to-top');
     btn.style.display = window.scrollY > 200 ? 'block' : 'none';
 });