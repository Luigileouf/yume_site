// header.js — mise à jour du lien Newsletter
document.addEventListener("DOMContentLoaded", function () {
  const on = (el, ev, fn) => el && el.addEventListener(ev, fn);

  function setNavOffset() {
    const nav = document.querySelector(".navbar.fixed-top");
    if (!nav) return 0;
    const h = Math.ceil(nav.getBoundingClientRect().height);
    document.documentElement.style.setProperty("--navbar-h", h + "px");
    document.body.style.paddingTop = h + "px";
    document.querySelectorAll("[id]").forEach((el) => {
      el.style.scrollMarginTop = `calc(${h}px + 16px)`;
    });
    return h;
  }

  // ---- Injecte la barre (exemple minimal ; garde ta version si besoin)
  if (!document.querySelector(".yume-nav")) {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `
      <nav class="navbar navbar-expand-lg bg-white border-bottom shadow-sm py-3 fixed-top yume-nav">
        <div class="container">
          <a class="navbar-brand d-flex align-items-center gap-2" href="accueil.html">
            <img src="img/logo-yume-solidarite.png" alt="YUME" width="44" height="44" class="rounded-circle">
            <span class="yume-brand d-none d-md-inline" style="letter-spacing:.25em;text-transform:uppercase;font-family:'Playfair Display',serif;font-size:13px">YUME</span>
          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar"
                  aria-controls="mainNavbar" aria-expanded="false" aria-label="Basculer la navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="mainNavbar">
            <ul class="navbar-nav ms-4">
              <li class="nav-item"><a class="nav-link yume-link" href="media.html">Podcast</a></li>
              <li class="nav-item"><a class="nav-link yume-link" href="accueil.html#vendre">Vendre</a></li>
              <li class="nav-item"><a class="nav-link yume-link" href="accueil.html#bonnes-affaires">Acheter</a></li>
              <li class="nav-item"><a class="nav-link yume-link" href="accueil.html#voeu">Je fais un vœu</a></li>

              <!-- ICI: Newsletter par défaut -> newsletter.html -->
              <li class="nav-item">
                <a id="navNewsletter" class="nav-link yume-link" href="newsletter.html">Newsletter</a>
              </li>
            </ul>
            <div class="ms-auto d-flex align-items-center gap-3 mt-3 mt-lg-0">
              <a href="accueil.html#vendre" class="btn btn-ink px-3">Je vends un objet</a>
            </div>
          </div>
        </div>
      </nav>
      `
    );
  }

  // ---- Offset dynamique pour la navbar
  setNavOffset();
  window.addEventListener("load", setNavOffset);
  window.addEventListener("resize", setNavOffset);
  document.addEventListener("shown.bs.collapse", setNavOffset);
  document.addEventListener("hidden.bs.collapse", setNavOffset);

  // ---- Newsletter: si une section #newsletter existe sur la page, on scrolle à elle;
  // sinon on laisse le lien ouvrir newsletter.html
  const nlLink = document.getElementById("navNewsletter");
  const nlSection = document.getElementById("newsletter");

  if (nlLink && nlSection) {
    nlLink.addEventListener("click", (e) => {
      e.preventDefault();
      const h = setNavOffset() || parseInt(getComputedStyle(document.documentElement).getPropertyValue("--navbar-h")) || 0;
      const y = nlSection.getBoundingClientRect().top + window.pageYOffset - (h + 16);
      window.scrollTo({ top: y, behavior: "smooth" });
      // Ferme le menu mobile si ouvert
      const c = document.getElementById("mainNavbar");
      if (c?.classList.contains("show")) {
        if (window.bootstrap && typeof window.bootstrap.Collapse === "function") {
          new bootstrap.Collapse(c).hide();
        } else {
          c.classList.remove("show");
          console.warn("Bootstrap non chargé : fermeture manuelle du menu.");
        }
      }
    });
    // Harmonise l'URL (facultatif)
    nlLink.setAttribute("href", "#newsletter");
  }
});
