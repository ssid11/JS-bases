function createObject(num){
    if (num < 0 || num > 999){
        console.log('Wrong number pass!');
        return {}
    }
var MyObj = {
    hundreds: +(""+num).slice(0,1),
    tens: +(""+num).slice(1,2),
    ones: +(""+num).slice(2,3)
}
return MyObj
}

function createObject_1(num){
    var MyObj = {}
    if (num < 0 || num > 999){
        console.log('Wrong number pass!');
        return MyObj
    }
    MyObj.hundreds = Math.floor(num / 100);
    MyObj.tens = Math.floor((num - MyObj.hundreds * 100) / 10);
    MyObj.ones = num - MyObj.hundreds * 100 - MyObj.tens * 10;
    return MyObj
}
