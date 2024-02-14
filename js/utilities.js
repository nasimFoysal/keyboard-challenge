const generateRandomLetter = ()=>{
    const alphabetStr = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArr = alphabetStr.split("");

    const index = Math.floor(Math.random()*26);

    return alphabetArr[index]
}

const play = (playAgain) => {
    // hide others except playground
    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("result-section").classList.add("hidden");
    document.getElementById("playground").classList.remove("hidden");
  
    // display letter
    const letter = generateRandomLetter();
    document.getElementById("display-letter").innerText = letter.toUpperCase();
  
    // set bg of display letter
    const keyBoardLetter = document.getElementById(letter);
    keyBoardLetter.classList.add("bg-orange-400");
  
    if(playAgain){
      //   set initial life and score
    document.getElementById("current-score").innerText = 0;
    document.getElementById("current-life").innerText = 5;
    }

};
  
const handlePlayAgain = () =>{
    play(true)
}

const gameOver = (finalScore) => {
    document.getElementById("playground").classList.add("hidden");
    document.getElementById("result-section").classList.remove("hidden");

    document.getElementById("final-score").innerText = finalScore;
};
  
