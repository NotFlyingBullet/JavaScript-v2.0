//Комментарий
/* */

let f1 = document.querySelector('.f1');
function one(){
  console.log("work");
}
f1.onclick = one;//Без круглых скобок. Если со скобками то функция выполнится, а результат запишется в событие.

one();

//console.log(one());//undefined тк функция ничего не возвращает

function two(){
  console.log("work two");
  return 56;
}
console.log(two());

let a = 3;
let b = 7;

function multi(){
  console.log(a*b);
  return a*b;
}
let c1 = multi();
let c2 = 10*multi();
console.log(c1, c2);

//Параметры по умолчанию
function multi2(x = 3, y = 2){
  console.log(x*y);
  return x*y;//Функция прекращает выполняться
}
console.log(multi2(3, 4));
console.log(multi2());