function Car(model, make, year) {
    this.model = model;
    this.make = make;
    this.year = year;
}

Car.prototype.carDetails = function () {
    let { make, model, year } = this;
    return `Car make ${make}, model ${model} made in ${year}`;
}