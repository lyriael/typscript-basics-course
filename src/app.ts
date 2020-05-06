let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y= 1) => {
    const q = y || 1;
    return x * q
};

const sum = sumOrder(25);