//Комментарий
/* */
 let out = document.querySelector('.out');
/*
 for(let i = 0; i<5; i++){
  console.log(i);

  for(let k = 0; k<10; k++){
    out.innerHTML += k;
    console.log(k);
  }
  out.innerHTML += "<br>";
}
 */

for(let i = 1; i<10; i++){
  //Конкатеннация
  // out.innerHTML += '3 X '+i+'='+(i*3)+"<br>";

  //Интерполяция ${}
  //out.innerHTML += `3 X ${i} = ${3*i}<br>`;

  for(let k = 1; k<10; k++){
    out.innerHTML += `${i} X ${k} = ${i*k}<br>`;
  }
  out.innerHTML += "<hr><br>";
}