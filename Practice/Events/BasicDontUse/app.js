const buttonClick = document.querySelector("#btnClicker");

buttonClick.onclick = () => {
    alert("This is btn clicker")
};

buttonClick.ondblclick = () => {
    alert("Double Click");
};