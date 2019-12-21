// let listItems = document.getElementsByTagName("li");

// for (let curListItem of listItems) {
//     curListItem.innerHTML = "<b>ok now</b>";
// }

const firstLi = document.querySelector("li");
console.log(firstLi.nextElementSibling.nextElementSibling.innerHTML);

const h1 = document.querySelector("ul");
h1.style.color = "blue";

const p = document.querySelector("p");
p.style.color = "white";
p.style.backgroundColor = "black";
p.style.fontSize = "20px";

const lisAll = document.querySelectorAll("li");

const colorsA = ["red", "blue", "black", "pink", "green", "purple", "orchid"];
for (let l of lisAll) {
    l.style.fontSize = Math.floor(Math.random() * 25) + 20 + "px";
    l.style.color = "white";
    l.style.backgroundColor = colorsA[Math.floor(Math.random() * colorsA.length)];
}

const head = document.querySelector("h1");
const headStyle = getComputedStyle(head);
console.log(headStyle.fontSize);
console.log(headStyle.color);