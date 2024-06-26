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

    // Image Gallery Lightbox
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            lightbox.classList.add('active');
            const img = document.createElement('img');
            img.src = item.src;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    // Contact Form Submission
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message!');
        contactForm.reset();
    });
});
