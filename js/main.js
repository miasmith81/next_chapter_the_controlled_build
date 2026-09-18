"use strict";

// Project JavaScript

const flipCards = document.querySelectorAll(".flip-card"); 

flipCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
    card.setAttribute(
      "aria-pressed",
      card.classList.contains("flipped").toString()
    );
  });
});
