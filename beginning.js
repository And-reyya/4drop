document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput"),
        triangleIcon = document.querySelector(".triangle-icon"),
        reversedrop = document.getElementById("reversedrop");

  const options = ["WEAPON", "AMMO", "MAGAZINE", "SIGHT", "SCOPE", "SUPPRESSOR", "BAYONETT", "RAIL", "FLASHLIGHT"];
  reversedrop.innerHTML = options.map(option => `<p>${option}</p>`).join("");

  triangleIcon.addEventListener("click", () => {
    reversedrop.style.display = (reversedrop.style.display === "block") ? "none" : "block";
  });

  reversedrop.querySelectorAll("p").forEach(option => {
    option.addEventListener("click", () => {
      if (option.textContent !== "MAGAZINE") {
        searchInput.value = option.textContent;
        fetchDropdownData(option.textContent);
      }
      reversedrop.style.display = "none";
    });
  });

  function fetchDropdownData(selectedOption) {
    let jsonUrl = "https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json";
    fetch(jsonUrl)
      .then(response => response.json())
      .then(data => createDropdown(data, selectedOption))
      .catch(error => console.error("Hiba a JSON betöltésekor:", error));
  }

  function createDropdown(data, selectedOption) {
    const dropdownId = `reverse${selectedOption.toLowerCase()}`;
    let dropdown = document.getElementById(dropdownId);
    if (!dropdown) {
      dropdown = document.createElement('div');
      dropdown.id = dropdownId;
      dropdown.classList.add('dropdown');
      document.querySelector('.search-container').appendChild(dropdown);
    }
    dropdown.innerHTML = '';

    let items = data[selectedOption.toLowerCase()] || [];

    items.forEach(item => {
      const option = document.createElement('p');
      option.textContent = item;
      option.addEventListener('click', () => {
        searchInput.value = `${searchInput.value}; ${item}`;
        dropdown.style.display = 'none';
      });
      dropdown.appendChild(option);
    });
    dropdown.style.display = "block";
  }
});
