import axios from 'axios';

const UNSPLASH_API_URL = 'https://api.unsplash.com/photos/random';
const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const fetchRandomTextBooks = async () => {
  try {
    const response = await axios.get(UNSPLASH_API_URL, {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
      params: {
        query: 'textbook', // or any other search term
        orientation: 'squarish',
      },
    });
    console.log(response.data); // Check response data in the console
    return response.data.urls.small;
  } catch (error) {
    console.error('Error fetching image from Unsplash:', error.response.data || error.message);
    return null;
  }
};
