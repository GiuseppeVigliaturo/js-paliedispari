// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.

// chiedo all'utente di inserire un numero da 1 a 5
var usernum = prompt("inserisci un numero da 1 a 5");
var userscelta = prompt("scegli tra pari e dispari");

//faccio inserire un numero al pc in modo random
var pc = 5;//inserisco io per ora per provare

var final = paridispari(usernum,pc);

console.log(final);

//funzione
function paridispari(num1,num2) {
var result;
var somma = num1 + num2;

//verifico se la somma è pari o dispari
if (somma % 2 === 0) {
  result = "pari";
}
else {
  result = "dispari";
}
return result;
}
