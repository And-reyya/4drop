document.addEventListener("DOMContentLoaded", function () {
    let e = document.getElementById("searchInput"),
        t = document.querySelector(".triangle-icon"),
        n = document.getElementById("reversedrop"),
        r = document.getElementById("reversebela"),
        o = document.getElementById("reversedalmadrop"),
        l = document.getElementById("reverseammotoweapon"),
        a = document.getElementById("reversemagazinetoweapon"),
        s = document.getElementById("reverserailtoweapon"),
        i = document.getElementById("reversesighttoweapon"),
        c = document.getElementById("reversescopetoweapon"),
        u = document.getElementById("reversesupressortoweapon"),
        f = document.getElementById("reverseflashtoweapon"),
        b = document.getElementById("reversebayonetttoweapon");

    n.innerHTML = ["WEAPON", "AMMO", "MAGAZINE", "RAIL", "SIGHT", "SCOPE", "SUPPRESSOR", "BAYONETT", "RAIL", "FLASHLIGHT"]
        .map(e => `<p>${e}</p>`)
        .join("");

    t.addEventListener("click", () => {
        n.style.display = n.style.display === "block" ? "none" : "block";
    });

    n.querySelectorAll("p").forEach((t) => {
        if (t.textContent === "WEAPON") {
            t.addEventListener("click", () => {
                fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reversetools.json")
                    .then((e) => e.json())
                    .then((t) => {
                        let data = t.reversebela;

                        // Ellenőrizzük, hogy data tömb-e
                        if (Array.isArray(data)) {
                            r.innerHTML = data.map((e) => `<p>${e}</p>`).join("");
                            r.style.display = "block";

                            r.querySelectorAll("p").forEach((t) => {
                                t.addEventListener("click", () => {
                                    e.value = t.textContent;
                                    r.style.display = "none";
                                    n.style.display = "none";

                                    o.innerHTML = ["AMMO", "MAGAZINE", "RAIL", "SIGHT", "SCOPE", "SUPPRESSOR", "FLASHLIGHT", "BAYONETT"]
                                        .map((e) => `<p>${e}</p>`)
                                        .join("");
                                    o.style.display = "block";

                                    o.querySelectorAll("p").forEach((t) => {
                                        const fetchAndRender = (url, property, element, key) => {
                                            o.style.display = "none";
                                            fetch(url)
                                                .then((e) => e.json())
                                                .then((t) => {
                                                    let n = e.value.trim();
                                                    let item = t[property][n];

                                                    // Ellenőrizzük, hogy az item tömb-e
                                                    if (Array.isArray(item)) {
                                                        element.innerHTML = item.map((e) => `<p>${e}</p>`).join("");
                                                    } else if (item) {
                                                        element.innerHTML = `<p>${item}</p>`;
                                                    } else {
                                                        element.innerHTML = `No ${key} available.`;
                                                    }
                                                    element.style.display = "block";

                                                    element.querySelectorAll("p").forEach((t) => {
                                                        t.addEventListener("click", () => {
                                                            e.value = `${e.value}; ${t.textContent}`;
                                                            element.style.display = "none";
                                                        });
                                                    });
                                                })
                                                .catch((e) => console.error("Error loading JSON:", e));
                                        };

                                        const handlers = {
                                            AMMO: () =>
                                                fetchAndRender(
                                                    "https://raw.githubusercontent.com/And-reyya/scumtools/main/reversetools.json",
                                                    "reverseorsi",
                                                    l,
                                                    "ammo"
                                                ),
                                            MAGAZINE: () =>
                                                fetchAndRender(
                                                    "https://raw.githubusercontent.com/And-reyya/scumtools/main/reversetools.json",
                                                    "reversemargit",
                                                    a,
                                                    "magazine"
                                                ),
                                            RAIL: () =>
                                                fetchAndRender(
                                                    "https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json",
                                                    "reverserai",
                                                    s,
                                                    "rail"
                                                ),
                                            SIGHT: () =>
                                                fetchAndRender(
                                                    "https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json",
                                                    "reversesig",
                                                    i,
                                                    "sight"
                                                ),
                                            SCOPE: () =>
                                                fetchAndRender(
                                                    "https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json",
                                                    "reversesco",
                                                    c,
                                                    "scope"
                                                ),
                                            SUPPRESSOR: () =>
                                                fetchAndRender(
                                                    "https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json",
                                                    "reversesup",
                                                    u,
                                                    "suppressor"
                                                ),
                                            FLASHLIGHT: () =>
                                                fetchAndRender(
                                                    "https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json",
                                                    "reversefla",
                                                    f,
                                                    "flashlight"
                                                ),
                                            BAYONETT: () =>
                                                fetchAndRender(
                                                    "https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json",
                                                    "reversebay",
                                                    b,
                                                    "bayonett"
                                                ),
                                        };

                                        if (handlers[t.textContent]) {
                                            handlers[t.textContent]();
                                        }
                                    });
                                });
                            });
                        } else {
                            console.error("A reversebela adat nem tömb!");
                        }
                    })
                    .catch((e) => console.error("Error loading JSON:", e));
            });
        }
    });
});
