function toggleMenu() {
  var navButtons = document.querySelector(".nav-buttons");
  navButtons.classList.toggle("active");
}

// Listen for scroll events on the window
window.addEventListener("scroll", () => {
  const scrollButton = document.getElementById("link_top");
  const heroSection = document.querySelector(".hero-section");

  if (scrollButton && heroSection) {
    // Get the height of the hero section
    const heroHeight = heroSection.offsetHeight;

    // Changed: Now triggers when you scroll halfway (50%) down the hero section
    if (window.scrollY > heroHeight / 2) {
      scrollButton.classList.add("show");
    } else {
      // Otherwise, hide it
      scrollButton.classList.remove("show");
    }
  }
});

/* =========================================
   HERO CAROUSEL LOGIC
   ========================================= */
// We wrap everything in DOMContentLoaded to ensure the HTML is fully loaded first
document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.querySelector(".hero-section");
  const dots = document.querySelectorAll(".rectangle-button");

  // Make sure we actually found the elements before trying to run the carousel
  if (heroSection && dots.length > 0) {
    // Use absolute paths for Flask (/static/images/...)
    const heroImages = [
      "url('/static/images/Background_Japan3.png')", // Slide 0
      "url('/static/images/hero2.jfif')", // Slide 1 (Add this image to your folder!)
      "url('/static/images/hero3.webp')", // Slide 2 (Add this image to your folder!)
    ];

    let currentSlide = 0;

    // Note: We need to attach this to the global window object
    // so the inline onclick="changeSlide(0)" in the HTML can find it
    window.changeSlide = function (index) {
      currentSlide = index;

      // 1. Change the background image
      heroSection.style.backgroundImage = `linear-gradient(
              to bottom,
              rgba(255, 0, 0, 0),
              rgba(255, 0, 0, 0.05)
          ), ${heroImages[index]}`;

      // 2. Update the dots visually
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    };

    // Auto-play the carousel every 5 seconds
    setInterval(() => {
      let nextSlide = (currentSlide + 1) % heroImages.length;
      window.changeSlide(nextSlide);
    }, 5000);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // ... [Keep your existing Carousel Logic here] ...

  /* =========================================
     SCROLL ANIMATION LOGIC (Intersection Observer)
     ========================================= */
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15, // Trigger when 15% of the section is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        // Unobserve so it only animates once per page load
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Find all sections with the fade-in class and start watching them
  const fadeSections = document.querySelectorAll(".fade-in-section");
  fadeSections.forEach((section) => {
    observer.observe(section);
  });
});
