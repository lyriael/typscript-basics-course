const toppings = ['beacon', 'chilli'];
const newToppings = ['pepperoni'];

const allTopping = [...toppings, ...newToppings];
const allToppingsDifferentOrder = [...newToppings, ...toppings];

console.log(allTopping);
console.log(allToppingsDifferentOrder);
