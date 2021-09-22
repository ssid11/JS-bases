function isSimple(x){
    let retVal = true;
    for(let i=2; i <= Math.floor(Math.sqrt(x)); i++){
        if (x%i == 0) {retVal=false;break;};
    };
    return retVal;    
};

console.log(2);
console.log(3);
for(let i=4; i < 101; i++){
    if (isSimple(i)) {
        console.log(i);
    }
};    