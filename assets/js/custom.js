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

  // Ajoute et gère le bouton Exporter en PDF. Il y a deux boutons, un en dessous de la nav-list (navbtn) pour la version ordinateur et un à côté du menu burger pour la version mobile (mobtn).

  const navbtn = document.createElement("button");
  navbtn.id = "export-pdf";
  navbtn.className = "export-button nav-list-link";

  const navspan = document.createElement("span");
  navspan.textContent = "Exporter en PDF";
  navbtn.appendChild(navspan);

  const li = document.createElement("li");
  li.className = "nav-list-item";
  li.appendChild(navbtn);

  const mainNavList = document.querySelector("#site-nav > .nav-list");

  if (mainNavList) {
    mainNavList.appendChild(li);
  }

  navbtn.addEventListener("click", () => {
    window.location.href = "/guideline/assets/pdf/guideline.pdf";

    const mobtn = document.createElement("button");
    mobtn.id = "export-pdf";
    mobtn.className = "export-button site-header";

    const mobspan = document.createElement("span");
    mobspan.backgroundImage = "assets\images\PDF Download Icon Logo PNG - 3000x3000.png";
    mobtn.appendChild(mobspan);
    

  });
});
