// ARGOMENTO PIÙ IMPORTANTE DI IERI: FOR LOOP

// Il for loop è una struttura in grado di ripetere automaticamente l'esecuzione di un blocco
// di codice un numero DEFINITO di volte.

for (let i = 0; i < 5; i++) {
  console.log('ciao!')
}

// il primo di un array ha sempre posizione 0
// l'ultimo elemento di un array ha sempre posizione length - 1

const array = ['alessia', 'alessandro', 'stefano']
// array.length -> vale 3

array[array.length] // array[3] <-- undefined

const nomiMaschili = []

for (let i = 0; i < array.length; i++) {
  // tiriamo fuori i nomi solo maschili
  if (array[i].slice(-1) === 'o') {
    // il nome è maschile
    nomiMaschili.push(array[i]) // lo metto in un array a parte
  }
  let ripetizioniDelFor = 0
  ripetizioniDelFor = ripetizioniDelFor + 1
}

// console.log(stefano)

// slice è un metodo che ritaglia una porzione di ARRAYS o STRINGHE
// prendiamo solo i primi due elementi di array
array.slice(0, 2) // ['alessia', 'alessandro']
array.slice(1, 2) // ['alessandro']
array.slice(-1) // ['stefano']

const bilal = {
  student: true,
  age: 18,
}

delete bilal.age

let valore = 0
// valore += 1 // valore = valore + 1
valore = +1
valore = +1
valore = +1
valore = +1
valore = +1
valore = +1
valore = +1
valore = +1
console.log(valore)
