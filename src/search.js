const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultDiv = document.getElementById('result');

searchBtn.addEventListener('click', async () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    try {
      const response = await fetch(`https://api.adviceslip.com/advice/search/${searchTerm}`);
      const data = await response.json();
      const adviceList = data.slips;
      const resultHtml = adviceList.map(advice => `${advice.advice}`).join('');
      resultDiv.innerHTML = resultHtml;
    } catch (error) {
      console.error(error);
      resultDiv.innerHTML = 'Error occurred while fetching data.';
    }
  } else {
    resultDiv.innerHTML = 'Please enter a search term.';
  }
});


// // main.js
// import { searchAdvice } from './api';

// const searchInput = document.getElementById('search-input');
// const searchBtn = document.getElementById('search-btn');
// const resultDiv = document.getElementById('result');

// searchBtn.addEventListener('click', async () => {
//   const searchTerm = searchInput.value.trim();
//   if (searchTerm) {
//     try {
//       const adviceList = await searchAdvice(searchTerm);
//       const resultHtml = adviceList.map(advice => `<p>${advice.advice}</p>`).join('');
//       resultDiv.textContent = resultHtml;
//     } catch (error) {
//       resultDiv.textContent = `Error: ${error.message}`;
//     }
//   } else {
//     resultDiv.textContent = 'Please enter a search term.';
//   }
// });