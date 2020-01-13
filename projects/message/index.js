
const submit = document.querySelector(".create");
const showForm = document.querySelector(".createAnother");
const messageInput = document.querySelector("#message-input");
const linkInput = document.querySelector("#link-input");

submit.addEventListener("click", (event) => {
    event.preventDefault();
    linkInput.value = `${window.location}#${btoa(messageInput.value)}`;
    const element1 = document.querySelector("#formDiv");
    const element2 = document.querySelector("#encryptedDiv");
    toggleVisibility(element1, element2);
    linkInput.select();
});

showForm.addEventListener("click", (event) => {
    event.preventDefault();
    messageInput.value = "";
    linkInput.value = "";
    const element2 = document.querySelector("#formDiv");
    const element1 = document.querySelector("#encryptedDiv");
    toggleVisibility(element1, element2);
});

function toggleVisibility(element1, element2) {
    element1.classList.add("hide");
    element2.classList.remove("hide");
}

window.addEventListener("load", (event) => {
    if (window.location.hash) {
        const element1 = document.querySelector("#formDiv");
        const element2 = document.querySelector("#encryptedDiv");
        const element3 = document.querySelector("#decryptedDiv");
        element1.classList.add("hide");
        element2.classList.add("hide");
        element3.classList.remove("hide");
        document.querySelector("h1").innerText = atob(window.location.hash.replace("#", ""));
    }
});