const userName = document.querySelector("#username");

userName.addEventListener("keydown", function (e) {
    console.log("Key Down");
});

userName.addEventListener("keyup", function (e) {
    console.log("Key Up");
});

userName.addEventListener("keypress", function (e) {
    console.log("Key Press" + e.key);
});

const shoppingListInput = document.querySelector("#item");
const shoppingList = document.querySelector("#shoppingList");
shoppingListInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && this.value !== "") {
        const newItem = document.createElement("li");
        newItem.innerText = shoppingListInput.value;
        shoppingListInput.value = "";
        shoppingList.appendChild(newItem);
    }
});