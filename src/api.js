// api.js
const API_URL = 'https://api.adviceslip.com/advice/search/';

async function searchAdvice(searchTerm) {
  try {
    const response = await fetch(`${API_URL}${searchTerm}`);
    const data = await response.json();
    return data.slips;
  } catch (error) {
    throw new Error(`Error occurred while fetching data: ${error.message}`);
  }
}
