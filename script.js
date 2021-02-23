let dropdown = document.querySelector('.dropdown');
let dropdownItem = document.querySelector('.dropdown-item');
let icon = document.getElementById('nav-icon');
let arrowL = document.getElementById('arrow-left');
let arrowR = document.getElementById('arrow-right');

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

// dropdown.addEventListener('click', (e) => {
//     dropdownItem.classList.toggle('show');
// })

// icon.addEventListener('click', (e) => {
//     dropdownItem.classList.toggle('show');
// })

// // close dropdown item when clicking everywhere but navigatio/icon
// window.addEventListener('click', (e) => {
//     if (e.target !== dropdown && e.target !== icon) {
//         dropdownItem.classList.remove('show');
//     }
// })

arrowL.addEventListener('click', (e) => {
    displayImage('l');
})

arrowR.addEventListener('click', (e) => {
        displayImage('r');
    })

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

function displayImage(arrowDirection){
    let imageContent = document.querySelector('.image-content');
    function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    let index = imageContent.id.toString();

    switch (arrowDirection) {
        case 'l':
            if(index === 'image-1'){
                clearDOM(imageContent);
                insertAfter(arrowL, createImageDOM(imageList[2].id, imageList[2].src));
            } else if(index === 'image-2'){
                clearDOM(imageContent);
                insertAfter(arrowL, createImageDOM(imageList[0].id, imageList[0].src));
            } else if(index === 'image-3'){
                clearDOM(imageContent);
                insertAfter(arrowL, createImageDOM(imageList[1].id, imageList[1].src));
            }                
            break;
    
            case 'r':
                if(index === 'image-1'){
                    clearDOM(imageContent);
                    insertAfter(arrowL, createImageDOM(imageList[1].id, imageList[1].src));
                } else if(index === 'image-2'){
                    clearDOM(imageContent);
                    insertAfter(arrowL, createImageDOM(imageList[2].id, imageList[2].src));
                } else if(index === 'image-3'){
                    clearDOM(imageContent);
                    insertAfter(arrowL, createImageDOM(imageList[0].id, imageList[0].src));
                }                
                break;
    }
}

function slideImage(){
    displayImage('r');
}

setInterval(slideImage, 8000);