document.addEventListener("DOMContentLoaded", function() {
  let e = document.getElementById("searchInput");

  const dropdownMappings = {
    AMMO: "reverseammotoweapon",
    MAGAZINE: "reversemagazinetoweapon",
    RAIL: "reverserailtoweapon",
    SIGHT: "reversesighttoweapon",
    SCOPE: "reversescopetoweapon",
    SUPPRESSOR: "reversesupressortoweapon",
    FLASHLIGHT: "reverseflashtoweapon",
    BAYONETT: "reversebayonetttoweapon"
  };

  Object.keys(dropdownMappings).forEach(key => {
    document.getElementById(dropdownMappings[key]).querySelectorAll("p").forEach(item => {
      item.addEventListener("click", () => {
        e.value += `; ${item.textContent}`;
      });
    });
  });
});
