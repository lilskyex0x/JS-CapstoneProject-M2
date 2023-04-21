const BASE_URL =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps";
const APP_ID = "rZVQvLjlhB3dnDtkMDhH";
const fetchLikes = async () => {
  try {
    const response = await fetch(`${BASE_URL}/${APP_ID}/likes`);
    if (response.ok) {
      const data = response.json();
      return data;
    }
    return [];
  } catch (err) {
    return err;
  }
};

export default fetchLikes;
