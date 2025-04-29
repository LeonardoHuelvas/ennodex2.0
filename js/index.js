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