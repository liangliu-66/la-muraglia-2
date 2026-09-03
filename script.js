const menuItems = [
    // Antipasti Cinesi
    { code: "9.", name: "Ravioli cinesi alla griglia", desc: "Suino, verze, cipollotti, zenzero e farina", price: "4,00 €", cat: "antipasti-cinese" },
    { code: "10.", name: "Ravioli di gamberi al vapore", desc: "Gamberi, suino, cipollotti e castagna d’acqua - 5 pezzi", price: "4,00 €", cat: "antipasti-cinese" },
    { code: "2.", name: "Involtini primavera", desc: "Verze, carote e farina - 2 pezzi", price: "2,00 €", cat: "antipasti-cinese" },
    { code: "8.", name: "Ravioli cinesi al vapore", desc: "Suino, verze, cipollotti, zenzero e farina", price: "3,50 €", cat: "antipasti-cinese" },
    { code: "10a.", name: "Ravioli di pesce", desc: "Farina, pesce, verdure", price: "4,00 €", cat: "antipasti-cinese" },
    { code: "5.", name: "Toast di gamberi e sesamo", desc: "Pane, gamberi e sesamo", price: "4,00 €", cat: "antipasti-cinese" },
    { code: "7.", name: "Insalata di gamberi", desc: "Iceberg, gamberi, salsa agrodolce", price: "4,00 €", cat: "antipasti-cinese" },
    { code: "10B.", name: "Ravioli di pollo alla griglia", desc: "Farina, pollo, verdure", price: "4,00 €", cat: "antipasti-cinese" },
    { code: "4.", name: "Nuvolette di drago", desc: "", price: "2,00 €", cat: "antipasti-cinese" },
    { code: "6A.", name: "Insalata di gamberi con mele", desc: "Gamberi e mele", price: "5,00 €", cat: "antipasti-cinese" },
    { code: "1c.", name: "Pane al vapore", desc: "Farina e latte - 2 pezzi", price: "1,50 €", cat: "antipasti-cinese" },
    { code: "15.", name: "Insalata di mare", desc: "Gamberi, polpo, calamari, surimi, peperoni, sedano", price: "6,00 €", cat: "antipasti-cinese" },
    { code: "13.", name: "Patate fritte cinese", desc: "", price: "3,50 €", cat: "antipasti-cinese" },
    { code: "14a.", name: "Insalata zhazhai", desc: "", price: "4,00 €", cat: "antipasti-cinese" },
    { code: "9A.", name: "Ravioli misti", desc: "Ravioli di suino, di pesce, di verdura e di gamberi", price: "4,00 €", cat: "antipasti-cinese" },
    { code: "6.", name: "Insalata con pollo", desc: "Lattuga e pollo", price: "4,00 €", cat: "antipasti-cinese" },
    { code: "12a.", name: "Antipasti misti fritti", desc: "Involtini, patate, gamberi e nuvolette di drago", price: "4,00 €", cat: "antipasti-cinese" },
    { code: "1.", name: "Insalata di alghe", desc: "Alghe, peperoni e aglio", price: "3,50 €", cat: "antipasti-cinese" },
    { code: "1b.", name: "Pane fritto", desc: "Farina e latte - 2 pezzi", price: "1,50 €", cat: "antipasti-cinese" },

    // Zuppe
    { code: "17.", name: "Zuppa agropiccante", desc: "Pollo, carote, bambù, zhazhai, funghi, piselli e uova", price: "3,50 €", cat: "zuppe" },
    { code: "19.", name: "Zuppa di granchio con asparagi", desc: "Surimi di granchio, asparagi e uova", price: "3,50 €", cat: "zuppe" },
    { code: "G3.", name: "Miso soup", desc: "Tofu e alghe", price: "3,50 €", cat: "zuppe" },

    // Riso
    { code: "25.", name: "Riso alla cantonese", desc: "Riso, uova, prosciutto e piselli", price: "3,50 €", cat: "riso" },
    { code: "24b.", name: "Riso alla chao lafan", desc: "Riso, gamberi, seppie, surimi di granchio, pollo, uova e salsa di soia", price: "5,00 €", cat: "riso" },
    { code: "27.", name: "Riso saltato con gamberi", desc: "Riso, gamberi, piselli e uova", price: "4,00 €", cat: "riso" },
    { code: "24a.", name: "Riso alla thailandese", desc: "Riso, ananas, pinoli, uova, salsa pomodoro e piccante", price: "4,00 €", cat: "riso" },
    { code: "26.", name: "Riso saltato con misto di mare", desc: "Riso, gamberi, seppie, surimi di granchio, uova e piselli", price: "4,50 €", cat: "riso" },
    { code: "28.", name: "Riso saltato con pollo e ananas", desc: "Riso, pollo, ananas e uova", price: "4,00 €", cat: "riso" },
    { code: "29.", name: "Riso al curry con verdura", desc: "Riso, carote, bambù e cipolle", price: "4,00 €", cat: "riso" },
    { code: "34b.", name: "Riso al vapore", desc: "Riso bianco", price: "2,00 €", cat: "riso" },

    // Pasta
    { code: "34d.", name: "Spaghetti di soia con gamberi", desc: "Spaghetti di soia, verdure, gamberi", price: "5,00 €", cat: "pasta" },
    { code: "32a.", name: "Spaghetti alla piastra", desc: "Spaghetti di grano, carote, zucchini, germogli di soia, uova, gamberi, seppie e surimi", price: "5,00 €", cat: "pasta" },
    { code: "30a.", name: "Spaghetti di riso con gamberi", desc: "Spaghetti di riso, gamberi, carote, zucchini, germogli e uova", price: "5,00 €", cat: "pasta" },
    { code: "34a.", name: "Gnocchi di riso con verdure", desc: "Gnocchi di riso, carote, zucchini, bambù, funghi e zhazhai", price: "4,00 €", cat: "pasta" },
    { code: "30.", name: "Spaghetti di riso con verdura mista", desc: "Spaghetti di riso, carote, zucchini, germogli e uova", price: "4,00 €", cat: "pasta" },
    { code: "34.", name: "Spaghetti di soia con carne e verdure", desc: "Spaghetti di soia, carote, zucchini, cipolle, peperoni e pancetta", price: "4,00 €", cat: "pasta" },
    { code: "30B.", name: "Spaghetti di riso con manzo", desc: "Spaghetti di riso, verdure miste, manzo, uova", price: "5,00 €", cat: "pasta" },

    // Pollo
    { code: "42.", name: "Pollo fritto alla cinese", desc: "Petti di pollo e pane grattugiato", price: "5,00 €", cat: "pollo" },
    { code: "38.", name: "Pollo piccante alla cinese", desc: "Petti di pollo, peperoni, cipolla", price: "5,00 €", cat: "pollo" },
    { code: "43.", name: "Pollo al limone", desc: "Filetti di pollo al limone", price: "5,00 €", cat: "pollo" },
    { code: "35.", name: "Pollo con mandorle", desc: "Petti di pollo, mandorle, peperoni e bambù", price: "5,00 €", cat: "pollo" },
    { code: "40.", name: "Pollo in salsa agrodolce", desc: "Petti di pollo, pomodori e ananas", price: "5,00 €", cat: "pollo" },
    { code: "44.", name: "Pollo al curry", desc: "Petti di pollo, cipolle e bambù", price: "5,00 €", cat: "pollo" },

    // Anatra
    { code: "47.", name: "Anatra arrosto con sale e pepe", desc: "", price: "6,00 €", cat: "anatra" },
    { code: "48.", name: "Anatra con verdure", desc: "Anatra, bambù, funghi, carote e cipollotti", price: "6,00 €", cat: "anatra" },
    { code: "46.", name: "Anatra in salsa piccante", desc: "Anatra, peperoni e cipolle", price: "6,00 €", cat: "anatra" },

    // Manzo
    { code: "58.", name: "Manzo alla piastra", desc: "Manzo, cipolle, cipollotti, peperoni e sedano", price: "5,50 €", cat: "manzo" },
    { code: "63.", name: "Manzo in salsa piccante", desc: "Manzo, peperoni e cipolle", price: "5,50 €", cat: "manzo" },
    { code: "56.", name: "Manzo con asparagi", desc: "Manzo e asparagi", price: "5,50 €", cat: "manzo" },

    // Maiale
    { code: "65.", name: "Maiale in salsa agrodolce", desc: "Coppa di maiale, pomodori e ananas", price: "5,00 €", cat: "maiale" },
    { code: "73.", name: "Puntine di maiale fritte", desc: "Costine di maiale e farina", price: "5,50 €", cat: "maiale" },

    // Pesce & Gamberi
    { code: "93.", name: "Calamari fritti", desc: "Calamari e pane grattugiato", price: "6,00 €", cat: "pesce" },
    { code: "88.", name: "Branzino al vapore", desc: "Branzino e cipollotti", price: "9,00 €", cat: "pesce" },
    { code: "75.", name: "Gamberi alla piastra", desc: "Gamberi, peperoni, cipolle, sedano e cipollotti", price: "6,00 €", cat: "pesce" },
    { code: "81.", name: "Gamberi fritti", desc: "Gamberi e pane grattugiato", price: "6,00 €", cat: "pesce" },

    // Tofu & Verdure
    { code: "95.", name: "Tofu stufato con verdure", desc: "Tofu, bambù, carote, funghi e cipollotti", price: "3,50 €", cat: "tofu-verdure" },
    { code: "97.", name: "Verdura mista saltata", desc: "Zucchini, carote, bambù, funghi e germogli", price: "3,50 €", cat: "tofu-verdure" },

    // Giapponese Antipasti
    { code: "G2.", name: "Goma wakame", desc: "Insalata di alghe verdi", price: "4,00 €", cat: "giapponese-antipasti" },
    { code: "G4.", name: "Kaisen salad", desc: "Salmone, tonno, branzino, insalata iceberg e sesamo", price: "5,00 €", cat: "giapponese-antipasti" },
    { code: "G1.", name: "Edamame", desc: "Fagioli di soia", price: "3,00 €", cat: "giapponese-antipasti" },

    // Primi & Griglia Jap
    { code: "G39.", name: "Yaki udon ebi", desc: "Spaghetti di riso, gamberi, zucchini, carote, verze e uova", price: "5,50 €", cat: "primi-secondi-jap" },
    { code: "P1.", name: "Pollo alla griglia teriyaki", desc: "Petti di pollo e salsa teriyaki", price: "5,00 €", cat: "primi-secondi-jap" },
    { code: "P10.", name: "Salmone alla griglia", desc: "", price: "9,00 €", cat: "primi-secondi-jap" },

    // Sashimi & Sushi Misto
    { code: "G19.", name: "Sashimi sake", desc: "Salmone - 5 pezzi", price: "4,50 €", cat: "sashimi-sushi" },
    { code: "G21.", name: "Sashimi misto", desc: "Salmone, tonno, branzino e gamberi - 10 pezzi", price: "9,00 €", cat: "sashimi-sushi" },
    { code: "G50.", name: "Sushi misto 15 pezzi", desc: "3 sashimi, 4 nigiri, 2 uramaki/futomaki e 6 hosomaki", price: "12,00 €", cat: "sashimi-sushi" },

    // Nigiri
    { code: "G6.", name: "Nigiri sake", desc: "Salmone e riso - 2 pezzi", price: "2,00 €", cat: "nigiri" },
    { code: "G7.", name: "Nigiri maguro", desc: "Tonno e riso - 2 pezzi", price: "2,50 €", cat: "nigiri" },
    { code: "G9.", name: "Nigiri ebi", desc: "Gamberi cotti e riso - 2 pezzi", price: "2,00 €", cat: "nigiri" },

    // Uramaki
    { code: "G30.", name: "Uramaki sake avocado", desc: "Salmone, avocado, philadelphia, alga e riso - 8 pezzi", price: "6,00 €", cat: "uramaki" },
    { code: "G32.", name: "Uramaki ebite", desc: "Gamberi fritti, maionese, kataifi, teriyaki, sesamo - 8 pezzi", price: "6,50 €", cat: "uramaki" },
    { code: "G31a.", name: "Uramaki spicy sake", desc: "Salmone piccante, alga, riso e sesamo - 8 pezzi", price: "6,50 €", cat: "uramaki" },

    // Hosomaki & Roll
    { code: "G26.", name: "Hosomaki sake maki", desc: "Salmone, alghe e riso - 6 pezzi", price: "4,00 €", cat: "hosomaki-roll" },
    { code: "G36.", name: "Roll rainbow", desc: "Salmone, avocado, tonno, branzino, teriyaki - 8 pezzi", price: "8,00 €", cat: "hosomaki-roll" },

    // Gunkan & Temaki
    { code: "G11.", name: "Gunkan sake", desc: "Salmone, alghe, riso e salsa spicy - 2 pezzi", price: "3,00 €", cat: "gunkan-temaki" },
    { code: "G16.", name: "Temaki sake avocado", desc: "Salmone, avocado, philadelphia, alghe e riso", price: "4,00 €", cat: "gunkan-temaki" },

    // Futomaki
    { code: "G34.", name: "Futomaki sake", desc: "Salmone, avocado, philadelphia, alga e riso - 8 pezzi", price: "7,00 €", cat: "futomaki" },

    // Tartare & Poke
    { code: "G5b.", name: "Salmon tartare", desc: "Salmone, avocado, riso e sesamo", price: "5,00 €", cat: "tartare-poke" },
    { code: "G71.", name: "Salmon poke bowl", desc: "Salmone, avocado, edamame, cetrioli, cavolo viola, riso e sesamo", price: "10,00 €", cat: "tartare-poke" },

    // Tempura
    { code: "G47.", name: "Ebi tempura", desc: "Gamberi fritti", price: "6,00 €", cat: "tempura" },
    { code: "G45.", name: "Tempura mista", desc: "Gamberoni, zucchine e carote fritte", price: "9,00 €", cat: "tempura" }
];

