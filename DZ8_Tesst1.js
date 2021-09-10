if (!("a" in window)) {
    var a = 1;
}
alert(a);
Возвращает undef в браузере.
if (!("a" in global)) {
  var a = 1;
}
console.log(a);
Возвращает 1 в Nodejs.
Можете объяснить почему?
    
var b = function a(x) {
    x && a(--x);
};
alert(a);
undef Присваивание не всплывает.

function a(x) {
    return x * 2;
}
var a;
alert(a);
Выводит функцию, потому что к моменту выполнения var a a уже существует и определено.

function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);
Выводит 10. Присваивание выпоняется после передачи параметров.

function a() {
    alert(this);
}
a.call(null);
Вывщдит window. Полная форма вызова window.a.call(null)
