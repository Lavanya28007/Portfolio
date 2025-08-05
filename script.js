// Typed JS

var typed = new Typed(".text", {
   strings: ["Web Developer", "Frontend Developer", "Full-Stack Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});
// Mixitup JS Filter
 var mixer = mixitup('.projects_cards')


 //Show Menu

let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu');
let nav = document.querySelector('nav');

bar.addEventListener('click',()=>{
    menu.classList.toggle('show_menu');
    nav.classList.toggle('nav_border');
});
// Alert message for form submission
window.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your inquiry! Your message has been sent.');
      contactForm.reset();
    });
  }
});  