//Комментарий
/* */


//#region //Подключение  и удаление стилей через JS
const one = document.querySelector(".one");
one.style.width = "150px";
one.style.paddingBottom = "5em";

//console.log(one.style);

one.classList.add('orange','green');
one.classList.remove('green');

const toggle = document.querySelector('.toggle');
toggle.onclick = function(){
this.classList.toggle('green');
}
//#endregion

//#region //Атрибуты Data (чтение и установка)
let data = one.getAttribute('data');
console.log(data);

console.log(document.querySelector('link').getAttribute('href'));
console.log(document.querySelectorAll('link')[1].getAttribute('href'));

one.setAttribute('data-num', 6);
//#endregion

//#region  //Использование атрибутов для получения info об элементах
let gas = document.querySelectorAll('.gas');
for(let i = 0; i<gas.length; i++){
  gas[i].onclick = function(){
    let gallons = document.querySelector('.gallons').value;
    let amount = this.getAttribute('data');
    console.log(amount*gallons);
  }
}
//#endregion

//#region  //Создание элементов и управление ими с помощю JS
let a = document.createElement('div');
console.log(a);
a.innerHTML = "Hello";
a.classList.add('orange');
a.onclick = function(){
  alert('qwerty');
}
document.querySelector('.container').appendChild(a);
//#endregion