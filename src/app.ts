const pizzas = [
    { name: 'Pepperoni', toppings: ['pepperoni']}
];

const mappedPizzas = pizzas.map((pizza, index) => pizza.name.toUpperCase() + index);

console.log(mappedPizzas);

const pizza = {
    name: 'Blazing Inferno',
    getName: function () {
        setTimeout(function () {
            console.log('timeout log', this);
        }, 100);
        console.log('getName log', this);
    }
};

console.log('method call log', pizza.getName());