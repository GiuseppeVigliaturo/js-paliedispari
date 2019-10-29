// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.

// chiedo all'utente di inserire un numero da 1 a 5
var usernum = parseInt(prompt("inserisci un numero da 1 a 5"));
var userscelta = prompt("scegli tra pari e dispari");
document.getElementById('mioid').innerHTML = "il numero che hai scelto è " + usernum + " e hai scelto  " + userscelta;

//faccio inserire un numero al pc in modo random
var pc = Math.floor(Math.random() * 5) + 1;
// console.log(pc);
document.getElementById('mioid1').innerHTML ="il numero generato casualmente è " +  pc;

var final = paridispari(usernum,pc);

if (final === userscelta) {
  // console.log("hai vinto");
  document.getElementById('mioid2').innerHTML = "hai vinto";

}
else{
  // console.log("hai perso");
  document.getElementById('mioid2').innerHTML = "non hai vinto";
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
  result = "dispari";//oppure facevo direttamente return "dispari"
}
return result;
}
