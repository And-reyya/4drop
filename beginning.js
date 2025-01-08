document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput"),
        triangleIcon = document.querySelector(".triangle-icon"),
        reversedrop = document.getElementById("reversedrop");

  const options = ["WEAPON", "AMMO", "MAGAZINE", "SIGHT", "SCOPE", "SUPPRESSOR", "BAYONETT", "RAIL", "FLASHLIGHT"];
  reversedrop.innerHTML = options.map(option => {
    if (option === "MAGAZINE") {
      return `<p class="disabled">${option}</p>`;
    }
    return `<p>${option}</p>`;
  }).join("");

  triangleIcon.addEventListener("click", () => {
    reversedrop.style.display = (reversedrop.style.display === "block") ? "none" : "block";
  });

  reversedrop.querySelectorAll("p:not(.disabled)").forEach(option => {
    option.addEventListener("click", () => {
      searchInput.value = option.textContent;
      reversedrop.style.display = "none";
      fetchDropdownData(option.textContent);
    });
  });

  function fetchDropdownData(selectedOption) {
    let jsonUrl = "https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json";
    if (selectedOption === "MAGAZINE") {
      jsonUrl = "https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json"; // Példa URL
    }
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

    let items;
    if (selectedOption === "MAGAZINE") {
      items = Object.keys(data.reversemag);
    } else {
      items = data[selectedOption.toLowerCase()] || [];
    }

    items.forEach(item => {
      const option = document.createElement('p');
      option.textContent = item;
      option.addEventListener('click', () => {
        searchInput.value = `${searchInput.value}; ${item}`;
        dropdown.style.display = 'none';
        if (selectedOption === "MAGAZINE") {
          createDropdown2(data.reversemag[item].compatibleWeapons, item);
        }
      });
      dropdown.appendChild(option);
    });
    dropdown.style.display = "block";
  }

  function createDropdown2(weapons, magazine) {
    const dropdown2 = document.createElement('div');
    dropdown2.id = 'reversemmagazine2';
    dropdown2.classList.add('dropdown');
    dropdown2.innerHTML = '';

    weapons.forEach(weapon => {
      const option = document.createElement('p');
      option.textContent = weapon;
      option.addEventListener('click', () => {
        searchInput.value = `${searchInput.value}; ${weapon}`;
        dropdown2.style.display = 'none';
      });
      dropdown2.appendChild(option);
    });

    document.querySelector('.search-container').appendChild(dropdown2);
    dropdown2.style.display = "block";
  }
});

// CSS: Add the following CSS to disable clicking on the "MAGAZINE" element
<style>
  .disabled {
    pointer-events: none;
    color: grey;
  }
</style>
