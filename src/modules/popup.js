import displayComments from './displayCmds.js';
import addComment from './addCmd.js';

const popupSection = document.createElement('section');
popupSection.setAttribute('id', 'popupModal');
popupSection.classList.add('modal');
popupSection.innerHTML = `
<div class="popup-wrapper">
    <button class="close-btn">&times;</button>
    <img class="popup-img" alt="">
    <h2>Artwork</h2>
    <div class="art-details">
        <ul>
            <li>Fuel: titanium</li>
            <li>Weight: 400</li>
            <li>Length: 100,000</li>
            <li>Power: 100,000,000</li> 
        </ul>
    </div>
    <div class="cmds">
      <h3 id="c-count">Comments(<span id="c-total"></span>)</h3>
      <ul id="all-comments"></ul>
    </div>
    <div class="cmd-form">
        <form action="#" class="form">
            <input type="text" name="name" id="name" placeholder="Your Name">
            <input type="text" name="insight" id="insights" placeholder="Your insights">
            <input type="button" value="Comment" id="cmd-btn">
        </form>
    </div>
</div>
<div id="overlay"></div>`;
document.body.appendChild(popupSection);

export const modal = document.getElementById('popupModal');
const overlay = document.getElementById('overlay');
const cmdButtonClose = document.querySelectorAll('.close-btn');

export function openModal(modal, imgSrc, title, itemId) {
  if (modal === null) return;
  modal.classList.add('active');
  overlay.classList.add('active');

  const img = modal.querySelector('img');
  img.src = imgSrc;

  const titleElement = modal.querySelector('h2');
  titleElement.textContent = title;

  const commentBtn = modal.querySelector('#cmd-btn');
  commentBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    const nameInput = modal.querySelector('#name');
    const insightsInput = modal.querySelector('#insights');
    const name = nameInput.value;
    const insights = insightsInput.value;

    await addComment(itemId, name, insights);

    // clear the input field;
    nameInput.value = '';
    insightsInput.value = '';
  });
  // update the comments display
  displayComments(itemId);
}

export function closeModal(modal) {
  if (modal === null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

cmdButtonClose.forEach((button) => {
  button.addEventListener('click', () => {
    closeModal(modal);
  });
});

closeModal(modal);