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
btn.className = "export-button nav-list-link";

const span = document.createElement("span");
span.textContent = "Exporter en PDF";
btn.appendChild(span);

const li = document.createElement("li");
li.className = "nav-list-item";
li.appendChild(btn);

const mainNavList = document.querySelector("#site-nav > .nav-list");

if (mainNavList) {
  mainNavList.appendChild(li);
}

btn.addEventListener("click", () => {
  window.location.href = "/guideline/assets/pdf/guideline.pdf";
});



  }
);
