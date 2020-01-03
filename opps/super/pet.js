class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        const { name } = this;
        console.log(`${name} is eating something waw!!`);
    }

    ageString() {
        const { name, age } = this;
        console.log(`${name} is ${age} years old`);
    }
}

class Dog extends Pet {
    bark() {
        const { name } = this;
        console.log(`${name} is barking, bow wow bow wow wow!!`);
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 10) {
        super(name, age);
        this.livesLeft = livesLeft;
    }

    meow() {
        const { name } = this;
        console.log(`${name} is meowing, meow meow meow meow!!`);
    }

    ageString() {
        const { name, age, livesLeft } = this;
        console.log(`${name} is ${age} years old, I have ${livesLeft} Lives Left`);
    }
}