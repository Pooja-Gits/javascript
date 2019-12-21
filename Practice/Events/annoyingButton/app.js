const btn = document.getElementsByTagName("button")[0];
const colors = ["red", "blue", "green", "purple", "gray", "purple", "orange", "yellow", "gold"];
btn.addEventListener("mouseover", function () {
    btn.style.top = Math.floor(Math.random() * window.innerHeight - 10) + "px";
    btn.style.left = Math.floor(Math.random() * window.innerWidth - 10) + "px";
    btn.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    btn.style.color = colors[Math.floor(Math.random() * colors.length)];
    btn.style.fontSize = Math.floor(Math.random() * 50) + 5 + "px";
});

btn.addEventListener("click", function () {
    btn.innerText = "You Got Me";
    document.body.style.backgroundColor = "green";
});