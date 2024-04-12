// app.js
import { fetchCatImages } from './api.js';
import { displayCatImages } from './gallery.js';
import { fetchBreeds } from './search.js';

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentPage = 1;

async function loadCatImages(page) {
  try {
    const images = await fetchCatImages(page);
    displayCatImages(images);
  } catch (error) {
    console.error('Error loading cat images:', error);
  }
}

prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    loadCatImages(currentPage);
  }
});

nextButton.addEventListener('click', () => {
  currentPage++;
  loadCatImages(currentPage);
});

fetchBreeds()
  .then(breedMap => {
  
    console.log('Breed Map:', breedMap);

    loadCatImages(currentPage);
  })
  .catch(error => {
    console.error('Error fetching breeds:', error);
  });
