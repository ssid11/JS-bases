let basket = [
    {
        name: 'peach',
        price: 10,
        qty: 1
    },
    {
        name: 'apple',
        price: 20,
        qty: 2
    },
    {
        name: 'banana',
        price: 30,
        qty: 3
    }];

function countBasketPrice(basket) {
    let sum = 0;
    for (let idx = 0; idx < basket.length; sum += basket[idx].qty * basket[idx].price, idx++) { };
    return sum;
};
console.log(countBasketPrice(basket)); 2