let ChooseNumbersUtent = prompt('Inserisci un numero di quattro cifre');
let somma = 0;
let i = 0;
let digit = 0;

if (ChooseNumbersUtent.length!==4){
    document.getElementById('Verification').innerHTML= 'HO DETTO 4 CIFRE!!!';
} else {
while (ChooseNumbersUtent){
    digit = ChooseNumbersUtent % 10;
    somma += digit;
    ChooseNumbersUtent = (ChooseNumbersUtent - digit ) / 10;
} 
    document.getElementById('Verification').innerHTML +='la somma dei numeri è' + somma;
}
