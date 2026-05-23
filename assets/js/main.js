document.querySelectorAll(".jcu-image-gallery > a").forEach((link) => {
  const image = link.querySelector("img[alt]");
  const label = image?.getAttribute("alt")?.trim();

  if (label && !link.dataset.label) {
    link.dataset.label = label;
  }
});

const headingIdCounts = new Map();
const generatedHeadingId = (text) => {
  const baseId = text
    .trim()
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z0-9#]+;/g, "")
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  const count = headingIdCounts.get(baseId) || 0;

  headingIdCounts.set(baseId, count + 1);
  return count ? `${baseId}-${count}` : baseId;
};

document.querySelectorAll(".prose h1[id], .prose h2[id], .prose h3[id], .prose h4[id], .prose h5[id], .prose h6[id]").forEach((heading) => {
  if (heading.querySelector(".heading-anchor")) {
    return;
  }

  if (heading.id === generatedHeadingId(heading.textContent)) {
    return;
  }

  const anchor = document.createElement("a");
  anchor.className = "heading-anchor";
  anchor.href = `#${heading.id}`;
  anchor.setAttribute("aria-label", `Link to ${heading.textContent.trim()}`);
  anchor.textContent = "🔗";
  heading.append(anchor);
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
