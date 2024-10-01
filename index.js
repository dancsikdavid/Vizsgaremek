// Nav Gombok
const főoldalButton = document.querySelector('#főoldal-button');
const bejelentkezesButton = document.querySelector('#bejelentkezes-button');
const regisztracioButton = document.querySelector('#regisztracio-button');
const akcioButton = document.querySelector('#akcio-button');
const hasznaltButton = document.querySelector('#hasznalt-button');
const playstationButton = document.querySelector('#playstation-button');
const xboxButton = document.querySelector('#xbox-button');
const pcButton = document.querySelector('#pc-button');

főoldalButton.addEventListener('click', () => {
 document.querySelector('#akcio-products-list').style.display = 'none';
 document.querySelector('#hasznalt-products-list').style.display = 'none';
 document.querySelector('#playstation-products-list').style.display = 'none';
 document.querySelector('#xbox-products-list').style.display = 'none';
 document.querySelector('#pc-products-list').style.display = 'none';
 // ...
 document.querySelector('#page-title').textContent = 'Főoldal';
 document.querySelector('#page-description').textContent = '1-24 / 945 termék Főoldal kategóriában';
});

bejelentkezesButton.addEventListener('click', () => {
 document.querySelector('#akcio-products-list').style.display = 'none';
 document.querySelector('#hasznalt-products-list').style.display = 'none';
 document.querySelector('#playstation-products-list').style.display = 'none';
 document.querySelector('#xbox-products-list').style.display = 'none';
 document.querySelector('#pc-products-list').style.display = 'none';
 // ...
 document.querySelector('#page-title').textContent = 'Bejelentkezés';
 document.querySelector('#page-description').textContent = '1- 24 / 945 termék Bejelentkezés kategóriában';
});

regisztracioButton.addEventListener('click', () => {
 document.querySelector('#akcio-products-list').style.display = 'none';
 document.querySelector('#hasznalt-products-list').style.display = 'none';
 document.querySelector('#playstation-products-list').style.display = 'none';
 document.querySelector('#xbox-products-list').style.display = 'none';
 document.querySelector('#pc-products-list').style.display = 'none';
 // ...
 document.querySelector('#page-title').textContent = 'Regisztráció';
 document.querySelector('#page-description').textContent = '1-24 / 945 termék Regisztráció kategóriában';
});

akcioButton.addEventListener('click', () => {
 document.querySelector('#akcio-products-list').style.display = 'block';
 document.querySelector('#hasznalt-products-list').style.display = 'none';
 document.querySelector('#playstation-products-list').style.display = 'none';
 document.querySelector('#xbox-products-list').style.display = 'none';
 document.querySelector('#pc-products-list').style.display = 'none';
 // ...
 document.querySelector('#page-title').textContent = 'Akció';
 document.querySelector('#page-description').textContent = '1-24 / 945 termék Akció kategóriában';
});

hasznaltButton.addEventListener('click', () => {
 document.querySelector('#akcio-products-list').style.display = 'none';
 document.querySelector('#hasznalt-products-list').style.display = 'block';
 document.querySelector('#playstation-products-list').style.display = 'none';
 document.querySelector('#xbox-products-list').style.display = 'none';
 document.querySelector('#pc-products-list').style.display = 'none';
 // ...
 document.querySelector('#page-title').textContent = 'Használt';
 document.querySelector('#page-description').textContent = '1-24 / 945 termék Használt kategóriában';
});

playstationButton.addEventListener('click', () => {
 document.querySelector('#akcio-products-list').style.display = 'none';
 document.querySelector('#hasznalt-products-list').style.display = 'none';
 document.querySelector('#playstation-products-list').style.display = 'block';
 document.querySelector('#xbox-products-list').style.display = 'none';
 document.querySelector('#pc-products-list').style.display = 'none';
 // ...
 document.querySelector('#page-title').textContent = 'PlayStation Játékok';
 document.querySelector('#page-description').textContent = '1-24 / 945 termék PlayStation játékok kategóriában';
});

