import { openModal } from "./popup.js";
import { modal } from "./popup.js";

const Cards = document.querySelector(".cards");

async function DisplayCards(data) {
  const numOfLikes = data;
  data.forEach((element, index) => {
    Cards.innerHTML += `
      <div class="card">
        <div class="img-container">
          <div class="img-hold">
            <div class="img">
              <img class = "image-api" src="./assets/image/${index}.jpg">
            </div>
          </div>
        </div>
        <div class="title-container">
          <h3>${element.title} <i class="fa fa-heart like-button"></i></h3>
          <div class="interactions show-likes">
            <div class="${numOfLikes[index].likes} likes</div>
          </div>
          <button class="button comment"><i class="fa fa-comments"></i> Comments</button>
        </div>
      </div>
    `;
  });

  // ADD EVENTS TO LIKE BUTTON
  const likeButtons = document.querySelectorAll('.like-button');
  likeButtons.forEach((likeButton, index) => likeButton.addEventListener('click', () => {
    postLikes(index);
    getLikes(data);
  }));

  const commentButtons = document.querySelectorAll(".comment");
  commentButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const imgSrc = `./assets/image/${index}.jpg`;
      const title = data[index].title;
      openModal(modal, imgSrc, title);
    });
  });
}

export default DisplayCards;
