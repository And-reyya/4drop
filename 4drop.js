document.addEventListener('DOMContentLoaded', function() { 
    class DropdownSearch { 
        constructor(input, dropdowns, dataUrl) { 
            this.input = input; 
            this.dropdowns = dropdowns; 
            this.dataUrl = dataUrl; 
            this.currentFocus = -1; 
            this.secondaryFocus = -1; 
            this.tertiaryFocus = -1; 
            this.quaternaryFocus = -1; 
            this.selectedItems = new Set(); 
            this.data = []; 
            this.jancsiData = []; 
            this.monikaData = []; 
            this.init(); 
        }

        async init() { 
            await this.fetchData(); 
            this.addEventListeners(); 
            this.applyStyles(); // Új metódus hívása stílusok alkalmazásához
        }

        async fetchData() { 
            const response = await fetch(this.dataUrl); 
            const result = await response.json(); 
            console.log("Fetched data:", result); 
            this.data = result.scumpont; 
            this.jancsiData = result.scumjancsi; 
            this.monikaData = result.scummonika; 
        }

        addEventListeners() { 
            this.input.addEventListener('input', this.onInput.bind(this)); 
            this.input.addEventListener('keydown', this.onKeyDown.bind(this)); 
            this.dropdowns[1].addEventListener('click', this.onMarikaClick.bind(this)); 
            this.dropdowns[2].addEventListener('keydown', this.onKeyDown.bind(this)); 
        }

        applyStyles() {
            const dropdownIds = [
                'pontdrop', 'marikadrop', 'jancsidrop', 'monikadrop', 'beladrop', 'dalmadrop',
                'droporsi', 'marditdrop', 'szilvidrop', 'dropfanni', 'dropbrigi', 'droprita',
                'scopedrop', 'sightdrop', 'reversedrop', 'reversemmagazine', 'reversemmagazine2',
                'reversemagazinetoweapon', 'reversesight', 'reversesighttoweapon', 'reversescope',
                'reversescopetoweapon', 'reversesuppressor', 'reversesuppressortoweapon', 'reversebayonett',
                'reversebayonetttoweapon', 'reverserail', 'reverserailtoweapon', 'reverseflashlight',
                'reverseflashtoweapon', 'reversebela', 'reversedalma', 'reverseorsi', 'reversemargit'
            ];

            dropdownIds.forEach(id => {
                const dropdown = document.getElementById(id);
                if (dropdown) {
                    dropdown.style.boxShadow = '0 0 15px rgba(255, 165, 0, 0.7)'; // Lágy narancs fény a szegélyek körül
                    dropdown.style.backgroundColor = '#000'; // Fekete háttérszín
                    dropdown.style.color = '#FFF'; // Fehér betűk
                    dropdown.style.borderRadius = '5px'; // Lekerekített sarkok
                    dropdown.style.padding = '5px'; // Padding
                }
            });
        }

        onInput() { 
            const query = this.input.value.toLowerCase().trim(); 
            console.log("Search query:", query); 
            this.currentFocus = -1; 
            this.clearDropdowns(); 
            if (query) { 
                const filteredPoints = this.data.filter(point => this.isRelevant(point, query)); 
                console.log("Filtered points:", filteredPoints); 
                filteredPoints.sort((a, b) => a.standard.localeCompare(b.standard)); 
                this.populateDropdown(this.dropdowns[0], filteredPoints); 
                this.dropdowns[0].style.display = 'block'; 
            } 
        }

        isRelevant(point, query) { 
            if (query.startsWith('.')) { 
                return point.standard.startsWith(query.slice(1)); 
            } 
            if (query.length === 1) { 
                return point.standard.startsWith(query); 
            } 
            return point.standard.includes(query); 
        }

        populateDropdown(dropdown, filteredPoints) { 
            filteredPoints.forEach(point => { 
                const option = document.createElement('p'); 
                option.textContent = point.standard; 
                option.addEventListener('click', () => { 
                    this.input.value = point.standard; 
                    this.clearDropdowns(); 
                    this.showNextDropdown(point.standard); 
                }); 
                dropdown.appendChild(option); 
            }); 
        }

        clearDropdowns() { 
            this.dropdowns.forEach(dropdown => { 
                dropdown.innerHTML = ''; 
                dropdown.style.display = 'none'; 
            }); 
        }

        showNextDropdown(ammo) { 
            const ammoData = this.jancsiData.find(item => item.ammo.toLowerCase() === ammo.toLowerCase().trim()); 
            if (ammoData) { 
                this.createButton(this.dropdowns[1], 'WEAPON', () => this.showWeapons(ammo)); 
                this.createButton(this.dropdowns[1], 'MAGAZINE', () => this.showMagazine(ammo)); 
                this.dropdowns[1].style.display = 'block'; 
            } 
        }

        createButton(dropdown, text, onClick) { 
            const button = document.createElement('button'); 
            button.textContent = text; 
            button.addEventListener('click', onClick); 
            dropdown.appendChild(button); 
        }

        showWeapons(ammo) { 
            this.clearDropdowns(); 
            console.log("Searching for weapons:", ammo); 
            const ammoData = this.jancsiData.find(item => item.ammo.toLowerCase().includes(ammo.toLowerCase().trim())); 
            const weapons = ammoData ? ammoData.weapon : ['No weapons found']; 
            const uniqueWeapons = [...new Set(weapons)]; 
            console.log("Weapons to display:", uniqueWeapons); 
            uniqueWeapons.forEach(weapon => { 
                const option = document.createElement('p'); 
                option.textContent = weapon; 
                option.addEventListener('click', () => { 
                    this.input.value = `${this.input.value}; ${weapon}`; 
                    this.clearDropdowns(); 
                }); 
                this.dropdowns[2].appendChild(option); 
            }); 
            this.dropdowns[2].style.display = 'block'; 
        }

        showMagazine(ammo) { 
            this.clearDropdowns(); 
            const ammoData = this.monikaData.find(item => item.ammo.toLowerCase().includes(ammo.toLowerCase().trim())); 
            const magazines = ammoData ? ammoData.magazine : ['No magazines found']; 
            const uniqueMagazines = [...new Set(magazines)]; 
            uniqueMagazines.forEach(mag => { 
                const option = document.createElement('p'); 
                option.textContent = mag; 
                option.addEventListener('click', () => { 
                    this.input.value = `${this.input.value}; ${mag}`; 
                    this.clearDropdowns(); 
                }); 
                this.dropdowns[3].appendChild(option); 
            }); 
            this.dropdowns[3].style.display = 'block'; 
        }

        onMarikaClick(e) { 
            if (e.target.tagName.toLowerCase() === 'button') { 
                if (e.target.textContent === 'WEAPON') { 
                    this.showWeapons(this.input.value); 
                } else if (e.target.textContent === 'MAGAZINE') { 
                    this.showMagazine(this.input.value); 
                } 
            } 
        }

        onKeyDown(e) { 
            if (e.key === 'Backspace') { 
                this.input.value = ''; 
                this.clearDropdowns(); 
                return; 
            } 
            const activeDropdown = this.dropdowns[0].style.display === 'block' ? this.dropdowns[0] : this.dropdowns[1].style.display === 'block' ? this.dropdowns[1] : this.dropdowns[2].style.display === 'block' ? this.dropdowns[2] : this.dropdowns[3].style.display === 'block' ? this.dropdowns[3] : null; 
            if (!activeDropdown) return; 
            const items = activeDropdown.getElementsByTagName('p'); 
            const buttons = activeDropdown.getElementsByTagName('button'); 
            const allItems = [...items, ...buttons]; 
            let focusIndex = activeDropdown === this.dropdowns[0] ? this.currentFocus : activeDropdown === this.dropdowns[1] ? this.secondaryFocus : activeDropdown === this.dropdowns[2] ? this.tertiaryFocus : activeDropdown === this.dropdowns[3] ? this.quaternaryFocus : 0; 
            if (e.key === 'ArrowDown') { 
                e.preventDefault(); 
                focusIndex = (focusIndex + 1) % allItems.length; 
            } else             if (e.key === 'ArrowUp') { 
                e.preventDefault(); 
                focusIndex = (focusIndex - 1 + allItems.length) % allItems.length; 
            } else if (e.key === 'Enter') { 
                e.preventDefault(); 
                if (focusIndex >= 0 && focusIndex < allItems.length) { 
                    allItems[focusIndex].click(); 
                } 
            } 
            this.addActive(allItems, focusIndex); 
            if (activeDropdown === this.dropdowns[0]) { 
                this.currentFocus = focusIndex; 
            } else if (activeDropdown === this.dropdowns[1]) { 
                this.secondaryFocus = focusIndex; 
            } else if (activeDropdown === this.dropdowns[2]) { 
                this.tertiaryFocus = focusIndex; 
            } else { 
                this.quaternaryFocus = focusIndex; 
            } 
        }

        addActive(items, index) { 
            if (!items || items.length === 0) return; 
            this.removeActive(items); 
            if (index >= items.length) index = items.length - 1; 
            if (index < 0) index = 0; 
            items[index].classList.add('dropdown-active'); 
            items[index].scrollIntoView({ block: 'nearest' }); 
        }

        removeActive(items) { 
            for (let item of items) { 
                item.classList.remove('dropdown-active'); 
            } 
        } 
    } 

    const searchInput = document.getElementById('searchInput'); 
    const dropdowns = [
        document.getElementById('pontdrop'), 
        document.getElementById('marikadrop'), 
        document.getElementById('jancsidrop'), 
        document.getElementById('monikadrop'),
        document.getElementById('beladrop'),
        document.getElementById('dalmadrop'),
        document.getElementById('droporsi'),
        document.getElementById('marditdrop'),
        document.getElementById('szilvidrop'),
        document.getElementById('dropfanni'),
        document.getElementById('dropbrigi'),
        document.getElementById('droprita'),
        document.getElementById('scopedrop'),
        document.getElementById('sightdrop'),
        document.getElementById('reversedrop'),
        document.getElementById('reversemmagazine'),
        document.getElementById('reversemmagazine2'),
        document.getElementById('reversemagazinetoweapon'),
        document.getElementById('reversesight'),
        document.getElementById('reversesighttoweapon'),
        document.getElementById('reversescope'),
        document.getElementById('reversescopetoweapon'),
        document.getElementById('reversesuppressor'),
        document.getElementById('reversesuppressortoweapon'),
        document.getElementById('reversebayonett'),
        document.getElementById('reversebayonetttoweapon'),
        document.getElementById('reverserail'),
        document.getElementById('reverserailtoweapon'),
        document.getElementById('reverseflashlight'),
        document.getElementById('reverseflashtoweapon'),
        document.getElementById('reversebela'),
        document.getElementById('reversedalma'),
        document.getElementById('reverseorsi'),
        document.getElementById('reversemargit')
    ]; 

    new DropdownSearch(searchInput, dropdowns, 'https://raw.githubusercontent.com/And-reyya/scumtools/main/scumdata.json'); 
});

