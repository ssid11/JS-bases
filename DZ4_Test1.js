function createObject(num){
    if (num < 0 || num > 999){
        console.log('Wrong number pass!')
        return {}
    }
var MyObj = {
    hundreds: +(""+num).slice(0,1),
    tens: +(""+num).slice(1,2),
    ones: +(""+num).slice(2,3)
}
return MyObj
}
