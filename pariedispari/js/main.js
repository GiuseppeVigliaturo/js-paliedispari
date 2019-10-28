// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.

// chiedo all'utente di inserire un numero da 1 a 5
// var usernum = parseInt(prompt("inserisci un numero da 1 a 5"));
// var userscelta = prompt("scegli tra pari e dispari");

//faccio inserire un numero al pc in modo random
var pc = Math.floor(Math.random() * 5) + 1;
console.log(pc);

var final = paridispari(usernum,pc);

if (final === userscelta) {
  console.log("hai vinto");
}
else{
  console.log("hai perso");
}


//funzione
function paridispari(num1,num2) {
var somma = 0;
var result;
somma = num1 + num2;
console.log(somma);

//verifico se la somma è pari o dispari
if (somma % 2 === 0) {
  result = "pari";
}
else {
  result = "dispari";
}
return result;
}
