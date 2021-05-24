//Комментарий
/* */

//#region Основы
let a = "ivan";
let b = "37";
let z7 = "Oven";

let c = ['Ivan', 37, 'Oven'];
let d = [];
console.log(c[0]);
console.log(c[1]);
console.log(c[5]);//undefined
console.log(c);
console.log(c.length);

let zodiak = ['Kozerog', 1, 1, 19];
console.log(zodiak);

let man = ['Ivan', 'male', 163, 73, 'Ivanov'];
console.log(man);
console.log('Длинна массива = '+man.length);
man[0] = 'Сергей';
console.log(man[0]);
//#endregion

//#region Поменять местами 1 и последний элементы массива
let z = [1, 2, 3, 4];
console.log(z);
let temp = z[0];
z[0] = z[z.length-1];
z[z.length-1] = temp;
console.log(z);
//#endregion

//#region Вывод четных чисел из массивов в html
let out = "";
for(let i = 0; i<z.length; i++){
  if(z[i]%2 == 0){
  out += z[i]+" ";
  }
}
document.querySelector('.out-1').innerHTML = out;
console.log(out);
//#endregion

//#region Нахожденеи макс и суммы в массиве
let max = 0;
let sum =0;
let x = [4, 34, 12, 1, 34, 67, 87, 45, 88];
for(let i = 0; i<x.length; i++){
  if(x[i]>max){
    max = x[i];
  }
  sum = sum + x[i];
}
console.log('Max = '+max);
console.log('Sum = '+sum);
//#endregion