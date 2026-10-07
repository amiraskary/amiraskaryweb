const particlesContainer = document.getElementById("particles");

const particleCount = 100;

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement("span");

  particle.classList.add("particle");

  particle.style.position = "absolute";

  particle.style.width = Math.random() * 3 + 1 + "px";

  particle.style.height = particle.style.width;

  particle.style.borderRadius = "50%";

  particle.style.background = "#42c9ff";

  particle.style.opacity = Math.random() * 0.5 + 0.1;

  particle.style.left = Math.random() * 100 + "%";

  particle.style.top = Math.random() * 100 + "%";

  particle.style.boxShadow = "0 0 10px #42c9ff";

  particle.style.animation = `floatParticle ${Math.random() * 8 + 5}s linear infinite`;

  particlesContainer.appendChild(particle);
}

const hero3D = document.querySelector(".hero-3d");

document.addEventListener("mousemove", (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 30;

  const y = (event.clientY / window.innerHeight - 0.5) * 30;

  hero3D.style.transform = `translate(${x}px, ${y}px)`;
});

const cards = document.querySelectorAll(
  ".about-card, .skill-card, .project-card, .education-card",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";

        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.15,
  },
);

cards.forEach((card) => {
  card.style.opacity = "0";

  card.style.transform = "translateY(50px)";

  card.style.transition = "opacity .7s ease, transform .7s ease";

  observer.observe(card);
});

const sections = document.querySelectorAll("section[id]");

const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 250;

    if (window.scrollY >= top) {
      current = section.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.style.color = "#9ca3af";

    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "#42c9ff";
    }
  });
});
