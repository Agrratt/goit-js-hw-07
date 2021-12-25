import { galleryItems } from './gallery-items.js';
// Change code below this line

const listContainer = document.querySelector('.gallery');
const photoMarkup = createPhotoCard(galleryItems);

listContainer.insertAdjacentHTML('beforeend', photoMarkup)
listContainer.addEventListener('click', listContainerClick);

function createPhotoCard(photos) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"/>
                </a>
            </div>
        `;

    }).join('');
};

function listContainerClick(event) {
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    event.preventDefault();

    const instance = basicLightbox.create(`
    <img
    src="${event.target.dataset.source}"
    width="800" 
    height="600">
    `);

    instance.show();

    document.addEventListener('keydown', closeModal);

    function closeModal(e) {
        if (e.code === "Escape") {
          instance.close()
        }
    }

    console.log(event.target);
}

console.log(galleryItems);
