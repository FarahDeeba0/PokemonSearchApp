// search.js
import { searchCatImages } from './api.js';
import { displayCatImages } from './gallery.js';

export async function fetchBreeds() {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/breeds');
    const data = await response.json();
    
    
    const breedMap = data.reduce((map, breed) => {
      map[breed.name.toLowerCase()] = breed.id;
      return map;
    }, {});
    
    return breedMap; 
  } catch (error) {
    console.error('Error fetching breeds:', error);
    throw error;
  }
}
