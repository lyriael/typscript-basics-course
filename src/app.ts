// named function
function sumOrder(price: number, quantity: number): number {
    return price * quantity;
}

// if eg overwritting a function from a library
// let sumOrder2: Function; // use this if you don't know how the signature will be like
let sumOrder2: (price: number, quantity: number ) => number;

sumOrder2 = (x, y) => x * y;

sumOrder2 = (price: number, quantity: number): number => {
    return price * quantity;
};

const sum = sumOrder2(25, 2);