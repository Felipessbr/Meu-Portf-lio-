document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("mobile-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const backToTop = document.getElementById("back-to-top");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("active");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
      const icon = menuButton.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars", !isOpen);
        icon.classList.toggle("fa-xmark", isOpen);
      }
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu");
        const icon = menuButton.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
      });
    });
  }

  if (backToTop) {
    const updateButton = () => {
      backToTop.style.display = window.scrollY > 350 ? "grid" : "none";
    };
    window.addEventListener("scroll", updateButton, { passive: true });
    updateButton();
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
