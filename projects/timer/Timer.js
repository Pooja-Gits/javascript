class Timer {
    constructor(durationInput, startButton, pauseButton, callsBacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.runInterval = 20;

        if (callsBacks) {
            this.onStart = callsBacks.onStart;
            this.onTick = callsBacks.onTick;
            this.onComplete = callsBacks.onComplete;
        }

        this.startButton.addEventListener("click", this.start);
        this.pauseButton.addEventListener("click", this.pause);
        this.durationInput.addEventListener("input", this.onDurationChange);

    }

    start = () => {
        if (this.onStart)
            this.onStart(this.timeRemaining);
        this.tick();
        this.intervalId = setInterval(this.tick, this.runInterval);
    }

    pause = () => {
        clearInterval(this.intervalId);
    }

    onDurationChange = () => {
        console.log("Changed!!");
    }

    tick = () => {
        if (this.timeRemaining > 0) {
            this.timeRemaining = this.timeRemaining - (this.runInterval / 1000);
            if (this.onTick)
                this.onTick(this.timeRemaining);
        }
        else {
            this.pause();
            if (this.onComplete)
                this.onComplete();
        }
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }

}