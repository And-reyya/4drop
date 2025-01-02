document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput");
  const reversedrop = document.getElementById("reversedrop");

  const reverseammo = document.createElement("div");
  reverseammo.classList.add("dropdown");
  reverseammo.id = "reverseammo";
  document.querySelector(".search-box").appendChild(reverseammo);

  const reversepont = document.createElement("div");
  reversepont.classList.add("dropdown");
  reversepont.id = "reversepont";
  document.querySelector(".search-box").appendChild(reversepont);

  const reversemarika = document.createElement("div");
  reversemarika.classList.add("dropdown");
  reversemarika.id = "reversemarika";
  reversemarika.innerHTML = "<p>WEAPON</p><p>MAGAZINE</p>";
  document.querySelector(".search-box").appendChild(reversemarika);
  reversemarika.style.display = "none"; // alapértelmezetten rejtve

  const reversejancsi = document.createElement("div");
  reversejancsi.classList.add("dropdown");
  reversejancsi.id = "reversejancsi";
  document.querySelector(".search-box").appendChild(reversejancsi);
  reversejancsi.style.display = "none"; // alapértelmezetten rejtve

  const reversemonika = document.createElement("div");
  reversemonika.classList.add("dropdown");
  reversemonika.id = "reversemonika";
  document.querySelector(".search-box").appendChild(reversemonika);
  reversemonika.style.display = "none"; // alapértelmezetten rejtve

  const reversebela = document.createElement("div");
  reversebela.classList.add("dropdown");
  reversebela.id = "reversebela";
  document.querySelector(".search-box").appendChild(reversebela);
  reversebela.style.display = "none"; // alapértelmezetten rejtve

  const reversedalma = document.createElement("div");
  reversedalma.classList.add("dropdown");
  reversedalma.id = "reversedalma";
  reversedalma.innerHTML = "<p>AMMO</p><p>MAGAZINE</p><p>SIGHT</p><p>SCOPE</p><p>SUPRESSOR</p><p>RAIL</p><p>FLASHLIGHT</p><p>BAYONETT</p>";
  document.querySelector(".search-box").appendChild(reversedalma);
  reversedalma.style.display = "none"; // alapértelmezetten rejtve

  const reverseorsi = document.createElement("div");
  reverseorsi.classList.add("dropdown");
  reverseorsi.id = "reverseorsi";
  document.querySelector(".search-box").appendChild(reverseorsi);
  reverseorsi.style.display = "none"; // alapértelmezetten rejtve

  const handleOptionClick = (optionText, dropdown, url, mapFunction, targetDropdown, targetMapFunction) => {
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
                  targetDropdown.style.display = "none";
                  reversemarika.style.display = "block"; // reversemarika dropdown megjelenítése
                });
              });
            })
            .catch(error => console.error("Hiba a JSON betöltésekor:", error));
        });
      }
    });
  };

  // "AMMO" dropdown kezelés
  handleOptionClick("AMMO", reversedrop, "https://raw.githubusercontent.com/And-reyya/scumtools/main/reversetools.json",
    data => data.reversepont.map(item => item.standard), reverseammo, (item, data) => item.textContent);

  // "WEAPON" dropdown kezelés a reversedrop dropdownban
  reversedrop.querySelectorAll("p").forEach(option => {
    if (option.textContent === "WEAPON") {
      option.addEventListener("click", () => {
        fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reversetools.json")
          .then(response => response.json())
          .then(data => {
            reversebela.innerHTML = data.reversebela.map(weapon => `<p>${weapon}</p>`).join("");
            reversebela.style.display = "block";
            reversebela.querySelectorAll("p").forEach(item => {
              item.addEventListener("click", () => {
                searchInput.value = item.textContent;
                reversebela.style.display = "none"; // reversebela dropdown eltűntetése
                reversedalma.style.display = "block"; // reversedalma dropdown megjelenítése
                reversedrop.style.display = "none"; // reversedrop dropdown eltűntetése
              });
            });
          })
          .catch(error => console.error("Hiba a JSON betöltésekor:", error));
      });
    }
  });

  // "reversedalma" dropdown kezelés
  reversedalma.querySelectorAll("p").forEach(option => {
    option.addEventListener("click", () => {
      const selectedOption = option.textContent;
      if (selectedOption === "AMMO") {
        handleOptionClick("AMMO", reversepont, "https://raw.githubusercontent.com/And-reyya/scumtools/main/reversetools.json",
          data => data.reversepont.map(item => item.standard), reverseammo, (item, data) => item.textContent);
      } else if (selectedOption === "MAGAZINE") {
        reversemarika.querySelectorAll("p").forEach(magOption => {
          if (magOption.textContent === "MAGAZINE") {
            magOption.click();
          }
        });
      } else if (selectedOption === "SIGHT") {
        // Implementáld a SIGHT opcióhoz szükséges funkciókat
      } else if (selectedOption === "SCOPE") {
        // Implementáld a SCOPE opcióhoz szükséges funkciókat
      } else if (selectedOption === "SUPRESSOR") {
        // Implementáld a SUPRESSOR opcióhoz szükséges funkciókat
      } else if (selectedOption === "RAIL") {
        // Implementáld a RAIL opcióhoz szükséges funkciókat
      } else if (selectedOption === "FLASHLIGHT") {
        // Implementáld a FLASHLIGHT opcióhoz szükséges funkciókat
      } else if (selectedOption === "BAYONETT") {
        // Implementáld a BAYONETT opcióhoz szükséges funkciókat
      }
      reversedalma.style.display = "none"; // reversedalma dropdown eltűntetése
    });
  });

  // "reverseorsi" dropdown kezelés
  reverseorsi.querySelectorAll("p").forEach(option => {
    option.addEventListener("click", () => {
      const selectedAmmo = option.textContent;
      searchInput.value += `; ${selectedAmmo}`;
      reverseorsi.style.display = "none"; // reverseorsi dropdown eltűntetése
      reversedalma.style.display = "none"; // reversedalma dropdown eltűntetése
      reversedrop.style.display = "none"; // reversedrop dropdown eltűntetése
    });
  });

  // "MAGAZINE" dropdown kezelés a reversemarika dropdownban
  reversemarika.querySelectorAll("p").forEach(option => {
    if (option.textContent === "MAGAZINE") {
      option.addEventListener("click", () => {
        const selectedAmmo = searchInput.value;
        fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reversetools.json")
          .then(response => response.json())
          .then(data => {
            const selectedData = data.reversemonika.find(ammoData => ammoData.ammo === selectedAmmo);
            if (selectedData) {
              reversemonika.innerHTML = selectedData.magazine.map(mag => `<p>${mag}</p>`).join("");
              reversemonika.style.display = "block";
              reversemonika.querySelectorAll("p").forEach(item => {
                item.addEventListener("click", () => {
                  searchInput.value += `; ${item.textContent}`;
                  reversemonika.style.display = "none"; // reversemonika dropdown eltűntetése
                  reversemarika.style.display = "none"; // reversemarika dropdown eltűntetése
                });
              });
            }
          })
          .catch(error => console.error("Hiba a JSON betöltésekor:", error));
      });
    }
  });

    // "reversejancsi" dropdown kezelés a reversemarika dropdownban
  reversemarika.querySelectorAll("p").forEach(option => {
    if (option.textContent === "WEAPON") {
      option.addEventListener("click", () => {
        const selectedAmmo = searchInput.value;
        fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reversetools.json")
          .then(response => response.json())
          .then(data => {
            const selectedData = data.reversejancsi.find(ammoData => ammoData.ammo === selectedAmmo);
            if (selectedData) {
              reversejancsi.innerHTML = selectedData.weapon.map(weapon => `<p>${weapon}</p>`).join("");
              reversejancsi.style.display = "block";
              reversejancsi.querySelectorAll("p").forEach(item => {
                item.addEventListener("click", () => {
                  searchInput.value += `; ${item.textContent}`;
                  reversejancsi.style.display = "none"; // reversejancsi dropdown eltűntetése
                  reversemarika.style.display = "none"; // reversemarika dropdown eltűntetése
                });
              });
            }
          })
          .catch(error => console.error("Hiba a JSON betöltésekor:", error));
      });
    }
  });

  // "reverseorsi" dropdown kezelés a reversedalma dropdownban
  reversedalma.querySelectorAll("p").forEach(option => {
    if (option.textContent === "AMMO") {
      option.addEventListener("click", () => {
        const selectedWeapon = searchInput.value;
        fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reversetools.json")
          .then(response => response.json())
          .then(data => {
            const selectedData = data.reverseorsi.find(weaponData => weaponData.weapon === selectedWeapon);
            if (selectedData) {
              reverseorsi.innerHTML = selectedData.ammo.map(ammo => `<p>${ammo}</p>`).join("");
              reverseorsi.style.display = "block";
              reverseorsi.querySelectorAll("p").forEach(item => {
                item.addEventListener("click", () => {
                  searchInput.value += `; ${item.textContent}`;
                  reverseorsi.style.display = "none"; // reverseorsi dropdown eltűntetése
                  reversedalma.style.display = "none"; // reversedalma dropdown eltűntetése
                  reversedrop.style.display = "none"; // reversedrop dropdown eltűntetése
                });
              });
            }
          })
          .catch(error => console.error("Hiba a JSON betöltésekor:", error));
      });
    }
  });

  // "MAGAZINE" dropdown kezelés a reversemarika dropdownban
  reversemarika.querySelectorAll("p").forEach(option => {
    if (option.textContent === "MAGAZINE") {
      option.addEventListener("click", () => {
        const selectedAmmo = searchInput.value;
        fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reversetools.json")
          .then(response => response.json())
          .then(data => {
            const selectedData = data.reversemonika.find(ammoData => ammoData.ammo === selectedAmmo);
            if (selectedData) {
              reversemonika.innerHTML = selectedData.magazine.map(mag => `<p>${mag}</p>`).join("");
              reversemonika.style.display = "block";
              reversemonika.querySelectorAll("p").forEach(item => {
                item.addEventListener("click", () => {
                  searchInput.value += `; ${item.textContent}`;
                  reversemonika.style.display = "none"; // reversemonika dropdown eltűntetése
                  reversemarika.style.display = "none"; // reversemarika dropdown eltűntetése
                });
              });
            }
          })
          .catch(error => console.error("Hiba a JSON betöltésekor:", error));
      });
    }
  });

  // "reversebela" dropdown kezelés
  reversebela.querySelectorAll("p").forEach(option => {
    option.addEventListener("click", () => {
      const selectedWeapon = option.textContent;
      searchInput.value += `; ${selectedWeapon}`;
      reversebela.style.display = "none"; // reversebela dropdown eltűntetése
      reversemarika.style.display = "block"; // reversemarika dropdown megjelenítése
      reversedrop.style.display = "none"; // reversedrop dropdown eltűntetése
    });
  });
});

