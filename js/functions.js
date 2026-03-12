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

globalCounter += 10 // globalCounter = globalCounter + 10
checkGlobalCounter()

globalCounter -= 5 // globalCounter = globalCounter - 5
checkGlobalCounter()

// altri esempi
const sum = function () {
  const n1 = 5
  const n2 = 7
  const risultato = n1 + n2
  alert(risultato)
}

const sum2 = function () {
  const n1 = 6
  const n2 = 9
  const risultato = n1 + n2
  alert(risultato)
}

// sum()
// sum2()

// ottimo, sum e sum2 fanno la somma di due valori prefissati e stampano un popup nel browser.
// come posso però evitare la loro (ulteriore) duplicazione e cercare di ottenere un'UNICA funzione
// in grado di sommare QUALSIASI due numeri?

// --> PARAMETRI DI FUNZIONE
// quando vi accorgete che dovete riciclare una funzione, però siete vincolati dal fatto che quella funzione
// lavorava con dei DATI SPECIFICI
// parametrizzare una funzione consiste nel renderla più GENERICA, più RIUTILIZZABILE; una funzione ideale
// per sommare due numeri NON HA I DUE VALORI inseriti al suo interno! i DATI possono venire forniti all'
// INVOCAZIONE della funzione!

// 1) la parte 1, cioè la dichiarazione, non saprà mai quali numeri sommare, utilizza dei "placeholders"
const sumThemAll = function (num1, num2) {
  // num1 e num2 sono PARAMETRI della funzione sumThemAll()
  const risultato = num1 + num2
  console.log('IL RISULTATO È', risultato)
}

// 2) è all'INVOCAZIONE che date un significato a num1 e num2
sumThemAll(8, 13)
sumThemAll(18, 45)
sumThemAll(476, 3092)

sumThemAll(10) // in questo caso num2 prende il valore "d'ufficio" di undefined!
sumThemAll(5, 6, 10) // l'argomento 5 diventa num1, l'argomento 6 diventa num2, l'argomento 10 viene ignorato

// NOMENCLATURA: -> num1 e num2 si definiscono PARAMETRI della funzione.
// NOMENCLATURA: -> 8 e 13, 18 e 45, cioè i DATI dell'invocazione, vengono chiamati ARGOMENTI

// array.pop('cane') // non è che rimuove l'elemento "cane", pop toglie sempre l'ultimo!

// generalizziamo con altri esempi
const sayHelloToAnyone = function (name = 'Utente') {
  const saluto = 'Buongiorno, ' + name + '!'
  alert(saluto)
}

sayHelloToAnyone('Stefano')
sayHelloToAnyone('Mario')
sayHelloToAnyone('Giangiorgio')
sayHelloToAnyone() // scateniamo il valore di default del parametro name

const exploreArray = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const message = 'Elemento ' + i + ': ' + arr[i] // "Elemento 0: Giorgia"
    console.log(message)
  }
}

let nomi = ['Giorgia', 'Stefano', 'Emanuela', 'Alessia']
exploreArray(nomi)
