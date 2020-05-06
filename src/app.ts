let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y) => {
    if (y) {
        return x * y
    }
    return x;
};

const sum = sumOrder(25);