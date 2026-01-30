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

  // Déplacement du footer pour qu'il soit enfant direct 

  const footer = document.querySelector('footer');
  const topDiv = document.querySelector('#top.main');

topDiv.appendChild(footer);

  // Ajoute et gère le bouton Exporter en PDF. Il y a deux boutons, un en dessous de la nav-list (navbtn) pour la version ordinateur et un à côté du menu burger pour la version mobile (mobtn).

  const pdfUrl = "/guideline/assets/pdf/guideline.pdf";

  /* Bouton Desktop */
  const navBtn = document.createElement("button");
  navBtn.className = "export-button export-desktop nav-list-link";
  navBtn.textContent = "Exporter en PDF";
  navBtn.onclick = () => window.location.href = pdfUrl;

  const li = document.createElement("li");
  li.className = "nav-list-item";
  li.appendChild(navBtn);

  const navList = document.querySelector("#site-nav > .nav-list");
  if (navList) navList.appendChild(li);

  /* Bouton Mobile */
  const header = document.querySelector(".site-header");
  const mobBtn = document.createElement("button");
  const burger = header.querySelector("#menu-button");
  mobBtn.className = "export-button export-mobile";
  mobBtn.setAttribute("aria-label", "Exporter en PDF");
  mobBtn.onclick = () => window.location.href = pdfUrl;

  const icon = document.createElement("img");
  icon.src = "/guideline/assets/images/pdf-icon.png";
  icon.alt = "";
  icon.className = "pdf-icon";

  mobBtn.appendChild(icon);


  if (header && burger) {
    header.insertBefore(mobBtn, burger);
  }

  // Ajout des logos des institutions en dessous de la side bar.

  const logos = document.querySelector(".footer-logos");
  const target = document.querySelector(".d-md-block");
  const footerContent = document.querySelector(".footer-content");

 /*function moveLogos() {
  if (!logos || !target || !footerContent) return;

  if (window.innerWidth >= 800) {
    target.appendChild(logos);
  } else {
    footerContent.appendChild(logos);
  }
}

moveLogos();
window.addEventListener("resize", moveLogos);
*/
});