function showReversePont(e) {
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
                    showReverseMarika(e);
                });
                reversePont.appendChild(p);
            });

            document.querySelector(".search-container").appendChild(reversePont);
            reversePont.style.display = "block";
        });
}

function showReverseMarika(e) {
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
                showReverseJancsi(e);
            } else if (item === "MAGAZINE") {
                showReverseMonika(e);
            }
        });
        reverseMarika.appendChild(p);
    });

    document.querySelector(".search-container").appendChild(reverseMarika);
    reverseMarika.style.display = "block";
}

function showReverseJancsi(e) {
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

function showReverseMonika(e) {
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
