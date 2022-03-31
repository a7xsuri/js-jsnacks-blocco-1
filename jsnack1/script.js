const GuestsList = ['pino', 'paolo', 'giovanna', 'claudia', 'daniela'];
let Guest = prompt('Come ti chiami?'); 
let i = 0;
let proof = false;

while (i < GuestsList.length) {
    if(Guest===GuestsList[i]){
       proof = true;
    }
    i++;
}
if (proof){
    document.getElementById('Verification').innerHTML += "è nella lista " + Guest + ", prego mi segua dentro";  
} else {
    document.getElementById('Verification').innerHTML += "Non è " + Guest + " nella lista"; 
}
