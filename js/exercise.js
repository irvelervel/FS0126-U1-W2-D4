// ESERCIZI SULLE FUNZIONI

// a) dovete creare una funzione che ritagli i primi 3 caratteri di una stringa
// fornita come parametro, li metta in maiuscolo e li stampi in console

const functionA = function (s1) {
  // taglio i primi 3 chars
  const first3 = s1.slice(0, 3)
  //   li metto in maiuscolo
  const maiuscolo = first3.toUpperCase()
  //   li stampo in console
  console.log(maiuscolo)
}

functionA('epicode')
// stampa in console 'EPI'

// b) crea una funzione che riceva due numeri come parametri. La funzione deve farne
// la somma, e verificarne il modulo con il numero 3. Se questo modulo è 0 la funzione
// deve ritornare TRUE, altrimenti deve ritornare FALSE

const functionB = function (n1, n2) {
  const somma = n1 + n2
  const modulo = somma % 3
  if (modulo === 0) {
    return true
  } else {
    return false
  }
}

functionB(4, 5) // true
functionB(7, 90) // false

// c)
// scrivi una funzione che calcoli un numero casuale tra 1 e 20. Se il risultato
// ottenuto è maggiore di 10 ritorna la stringa "testa", altrimenti ritorna "croce".

const functionC = function () {
  const casuale = Math.ceil(Math.random() * 20)
  if (casuale > 10) {
    return 'testa'
  } else {
    return 'croce'
  }
}

functionC()
