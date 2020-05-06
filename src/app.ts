let pizza: { name: string, price: number; getName(): string } = {
    name: 'Plain Old Pepperoni',
    price: 20,
    getName(): string {
        return pizza.name;
    }
};