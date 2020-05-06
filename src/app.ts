function sumAll(message: string, ...arr: Array<number>) {
    console.log(message);
    return arr.reduce(((previousValue, currentValue) => previousValue + currentValue));
}

console.log(sumAll('here you go: ', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));