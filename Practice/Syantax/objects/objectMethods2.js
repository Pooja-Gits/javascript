const person = {
    firstName: "Cherilyn",
    lastName: "Sarkisian",
    nickName: "Cher",
    fullName() {
        const { firstName, lastName, nickName } = this;
        return `${firstName} ${lastName} AKA ${nickName}`;
    },
    printBio() {
        const name = this.fullName();
        console.log(`${name} is a singer`);
    }
}

person.fullName();
person.printBio();