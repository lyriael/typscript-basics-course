class Sizes {
    constructor(public sizes: string[]) {
    }

    set availableSizes(sizes: string[]) { // getter/setter are (obviously always public)
        this.sizes = sizes;
    }

    get availableSizes() {
        return this.sizes;
    }
}

const sizes = new Sizes(['small', 'medium']);
sizes.availableSizes;
sizes.availableSizes = ['large'];


class Pizza {
    toppings: string[] = [];

    constructor(readonly name: string) {}

    addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni');

pizza.addTopping('pepperoni');
console.log(pizza.name);
console.log(pizza);