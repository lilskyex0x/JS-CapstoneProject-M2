const Cards = document.querySelector(".cards");

async function DisplayCards(data) {
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
          <h3>${element.title} <i class="fa-solid fa-heart fa-lg"></i></h3>
          <div class="interactions">       
            <div class="likes">355 likes</div>
          </div>
          <button class="button comment"><i class="fa-solid fa-comments"></i> Comments</button>
        </div>
      </div>
    `;
  });
}

export default DisplayCards;
