console.log('worked');

let dropdown = document.querySelector('.dropdown');
let dropdownItem = document.querySelector('.dropdown-item');
let icon = document.getElementById('nav-icon');
let arrowL = document.getElementById('arrow-left');

dropdown.addEventListener('click', (e) => {
    dropdownItem.classList.toggle('show');
    console.log('clicked');
})

icon.addEventListener('click', (e) => {
    dropdownItem.classList.toggle('show');
    console.log('clicked');
})

// close dropdown item when clicking everywhere but navigatio/icon
window.addEventListener('click', (e) => {
    if (e.target !== dropdown && e.target !== icon) {
        dropdownItem.classList.remove('show');
    }
})

arrowL.addEventListener('click', (e) => {
  
})