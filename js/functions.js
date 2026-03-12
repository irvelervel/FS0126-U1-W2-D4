// LE F U N Z I O N I in JS!

// Con "funzione", in un linguaggio di programmazione, si intende un blocco di codice riutilizzabile.
// Questo blocco di codice viene inoltre dotato di nome, e dopo la sua definizione può venire
// "invocato" per attivare le righe di codice al suo interno.

// in JS:
// 1) prima si "definisce" la funzione con una dichiarazione
// 2) e poi la si "invoca" (esegue, utilizza)

// 1)
const bark = function () {
  // questo si definisce CORPO, "body" della funzione
  // in questo blocco di codice si inseriscono le righe di JS che si vogliono "incapsulare"
  // nella funzione
  console.log('BAU')
}

// 2)
bark()
bark()

// --- WARNING: non create le funzioni così!
// questo è un modo "vecchio" per creare funzioni in JS che ha una particolarità
// 1)
function meow() {
  console.log('MAO')
}

// 2)
meow()

// le funzioni definite senza variabili ma solamente con il costrutto "function" presentano
// un comportamento automatico: il cosidetto "HOISTING"
// ---------
for (let i = 0; i < 10; i++) {
  bark()
}

// altro esempio

let contatore = 0 // variabile con visibilità "globale"

const incrementaContatore = function () {
  contatore = contatore + 10
  let nascosta = 'stefano'
}

// quanto vale contatore?
// contatore vale 0

incrementaContatore()
// contatore vale 10

// nascosta qui non esiste!
// let e const creano variabili con visibilità di "blocco" ("block-scoped variables")
// significa che una variabile è accessibile solamente nel blocco in cui è definita {   }
// e nelle righe successive
// se create però una variabile nel foglio js al di fuori di if/else/for/function, questa
// avrà sempre visibilità "di blocco" però il suo "blocco" è l'intero foglio JS!

// è una buona idea creare una funzione ogni volta che si presenta la necessità di isolare
// delle righe che lavorano "insieme", che servono insieme per raggiungere un risultato:

const sayHelloToStefano = function () {
  const name = 'Stefano'
  const saluto = 'Buongiorno'
  const messaggio = saluto + ' ' + name // 'Buongiorno Stefano'
  console.log(messaggio)
}

// eseguo la funzione
sayHelloToStefano()

// un'altra idea per creare una funzione potrebbe essere quella di scrivere UNA VOLTA SOLA
// delle righe che si presentano in vari punti del codice

let globalCounter = 0

const checkGlobalCounter = function () {
  console.log('Controllo che valore ha globalCounter', globalCounter)
}

globalCounter++
checkGlobalCounter()

globalCounter += 10
checkGlobalCounter()

globalCounter -= 5
checkGlobalCounter()
