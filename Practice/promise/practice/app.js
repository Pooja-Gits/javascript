const pageData = {
    "/users": [{ "id": 20, "name": "Manoj" }, { "id": 21, "name": "Nandan" }, { "id": 22, "name": "Sharnu" }],
    "/about": "This is the about page data",
    "/users/20": { "id": 20, "name": "Manoj", "highestRatedPostId": 1212, "region": "APAC" },
    "/users/21": { "id": 21, "name": "Nandan", "highestRatedPostId": 1213, "region": "AMER" },
    "/posts/1212": { "content": "This is awesome 1212" }
};

function getUrlDummy(uri) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const returnData = pageData[uri];
            if (returnData) {
                resolve({ "statusCode": 200, "data": returnData });
            } else {
                reject({ "statusCode": 404, "data": `Not Found: ${uri}` });
            }
        }, 2000 * Math.random());
    })
}

getUrlDummy("/users")
    .then((result) => {
        console.log(result);
        let randomId = Math.floor(Math.random() * result.data.length);
        let id = result.data[randomId].id;
        let userUri = `/users/${id}`;
        console.log(userUri);
        return getUrlDummy(userUri);
    })
    .then((result) => {
        console.log(result);
        let id = result.data.highestRatedPostId;
        let postUri = `/posts/${id}`;
        console.log(postUri);
        return getUrlDummy(postUri);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((result) => {
        console.log(`Error Executing`, result);
    });