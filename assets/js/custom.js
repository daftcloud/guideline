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

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("export-pdf");
  if (btn) {
    btn.addEventListener("click", () => {
      window.print();
    });
  }
});