const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const durationText = document.getElementById("duration");
const circle = document.querySelector("circle");

const perimeter = 2 * Math.PI * parseFloat(circle.getAttribute("r"));
console.log(perimeter);
circle.setAttribute("stroke-dasharray", perimeter);

let duration;
const timer = new Timer(durationText, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        circle.setAttribute("stroke-dashoffset",
            (perimeter * timeRemaining) / duration - perimeter);
    },
    onComplete() {
        console.log("Timer finished");
    }
});