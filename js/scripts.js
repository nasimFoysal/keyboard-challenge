document.addEventListener("keyup", (e) => {
  let currentScore = parseInt(document.getElementById("current-score").innerText);
  let currentLife = parseInt(document.getElementById("current-life").innerText);

  const currentLetter = document.getElementById("display-letter").innerText.toLowerCase();
  const pressedLetter = e.key;

  if (pressedLetter === currentLetter) {
    currentScore++;
    document.getElementById("current-score").innerText = currentScore;
    play();
    // remove bg
    document.getElementById(currentLetter).classList.remove("bg-orange-400");
  } else {
    currentLife--;
    document.getElementById("current-life").innerText = currentLife;
    if (currentLife === 0) {
      gameOver(currentScore);
      document.getElementById(currentLetter).classList.remove("bg-orange-400");
    }
  }
});
