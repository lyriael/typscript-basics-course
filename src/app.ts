function orderError(error: string): never { // implicit return type would be void
    throw new Error(error);
    // never going to return a value!
}

orderError('Something went wrong');