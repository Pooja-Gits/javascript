let inputs = [
    document.querySelector("#userName"),
    document.querySelector("#termsCheck"),
    document.querySelector("#region")
];

let formData = {};
let pData = document.querySelector("#data");
for (let input of inputs) {
    input.addEventListener("input", function (e) {
        formData[e.target.name] = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        let curData = "";
        for (let dataPoint of Object.keys(formData)) {
            curData += `${dataPoint}:  ${formData[dataPoint]}\n`;
        }
        pData.innerText = curData;
    });
}