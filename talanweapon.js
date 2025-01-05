document.addEventListener("DOMContentLoaded", function() {
    let e = document.getElementById("searchInput"),
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

    fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reversetools.json")
        .then(e => e.json())
        .then(t => {
            let data = t.reversebela;
            r.innerHTML = data.map(e => `<p>${e}</p>`).join("");
            r.querySelectorAll("p").forEach(t => {
                t.addEventListener("click", () => {
                    e.value = t.textContent;
                    r.style.display = "none";
                    o.innerHTML = ["AMMO", "MAGAZINE", "RAIL", "SIGHT", "SCOPE", "SUPPRESSOR", "FLASHLIGHT", "BAYONETT"]
                        .map(e => `<p>${e}</p>`).join("");
                    o.style.display = "block";
                    o.querySelectorAll("p").forEach(t => {
                        if ("AMMO" === t.textContent) {
                            t.addEventListener("click", () => {
                                o.style.display = "none";
                                fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reversetools.json")
                                    .then(e => e.json())
                                    .then(t => {
                                        let n = e.value.trim();
                                        let item = t.reverseorsi.find(e => e.weapon.toLowerCase() === n.toLowerCase());
                                        l.innerHTML = item.ammo.map(e => `<p>${e}</p>`).join("");
                                        l.style.display = "block";
                                        l.querySelectorAll("p").forEach(t => {
                                            t.addEventListener("click", () => {
                                                e.value = `${e.value}; ${t.textContent}`;
                                                l.style.display = "none";
                                            });
                                        });
                                    }).catch(e => console.error("Error loading JSON:", e));
                            });
                        }
                        if ("MAGAZINE" === t.textContent) {
                            t.addEventListener("click", () => {
                                o.style.display = "none";
                                fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reversetools.json")
                                    .then(e => e.json())
                                    .then(t => {
                                        let n = e.value.trim();
                                        let item = t.reversemargit.find(e => e.weapon.toLowerCase() === n.toLowerCase());
                                        a.innerHTML = `<p>${item.magazine} (${item.capacity})</p>`;
                                        a.style.display = "block";
                                        a.querySelectorAll("p").forEach(t => {
                                            t.addEventListener("click", () => {
                                                e.value = `${e.value}; ${t.textContent}`;
                                                a.style.display = "none";
                                            });
                                        });
                                    }).catch(e => console.error("Error loading JSON:", e));
                            });
                        }
                        if ("RAIL" === t.textContent) {
                            t.addEventListener("click", () => {
                                o.style.display = "none";
                                fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json")
                                    .then(e => e.json())
                                    .then(t => {
                                        let n = e.value.trim();
                                        let item = t.reverserai[n];
                                        s.innerHTML = item.map(e => `<p>${e}</p>`).join("");
                                        s.style.display = "block";
                                        s.querySelectorAll("p").forEach(t => {
                                            t.addEventListener("click", () => {
                                                e.value = `${e.value}; ${t.textContent}`;
                                                s.style.display = "none";
                                            });
                                        });
                                    }).catch(e => console.error("Error loading JSON:", e));
                            });
                        }
                        if ("SIGHT" === t.textContent) {
                            t.addEventListener("click", () => {
                                o.style.display = "none";
                                fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json")
                                    .then(e => e.json())
                                    .then(t => {
                                        let n = e.value.trim();
                                        let item = t.reversesig[n];
                                        i.innerHTML = item.map(e => `<p>${e}</p>`).join("");
                                        i.style.display = "block";
                                        i.querySelectorAll("p").forEach(t => {
                                            t.addEventListener("click", () => {
                                                e.value = `${e.value}; ${t.textContent}`;
                                                i.style.display = "none";
                                            });
                                        });
                                    }).catch(e => console.error("Error loading JSON:", e));
                            });
                        }
                        if ("SCOPE" === t.textContent) {
                            t.addEventListener("click", () => {
                                o.style.display = "none";
                                fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json")
                                    .then(e => e.json())
                                    .then(t => {
                                        let n = e.value.trim();
                                        let item = t.reversesco[n];
                                        c.innerHTML = item.map(e => `<p>${e}</p>`).join("");
                                        c.style.display = "block";
                                        c.querySelectorAll("p").forEach(t => {
                                            t.addEventListener("click", () => {
                                                e.value = `${e.value}; ${t.textContent}`;
                                                c.style.display = "none";
                                            });
                                        });
                                    }).catch(e => console.error("Error loading JSON:", e));
                            });
                        }
                        if ("SUPPRESSOR" === t.textContent) {
                            t.addEventListener("click", () => {
                                o.style.display = "none";
                                fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json")
                                    .then(e => e.json())
                                    .then(t => {
                                        let n = e.value.trim();
                                        let item = t.reversesup[n];
                                        u.innerHTML = item.map(e => `<p>${e}</p>`).join("");
                                        u.style.display = "block";
                                        u.querySelectorAll("p").forEach(t => {
                                            t.addEventListener("click", () => {
                                                e.value = `${e.value}; ${t.textContent}`;
                                                u.style.display = "none";
                                            });
                                        });
                                    }).catch(e => console.error("Error loading JSON:", e));
                            });
                        }
                        if ("FLASHLIGHT" === t.textContent) {
                            t.addEventListener("click", () => {
                                o.style.display = "none";
                                fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json")
                                    .then(e => e.json())
                                    .then(t => {
                                        let n = e.value.trim();
                                        let item = t.reversefla[n];
                                        f.innerHTML = item ? item.split(', ').map(e => `<p>${e}</p>`).join("") : "No flashlights available.";
                                        f.style.display = "block";
                                        f.querySelectorAll("p").forEach(t => {
                                            t.addEventListener("click", () => {
                                                e.value = `${e.value}; ${t.textContent}`;
                                                f.style.display = "none";
                                            });
                                        });
                                    }).catch(e => console.error("Error loading JSON:", e));
                            });
                        }
                        if ("BAYONETT" === t.textContent) {
                            t.addEventListener("click", () => {
                                o.style.display = "none";
                                fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json")
                                    .then(e => e.json())
                                    .then(t => {
                                        let n = e.value.trim();
                                        let item = t.reversebay[n];
                                        b.innerHTML = item.map(e => `<p>${e}</p>`).join("");
                                        b.style.display = "block";
                                        b.querySelectorAll("p").forEach(t => {
                                            t.addEventListener("click", () => {
                                                e.value = `${e.value}; ${t.textContent}`;
                                                b.style.display = "none";
                                            });
                                        });
                                    }).catch(e => console.error("Error loading JSON:", e));
                            });
                        }
                    });
                });
            });
        }).catch(e => console.error("Error loading JSON:", e));
});
