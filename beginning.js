document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput"), 
        triangleIcon = document.querySelector(".triangle-icon"),
        reversedrop = document.getElementById("reversedrop"),
        pontdrop = document.getElementById("pontdrop"),
        marikadrop = document.getElementById("marikadrop"),
        beladrop = document.getElementById("beladrop");

  const options = ["WEAPON", "AMMO", "MAGAZINE", "SIGHT", "SCOPE", "SUPRESSOR", "BAYONETT", "RAIL", "FLASHLIGHT"];
  reversedrop.innerHTML = options.map(option => `<p>${option}</p>`).join("");

  triangleIcon.addEventListener("click", () => {
    reversedrop.style.display = (reversedrop.style.display === "block") ? "none" : "block";
  });

  reversedrop.querySelectorAll("p").forEach(option => {
    if (option.textContent === "WEAPON") {
      option.addEventListener("click", () => {
        searchInput.value = "WEAPON";
        fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/scumdata.json")
          .then(response => response.json())
          .then(data => {
            const items = data.scumbela;
            beladrop.innerHTML = items.map(item => `<p>${item}</p>`).join("");
            beladrop.style.display = "block";
          })
          .catch(error => console.error("Hiba a JSON betöltésekor:", error));
      });
    }
  });

  pontdrop.addEventListener("click", function(event) {
    if (event.target.tagName === "P") {
      searchInput.value = event.target.textContent;
      fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/scumdata.json")
        .then(response => response.json())
        .then(data => {
          const ammo = event.target.textContent;
          const ammoData = data.scumjancsi.find(item => item.ammo.toLowerCase() === ammo.toLowerCase().trim());
          if (ammoData) {
            marikadrop.innerHTML = '';
            const weaponButton = document.createElement('button');
            weaponButton.textContent = 'WEAPON';
            weaponButton.addEventListener('click', () => showWeapons(ammo, data));
            marikadrop.appendChild(weaponButton);

            const magazineButton = document.createElement('button');
            magazineButton.textContent = 'MAGAZINE';
            magazineButton.addEventListener('click', () => showMagazine(ammo, data));
            marikadrop.appendChild(magazineButton);
            marikadrop.style.display = 'block';
          }
        })
        .catch(error => console.error("Hiba a JSON betöltésekor:", error));
    }
  });

  const clearDropdowns = () => {
    [pontdrop, marikadrop, beladrop].forEach(dropdown => {
      dropdown.innerHTML = '';
      dropdown.style.display = 'none';
    });
  };

  const showWeapons = (ammo, data) => {
    clearDropdowns();
    const ammoData = data.scumjancsi.find(item => item.ammo.toLowerCase().includes(ammo.toLowerCase().trim()));
    const weapons = ammoData ? ammoData.weapon : ["No weapons found"];
    weapons.forEach(weapon => {
      const option = document.createElement("p");
      option.textContent = weapon;
      option.addEventListener("click", () => {
        searchInput.value = `${searchInput.value}; ${weapon}`;
        clearDropdowns();
      });
      marikadrop.appendChild(option);
    });
    marikadrop.style.display = "block";
  };

  const showMagazine = (ammo, data) => {
    clearDropdowns();
    const ammoData = data.scummonika.find(item => item.ammo.toLowerCase().includes(ammo.toLowerCase().trim()));
    const magazines = ammoData ? ammoData.magazine : ["No magazines found"];
    magazines.forEach(mag => {
      const option = document.createElement("p");
      option.textContent = mag;
      option.addEventListener("click", () => {
        searchInput.value = `${searchInput.value}; ${mag}`;
        clearDropdowns();
      });
      marikadrop.appendChild(option);
    });
    marikadrop.style.display = "block";
  };
});
