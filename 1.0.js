document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput"),
        dalmadrop = document.getElementById("dalmadrop"),
        scopedrop = document.getElementById("scopedrop"),
        sightdrop = document.getElementById("sightdrop");

  let scumscopes = {};
  let activeScopeIndex = -1;
  let activeSightIndex = -1;

  // Betöltjük a scumscopes adatokat a külső JSON fájlból
  fetch("https://raw.githubusercontent.com/And-reyya/scumdata2/main/scumscope.json")
    .then(response => response.json())
    .then(data => {
      scumscopes = data;
      console.log("scumscopes betöltve:", scumscopes);
    })
    .catch(error => console.error("Hiba a JSON betöltésekor:", error));

  dalmadrop.addEventListener("click", function(event) {
    const selectedOption = event.target.textContent;
    console.log("dalmadrop kattintás:", selectedOption);
    if (selectedOption === "SCOPE") {
      const weapon = searchInput.value.trim();
      console.log("Kiválasztott fegyver:", weapon);
      const scopes = scumscopes.scumscope[weapon] || "none";
      const scopeList = scopes.split(", ");
      console.log("Scopes:", scopeList);
      hideAllDropdowns();
      scopedrop.innerHTML = scopeList.map(scope => `<p>${scope}</p>`).join("");
      scopedrop.style.display = scopeList.length ? "block" : "none";
      activeScopeIndex = -1;
      scopedrop.querySelectorAll("p").forEach(p => p.addEventListener("click", function() {
        searchInput.value = `${weapon}; ${p.textContent}`;
        hideAllDropdowns();
      }));
    } else if (selectedOption === "SIGHT") {
      const weapon = searchInput.value.trim();
      console.log("Kiválasztott fegyver:", weapon);
      const sights = scumscopes.scumsight[weapon] || ["none"];
      
      // Ensure sights is an array before processing
      const sightList = Array.isArray(sights) ? sights : [];
      console.log("Sights:", sightList);
      
      hideAllDropdowns();
      sightdrop.innerHTML = sightList.map(sight => `<p>${sight}</p>`).join("");
      sightdrop.style.display = sightList.length ? "block" : "none";
      activeSightIndex = -1;
      sightdrop.querySelectorAll("p").forEach(p => p.addEventListener("click", function() {
        searchInput.value = `${weapon}; ${p.textContent}`;
        hideAllDropdowns();
      }));
    }
  });

  // Billentyű navigáció és enter-kiválasztás a scopedrop és sightdrop dropdown-ban
  searchInput.addEventListener("keydown", function(event) {
    if (scopedrop.style.display === "block") {
      const scopeItems = scopedrop.getElementsByTagName("p");
      if (event.key === "ArrowDown") {
        activeScopeIndex = (activeScopeIndex + 1) % scopeItems.length;
        setActiveScope(scopeItems, activeScopeIndex);
      } else if (event.key === "ArrowUp") {
        activeScopeIndex = (activeScopeIndex - 1 + scopeItems.length) % scopeItems.length;
        setActiveScope(scopeItems, activeScopeIndex);
      } else if (event.key === "Enter" && activeScopeIndex >= 0) {
        event.preventDefault();
        searchInput.value = `${searchInput.value.trim()}; ${scopeItems[activeScopeIndex].textContent}`;
        hideAllDropdowns();
      }
    } else if (sightdrop.style.display === "block") {
      const sightItems = sightdrop.getElementsByTagName("p");
      if (event.key === "ArrowDown") {
        activeSightIndex = (activeSightIndex + 1) % sightItems.length;
        setActiveScope(sightItems, activeSightIndex);
      } else if (event.key === "ArrowUp") {
        activeSightIndex = (activeSightIndex - 1 + sightItems.length) % sightItems.length;
        setActiveScope(sightItems, activeSightIndex);
      } else if (event.key === "Enter" && activeSightIndex >= 0) {
        event.preventDefault();
        searchInput.value = `${searchInput.value.trim()}; ${sightItems[activeSightIndex].textContent}`;
        hideAllDropdowns();
      }
    }
  });

  function setActiveScope(items, index) {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("dropdown-active");
    }
    if (items.length > 0 && index >= 0 && index < items.length) {
      items[index].classList.add("dropdown-active");
      items[index].scrollIntoView({ block: "nearest" });
    }
  }

  function hideAllDropdowns() {
    scopedrop.style.display = "none";
    sightdrop.style.display = "none";
    dalmadrop.style.display = "none";
    // Ha további dropdownokat is el kell rejteni, azt itt tehetjük meg
  }

  // Optional: Clear dropdowns on search input change if needed
  searchInput.addEventListener("input", function() {
    hideAllDropdowns();
  });
});
