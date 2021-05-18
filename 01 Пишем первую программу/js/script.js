//Комментарий
/* */
//alert("Alert");
console.log("Привет");
console.log(123);//Число
console.log("123");//Строка
console.log(12+3);
console.log("Деление на 0 = "+10/0);//infinity
console.log("-1/3+1/3 = "+(-1/3+1/3));//Nan
console.log("console.log(-(1/0)+(1/0)); = "+(-(1/0)+(1/0)));
console.log(("1+(+\"1\") = ")+(1+(+"1")));
console.log(("\"1\"+(+\"1\") = ")+("1"+(+"1")));
console.log(("\"1\"+\"1\" = ")+"1"+"1");
console.log(("\"1\"+1 = ")+"1"+1);

document.getElementById("out").innerHTML = "innerHTML";
document.getElementById("out").innerHTML = "<i>2020</i>";
document.getElementById("out").innerHTML = "<i>document.getElementById(\"out\").innerHTML</i>";

document.querySelector(".header").innerHTML =  "<i>document.querySelector(\"h3\").innerHTML</i>";

let temp = document.querySelector(".header-2");
temp.innerHTML = "let temp = <i>document.querySelector(\".header-2\");</i>";