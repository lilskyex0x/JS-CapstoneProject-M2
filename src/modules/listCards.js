import { openModal, modal } from "./popup.js";
import countProducts from "./countItems.js";
import postLikes from "./fetchLikes.js";

export default class FetchCards {
  constructor() {
    this.artworksList = "https://api.artic.edu/api/v1/artworks?page=2";
  }

  GetArtworks = async () => {
    let artworks = [];
    const cachedData = localStorage.getItem("artworks");
    if (cachedData) {
      artworks = JSON.parse(cachedData);
      DisplayCards(artworks);
      return;
    }

    await fetch(`${this.artworksList}`)
      .then((response) => response.json())
      .then((json) => {
        artworks = json.data;
        localStorage.setItem("artworks", JSON.stringify(artworks));
        DisplayCards(artworks);
      });
  };
}

async function DisplayCards(data) {
  const Cards = document.querySelector(".cards");

  data.forEach((element, index) => {
    element.likes = 0;
    Cards.innerHTML += `
      <div class="card">
        <div class="img-container">
          <div class="img-hold">
            <div class="img">
              <img class="image-api" src="./assets/image/${index}.jpg">
            </div>
          </div>
        </div>
        <div class="title-container">
          <h3>${element.title}</h3>
          <div class="interactions">
            <i class="fa fa-heart like-btn"></i>
            <div class="likes like-counter">${element.likes} Likes</div>
          </div>
          <button class="button comment"><i class="fa fa-comments"></i> Comments</button>
        </div> 
      </div>
    `;
  });

  const likeButtons = document.querySelectorAll(".like-btn");
  likeButtons.forEach((button, index) => {
    button.addEventListener("click", async () => {
      data[index].likes++;
      const likeCounter = button.nextElementSibling;
      likeCounter.textContent = `${data[index].likes} Likes`;
      button.classList.toggle("liked");
        const response = await postLikes(data[index].id, data[index].likes);
    });
  });

  const countItems = document.querySelector(".product-counter");
  countItems.innerHTML = `(${countProducts()})`;

  const commentButtons = document.querySelectorAll(".comment");
  commentButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const imgSrc = `./assets/image/${index}.jpg`;
      const title = data[index].title;
      openModal(modal, imgSrc, title, index);
    });
  });
}
