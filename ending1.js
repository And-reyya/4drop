document.addEventListener("DOMContentLoaded", function () {
    let e = document.getElementById("reversedrop"),
        t = document.getElementById("searchInput"),
        r = document.getElementById("reversebela"),
        n = document.getElementById("reversedalma"),
        l = document.getElementById("reverseorsi"),
        s = document.getElementById("reversemargit"),
        o = document.getElementById("reverserail"),
        i = document.getElementById("reversesight"),
        a = document.getElementById("reversescope"),
        d = document.getElementById("reversesuppressor"),
        f = document.getElementById("reverseflashlight"),
        b = document.getElementById("reversebayonett"),
        p = ["AMMO", "MAGAZINE", "RAIL", "SIGHT", "SCOPE", "SUPPRESSOR", "FLASHLIGHT", "BAYONETT"];

    fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reversetools.json")
        .then(e => e.json())
        .then(v => {
            let m = v.reversebela,
                c = v.reverseorsi,
                y = v.reversemargit;

            fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json")
                .then(e => e.json())
                .then(v => {
                    let g = v.reverserai,
                        E = v.reversesig,
                        u = v.reversesco,
                        F = v.reversefla,
                        S = v.reversesup,
                        B = v.reversebay;

                    function h(e, l) {
                        let s = document.getElementById(e);
                        s ? (s.innerHTML = "", l.forEach(l => {
                            let o = document.createElement("p");
                            o.textContent = l,
                                o.addEventListener("click", function () {
                                    console.log(`Dropdown elem kiválasztva: ${o.textContent}`),
                                        "reversebela" === e && (t.value = o.textContent, h("reversedalma", p), r.style.display = "none", n.style.display = "block")
                                }),
                                s.appendChild(o)
                        })) : console.error(`Dropdown with id ${e} not found.`)
                    }

                    e.addEventListener("click", function (e) {
                        let t = e.target;
                        "WEAPON" === t.textContent.trim() && (h("reversebela", m), r.style.display = "block", console.log("reversebela dropdown megjelenítve"))
                    });

                    r.addEventListener("click", function (e) {
                        let l = e.target;
                        l.parentElement && "reversebela" === l.parentElement.id && (t.value = l.textContent, h("reversedalma", p), r.style.display = "none", n.style.display = "block", console.log("reversedalma dropdown megjelenítve"))
                    });

                    n.addEventListener("click", function (e) {
                        let r = e.target;
                        if ("RAIL" === r.textContent.trim()) {
                            n.style.display = "none";
                            let p = t.value.split(";")[0].trim(),
                                v = g[p] || [];
                            h("reverserail", v),
                                o.style.display = "block",
                                console.log("reverserail dropdown megjelenítve")
                        } else if ("SIGHT" === r.textContent.trim()) {
                            n.style.display = "none";
                            let m = t.value.split(";")[0].trim(),
                                w = E[m] || [];
                            h("reversesight", w),
                                i.style.display = "block",
                                console.log("reversesight dropdown megjelenítve")
                        } else if ("SCOPE" === r.textContent.trim()) {
                            n.style.display = "none";
                            let C = t.value.split(";")[0].trim(),
                                k = u[C] || [];
                            h("reversescope", k),
                                a.style.display = "block",
                                console.log("reversescope dropdown megjelenítve")
                        } else if ("SUPPRESSOR" === r.textContent.trim()) {
                            n.style.display = "none";
                            let I = t.value.split(";")[0].trim(),
                                b = S[I] || [];
                            h("reversesuppressor", b),
                                d.style.display = "block",
                                console.log("reversesuppressor dropdown megjelenítve")
                        } else if ("FLASHLIGHT" === r.textContent.trim()) {
                            n.style.display = "none";
                            let D = t.value.split(";")[0].trim(),
                                R = F[D] ? F[D].split(',') : [];
                            h("reverseflashlight", R),
                                f.style.display = "block",
                                console.log("reverseflashlight dropdown megjelenítve")
                        } else if ("BAYONETT" === r.textContent.trim()) {
                            n.style.display = "none";
                            let w = t.value.split(";")[0].trim(),
                                K = B[w] || [];
                            h("reversebayonett", K),
                                b.style.display = "block",
                                console.log("reversebayonett dropdown megjelenítve")
                        } else if ("AMMO" === r.textContent.trim()) {
                            n.style.display = "none";
                            let x = t.value.split(";")[0].trim(),
                                L = c.find(e => e.weapon === x)?.ammo || [];
                            h("reverseorsi", L),
                                l.style.display = "block",
                                console.log("reverseorsi dropdown megjelenítve")
                        } else if ("MAGAZINE" === r.textContent.trim()) {
                            n.style.display = "none";
                            let A = t.value.split(";")[0].trim(),
                                j = y.filter(e => e.weapon === A).map(e => `${e.magazine} (${e.capacity})`);
                            h("reversemargit", j),
                                s.style.display = "block",
                                console.log("reversemargit dropdown megjelenítve")
                        }
                    });

                    l.addEventListener("click", function (e) {
                        let r = e.target;
                        r.parentElement && "reverseorsi" === r.parentElement.id && (t.value += `; ${r.textContent}`, l.style.display = "none", console.log("reverseorsi dropdown eltűnt"))
                    });

                    s.addEventListener("click", function (e) {
                        let r = e.target;
                        r.parentElement && "reversemargit" === r.parentElement.id && (t.value += `; ${r.textContent}`, s.style.display = "none", console.log("reversemargit dropdown eltűnt"))
                    });

                    o.addEventListener("click", function (e) {
                        let r = e.target;
                        r.parentElement && "reverserail" === r.parentElement.id && (t.value += `; ${r.textContent}`, o.style.display = "none", console.log("reverserail dropdown eltűnt"))
                    });

                    i.addEventListener("click", function (e) {
                        let r = e.target;
                        r.parentElement && "reversesight" === r.parentElement.id && (t.value += `; ${r.textContent}`, i.style.display = "none", console.log("reversesight dropdown eltűnt"))
                    });

                    a.addEventListener("click", function (e) {
                        let r = e.target;
                        r.parentElement && "reversescope" === r.parentElement.id && (t.value += `; ${r.textContent}`, a.style.display = "none", console.log("reversescope dropdown eltűnt"))
                    });

                    d.addEventListener("click", function (e) {
                        let r = e.target;
                        r.parentElement && "reversesuppressor" === r.parentElement.id && (t.value += `; ${r.textContent}`, d.style.display = "none", console.log("reversesuppressor dropdown eltűnt"))
                    });

                    f.addEventListener("click", function (e) {
                        let r = e.target;
                        r.parentElement && "reverseflashlight" === r.parentElement.id && (t.value += `; ${r.textContent}`, f.style.display = "none", console.log("reverseflashlight dropdown eltűnt"))
                    });

                    b.addEventListener("click", function (e) {
                        let r = e.target;
                        r.parentElement && "reversebayonett" === r.parentElement.id && (t.value += `; ${r.textContent}`, b.style.display = "none", console.log("reversebayonett dropdown eltűnt"))
                    });

                }).catch(e => console.error("Error fetching reverse data:", e))
        }).catch(e => console.error("Error fetching data:", e));
});
