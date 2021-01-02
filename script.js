// console.log('worked');

let dropdown = document.querySelector('.dropdown');
let dropdownItem = document.querySelector('.dropdown-item');

dropdown.addEventListener('click', (e) => {
    dropdownItem.classList.toggle('show');
})