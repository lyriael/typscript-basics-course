class Pizza {
    name: string;
    toppings: string[] = [];

    constructor(name) {
        this.name = name;
    }

    addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni');

pizza.addTopping('pepperoni');

console.log(pizza);