// Custom cursor
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate elements on scroll
const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, {
    threshold: 0.1
});

document.querySelectorAll('section > *').forEach(el => {
    observer.observe(el);
});

// Animate name letters
const nameElement = document.querySelector('.name');
const nameletters = nameElement.textContent.split('');
nameElement.textContent = '';
nameletters.forEach((letter, i) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.opacity = '0';
    span.style.transform = 'translateY(50px)';
    span.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`;
    nameElement.appendChild(span);
});

setTimeout(() => {
    nameElement.querySelectorAll('span').forEach(span => {
        span.style.opacity = '1';
        span.style.transform = 'translateY(0)';
    });
}, 500);

// Animate title
const titleElement = document.querySelector('.title');
titleElement.style.opacity = '0';
titleElement.style.transform = 'scale(0.8)';
titleElement.style.transition = 'opacity 0.5s ease 1s, transform 0.5s ease 1s';

setTimeout(() => {
    titleElement.style.opacity = '1';
    titleElement.style.transform = 'scale(1)';
}, 1000);

// WhatsApp integration for "Get in touch" button
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    window.open('https://wa.me/919597075831', '_blank');
});

// Add animation classes
document.querySelectorAll('section > *').forEach(el => {
    el.classList.add('fade-in');
});

document.getElementById("downloadCV").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "Bala-Surya-FlowCV-Resume-20250218 (4)_page-0001.pdf"; // Correct the path to your actual CV file
    link.download = "Bala-Surya-FlowCV-Resume-20250218 (4)_page-0001.pdf"; // This will be the downloaded file's name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

