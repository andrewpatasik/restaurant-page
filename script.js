let dropdown = document.querySelector('.dropdown');
let dropdownItem = document.querySelector('.dropdown-item');
let icon = document.getElementById('nav-icon');
let arrowL = document.getElementById('arrow-left');
let arrowR = document.getElementById('arrow-right');


// 1. simpan assets di dalam array
let imageList = [
    { 
        id: 'image-1',
        src: './images/edited/slider-1.png' 
    },
    { 
        id: 'image-2',
        src: './images/edited/slider-2.png'
    },
    { 
        id: 'image-3',
        src: './images/edited/slider-3.png'
    },
];

dropdown.addEventListener('click', (e) => {
    dropdownItem.classList.toggle('show');
    // console.log('clicked');
})

icon.addEventListener('click', (e) => {
    dropdownItem.classList.toggle('show');
    // console.log('clicked');
})

// close dropdown item when clicking everywhere but navigatio/icon
window.addEventListener('click', (e) => {
    if (e.target !== dropdown && e.target !== icon) {
        dropdownItem.classList.remove('show');
    }
})

arrowL.addEventListener('click', (e) => {
//   if (e.target === './images/edited/slider-1.png') {
//       console.log(e.target);
//     //   createImageDOM(imageList[2].src);
//   } else if (e.target === './images/edited/slider-2.png') {
//     // createImageDOM(imageList[1].src);
//     console.log(e.target);
//   } else if (e.target === './images/edited/slider-3.png') {
//     // createImageDOM(imageList[2].src);
//     console.log(e.target);
// }
    displayImage();
    // console.log(imageContent.id);
})

arrowR.addEventListener('click', (e) => {
    //   if (e.target === './images/edited/slider-1.png') {
    //       console.log(e.target);
    //     //   createImageDOM(imageList[2].src);
    //   } else if (e.target === './images/edited/slider-2.png') {
    //     // createImageDOM(imageList[1].src);
    //     console.log(e.target);
    //   } else if (e.target === './images/edited/slider-3.png') {
    //     // createImageDOM(imageList[2].src);
    //     console.log(e.target);
    // }
        displayImage();
        // console.log(imageContent.id);
    })

// buat slider untuk image content


// 2. buat function yang mengeksekusi loop untuk
// gambar secara berurut
// setiap satu detik sekali, console log DOM
function createImageDOM(objId, objSource){
    let img = document.createElement('img');
    img.setAttribute('id', objId)
    img.classList.add('image-content');
    img.setAttribute('src', objSource);
    img.setAttribute('alt', 'image-slider');

    return img;
}

function clearDOM(domElement){
    domElement.remove();
}

function displayImage(){
    let imageContent = document.querySelector('.image-content');
    function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    let index = imageContent.id.toString();

        if(index === 'image-1'){
            clearDOM(imageContent);
            insertAfter(arrowL, createImageDOM(imageList[1].id, imageList[1].src));
            console.log(index);
        } else if(index === 'image-2'){
            clearDOM(imageContent);
            insertAfter(arrowL, createImageDOM(imageList[2].id, imageList[2].src));
            console.log(index);
        } else if(index === 'image-3'){
            clearDOM(imageContent);
            insertAfter(arrowL, createImageDOM(imageList[0].id, imageList[0].src));
            console.log(index);
        }

}

//  2.1. DOM dibuat secara dinamis setiap slider (optional?landllpahwe) 
// 3. setInterval untuk function
// let slide = displayImage();
// setInterval(slide, 3000);