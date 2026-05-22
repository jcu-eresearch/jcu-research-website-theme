document.querySelectorAll(".jcu-image-gallery > a").forEach((link) => {
  const image = link.querySelector("img[alt]");
  const label = image?.getAttribute("alt")?.trim();

  if (label && !link.dataset.label) {
    link.dataset.label = label;
  }
});

const sidebar = document.querySelector(".site-sidebar");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

if (sidebar && menuToggle && siteNav) {
  const setMenuOpen = (isOpen) => {
    sidebar.classList.toggle("is-menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  };

  setMenuOpen(false);

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuOpen(false);
    }
  });
}
