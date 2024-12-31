document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput");
  const triangleIcon = document.querySelector(".triangle-icon");
  const reversedrop = document.getElementById("reversedrop");
  const reverseammo = document.getElementById("reverseammo");
  const reverseammotoweapon = document.createElement("div");
  reverseammotoweapon.classList.add("dropdown");
  reverseammotoweapon.id = "reverseammotoweapon";
  document.querySelector(".search-box").appendChild(reverseammotoweapon);
  const reversemagazine = document.getElementById("reversemagazine");
  const reversemagazinetoweapon = document.getElementById("reversemagazinetoweapon");
  const reversesight = document.getElementById("reversesight");
  const reversesighttoweapon = document.getElementById("reversesighttoweapon");
  const reversescope = document.getElementById("reversescope");
  const reversescopetoweapon = document.getElementById("reversescopetoweapon");
  const reversesup = document.getElementById("reversesup");
  const reversesupressortoweapon = document.getElementById("reversesupressortoweapon");
  const reversebayonett = document.getElementById("reversebayonett");
  const reversebayonetttoweapon = document.getElementById("reversebayonetttoweapon");
  const reverserail = document.getElementById("reverserail");
  const reverserailtoweapon = document.getElementById("reverserailtoweapon");
  const reverseflashlight = document.createElement("div");
  reverseflashlight.classList.add("dropdown");
  reverseflashlight.id = "reverseflashlight";
  document.querySelector(".search-box").appendChild(reverseflashlight);
  const reverseflashtoweapon = document.createElement("div");
  reverseflashtoweapon.classList.add("dropdown");
  reverseflashtoweapon.id = "reverseflashtoweapon";
  document.querySelector(".search-box").appendChild(reverseflashtoweapon);

  const options = ["WEAPON", "AMMO", "MAGAZINE", "SIGHT", "SCOPE", "SUPRESSOR", "BAYONETT", "RAIL", "FLASHLIGHT"];
  reversedrop.innerHTML = options.map(option => `<p>${option}</p>`).join("");
  triangleIcon.addEventListener("click", () => {
    reversedrop.style.display = (reversedrop.style.display === "block") ? "none" : "block";
  });

  const handleOptionClick = (optionText, dropdown, url, mapFunction, targetDropdown, targetMapFunction, nestedDropdown, nestedMapFunction) => {
    reversedrop.querySelectorAll("p").forEach(option => {
      if (option.textContent === optionText) {
        option.addEventListener("click", () => {
          searchInput.value = option.textContent;
          dropdown.style.display = "none";
          fetch(url)
            .then(response => response.json())
            .then(data => {
              const items = mapFunction(data);
              targetDropdown.innerHTML = items.map(item => `<p>${item}</p>`).join("");
              targetDropdown.style.display = "block";
              targetDropdown.querySelectorAll("p").forEach(item => {
                item.addEventListener("click", () => {
                  searchInput.value = targetMapFunction(item, data);
                  nestedDropdown.innerHTML = nestedMapFunction(data, item).map(nestedItem => `<p>${nestedItem}</p>`).join("");
                  nestedDropdown.style.display = "block";
                  nestedDropdown.querySelectorAll("p").forEach(nestedItem => {
                    nestedItem.addEventListener("click", () => {
                      searchInput.value = `${item.textContent} ${nestedItem.textContent}`;
                      nestedDropdown.style.display = "none";
                    });
                  });
                  targetDropdown.style.display = "none";
                });
              });
            })
            .catch(error => console.error("Hiba a JSON betöltésekor:", error));
        });
      }
    });
  };

  handleOptionClick("AMMO", reversedrop, "https://raw.githubusercontent.com/And-reyya/scumtools/main/scumdata.json",
    data => data.scumjancsi.map(item => item.ammo), reverseammo, (item, data) => item.textContent,
    reverseammotoweapon, (data, item) => {
      const selectedAmmoData = data.scumjancsi.find(ammoData => ammoData.ammo === item.textContent);
      return selectedAmmoData ? selectedAmmoData.weapon : [];
    });

  handleOptionClick("MAGAZINE", reversedrop, "https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json",
    data => Object.keys(data.reversemag), reversemagazine, (item, data) => item.textContent,
    reversemagazinetoweapon, (data, item) => {
      const selectedMagazineData = data.reversemag[item.textContent];
      return selectedMagazineData ? selectedMagazineData.compatibleWeapons : [];
    });

  handleOptionClick("SIGHT", reversedrop, "https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json",
    data => Object.keys(data.reversesig), reversesight, (item, data) => item.textContent,
    reversesighttoweapon, (data, item) => {
      const selectedSightData = data.reversesig[item.textContent];
      return selectedSightData ? selectedSightData : [];
    });

  handleOptionClick("SCOPE", reversedrop, "https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json",
    data => Object.keys(data.reversesco), reversescope, (item, data) => item.textContent,
    reversescopetoweapon, (data, item) => {
      const selectedScopeData = data.reversesco[item.textContent];
      return selectedScopeData ? selectedScopeData : [];
    });

  handleOptionClick("SUPRESSOR", reversedrop, "https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json",
    data => Object.keys(data.reversesup), reversesup, (item, data) => item.textContent,
    reversesupressortoweapon, (data, item) => {
      const selectedSupData = data.reversesup[item.textContent];
      return selectedSupData ? selectedSupData.compatibleWeapons : [];
    });

  handleOptionClick("BAYONETT", reversedrop, "https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json",
    data => Object.keys(data.reversebay), reversebayonett, (item, data) => item.textContent,
    reversebayonetttoweapon, (data, item) => {
      const selectedBayonettData = data.reversebay[item.textContent];
      return selectedBayonettData ? selectedBayonettData.compatibleWeapons : [];
    });

  handleOptionClick("RAIL", reversedrop, "https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json",
    data => Object.keys(data.reverserai), reverserail, (item, data) => item.textContent,
    reverserailtoweapon, (data, item) => {
      const selectedRailData = data.reverserai[item.textContent];
      return selectedRailData ? selectedRailData.compatibleWeapons : [];
    });

  handleOptionClick("FLASHLIGHT", reversedrop, "https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json",
    data => Object.keys(data.reversefla), reverseflashlight, (item, data) => item.textContent,
    reverseflashtoweapon, (data, item) => {
      const selectedFlashlightData = data.reversefla[item.textContent];
      return selectedFlashlightData ? selectedFlashlightData.compatibleWeapons : [];
    });
});
