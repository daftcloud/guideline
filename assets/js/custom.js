document.addEventListener("DOMContentLoaded", function () {
  // Modifie le texte du search
  const searchInput = document.getElementById("search-input");
  const searchLabel = document.querySelector(".search-label .sr-only");

  if (searchInput) {
    searchInput.placeholder = "Rechercher dans les guidelines MEI";
  }

  if (searchLabel) {
    searchLabel.textContent = "Rechercher dans les guidelines MEI";
  }

  // Ajoute et gère le bouton Exporter en PDF
  const btn = document.createElement("button");
  btn.id = "export-pdf";
  btn.className = "site-button";
  btn.textContent = "Exporter en PDF";

  const footerDiv = document.createElement("div");
  footerDiv.className = "sidebar-footer";
  footerDiv.appendChild(btn);

  const footerWrapper = document.querySelector(".d-md-block.d-none");

  if (footerWrapper && footerWrapper.parentNode) {
    footerWrapper.parentNode.insertBefore(footerDiv, footerWrapper);
  }
  btn.addEventListener("click", () => 
    window.location.href = "/guideline/assets/pdf/guideline.pdf")


  
  const main = document.getElementById("main-content");
  const credits = document.getElementById("credits");

  if (!main || !credits) return;

  function checkCollision() {
    const mainRect = main.getBoundingClientRect();
    const creditsRect = credits.getBoundingClientRect();

    if (mainRect.bottom > creditsRect.top) {
      // le contenu chevauche les crédits → on cache
      credits.style.display = "none";
    } else {
      credits.style.display = "block";
    }
  }

  // Vérifie au chargement
  checkCollision();

  // Et si la fenêtre est redimensionnée
  window.addEventListener("resize", checkCollision);

  }
);
