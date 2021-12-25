import { galleryItems } from './gallery-items.js';
// Change code below this line
const listContainer = document.querySelector('.gallery');


const createPhotoCard = galleryItems.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
            <img class="gallery__image"
            src="${preview}" 
            alt="${description}" />
            </a>
        `;

    }).join('');

listContainer.insertAdjacentHTML('beforeend', createPhotoCard);

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
    
    captionsData: 'alt';
    captionDelay: 250;
});

console.log(galleryItems);
