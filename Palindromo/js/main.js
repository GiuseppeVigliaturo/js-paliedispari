// per verificare se una parola è palindroma o meno per prima cosa inverto una stringa e poi vedo se è uguale a quella iniziale

//insersco una parola
var parola = prompt("inserisci una parola per verificare se è palindroma");

var verifica = reverseString(parola);
// console.log(verifica);

document.getElementById('mioid').innerHTML= verifica;

if (verifica === parola) {
  document.getElementById('mioid1').innerHTML= "   la parola è un palindromo ";


} else {
    document.getElementById('mioid1').innerHTML= "   la parola non è un palindromo ";

}

function reverseString(str) {
  //tasformo la stringa in array
  var strArr = str.split("");
  // inverto l'array creato

  var reverseStrArray = strArr.reverse();
  //unisco i vari elementi di un array per riformare una stringa
  var reversedString = reverseStrArray.join("");
  var result;

  if (reversedString === str) {
    console.log("la parola è un palindromo ");


  } else {
      console.log("la parola non è un palindromo ");

  }
  return reversedString;
}


/*
// secondo metodo per revertare(se si può dire in italiano) una stringa
function reverseString(str) {

  return str.split("").reverse().join("");

}
console.log(reverseString("ciao"));


//terzo metodo
function reverseString(str) {
  var final = "";
  for (var i=str.length - 1; i>= 0; i--) {
    final += str[i];
  }
  return final;
}
//
console.log(reverseString("hello"));
*/
