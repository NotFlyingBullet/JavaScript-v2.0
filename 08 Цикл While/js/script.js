//Комментарий
/* */

let k = 0;
while(k<5){
   k++;
  console.log('k: '+k);
}

//--------------------------------
let sum = 0;
let p = 0;
while(p <= 3){
  sum = sum + p;
  p++;
}
console.log('sum = '+sum);

//-------------------------------
p = 0;
let out = document.querySelector('.one');
let outStr = "";

while(p < 4){
  outStr += "*";
  p++;
}
out.innerHTML = outStr+"<br><hr>";

//----------------------------------
let out2 = document.querySelector('.two');
outStr = "";
let flag = 3;
p = 0;

while(p < 4){
  let p1 = 0;
  while(p1 < 4){
    if(p1 < flag){
      outStr += "&nbsp";
    }else{
      outStr += "*";
    }
    p1++;
    }
    flag--;
    outStr += "<br>";
    p++
}
out2.innerHTML = outStr;