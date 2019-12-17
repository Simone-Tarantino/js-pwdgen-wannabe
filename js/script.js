// chiedi nome dell'utente
var userName = prompt('Inserisci il tuo nome');
// chiedi cognome dell'utente
var userSurname = prompt('Inserisci il tuo cognome');
// chiedi colore preferito dell'utente
var userColor = prompt('Inserisci il tuo colore preferito');
// genera la password sommando le info inserite dall'utente in precendenza
var userPassGen = userName + userSurname + userColor + '19';
// verifica
console.log(userPassGen);
// stampa su html il risultato
document.getElementById('password-generator').innerHTML = userPassGen;
