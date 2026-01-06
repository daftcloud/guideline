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

  const sitefooter= document.querySelector(".site-footer");

  if (sitefooter) {
    const footerDiv = document.createElement("div");
    footerDiv.className = "sidebar-footer";
    footerDiv.appendChild(btn);
    sitefooter.replaceChild(footerDiv);
    }
  btn.addEventListener("click", () => 
    window.print());
  }
);
