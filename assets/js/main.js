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

let headingCopyStatus;
const announceHeadingCopy = (message) => {
  if (!headingCopyStatus) {
    headingCopyStatus = document.createElement("div");
    headingCopyStatus.className = "heading-copy-status";
    headingCopyStatus.setAttribute("role", "status");
    headingCopyStatus.setAttribute("aria-live", "polite");
    headingCopyStatus.setAttribute("aria-atomic", "true");
    document.body.append(headingCopyStatus);
  }
  headingCopyStatus.textContent = "";
  window.setTimeout(() => { headingCopyStatus.textContent = message; }, 50);
};

const copyHeadingUrl = async (url) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(url);
    return;
  }

  const previousFocus = document.activeElement;
  const input = document.createElement("textarea");
  input.value = url;
  input.className = "heading-copy-status";
  input.setAttribute("aria-label", "Section URL to copy");
  document.body.append(input);
  try {
    input.select();
    if (!document.execCommand("copy")) throw new Error("Copy unavailable");
  } finally {
    input.remove();
    previousFocus?.focus({ preventScroll: true });
  }
};

document.querySelectorAll(".prose h1[id], .prose h2[id], .prose h3[id], .prose h4[id], .prose h5[id], .prose h6[id]").forEach((heading) => {
  if (heading.querySelector(".heading-anchor")) return;
  const headingText = heading.textContent.trim();
  if (heading.id === generatedHeadingId(headingText)) return;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "heading-anchor";
  button.setAttribute("aria-label", `Copy link to ${headingText}`);
  button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10 13a5 5 0 0 0 7 .1l3-3a5 5 0 0 0-7-7l-2 2M14 11a5 5 0 0 0-7-.1l-3 3a5 5 0 0 0 7 7l2-2"/></svg>';
  const tooltip = document.createElement("span");
  tooltip.className = "heading-anchor-tooltip";
  tooltip.setAttribute("aria-hidden", "true");
  button.append(tooltip);
  let feedbackTimer;

  button.addEventListener("click", async () => {
    const url = new URL(window.location.href);
    url.hash = heading.id;
    try {
      await copyHeadingUrl(url.href);
      tooltip.textContent = "Copied";
      announceHeadingCopy("Link copied.");
    } catch {
      tooltip.textContent = "Could not copy";
      announceHeadingCopy("Could not copy the link. Please try again.");
    }
    button.classList.add("is-feedback");
    window.clearTimeout(feedbackTimer);
    feedbackTimer = window.setTimeout(() => {
      button.classList.remove("is-feedback");
      tooltip.textContent = "";
    }, 1800);
  });
  heading.append(button);
});

const siteHeader = document.querySelector(".site-header");
const headerMenuToggle = document.querySelector(".header-menu-toggle");
const headerNav = document.querySelector("#header-nav");
const submenuToggles = Array.from(document.querySelectorAll(".header-submenu-trigger"));

if (siteHeader && headerMenuToggle && headerNav) {
  const burgerMenuLayout = window.matchMedia("(max-width: 1040px)");
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
  burgerMenuLayout.addEventListener("change", () => setMenuOpen(false));

  headerMenuToggle.addEventListener("click", () => {
    setMenuOpen(headerMenuToggle.getAttribute("aria-expanded") !== "true");
  });

  submenuToggles.forEach((toggle) => {
    const group = toggle.closest(".header-nav-group");
    let pointerInside = false;

    const openSubmenu = () => {
      closeSubmenus(group);
      group.classList.add("is-submenu-open");
      toggle.setAttribute("aria-expanded", "true");
    };
    const closeSubmenu = () => {
      group.classList.remove("is-submenu-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    group.addEventListener("pointerenter", (event) => {
      if (event.pointerType !== "mouse" || burgerMenuLayout.matches) return;
      pointerInside = true;
      openSubmenu();
    });
    group.addEventListener("pointerleave", (event) => {
      if (event.pointerType !== "mouse" || burgerMenuLayout.matches) return;
      pointerInside = false;
      if (!group.querySelector(".header-submenu").contains(document.activeElement)) closeSubmenu();
    });
    group.addEventListener("focusout", (event) => {
      if (burgerMenuLayout.matches) return;
      if (!pointerInside && !group.contains(event.relatedTarget)) closeSubmenu();
    });
    toggle.addEventListener("click", () => {
      if (!burgerMenuLayout.matches) return;
      if (group.classList.contains("is-submenu-open")) {
        closeSubmenu();
      } else {
        openSubmenu();
      }
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
      if (burgerMenuLayout.matches) setMenuOpen(false);
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
