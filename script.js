const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const form = document.querySelector(".contact-form");
const formNote = document.querySelector(".form-note");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".section, .project-card, .about-card, .skill").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formNote.textContent = "Thanks for reaching out! I'll get back to you within 48 hours.";
    form.reset();
  });
}
