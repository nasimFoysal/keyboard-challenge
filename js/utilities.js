const generateRandomLetter = ()=>{
    const alphabetStr = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArr = alphabetStr.split("");
    const index = Math.floor(Math.random()*26);

    return alphabetArr[index]
}

const play = () => {
    // hide others except playground
    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("result-section").classList.add("hidden");
    document.getElementById("playground").classList.remove("hidden");
  
    // set initial life and score
    document.getElementById("current-score").innerText = 0;
    document.getElementById("current-life").innerText = 5;

    continueGame()

};

const continueGame = ()=>{
     // display letter
     const letter = generateRandomLetter();
     document.getElementById("display-letter").innerText = letter.toUpperCase();
   
     // set bg of display letter
     const keyBoardLetter = document.getElementById(letter);
     keyBoardLetter.classList.add("bg-orange-400");

}

const gameOver = (finalScore, currentLetter) => {
    document.getElementById("playground").classList.add("hidden");
    document.getElementById("result-section").classList.remove("hidden");

    document.getElementById("final-score").innerText = finalScore;

    // remove bg
    document.getElementById(currentLetter).classList.remove("bg-orange-400");
};
  
