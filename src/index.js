import './style.css';
import FetchCards from './modules/listCards.js';
import postComment from './modules/postCmds.js';

postComment();

const callcards = new FetchCards();

async function initialize() {
  await callcards.GetArtworks();
  // Call any other functions that rely on the API data here
}

initialize();
