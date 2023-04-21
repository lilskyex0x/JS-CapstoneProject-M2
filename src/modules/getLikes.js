import DisplayCards from "./listCards.js";

const BASE_API = "https://api.artic.edu/api/v1/artworks?page=2";
const INVOLVEMENT_API = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps";
const APP_ID = "rZVQvLjlhB3dnDtkMDhH";

export async function fetchData() {
  try {
    // Fetch data from the base API
    const response = await fetch(BASE_API);
    const data = await response.json();

    // Get artwork IDs from the data
    const artworkIds = data.data.map((artwork) => artwork.title);

    // Fetch likes data from the Involvement API
    const promises = artworkIds.map((id) =>
      fetch(`${INVOLVEMENT_API}/${APP_ID}/likes?item_id=${title}`).then((res) => res.json())
    );
    const likesData = await Promise.all(promises);

    // Combine likes data with artwork data
    const artworkData = data.data.map((artwork, index) => {
      const likes = likesData[index];
      const likesCount = likes ? likes.likes : 0;
      return { ...artwork, likes: likesCount };
    });

    // Display the artworks with likes count
    DisplayCards(artworkData);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
