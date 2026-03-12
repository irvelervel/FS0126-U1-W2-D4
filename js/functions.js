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
  //   alert(saluto)
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

// insomma, l'utilizzo dei parametri, dei loro valori di default (=) e la suddivisione intelligente
// delle funzioni ci aiuta a mantenere il nostro codice più stringato, pulito e mantenibile.

// esiste anche un'ultima caratteristica delle funzioni: una funzione può opzionalmente avere un
// VALORE di RITORNO (keyword "return")

// esempio! immaginate di dover una funzione per dei complessi calcoli matematici:

const complexMath = function (valore) {
  let risultato = 0
  // per prima cosa, elevo al quadrato il valore
  risultato = valore * valore
  // poi sottrae il numero 36
  risultato -= 36
  // infine, dal numero ottenuto calcola il resto della divisione con 5
  risultato = risultato % 5
  //   alert(risultato)
}

complexMath(34)
complexMath(10)
complexMath(100340)

// se ora doveste scorporare solo un passaggio di complexMath per riutilizzarlo altrove (ad es. la sottrazione
// con 36), non potete farlo! la sottrazione con 36 è "incastrata" nella funzione complexMath, non potete
// riciclarla in futuro nel vostro codice.
// Proviamo invece ora a SEPARARE gli step in funzioni distinte: in questo modo il codice sarà più mantenibile

const elevaAlQuadrato = function (num) {
  let risultatino = num * num
  return risultatino
}

const sottrae36 = function (num) {
  let risultatino = num - 36
  return risultatino
  console.log('NON STAMPA') // questa riga non verrà mai eseguita perchè dopo il return la funzione termina
}

const moduloCon5 = function (num) {
  let risultatino = num % 5
  return risultatino
}

const r1 = elevaAlQuadrato(5) // 25
const r2 = sottrae36(r1)
const risultatone = moduloCon5(r2)

const lanci = []
// creiamo una funzione che tira un D6 e me ne ritorna il risultato
const lanciaDado = function () {
  const lancio = Math.ceil(Math.random() * 6)
  alert('È uscito ' + lancio)
  lanci.push(lancio)
}

// ora, dopo il lancio del dado, voglio fare due cose: voglio mostrare un alert con il risultato
// e voglio inserire il risultato in un array di lanci

lanciaDado()
lanciaDado()
lanciaDado()
console.log(lanci)

const lanciaDadoSenzaAlert = function () {
  const lancio = Math.ceil(Math.random() * 6)
  lanci.push(lancio)
}

// facciamo una versione più riutilizzabile senza duplicare il codice
const lanciaDadoERitornaValore = function () {
  const lancio = Math.ceil(Math.random() * 6)
  return lancio // ritornando il valore uscito io posso successivamente decidere cosa farne!
}

const risultatoLancio = lanciaDadoERitornaValore() // può essere 5, 2, 1, 6
console.log(risultatoLancio)
// lo elevo al quadrato
elevaAlQuadrato(risultatoLancio)
