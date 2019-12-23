const userForm = document.querySelector("#userForm");

userForm.addEventListener("submit", function (e) {
    alert("User Submits");
    e.preventDefault();
});