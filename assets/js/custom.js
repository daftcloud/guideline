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
btn.setAttribute("aria-label", "Exporter en PDF");

btn.innerHTML = `
  <span class="export-text">Exporter en PDF</span>
  <svg class="export-icon" viewBox="0 0 24 24" aria-hidden="true">
    <use xlink:href="#svg-download"></use>
  </svg>
`;


btn.addEventListener("click", () => {
  window.location.href = "/guideline/assets/pdf/guideline.pdf";
});

const li = document.createElement("li");
li.className = "nav-list-item";
li.appendChild(btn);

const mainNavList = document.querySelector("#site-nav > .nav-list");
const siteHeader = document.querySelector(".site-header");

// Fonction responsive
function placeExportButton() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    // MOBILE → à côté du burger
    if (siteHeader && btn.parentNode !== siteHeader) {
      siteHeader.appendChild(btn);
    }
    btn.classList.add("is-mobile");
  } else {
    // DESKTOP → dans la nav-list
    if (mainNavList && btn.parentNode !== li) {
      li.appendChild(btn);
      mainNavList.appendChild(li);
    }
    btn.classList.remove("is-mobile");
  }
}

placeExportButton();
window.addEventListener("resize", placeExportButton);

  }
);
