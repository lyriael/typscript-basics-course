const pizza = {
    name: 'Pepperoni',
    prize: 15,
    getName() {
        return this.name;
    }
};

console.log(pizza.getName());

const toppings = ['pepperoni'];

const order = {
    pizza: pizza,
    toppings: toppings
};

const orderShort = {pizza, toppings};

function createOrder(pizza: any, toppings: any) {
    return {pizza, toppings};
}

console.log('order ', order);
console.log('orderShort ', orderShort);