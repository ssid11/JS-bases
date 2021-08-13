let basket = [1, 3, 5, 7];

function countBasketPrice(basket){
    let sum=0;
    for (idx=0;idx < basket.length;sum+=basket[idx], idx++){};
    return sum;
};
console.log(countBasketPrice(basket));