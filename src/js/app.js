const burger_icon = document.querySelector('.burger');
const nav_list_mobile = document.querySelector('.menu-dropdown-links');

burger_icon.addEventListener('click', function () {
  nav_list_mobile.classList.toggle('menu-dropdown-links--active');
  burger_icon.classList.toggle('burger-active');
});

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// Reveal titles
const all_sections = document.querySelectorAll('section');

const revealSectionTitle = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.querySelector('.title-reveal').classList.add('reveal');
    observer.unobserve(entry.target);
  }
};

const sectionObserver = new IntersectionObserver(revealSectionTitle, {
  root: null,
  threshold: 0.15,
});

all_sections.forEach(function (section) {
  sectionObserver.observe(section);
});

// Reveal Services details
const services_container = document.querySelector('.services');
const services_details = document.querySelectorAll('[class^="services_"]');

const revealServices = function (entries, observer) {
  const [entry] = entries;
  let delayservices = 0;
  if (entry.isIntersecting) {
    services_details.forEach(function (service) {
      setTimeout(function () {
        service.classList.add('slide-up');
      }, delayservices);
      delayservices += 500;
    });
    observer.unobserve(entry.target);
  }
};

const servicesObserver = new IntersectionObserver(revealServices, {
  root: null,
  threshold: 0.5,
});

servicesObserver.observe(services_container);
