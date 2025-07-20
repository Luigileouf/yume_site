document.addEventListener("DOMContentLoaded", function () {
    // Lien dynamique vers le formulaire sur la page d'accueil.
    // Si on est sur la page d'accueil, on utilise une ancre, sinon un lien complet.
    const linkToForm = window.location.pathname.endsWith("/accueil.html") || window.location.pathname.endsWith("/")
      ? "#formulaire-inscription"
      : "accueil.html#formulaire-inscription";
  
    const header = `
    <nav class="navbar navbar-expand-lg bg-white border-bottom shadow-sm py-3 fixed-top">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center gap-2" href="accueil.html">
          <img src="img/logo-yume-solidarite.png" alt="YUME" width="50" height="50">
          <div class="d-none d-md-block">
            <span class="fw-bold d-block">YUME</span>
            <small class="d-block">Objets vendus</small>
            <small class="d-block">Athlètes soutenus</small>
          </div>
        </a>

        <!-- BOUTON TOGGLE -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
        <div class="collapse navbar-collapse" id="mainNavbar">
          <ul class="navbar-nav ms-4">
            <li class="nav-item"><a class="nav-link fw-bold" href="media.html">👥 Média</a></li>
            <li class="nav-item"><a class="nav-link fw-bold" href="#">🛒 Vendre</a></li>
            <li class="nav-item"><a class="nav-link fw-bold" href="#">📦 Acheter</a></li>
            <li class="nav-item"><a class="nav-link fw-bold" href="#">🪄 Je fais un vœu</a></li>
            <li class="nav-item"><a class="nav-link fw-bold" href="${linkToForm}">📣 Newsletter</a></li>
          </ul>
        </div>
        <div>
          <a href="#" class="btn btn-outline-primary">Je vends un objet</a>
          <img src="img/profil-icon.svg.png" alt="Avatar" width="30">
        </div>
      </div>
    </nav>
    `;
  
    document.body.insertAdjacentHTML('afterbegin', header);
  });
  