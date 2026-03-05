const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

// Base
const reversedTeachers = [];
for (let i = teachers.length - 1; i >= 0; i--) {
  reversedTeachers.push(teachers[i]);
}
console.log(reversedTeachers);

// Avanzato
// const reversedTeachers = teachers.toReversed();

// Richiamo Funzione
const secondrevers = reverseList(teachers);
console.log(teachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

// Base
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i])
  }
}
console.log(longNames);

// Avanzato
// const longNames = teachers.filter(teachers => teachers.length >= 5);

// 3. Rimuovi 'Ed' dall'array teachers

// Base
const removeIndex = teachers.indexOf('Ed');
teachers.splice(removeIndex, 1);
console.log(teachers);

// Invocazione Funzione
removeIndexArray(teachers, 'Luca');

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

// Base
let isFabioPresent = false;
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === 'Fabio') {
    isFabioPresent = true;
    break;
  }
}
console.log(isFabioPresent);

// Invocazione Funzione
const isNamePresent = checkString(teachers, 'Fabio')
console.log(isNamePresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString

// Base
let teachersString;
for (let i = 0; i < teachers.length; i++) {
  const subString = teachers[i];
  if (i == 0) {
    teachersString = subString + ', ';
  }
  else if (i < teachers.length - 1) {
    teachersString = teachersString + subString + ', ';
  }
  else
    teachersString = teachersString + subString
}
console.log(teachersString);

// Avanzato
// teachersString = teachers.join(', ');
// console.log(teachersString);

// Creo una nuova funzione

function removeIndexArray(myArray, myString) {
  if (myArray === null || myString === '') { return }
  if (myArray.length === 1) { return myArray }
  const indexRemove = myArray.indexOf(myString);
  myArray.splice(indexRemove, 1);
}

function checkString(myArray, myString) {
  if (myArray === null || myArray === '') { return false }
  if (myArray.length === 1 && myString === myArray[0]) { return true }
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === myString) { return true }
  }
  return false
}

function reverseList(list) {
  let reversList;
  if (list === null) { return }
  for (let i = list.length - 1; i >= 0; i--) {
    reversList = list[i];
  }
  return reversList
}