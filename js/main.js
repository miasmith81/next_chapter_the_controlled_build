"use strict";

// Select every flip card on the page.
const flipCards = document.querySelectorAll(".flip-card"); 

// Loop through the collection and configure each card.
flipCards.forEach((card) => {
  // Run this function whenever the user clicks the card.
  card.addEventListener("click", () => {
    // Add or remove the flipped class to control the card's appearance.
    card.classList.toggle("flipped");

    // Tell assistive technology whether the card is currently flipped.
    card.setAttribute(
      "aria-pressed",
      card.classList.contains("flipped").toString()
    );
  });
});
