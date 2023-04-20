import "./style.css";
import Api from "./modules/api.js";
import { openModal, closeModal } from "./modules/popup";
import { modal } from "./modules/popup";

const callAPI = new Api();

callAPI.GetArtworks();

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

