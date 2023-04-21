import DisplayCards from "./listCards.js";
const APP_ID = "rZVQvLjlhB3dnDtkMDhH";

export default class Api {
  constructor() {
    this.artworksList = 'https://api.artic.edu/api/v1/artworks?page=2';
  }

  GetArtworks = async () => {
    let artworks = [];
    const cachedData = localStorage.getItem('artworks');
    if (cachedData) {
      artworks = JSON.parse(cachedData);
    } else {
      const response = await fetch(`${this.artworksList}`);
      const json = await response.json();
      artworks = json.data;
      localStorage.setItem('artworks', JSON.stringify(artworks));
    }
  
    const likeRequests = artworks.map((artwork) => {
      const artworkId = artwork.id.toString();
      return fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes`)
        .then((response) => response.json())
        .then((json) => ({ artworkId, likes: json.likes }));
    });
  
    const likes = await Promise.all(likeRequests);
    likes.forEach((like) => {
      const artwork = artworks.find((artwork) => artwork.id.toString() === like.artworkId);
      artwork.likes = like.likes;
    });
  
    DisplayCards(artworks);
  }
}
