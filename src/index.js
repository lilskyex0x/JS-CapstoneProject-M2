import "./style.css";
import FetchCards from "./modules/listCards.js";
import postComment from "./modules/postCmds";
postComment();

const callAPI = new FetchCards();

async function initialize() {
  await callAPI.GetArtworks();
  // Call any other functions that rely on the API data here
}

initialize();
