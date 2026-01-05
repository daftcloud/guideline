document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const searchLabel = document.querySelector(".search-label .sr-only");

  if (searchInput) {
    searchInput.placeholder = "Rechercher dans les guidelines MEI";
  }

  if (searchLabel) {
    searchLabel.textContent = "Rechercher dans les guidelines MEI";
  }
});