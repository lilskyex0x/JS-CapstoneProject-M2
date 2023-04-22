import { modal } from "./popup";

const commentsCounter = (comments) => {
  modal.querySelector("#c-total").textContent = comments.length;
};

export default commentsCounter;
