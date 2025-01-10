document.addEventListener("DOMContentLoaded", () => {
    let e = document.getElementById("searchInput"),
        t = document.getElementById("reversedrop"),
        n = document.createElement("div");
    n.id = "reversemmagazine", n.classList.add("dropdown"), document.querySelector(".search-container").appendChild(n);
    let l = document.createElement("div");
    l.id = "reverseSsight", l.classList.add("dropdown"), document.querySelector(".search-container").appendChild(l);
    let a = document.createElement("div");
    a.id = "reverseSscope", a.classList.add("dropdown"), document.querySelector(".search-container").appendChild(a);
    let s = document.createElement("div");
    s.id = "reverseHhang", s.classList.add("dropdown"), document.querySelector(".search-container").appendChild(s);
    let r = document.createElement("div");
    r.id = "reverseBbayonett", r.classList.add("dropdown"), document.querySelector(".search-container").appendChild(r);
    let i = document.createElement("div");
    i.id = "reverseRrail", i.classList.add("dropdown"), document.querySelector(".search-container").appendChild(i);
    let d = document.createElement("div");
    d.id = "reverseFflashligt", d.classList.add("dropdown"), document.querySelector(".search-container").appendChild(d);
    let o = null;

    function c(t, n) {
        let l = document.createElement("div");
        return l.id = "reversemmagazine2", l.classList.add("dropdown"), l.innerHTML = "", t.forEach(t => {
            let a = document.createElement("p");
            a.textContent = t, a.addEventListener("click", () => {
                e.value = `${n}; ${t}`, l.style.display = "none", o = null
            }), l.appendChild(a)
        }), document.querySelector(".search-container").appendChild(l), l.style.display = "block", l
    }

    function p(t, n) {
        let l = document.createElement("div");
        return l.id = "reverseSsight2", l.classList.add("dropdown"), l.innerHTML = "", Object.keys(t).filter(e => t[e].some(e => e.includes(n))).forEach(a => {
            let s = document.createElement("p"),
                r = t[a].filter(e => e.includes(n)).map(e => e.match(/\(([^)]+)\)/)?.[1] || "").join(" ");
            s.textContent = `${a} ${r}`, s.addEventListener("click", () => {
                e.value = `${n}; ${a} ${r}`, l.style.display = "none", o = null
            }), l.appendChild(s)
        }), document.querySelector(".search-container").appendChild(l), l.style.display = "block", l
    }

    function y(t, n) {
        let l = document.createElement("div");
        return l.id = "reverseSscope2", l.classList.add("dropdown"), l.innerHTML = "", Object.keys(t).filter(e => t[e].some(e => e.includes(n))).forEach(a => {
            let s = document.createElement("p"),
                r = t[a].filter(e => e.includes(n)).map(e => e.match(/\(([^)]+)\)/)?.[1] || "").join(" ");
            s.textContent = `${a} ${r}`, s.addEventListener("click", () => {
                e.value = `${n}; ${a} ${r}`, l.style.display = "none", o = null
            }), l.appendChild(s)
        }), document.querySelector(".search-container").appendChild(l), l.style.display = "block", l
    }

    function h(t, n) {
        let l = document.createElement("div");
        return l.id = "reverseHhang2", l.classList.add("dropdown"), l.innerHTML = "", Object.keys(t).filter(e => t[e].some(e => e.includes(n))).forEach(a => {
            let s = document.createElement("p"),
                r = t[a].filter(e => e.includes(n)).map(e => e.match(/\(([^)]+)\)/)?.[1] || "").join(" ");
            s.textContent = `${a} ${r}`, s.addEventListener("click", () => {
                e.value = `${n}; ${a} ${r}`, l.style.display = "none", o = null
            }), l.appendChild(s)
        }), document.querySelector(".search-container").appendChild(l), l.style.display = "block", l
    }

    function u(t, n) {
        let l = document.createElement("div");
        return l.id = "reverseBbayonett2", l.classList.add("dropdown"), l.innerHTML = "", Object.keys(t).filter(e => t[e].some(e => e.includes(n))).forEach(a => {
            let s = document.createElement("p"),
                r = t[a].filter(e => e.includes(n)).map(e => e.match(/\(([^)]+)\)/)?.[1] || "").join(" ");
            s.textContent = `${a} ${r}`, s.addEventListener("click", () => {
                e.value = `${n}; ${a} ${r}`, l.style.display = "none", o = null
            }), l.appendChild(s)
        }), document.querySelector(".search-container").appendChild(l), l.style.display = "block", l
    }

    function v(t, n) {
        let l = document.createElement("div");
        return l.id = "reverseRrail2", l.classList.add("dropdown"), l.innerHTML = "", Object.keys(t).filter(e => t[e].some(e => e.includes(n))).forEach(a => {
            let s = document.createElement("p"),
                r = t[a].filter(e => e.includes(n)).map(e => e.match(/\(([^)]+)\)/)?.[1] || "").join(" ");
            s.textContent = `${a} ${r}`, s.addEventListener("click", () => {
                e.value = `${n}; ${a} ${r}`, l.style.display = "none", o = null
            }), l.appendChild(s)
        }), document.querySelector(".search-container").appendChild(l), l.style.display = "block", l
    }

    function E(t, n) {
        let l = document.createElement("div");
        return l.id = "reverseFflashligt2", l.classList.add("dropdown"), l.innerHTML = "", Object.keys(t).filter(e => t[e].includes(n)).forEach(t => {
            let a = document.createElement("p");
            a.textContent = t, a.addEventListener("click", () => {
                e.value = `${n}; ${t}`, l.style.display = "none", o = null
            }), l.appendChild(a)
        }), document.querySelector(".search-container").appendChild(l), l.style.display = "block", l
    }

    t.addEventListener("click", async m => {
        if ("P" === m.target.tagName) {
            if ("MAGAZINE" === m.target.textContent) {
                let f = await (await fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json")).json();
                n.innerHTML = "", Object.keys(f.reversemag).forEach(t => {
                    let l = document.createElement("p");
                    l.textContent = t, l.addEventListener("click", () => {
                        e.value = t, n.style.display = "none", o = c(f.reversemag[t].compatibleWeapons, t)
                    }), n.appendChild(l)
                }), t.style.display = "none", n.style.display = "block", o = n
            } else if ("SIGHT" === m.target.textContent) {
                let C = await (await fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json")).json();
                l.innerHTML = "";
                let L = new Set;
                Object.values(C.reversesig).forEach(e => {
                    e.forEach(e => {
                        if ("none" !== e) {
                            let t = e.split(" (")[0];
                            L.add(t)
                        }
                    })
                }), L.forEach(t => {
                    let n = document.createElement("p");
                    n.textContent = t, n.addEventListener("click", () => {
                        e.value = t, l.style.display = "none", o = p(C.reversesig, t)
                    }), l.appendChild(n)
                }), t.style.display = "none", l.style.display = "block", o = l
            } else if ("SCOPE" === m.target.textContent) {
                let w = await (await fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json")).json();
                a.innerHTML = "";
                let k = new Set;
                Object.values(w.reversesco).forEach(e => {
                    e.forEach(e => {
                        if ("none" !== e) {
                            let t = e.split(" (")[0];
                            k.add(t)
                        }
                    })
                }), k.forEach(t => {
                    let n = document.createElement("p");
                    n.textContent = t, n.addEventListener("click", () => {
                        e.value = t, a.style.display = "none", o = y(w.reversesco, t)
                                        }), a.appendChild(n)
                }), t.style.display = "none", a.style.display = "block", o = a
            } else if ("SUPPRESSOR" === m.target.textContent) {
                let g = await (await fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json")).json();
                s.innerHTML = "";
                let b = new Set;
                Object.values(g.reversesup).forEach(e => {
                    e.forEach(e => {
                        if ("none" !== e && "(none)" !== e) {
                            let t = e.split(" (")[0];
                            b.add(t)
                        }
                    })
                }), b.forEach(t => {
                    let n = document.createElement("p");
                    n.textContent = t, n.addEventListener("click", () => {
                        e.value = t, s.style.display = "none", o = h(g.reversesup, t)
                    }), s.appendChild(n)
                }), t.style.display = "none", s.style.display = "block", o = s
            } else if ("BAYONETT" === m.target.textContent) {
                let j = await (await fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json")).json();
                r.innerHTML = "";
                let S = new Set;
                Object.values(j.reversebay).forEach(e => {
                    e.forEach(e => {
                        if ("none" !== e) {
                            let t = e.split(" (")[0];
                            S.add(t)
                        }
                    })
                }), S.forEach(t => {
                    let n = document.createElement("p");
                    n.textContent = t, n.addEventListener("click", () => {
                        e.value = t, r.style.display = "none", o = u(j.reversebay, t)
                    }), r.appendChild(n)
                }), t.style.display = "none", r.style.display = "block", o = r
            } else if ("RAIL" === m.target.textContent) {
                let x = await (await fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json")).json();
                i.innerHTML = "";
                let H = new Set;
                Object.values(x.reverserai).forEach(e => {
                    e.forEach(e => {
                        if ("none" !== e) {
                            let t = e.split(" (")[0];
                            H.add(t)
                        }
                    })
                }), H.forEach(t => {
                    let n = document.createElement("p");
                    n.textContent = t, n.addEventListener("click", () => {
                        e.value = t, i.style.display = "none", o = v(x.reverserai, t)
                    }), i.appendChild(n)
                }), t.style.display = "none", i.style.display = "block", o = i
            } else if ("FLASHLIGHT" === m.target.textContent) {
                let T = await (await fetch("https://raw.githubusercontent.com/And-reyya/scumtools/main/reverse.json")).json();
                d.innerHTML = "";
                let M = new Set;
                Object.values(T.reversefla).forEach(e => {
                    e.split(", ").forEach(e => {
                        if ("none" !== e && "(none)" !== e) {
                            let t = e.split(" (")[0];
                            M.add(t)
                        }
                    })
                }), M.forEach(t => {
                    let n = document.createElement("p");
                    n.textContent = t, n.addEventListener("click", () => {
                        e.value = t, d.style.display = "none", o = E(T.reversefla, t)
                    }), d.appendChild(n)
                }), t.style.display = "none", d.style.display = "block", o = d
            }
        }
    }), e.addEventListener("input", () => {
        "" === e.value.trim() && (n.style.display = "none", reverseMMagazine2 && (reverseMMagazine2.style.display = "none"), l.style.display = "none", reverseSsight2 && (reverseSsight2.style.display = "none"), a.style.display = "none", reverseSscope2 && (reverseSscope2.style.display = "none"), s.style.display = "none", reverseHhang2 && (reverseHhang2.style.display = "none"), r.style.display = "none", reverseBbayonett2 && (reverseBbayonett2.style.display = "none"), i.style.display = "none", reverseRrail2 && (reverseRrail2.style.display = "none"), d.style.display = "none", reverseFflashligt2 && (reverseFflashligt2.style.display = "none"), o = null)
    })
});
