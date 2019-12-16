const car = {
    wheels: 4,
    init() {
        console.log(`I have ${this.wheels} wheels and my owner is ${this.owner}`);
    }
};

const carWithOwner = Object.create(car, {
   owner: {
       value: 'Simpson'
   }
});

console.log(carWithOwner.__proto__ === car); // prototypes of both objects are the same
carWithOwner.init();
console.log(carWithOwner);
console.log(carWithOwner.wheels);