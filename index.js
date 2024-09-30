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