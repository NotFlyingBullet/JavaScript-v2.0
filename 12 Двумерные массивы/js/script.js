//Комментарий
/* */

let a = [4,5,6];
let b = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
console.log(b);

for(let i = 0; i<b.length; i++){
  console.log('Выводим внешний массив b[i]');
  console.log(b[i]);
  let c = b[i];
  for(let k = 0; k<c.length; k++){
    console.log('Выводим внутренний массив b[i]');
    console.log(c[k]);
  }
}

//Другой способ перебрать массив
console.log('Другой способ перебрать массив');
for(let i = 0; i<b.length; i++){
  for(let k = 0; k<b[i].length; k++){
    console.log(b[i][k]);
  }
}

//Задача двигать единицу кнопкой
let d = [1,0,0,0,0,0,0];

document.querySelector('.out').innerHTML = d;
let k = 0;
document.querySelector('button').onclick = ()=>{
  if( k+1 < d.length ){
  d[k] = 0;
  d[k + 1] = 1;
  k++;
  }
  document.querySelector('.out').innerHTML = d;
}