// template-ui/js/header.js

document.addEventListener("DOMContentLoaded", function () {
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
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-4">
             <li class="nav-item"><a class="nav-link fw-bold" href="#">🎥 Média</a></li>
             <li class="nav-item"><a class="nav-link fw-bold" href="#">🛒 Vendre</a></li>
             <li class="nav-item"><a class="nav-link fw-bold" href="#">🛍️ Acheter</a></li>
             <li class="nav-item"><a class="nav-link fw-bold" href="#">🌠 Je fais un vœu</a></li>
             <a class="nav-link fw-bold" href="../accueil.html#formulaire-inscription">📣 Oyé Oyé News Yume</a>
          </ul>
        </div>
        <div>
          <a href="#" class="btn btn-outline-primary">Je vends un objet</a>
          <img src="template-ui/js/img/profil-icon.svg.png" alt="Avatar" width="30">
        </div>
      </div>
    </nav>`;
  
    document.body.insertAdjacentHTML('afterbegin', header);
  });
  