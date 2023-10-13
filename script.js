"use strict";

// ---- ELEMENTS ---- //
const questions = document.querySelectorAll(".question");
// ---- END OF ELEMENTS ---- //

// ---- EVENT HANDLER ---- //
questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
// ---- END OF EVENT HANDLER ---- //
