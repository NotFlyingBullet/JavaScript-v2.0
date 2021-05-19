//Комментарий
/* */
const button = document.querySelector('button');
const input = document.querySelector('.age')
//Стрелочные функции
button.onclick = ()=>{
  let num = +input.value;

  if(num >= 16 && num <=60){
    console.log('Welcome')
  }else if(num > 60){
    console.log('Ты точно сюда');
  }else{
    console.log('Ты не пройдешь');
  }

 switch (num){
  case 15:
    console.log('Еще год подожди');
    break;
  case 16:
    console.log('Ура можно')
    break;
  default:
    console.log('ok');
    
} 
  input.value = "";
}

