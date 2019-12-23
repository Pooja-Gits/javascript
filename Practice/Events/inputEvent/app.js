const inputs = [
    document.querySelector("#userName"),
    document.querySelector("#termsCheck"),
    document.querySelector("#region")
];

let formData = {};

for (let input of inputs) {
    input.addEventListener("input", function (e) {
        formData[e.target.name] = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        console.log(formData);
    });

}