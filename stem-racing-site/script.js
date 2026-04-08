// ===== HERO SLIDESHOW =====


const slidesContainer = document.getElementById("heroSlides");


// ===== BUTTON SCROLL (for data-scroll buttons) =====
document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const selector = btn.getAttribute("data-scroll");
    const target = document.querySelector(selector);
    if (!target) return;

    // Use CSS scroll-padding-top from html for perfect alignment
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
