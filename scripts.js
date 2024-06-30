document.addEventListener('DOMContentLoaded', () => {
    // Burger Menu Toggle
    const burger = document.getElementById('burger');
    const navList = document.getElementById('nav-list');

    burger.addEventListener('click', () => {
        navList.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    // Smooth Scroll
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

     // Contact Form Submission
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message!');
        contactForm.reset();
    });
});
