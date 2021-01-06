console.log('worked');

let dropdown = document.querySelector('.dropdown');
let dropdownItem = document.querySelector('.dropdown-item');
let arrowL = document.getElementById('arrow-left');

dropdown.addEventListener('click', (e) => {
    dropdownItem.classList.toggle('show');
    console.log('clicked');
})

arrowL.addEventListener('click', (e) => {
  
})