document.addEventListener("DOMContentLoaded", function () {
    const footer = document.createElement("footer");
    footer.className = "text-center mt-5 py-4 bg-light";
    footer.innerHTML = `
      <p class="mb-0">
        🔗 <a href="index.html" class="text-decoration-none fw-semibold text-primary">
        Retour à l’index des templates UI</a>
      </p>
    `;
    document.body.appendChild(footer);
  });
  