document.addEventListener('DOMContentLoaded', () => {

    // Render Menu nella pagina menu.html
    const menuGrid = document.getElementById('menu-grid');
    const categorySelect = document.getElementById('category-select');

    if (menuGrid && categorySelect) {
        function renderMenu(category) {
            menuGrid.innerHTML = '';
            const filteredItems = category === 'all' ? menuItems : menuItems.filter(item => item.cat === category);

            filteredItems.forEach(item => {
                const el = document.createElement('div');
                el.className = 'menu-item';
                el.innerHTML = `
                    <div class="menu-item-info">
                        <div><span class="menu-item-code">${item.code}</span><span class="menu-item-title">${item.name}</span></div>
                        ${item.desc ? `<div class="menu-item-desc">${item.desc}</div>` : ''}
                    </div>
                    <div class="menu-item-price">${item.price}</div>
                `;
                menuGrid.appendChild(el);
            });
        }

        renderMenu('all');

        categorySelect.addEventListener('change', (e) => {
            renderMenu(e.target.value);
        });
    }

    // Gestione Menu Mobile
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Sticky Button
    const stickyTopBtn = document.getElementById('stickyTop');
    if (stickyTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 250) {
                stickyTopBtn.classList.add('visible');
            } else {
                stickyTopBtn.classList.remove('visible');
            }
        });
    }
});
