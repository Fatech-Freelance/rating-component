// --------- Chosen value ---------
let chosenValue = 0;

// --------- Rating component ---------
const ratingButtons = document.querySelectorAll('.rating-btn');

function handleRatingButtonClick(e) {

    const clickedButtonValue = parseInt(e.target.value);
    chosenValue = clickedButtonValue;
    // --------- Display pop-up message ---------
    const button = document.querySelector("#submit");

    button.addEventListener("click", () => {
    alert(clickedButtonValue);
});

    ratingButtons.forEach((btn, index) => {
      if (index <= clickedButtonValue - 1) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
}

ratingButtons.forEach((btn) => {
    btn.addEventListener('click', handleRatingButtonClick);
});

// --------- Show Thank-You Card---------
function toggleComponents() {
    const main = document.getElementById("main");
    const thankYouComponent = document.getElementById("thank-you-component");
    
    if (main.style.display !== "none" & chosenValue !== 0) {
        main.style.display = "none";
        thankYouComponent.style.display = "block";
    }
}
