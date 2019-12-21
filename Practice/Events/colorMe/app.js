const colors = ["red", "orange", "yellow", "green", "blue", "purple", "indigo", "violet"];

const showColor = function () {
    let h1 = document.querySelector("h1");
    h1.style.color = this.style.backgroundColor;
    h1.innerHTML = `I am ${this.style.backgroundColor} now!!! <br/>Click something else`;
};

let container = document.querySelector("#boxes");
for (let color of colors) {
    let curDiv = document.createElement("div");
    curDiv.style.backgroundColor = color;
    curDiv.classList.toggle("box");
    curDiv.addEventListener("click", showColor);
    container.appendChild(curDiv);
}

