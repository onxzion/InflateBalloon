const balloon = document.getElementById("balloon");
const inflateButton = document.getElementById("inflate-button");

let scale = 1;

// Function to inflate the balloon
function inflateBalloon() {
  if (scale >= 2) return; // Prevent over-inflation

  scale += 0.1;
  balloon.style.transform = `translateY(-50%) scale(${scale})`;

  // Stop inflating after reaching max size
  if (scale >= 2) {
    setTimeout(() => {
      alert("The balloon has popped!");
      resetBalloon();
    }, 500);
  }
}

// Reset the balloon to its original size
function resetBalloon() {
  scale = 1;
  balloon.style.transform = `translateY(-50%) scale(${scale})`;
}

// Event listener for the button
inflateButton.addEventListener("click", () => {
  inflateBalloon();
});
