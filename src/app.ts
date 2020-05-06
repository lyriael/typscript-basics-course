let selectedTopping: string = 'pepperoni';

function selectTopping(topping: string): void {
    selectedTopping = topping; // btw this is a "not pure" function, because it uses the variable from outside
}

selectTopping('bacon');
console.log(selectedTopping);