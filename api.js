
const API_URL = 'https://api.thecatapi.com/v1';

export async function fetchCatImages(page = 1, limit = 10) {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");;
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cat images:', error);
    throw error;
  }
}

export async function searchCatImages(breed, page = 1, limit = 10) {
  try {
    const response = await fetch(`${API_URL}/images/search?breed_ids=${breed}&limit=${limit}&page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching cat images:', error);
    throw error;
  }
}
