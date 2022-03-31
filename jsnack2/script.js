let ChooseNumbersUtent = [];
let i = 0;

while (i<=5){
    let ChooseNumber = prompt('Inserisci il numero');
    if(ChooseNumber % 2 !== 0) {
        ChooseNumbersUtent += ChooseNumber;
    }
    i++;
}

document.getElementById('Verification').innerHTML +='i numeri dispari sono ' + ChooseNumbersUtent;