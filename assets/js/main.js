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

const siteHeader = document.querySelector(".site-header");
const headerMenuToggle = document.querySelector(".header-menu-toggle");
const headerNav = document.querySelector("#header-nav");
const submenuToggles = Array.from(document.querySelectorAll(".header-submenu-trigger"));

if (siteHeader && headerMenuToggle && headerNav) {
  const closeSubmenus = (exceptGroup = null) => {
    document.querySelectorAll(".header-nav-group.is-submenu-open").forEach((group) => {
      if (group !== exceptGroup) {
        group.classList.remove("is-submenu-open");
        group.querySelector(".header-submenu-trigger")?.setAttribute("aria-expanded", "false");
      }
    });
  };

  const setMenuOpen = (isOpen) => {
    siteHeader.classList.toggle("is-menu-open", isOpen);
    headerMenuToggle.setAttribute("aria-expanded", String(isOpen));

    if (!isOpen) {
      closeSubmenus();
    }
  };

  setMenuOpen(false);

  headerMenuToggle.addEventListener("click", () => {
    setMenuOpen(headerMenuToggle.getAttribute("aria-expanded") !== "true");
  });

  submenuToggles.forEach((toggle) => {
    const group = toggle.closest(".header-nav-group");
    let openedByHover = false;
    let pointerInside = false;

    const openSubmenu = () => {
      closeSubmenus(group);
      group.classList.add("is-submenu-open");
      toggle.setAttribute("aria-expanded", "true");
    };
    const closeSubmenu = () => {
      group.classList.remove("is-submenu-open");
      toggle.setAttribute("aria-expanded", "false");
      openedByHover = false;
    };

    group.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "touch") return;
      pointerInside = true;
      openedByHover = !group.classList.contains("is-submenu-open");
      openSubmenu();
    });
    group.addEventListener("pointerleave", () => {
      pointerInside = false;
      if (!group.contains(document.activeElement)) closeSubmenu();
    });
    group.addEventListener("focusout", (event) => {
      if (!pointerInside && !group.contains(event.relatedTarget)) closeSubmenu();
    });
    toggle.addEventListener("click", () => {
      // The first click on a hover-opened submenu keeps it open.
      if (group.classList.contains("is-submenu-open") && !openedByHover) {
        closeSubmenu();
      } else {
        openSubmenu();
      }
      openedByHover = false;
    });
    toggle.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        openSubmenu();
        group.querySelector(".header-submenu a")?.focus();
      }
    });
  });

  headerNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("click", (event) => {
    if (!siteHeader.contains(event.target)) {
      closeSubmenus();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const activeGroup = document.activeElement?.closest(".header-nav-group.is-submenu-open");
      if (activeGroup) {
        closeSubmenus();
        activeGroup.querySelector(".header-submenu-trigger")?.focus();
      } else if (siteHeader.classList.contains("is-menu-open")) {
        setMenuOpen(false);
        headerMenuToggle.focus();
      } else {
        closeSubmenus();
      }
    }
  });
}

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const slides = Array.from(carousel.querySelectorAll(".landing-carousel-slide"));
  const dots = Array.from(carousel.querySelectorAll("[data-carousel-dot]"));
  const previousButton = carousel.querySelector("[data-carousel-prev]");
  const nextButton = carousel.querySelector("[data-carousel-next]");
  let activeIndex = slides.findIndex((slide) => slide.classList.contains("is-active"));

  if (slides.length <= 1) {
    carousel.querySelector(".landing-carousel-controls")?.remove();
    return;
  }

  if (activeIndex < 0) {
    activeIndex = 0;
  }

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === activeIndex);
    });

    dots.forEach((dot, dotIndex) => {
      if (dotIndex === activeIndex) {
        dot.setAttribute("aria-current", "true");
      } else {
        dot.removeAttribute("aria-current");
      }
    });
  };

  previousButton?.addEventListener("click", () => showSlide(activeIndex - 1));
  nextButton?.addEventListener("click", () => showSlide(activeIndex + 1));

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showSlide(Number(dot.dataset.carouselDot));
    });
  });

  showSlide(activeIndex);
});
