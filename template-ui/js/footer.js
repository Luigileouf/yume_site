
// footer.js — YUME (luxe N/B)
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("yume-footer")) return;
  if (!document.getElementById("yume-footer-style")) {
    const css = document.createElement("style");
    css.id = "yume-footer-style";
    css.textContent = `
      .yume-footer{border-top:1px solid rgba(0,0,0,.14); background:#fff; margin-top:48px;}
      .yume-footer .inner{max-width:1140px; margin:auto; padding:28px 20px 36px;}
      .yume-footer .brand{font-family:"Playfair Display", ui-serif, Georgia, serif; letter-spacing:.22em; text-transform:uppercase; font-size:12px; color:#666;}
      .yume-footer .links{display:flex; flex-wrap:wrap; gap:10px; justify-content:center; margin:12px 0 6px;}
      .yume-footer .jp-link{display:inline-block; padding:.55rem 1rem; border:1px solid rgba(0,0,0,.18); border-radius:999px; color:#111; text-decoration:none; font-weight:600;}
      .yume-footer .jp-link:hover{box-shadow:0 10px 30px rgba(0,0,0,.06); transform:translateY(-1px);}
      .yume-footer small{color:#666;}
    `;
    document.head.appendChild(css);
  }
  const year = new Date().getFullYear();
  const footer = document.createElement("footer");
  footer.id = "yume-footer";
  footer.className = "yume-footer";
  footer.innerHTML = `
    <div class="inner text-center">
      <div class="brand mb-2">YUME</div>
      <nav class="links" aria-label="Liens du pied de page">
        <a class="jp-link" href="index.html">Présentation</a>
        <a class="jp-link" href="accueil.html">Accueil</a>
        <a class="jp-link" href="media.html">Média</a>
        <a class="jp-link" href="newsletter.html">Newsletter</a>
      </nav>
      <small>© ${year} YUME · Tous droits réservés</small>
    </div>
  `;
  document.body.appendChild(footer);
});
