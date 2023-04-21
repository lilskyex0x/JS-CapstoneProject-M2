import { openModal, modal } from "./popup.js";

async function DisplayCards(data) {
  const Cards = document.querySelector(".cards");

  data.forEach((element, index) => {
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
            <div class="likes likes-counter">0 Likes</div>
          </div>
          <button class="button comment"><i class="fa fa-comments"></i> Comments</button>
        </div>
      </div>
    `;
  });

  const artworkCount = document.querySelector(".product-counter");
  artworkCount.innerHTML = `(${data.length})`;

  const commentButtons = document.querySelectorAll(".comment");
  commentButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const imgSrc = `./assets/image/${index}.jpg`;
      const title = data[index].title;
      openModal(modal, imgSrc, title, index);
    });
  });
}

export default DisplayCards;
