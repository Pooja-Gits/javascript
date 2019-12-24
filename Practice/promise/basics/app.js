const pageData = {
    "/users": [{ "id": 20, "name": "Manoj" }, { "id": 21, "name": "Nandan" }, { "id": 22, "name": "Sharnu" }],
    "/about": "This is the about page data",
    "/users/20": { "id": 20, "name": "Manoj", "highestRatedPostId": 1212, "region": "APAC" },
    "/users/21": { "id": 21, "name": "Nandan", "highestRatedPostId": 1213, "region": "AMER" },
    "/posts/1212": { "content": "This is awesome 1212" }
}

function getData(uri) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const data = pageData[uri];
            if (data) {
                resolve({ "status": 200, "result": data, "request": uri });
            }
            else {
                reject({ "status": 404, "result": `Not Found: ${uri}`, "request": uri })
            }
        }, 2000 * Math.random());
    });
}

getData("/users")
    .then((response) => {
        const rand = Math.floor(Math.random() * response.result.length);
        const userDetailsUri = `/users/${response.result[rand].id}`;
        console.log(response);
        return getData(userDetailsUri);
    })
    .then((response) => {
        const userPostUri = `/posts/${response.result.highestRatedPostId}`;
        console.log(response);
        return getData(userPostUri);
    })
    .then((response) => {
        console.log(response);
        console.log(response.result.content);
    })
    .catch((response) => {
        console.log("Error Executing", response);
    });