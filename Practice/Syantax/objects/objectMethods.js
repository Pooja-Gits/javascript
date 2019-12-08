const add = (x, y) => x + y;

const locMath = {
    add,
    multiply: (x, y) => x * y,
    divide: function (x, y) { return x / y },
    subtract: (x, y) => x - y
}

const auth = {
    userName: "ManojB",
    login() {
        console.log(`You are logged in ${this.userName}`);
    },
    logout() {
        console.log(`You are logged out ${this.userName}`);
    }
}

auth.login();
auth.logout();