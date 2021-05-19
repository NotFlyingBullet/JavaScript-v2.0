//Комментарий
/* */
console.log("Вторая программа");

let inputIn = document.querySelector(".input-in");
let button = document.querySelector("button");
let div = document.querySelector(".out");

//Кнопка событие функция
button.onclick = function(){

  console.log("Работает");
  //console.log(inputIn.value);

	//Преобразование типов (строки в число) тк из инпута всегда приходит строка
  let b = +inputIn.value;
  console.log(b);
  console.log(b+10); 
  inputIn.value = "";//Очистка input

  div.innerHTML = b;
}