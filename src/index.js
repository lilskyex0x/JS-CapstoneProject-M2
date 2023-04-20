import "./style.css";
import { openModal, closeModal } from "./modules/popup";
import { modal } from "./modules/popup";

const cmdButtonOpen = document.querySelectorAll(".button");
const cmdButtonClose = document.querySelectorAll(".close-btn");

cmdButtonOpen.forEach((button) => {
  button.addEventListener("click", () => {
    openModal(modal);
  });
});

cmdButtonClose.forEach((button) => {
  button.addEventListener("click", () => {
    closeModal(modal);
  });
});
