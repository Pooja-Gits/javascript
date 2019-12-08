
//Get By Id
console.dir(document.getElementById("bear-photo"));

//Get By Tag Name
console.dir(document.getElementsByTagName("li"));

//Get By Class Name
console.dir(document.getElementsByClassName("special"));

//Get By Class Name and spread to array
const arrHtml = [...document.getElementsByClassName("special")]
console.log(arrHtml);

//
const ul = document.getElementsByTagName("ul")[0];
const li = ul.getElementsByClassName("special");
const arrSpecialLi = [...li];
for (let a in arrSpecialLi) {
    console.log(a);
}
