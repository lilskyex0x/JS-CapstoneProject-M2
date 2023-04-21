import "./style.css";
import Api from "./modules/api.js";
import postComment from "./modules/postCmds";
postComment();

const callAPI = new Api();

async function initialize() {
  await callAPI.GetArtworks();
  // Call any other functions that rely on the API data here
}

initialize();
