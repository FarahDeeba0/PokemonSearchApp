

const galleryElement = document.getElementById('gallery');

export function displayCatImages(images) {
  galleryElement.innerHTML = '';
  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.url;
    galleryElement.appendChild(imgElement);
  });
}
