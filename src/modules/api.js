import DisplayCards from "./listCards.js";

export default class Api {
  constructor() {
    this.artworksList = 'https://api.artic.edu/api/v1/artworks?';
  }

  GetArtworks = async () => {
    let artworks = [];
    const cachedData = localStorage.getItem('artworks');
    if (cachedData) {
      artworks = JSON.parse(cachedData);
      DisplayCards(artworks);
      return;
    }

    await fetch(`${this.artworksList}`)
      .then((response) => response.json())
      .then((json) => {
        artworks = json.data;
        localStorage.setItem('artworks', JSON.stringify(artworks));
        DisplayCards(artworks);
      });
  }
}
