const annoyer = {
    phrases: ["kaiko", "kya be", "teri tho", "ok va", "romba nalla", "cant stop wont stop"],
    timerId: -1,
    pickPhrase() {
        let index = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[index];
    },
    start() {
        this.timerId = window.setInterval(
            () => console.log(this.pickPhrase()),
            1000
        )
    },
    stop() {
        if (this.timerId !== -1) {
            clearInterval(this.timerId);
            this.timerId = -1;
        }
        else {
            console.log(`Timer not set`);
        }
    }
}