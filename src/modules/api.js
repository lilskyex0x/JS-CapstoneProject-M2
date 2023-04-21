import DisplayCards from "./listCards.js";

export default class Api {
  constructor() {
    this.artworksList = "https://api.artic.edu/api/v1/artworks?page=2";
    this.baseUrl =
      "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps";
    this.appId = "rZVQvLjlhB3dnDtkMDhH";
  }

  async fetchLikes(id) {
    const response = await fetch(
      `${this.baseUrl}/${this.appId}/likes?item_id=${id}`
    );
    const data = await response.json();
    return data.length;
  }

  GetArtworks = async () => {
    const response = await fetch(`${this.artworksList}`);
    const json = await response.json();
    const artworks = json.data;

    const promises = artworks.map(async (artwork, index) => {
      const likes = await this.fetchLikes(artwork.id);
      return {
        id: artwork.id,
        title: artwork.title,
        likes: likes,
        imgIndex: index,
      };
    });

    const data = await Promise.all(promises);
    DisplayCards(data);
  };
}
