(function () {
  /* ===== Scroll-reveal via IntersectionObserver ===== */
  const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("revealed"));
  }

  /* ===== Navbar shadow on scroll ===== */
  const nav = document.querySelector(".nav");
  if (nav) {
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          nav.classList.toggle("nav--scrolled", window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    });
  }
})();
