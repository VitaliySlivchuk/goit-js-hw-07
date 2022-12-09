import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));
galleryEl.addEventListener("click", onGetBigImageUrlClock);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
          <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="large-image.jpg"
                alt="${description}"
                />
            </a>
        </div>
  `;
    })
    .join("");
}

function onGetBigImageUrlClock(e) {
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const bigImgUrl = document.querySelector(".gallery__link");

  const instance = basicLightbox.create(`
    <img src="${bigImgUrl}" width="800" height="600">
`);
  instance.show();

  galleryEl.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}
