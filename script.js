let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const numba = document.querySelector(".number");
const msg = document.querySelector(".message");
scoring = document.querySelector(".score");
let reset = function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    scoring.textContent = score;
    msg.textContent = "Start guessing...";
    numba.style.width = "15rem";
    numba.textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".guess").value = "";
}
document.querySelector(".check").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        msg.textContent = "⛔ Not a Number";
    } else if (guess < 1 || guess > 20) {
        msg.textContent = " ✋ Choose a number between 1 and 20";
    } else if (guess === randomNumber) {
        msg.textContent = " 🏆 You WON!";
        numba.textContent = randomNumber;
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
        document.querySelector("body").style.backgroundColor = "#00F"
        numba.style.width = "30rem";
    } else if (guess > randomNumber) {
        msg.textContent = "📈 Too High!";
        if (score > 1) {
            score--;
            scoring.textContent = score;
        } else {
            scoring.textContent = 0;
            msg.textContent = "😫 You LOST!"
        }
    } else if (guess < randomNumber) {
        msg.textContent = "📉 Too Low!";
        if (score > 1) {
            score--;
            scoring.textContent = score;
        } else {
            scoring.textContent = 0;
            msg.textContent = "😫 You LOST!"
        }
    }
})

document.querySelector(".again").addEventListener("click", reset)