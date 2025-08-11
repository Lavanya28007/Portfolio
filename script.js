var typed = new Typed(".text", {
   strings: ["Web Developer", "Frontend Developer", "Full-Stack Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});



// ScrollReveal

  // Global settings
  const sr = ScrollReveal({
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    reset: false
  });

  // Header & Nav
  sr.reveal('header', { origin: 'top', delay: 100 });

  // Hero image and text
  sr.reveal('.h-39', { origin: 'left', delay: 200 });
  sr.reveal('.xl\\:w-5\\/12', { origin: 'right', delay: 300 });

  // About section
  sr.reveal('#about h1', { origin: 'bottom', delay: 100 });
  sr.reveal('#about .lg\\:col-span-6', { origin: 'left', delay: 200 });
  sr.reveal('#about nav', { origin: 'right', delay: 300, interval: 200 });

  // Services section cards
  sr.reveal('#service h1', { origin: 'bottom', delay: 100 });
  sr.reveal('#service .p-4', { origin: 'bottom', interval: 200 });

  // Projects section
  sr.reveal('#project h2', { origin: 'bottom', delay: 100 });
  sr.reveal('#project .project-card', { origin: 'bottom', interval: 200 });

  // Contact section
  sr.reveal('#contact h1', { origin: 'top', delay: 100 });
  sr.reveal('#contact form', { origin: 'bottom', delay: 200 });
  sr.reveal('#contact .flex.justify-center', { origin: 'bottom', delay: 300 });












// project section
document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    document.querySelectorAll(".project-card").forEach(card => {
      // Hide first
      card.classList.add("opacity-0", "scale-95", "pointer-events-none");
      setTimeout(() => {
        if (filter === "all" || card.dataset.category.includes(filter)) {
          card.classList.remove("hidden");
          setTimeout(() => {
            card.classList.remove("opacity-0", "scale-95", "pointer-events-none");
            card.classList.add("opacity-100", "scale-100");
          }, 50);
        } else {
          card.classList.add("hidden");
        }
      }, 300); // match transition duration
    });

    // Update active button style
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.remove("bg-[#A5158C]", "text-white");
    //   btn.classList.add("border", "border-gray-400");
    });
    button.classList.remove("border", "border-gray-400");
    button.classList.add("bg-[#A5158C]", "text-white");
  });
});


window.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('#contact');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your inquiry! Your message has been sent.');
      contactForm.reset();
    });
  }
});  




