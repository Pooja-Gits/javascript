const btnClickMe = document.querySelector("#btnSample");

btnClickMe.addEventListener("click", () => {
    alert("Not again");
});

btnClickMe.addEventListener("click", () => {
    console.log("Waw");
});

btnClickMe.addEventListener("mouseover", () => {
    btnClickMe.innerText = "That is awesome";
});

btnClickMe.addEventListener("mouseout", () => {
    btnClickMe.innerText = "Click Me Please!!";
});

window.addEventListener("scroll", function () {
    console.log("Stop Scrolling");
});