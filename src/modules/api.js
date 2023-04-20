import DisplayCards from "./listCards.js";

export default class Api {
  constructor() {
    this.artworksList = 'https://api.artic.edu/api/v1/artworks?page=2';
  }

  GetArtworks = async () => {
    await fetch(`${this.artworksList}`)
      .then((response) => response.json())
      .then((json) => {
        const artworks = json.data;
        DisplayCards(artworks);
      });
  }
}
