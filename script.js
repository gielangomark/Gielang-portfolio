document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const menuIcon = document.getElementById("menuIcon");
  const navList = document.querySelector(".navlist");
  const revealElements = document.querySelectorAll(".reveal");

  window.setTimeout(() => {
    loadingScreen.style.opacity = "0";
    window.setTimeout(() => loadingScreen.remove(), 500);
  }, 450);

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => revealObserver.observe(element));

  menuIcon.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("active");
    menuIcon.setAttribute("aria-expanded", String(isOpen));
    menuIcon.innerHTML = isOpen ? '<i class="bx bx-x"></i>' : '<i class="bx bx-menu"></i>';
  });

  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("active");
      menuIcon.setAttribute("aria-expanded", "false");
      menuIcon.innerHTML = '<i class="bx bx-menu"></i>';
    });
  });

  document.querySelectorAll(".placeholder-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (link.getAttribute("href") === "#") event.preventDefault();
    });
  });
});
