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

  // ---- Injecte la barre avec effet typewriter
  if (!document.querySelector(".yume-nav")) {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `
      <style>
        .yume-brand-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
          letter-spacing: .25em;
          text-transform: uppercase;
          font-family: 'Playfair Display', serif;
          font-size: 13px;
          font-weight: 700;
        }
        .yume-brand-text {
          color: #111;
          font-size: 10px;
          font-weight: 600;
          min-width: 200px;
          white-space: nowrap;
        }
        .yume-brand-cursor {
          color: #b39545;
          animation: yume-blink 1s step-end infinite;
          font-weight: 700;
        }
        @keyframes yume-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @media (max-width: 991px) {
          .yume-brand-text {
            min-width: 180px;
            font-size: 9px;
          }
        }
        @media (max-width: 767px) {
          .yume-brand-text {
            min-width: 150px;
            font-size: 8px;
          }
        }
      </style>
      <nav class="navbar navbar-expand-lg bg-white border-bottom shadow-sm py-3 fixed-top yume-nav">
        <div class="container">
          <a class="navbar-brand d-flex align-items-center gap-2" href="accueil.html">
            <img src="img/logo-yume-solidarite.png" alt="YUME" width="44" height="44" class="rounded-circle">
            <div class="yume-brand-wrapper d-none d-md-flex">
              YUME <span class="yume-brand-text" id="header-typewriter"></span><span class="yume-brand-cursor">|</span>
            </div>
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
    
    // ---- Effet typewriter pour le header
    const headerPhrases = [
      { text: 'POUR QU\'ILS CONTINUENT À NOUS FAIRE ', words: ['RÊVER', 'VIBRER', 'ESPÉRER'] },
      { text: '', words: ['PARCE QU\'ILS LE MÉRITENT'] },
      { text: '', words: ['OBJETS VENDUS ATHLÈTES SOUTENUS'] },
      { text: '', words: ['PLATEFORME DE SECONDE MAIN SOLIDAIRE'] }
    ];
    
    let phraseIndex = 0;
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const headerTypewriterEl = document.getElementById('header-typewriter');
    const typingSpeed = 100;
    const deletingSpeed = 70;
    const pauseAfterWord = 2000;
    const pauseBeforeType = 300;
    const pauseBeforePhrase = 800;

    function headerTypeWriter() {
      if (!headerTypewriterEl) return;
      
      const currentPhrase = headerPhrases[phraseIndex];
      const currentWord = currentPhrase.words[wordIndex];
      const fullText = currentPhrase.text + currentWord;
      
      if (isDeleting) {
        const displayText = fullText.substring(0, currentPhrase.text.length + charIndex - 1);
        headerTypewriterEl.textContent = displayText;
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex++;
          
          if (wordIndex >= currentPhrase.words.length) {
            wordIndex = 0;
            phraseIndex = (phraseIndex + 1) % headerPhrases.length;
            setTimeout(headerTypeWriter, pauseBeforePhrase);
            return;
          }
          
          setTimeout(headerTypeWriter, pauseBeforeType);
          return;
        }
        setTimeout(headerTypeWriter, deletingSpeed);
      } else {
        const displayText = fullText.substring(0, currentPhrase.text.length + charIndex + 1);
        headerTypewriterEl.textContent = displayText;
        charIndex++;
        
        if (charIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(headerTypeWriter, pauseAfterWord);
          return;
        }
        setTimeout(headerTypeWriter, typingSpeed);
      }
    }

    // Démarrer l'effet typewriter
    setTimeout(headerTypeWriter, pauseBeforeType);
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
