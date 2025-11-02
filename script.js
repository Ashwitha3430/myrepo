// ===============================
// SKILL BARS ANIMATION
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const skillLevels = document.querySelectorAll(".skill-level");
  skillLevels.forEach(skill => {
    const level = skill.getAttribute("data-level");
    skill.style.setProperty("--skill-width", level);
    skill.style.width = level;
  });
});

// ===============================
// SMOOTH SCROLL FOR NAV LINKS
// ===============================
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===============================
// CONTACT FORM SUBMISSION
// ===============================
const form = document.querySelector('.contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert("Message sent! Thank you for reaching out.");
  form.reset();
});
