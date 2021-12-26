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

const instance = basicLightbox.create(`<img class="modal-img" src="">`, {
    onShow: instance => {
        window.addEventListener('keydown', closeModal);
    },
        
    onClose: instance => {
        window.removeEventListener('keydown', closeModal)
    },
});

function listContainerClick(event) {
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    event.preventDefault();

    instance.element().querySelector('img').src = event.target.dataset.source;
    
    instance.show();
};

    function closeModal(e) {
        if (e.key === "Escape") {
            instance.close();
            return;
        }
    }

    


console.log(galleryItems);
