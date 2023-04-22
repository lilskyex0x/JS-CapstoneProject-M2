// const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
// const APP_ID = 'rZVQvLjlhB3dnDtkMDhH';

// const addLikes = async (itemId, likes) => {
//   await fetch(`${BASE_URL}/${APP_ID}/likes`, {
//     mode: 'no-cors',
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         item_id: itemId,
//         like: likes,
//     }),
//   });
// };
// export default addLikes;


async function postLikes(productId, likes) {
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rZVQvLjlhB3dnDtkMDhH/likes`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item_id: productId,
        likes: likes,
      }),
    });
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
    // const data = await response.json();
    // return data;
  }
  export default postLikes;