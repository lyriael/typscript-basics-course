const coupon: string = 'pizza25';

function normalizedCoupon(code: string): string {
    return code.toUpperCase();
}

const couponMessage: string = `
First Line.
The final Coupon is ${normalizedCoupon(coupon)}
`;

console.log(couponMessage);