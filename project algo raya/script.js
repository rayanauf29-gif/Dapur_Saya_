


document.addEventListener('DOMContentLoaded', function() {
    console.log('Website DAPUR SAYA siap!');
    
  
});


function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}


function openWhatsApp() {
    const message = "Halo, saya tertarik untuk memesan makanan di DAPUR SAYA.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/628977256397?text=${encodedMessage}`, '_blank');
}


document.addEventListener('DOMContentLoaded', function() {
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            
        });
    });
});
