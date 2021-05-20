//Комментарий
/* */

let div = document.querySelectorAll('.one');
console.log(div);
//div.style.background = 'red';

for(let i = 0; i<div.length; i++){
  div[i].style.background = 'red';
  console.log(div[i]);
  div[i].onclick = two;
}
function two(){
  console.log('work!');
}

let b = document.getElementsByClassName('one');
let c = document.getElementsByTagName('div');
console.log(b);
console.log(c);
for(let i = 0; i<b.length; i++){
  b[i].style.border = '1px solid blue';
}

document.querySelector('button').onclick = ()=>{
  let r = document.querySelectorAll("input[type='radio']");
  console.log(r);
  for(let i = 0;i<r.length; i++){
    if(r[i].checked){
      console.log(r[i].value);
    }
  }
}

let temp = "";
for(let i = 0; i<10; i++){
  temp += i+" "; 
}
document.querySelector('#out').innerHTML = temp + "<hr>";