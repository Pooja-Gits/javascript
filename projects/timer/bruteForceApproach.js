const secondsText = document.getElementById("secondsText");
const btnStart = document.getElementById("btnStart");
const btnStop = document.getElementById("btnStop");
let pauseTimer = false;
let timerRunning = false;

window.addEventListener("load", () => {
    secondsText.value = 30;
});

btnStart.addEventListener("click", () => {
    if (secondsText.value === "0") {
        secondsText.value = 30;
    }
    runTimer();
});

btnStop.addEventListener("click", () => {
    if (timerRunning)
        pauseTimer = true;
});

function runTimer() {
    console.log(secondsText.value);
    if (secondsText.value > 0 && !pauseTimer) {
        timerRunning = true;
        setTimeout(() => {
            secondsText.value = parseInt(secondsText.value) - 1;
            runTimer();
        }, 1000);
    }
    else {
        timerRunning = false;
    }

    if (pauseTimer) {
        pauseTimer = false;
    }
}