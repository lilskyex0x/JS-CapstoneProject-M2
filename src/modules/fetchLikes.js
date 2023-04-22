async function postLikes(productId, likes) {
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rZVQvLjlhB3dnDtkMDhH/likes`;
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item_id: productId,
        likes: likes,
      }),
    });
  }
  export default postLikes;