xboxButton.addEventListener('click', () => {
 document.querySelector('#akcio-products-list').style.display = 'none';
 document.querySelector('#hasznalt-products-list').style.display = 'none';
 document.querySelector('#playstation-products-list').style.display = 'none';
 document.querySelector('#xbox-products-list').style.display = 'block';
 document.querySelector('#pc-products-list').style.display = 'none';
 // ...
 document.querySelector('#page-title').textContent = 'Xbox Játékok';
 document.querySelector('#page-description').textContent = '1-24 / 945 termék Xbox játékok kategóriában';
});

pcButton.addEventListener('click', () => {
 document.querySelector('#akcio-products-list').style.display = 'none';
 document.querySelector('#hasznalt-products-list').style.display = 'none';
 document.querySelector('#playstation-products-list').style.display = 'none';
 document.querySelector('#xbox-products-list').style.display = 'none';
 document.querySelector('#pc-products-list').style.display = 'block';
 // ...
 document.querySelector('#page-title').textContent = 'PC Játékok';
 document.querySelector('#page-description').textContent = '1-24 / 945 termék PC játékok kategóriában';
});
 // ...

 // Oldalsáv filter
document.addEventListener("DOMContentLoaded", function() {
    const keszleten = document.getElementById('keszleten');
    const rendelheto = document.getElementById('rendelheto');
    const elorendelheto = document.getElementById('elorendelheto');
    const akcios = document.getElementById('akcios');
    const mindenTermek = document.getElementById('minden-termek');
    const hasznaltTermek = document.getElementById('hasznalt-termek');
    const ujTermek = document.getElementById('uj-termek');

    const resetFiltersButton = document.getElementById('reset-filters');

    resetFiltersButton.addEventListener('click', function() {
        keszleten.checked = false;
        rendelheto.checked = false;
        elorendelheto.checked = false;
        akcios.checked = false;
        mindenTermek.checked = true;
        hasznaltTermek.checked = false;
        ujTermek.checked = false;

        filterProducts();
    });

    const akcioProductsList = document.getElementById('akcio-products-list');
    const hasznaltProductsList = document.getElementById('hasznalt-products-list');
    const xboxProductsList = document.getElementById('xbox-products-list');

    keszleten.addEventListener('change', filterProducts);
    rendelheto.addEventListener('change', filterProducts);
    elorendelheto.addEventListener('change', filterProducts);
    akcios.addEventListener('change', filterProducts);
    mindenTermek.addEventListener('change', filterProducts);
    hasznaltTermek.addEventListener('change', filterProducts);
    ujTermek.addEventListener('change', filterProducts);

    function filterProducts() {
        akcioProductsList.style.display = 'none';
        hasznaltProductsList.style.display = 'none';
        xboxProductsList.style.display = 'none';

        if (akcios.checked) {
            akcioProductsList.style.display = 'block';
        }

        if (hasznaltTermek.checked) {
            hasznaltProductsList.style.display = 'block';
        }

        if (mindenTermek.checked || ujTermek.checked) {
            xboxProductsList.style.display = 'block';
        }
    }
    filterProducts();
});
// ...

// Bejelentkezés és Regisztráció
document.addEventListener("DOMContentLoaded", function() {
    const bejelentkezesModal = document.getElementById('bejelentkezes-modal');
    const regisztracioModal = document.getElementById('regisztracio-modal');

    const bejelentkezesButton = document.getElementById('bejelentkezes-button');
    const regisztracioButton = document.getElementById('regisztracio-button');

    const closeBejelentkezes = document.getElementById('close-bejelentkezes');
    const closeRegisztracio = document.getElementById('close-regisztracio');

    bejelentkezesButton.onclick = function() {
        bejelentkezesModal.style.display = "block";
    };

    regisztracioButton.onclick = function() {
        regisztracioModal.style.display = "block";
    };

    closeBejelentkezes.onclick = function() {
        bejelentkezesModal.style.display = "none";
    };

    closeRegisztracio.onclick = function() {
        regisztracioModal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target === bejelentkezesModal) {
            bejelentkezesModal.style.display = "none";
        } else if (event.target === regisztracioModal) {
            regisztracioModal.style.display = "none";
        }
    };
});

