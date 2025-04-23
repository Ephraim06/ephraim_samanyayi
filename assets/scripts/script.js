document.addEventListener('DOMContentLoaded', function () {
  // Update current year in footer
  document.getElementById('current-year').textContent =
    new Date().getFullYear();

  // Update time in status bar
  function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('current-time').textContent = `${hours}:${minutes}`;
  }

  updateTime();
  setInterval(updateTime, 60000);

  // Back to top button
  const backToTopButton = document.querySelector('.back-to-top');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });

  backToTopButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    });
  });

  // Animate elements when they come into view
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      '.section, .project-card, .skill-category, .timeline-item, .testimonial-card'
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.classList.add('animate__animated', 'animate__fadeInUp');
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on page load

  // Form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Here you would typically send the form data to a server
      // For now, we'll just show a success message
      alert('Thank you for your message! I will get back to you soon.');
      this.reset();
    });
  }
});
