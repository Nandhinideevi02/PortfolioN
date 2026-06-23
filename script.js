// ===============================
// TYPING EFFECT
// ===============================

const typingElement = document.getElementById("typing");

const roles = [
    "AI/ML Enthusiast",
    "Software Engineer",
    "Full Stack Developer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


// ===============================
// SCROLL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".glass-card, .skill-card, .project-card, .timeline-item, .contact-box"
);

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("show");

        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ===============================
// ACTIVE NAVBAR LINK
// ===============================

const sections = document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");
        }
    });

});


// ===============================
// MOBILE MENU
// ===============================

const menuBtn =
    document.querySelector(".menu-btn");

const navMenu =
    document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("mobile-active");

});


// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("mobile-active");

    });

});


// ===============================
// HERO IMAGE PARALLAX
// ===============================

const heroImage =
    document.querySelector(".image-box");

document.addEventListener("mousemove", (e) => {

    const x =
        (window.innerWidth / 2 - e.pageX) / 40;

    const y =
        (window.innerHeight / 2 - e.pageY) / 40;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;
});


// ===============================
// COUNTER ANIMATION
// ===============================

const counters =
    document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target =
            +counter.getAttribute("data-target");

        const current =
            +counter.innerText;

        const increment =
            target / 100;

        if (current < target) {

            counter.innerText =
                `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;
        }
    };

    updateCounter();

});


// ===============================
// SMOOTH FADE IN
// ===============================

const observer = new IntersectionObserver(
(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
        }

    });

},
{
    threshold: 0.2
});

document
.querySelectorAll(
".glass-card, .skill-card, .project-card, .timeline-item, .contact-box"
)
.forEach(el => observer.observe(el));


// ===============================
// PORTFOLIO LOADED
// ===============================

console.log(
    "Nandhini Deevi Portfolio Loaded Successfully 🚀"
);