import DisplayCards from "./listCards.js";

export default class Api {
  constructor() {
    this.artworksList = "https://api.artic.edu/api/v1/artworks?page=2";
    this.baseUrl =
      "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps";
    this.appId = "rZVQvLjlhB3dnDtkMDhH";
  }

  async fetchLikes() {
    try {
      const response = await fetch(`${this.baseUrl}/${this.appId}/likes`);
      if (response.ok) {
        const data = response.json();
        return data;
      }
      return [];
    } catch (err) {
      return err;
    }
  }

  async GetArtworks() {
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
  }

  async addLikes(likes) {
    await fetch(`${this.baseUrl}/${this.appId}/likes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(likes),
    });
  }
}
