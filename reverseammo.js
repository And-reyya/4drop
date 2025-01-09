document.addEventListener("DOMContentLoaded", () => {
    let e = document.getElementById("searchInput"),
        t = document.getElementById("reversedrop"),
        n = document.createElement("div");
    n.id = "reversemmagazine";
    n.classList.add("dropdown");
    document.querySelector(".search-container").appendChild(n);

    let o = null;

    function c(t, n) {
        let l = document.createElement("div");
        l.id = "reversemmagazine2";
        l.classList.add("dropdown");
        l.innerHTML = "";
        t.forEach(t => {
            let a = document.createElement("p");
            a.textContent = t;
            a.addEventListener("click", () => {
                e.value = `${n}; ${t}`;
                l.style.display = "none";
                o = null;
            });
            l.appendChild(a);
        });
        document.querySelector(".search-container").appendChild(l);
        l.style.display = "block";
        return l;
    }

    // AMMO kiválasztása esetén új dropdown
    function showReversePont() {
        fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reversetools.json")
            .then(response => response.json())
            .then(data => {
                const ammoData = data.reversepont;
                const reversePont = document.createElement("div");
                reversePont.id = "reversepont";
                reversePont.classList.add("dropdown");

                ammoData.forEach(item => {
                    let p = document.createElement("p");
                    p.textContent = item.standard;
                    p.addEventListener("click", () => {
                        e.value = `${item.standard}`;
                        reversePont.style.display = "none";
                        showReverseMarika();
                    });
                    reversePont.appendChild(p);
                });

                document.querySelector(".search-container").appendChild(reversePont);
                reversePont.style.display = "block";
            });
    }

    // AMMO kiválasztása
    t.addEventListener("click", async m => {
        if ("P" === m.target.tagName) {
            if ("AMMO" === m.target.textContent) {
                t.style.display = "none";
                showReversePont();
            }
        }
    });

    // Új dropdown reversemarika
    function showReverseMarika() {
        const reverseMarika = document.createElement("div");
        reverseMarika.id = "reversemarika";
        reverseMarika.classList.add("dropdown");

        ["WEAPON", "MAGAZINE"].forEach(item => {
            let p = document.createElement("p");
            p.textContent = item;
            p.addEventListener("click", () => {
                e.value += `; ${item}`;
                reverseMarika.style.display = "none";
                if (item === "WEAPON") {
                    showReverseJancsi();
                } else if (item === "MAGAZINE") {
                    showReverseMonika();
                }
            });
            reverseMarika.appendChild(p);
        });

        document.querySelector(".search-container").appendChild(reverseMarika);
        reverseMarika.style.display = "block";
    }

    // Új dropdown reversejancsi
    function showReverseJancsi() {
        fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reversetools.json")
            .then(response => response.json())
            .then(data => {
                const jancsiData = data.reversejancsi;
                const reverseJancsi = document.createElement("div");
                reverseJancsi.id = "reversejancsi";
                reverseJancsi.classList.add("dropdown");

                let selectedAmmo = e.value.split(";")[0].trim();
                jancsiData.filter(item => item.ammo === selectedAmmo).forEach(item => {
                    item.weapon.forEach(weapon => {
                        let p = document.createElement("p");
                        p.textContent = weapon;
                        p.addEventListener("click", () => {
                            e.value += `; ${weapon}`;
                            reverseJancsi.style.display = "none";
                        });
                        reverseJancsi.appendChild(p);
                    });
                });

                document.querySelector(".search-container").appendChild(reverseJancsi);
                reverseJancsi.style.display = "block";
            });
    }

    // Új dropdown reversemonika
    function showReverseMonika() {
        fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reversetools.json")
            .then(response => response.json())
            .then(data => {
                const monikaData = data.reversemonika;
                const reverseMonika = document.createElement("div");
                reverseMonika.id = "reversemonika";
                reverseMonika.classList.add("dropdown");

                let selectedAmmo = e.value.split(";")[0].trim();
                monikaData.filter(item => item.ammo === selectedAmmo).forEach(item => {
                    item.magazine.forEach(magazine => {
                        let p = document.createElement("p");
                        p.textContent = magazine;
                        p.addEventListener("click", () => {
                            e.value += `; ${magazine}`;
                            reverseMonika.style.display = "none";
                        });
                        reverseMonika.appendChild(p);
                    });
                });

                document.querySelector(".search-container").appendChild(reverseMonika);
                reverseMonika.style.display = "block";
            });
    }
});
