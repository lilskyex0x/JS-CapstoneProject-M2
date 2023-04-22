import { modal } from './popup.js';

const commentsCounter = (comments) => {
  modal.querySelector('#c-total').textContent = comments.length;
};

export default commentsCounter;
