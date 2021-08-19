function Good(name='Empty', price=0){
    this.name = name;
    this.price = price;
}

function Basket(){
    this.goods = new Array();
    this.getTotalPrice = function() {
        let totalPrice = 0;
        for(const good of this.goods){
            totalPrice += good.price;
        }
        return totalPrice;
    }
    this.getBasketSize = function() {
        return this.goods.length;
    }
    this.addGood = function(good = {}){
        if (good === {}) {console.log('Not good for add to basket!'); return this.getBasketSize}
        return this.goods.push(good);
    } 
}

let b = new Basket();
let a =new Good('Apple', 10)
b.addGood(a);
b.addGood(new Good('banana',20));
console.log(b);
console.log(b.getTotalPrice());
