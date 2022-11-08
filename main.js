const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

 let min = parseInt(prompt(`inserisci un numero tra 0 e 6`))
 let max = parseInt(prompt(`inserisci un numero maggiore di quello precedente ma inferiore o uguale A 6`))

function estrazioneNomi(min, max){
   const arrayNuovo = []
   myArray.forEach((element, index) => {
    if( index > min  && index < max){
        arrayNuovo.push(element)
       
    }
   
})
console.log(arrayNuovo)
}
estrazioneNomi(min, max)





/* SNACK 2 */
/*
arrayNomi = []
arrayVoti = []
arrayVotiId = []

let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];
*/
/* Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole. */
/* 
students.forEach((element)  => {
    nameMaiuscolo = element.name.toUpperCase();
    console.log(nameMaiuscolo)
    arrayNomi.push(nameMaiuscolo)
 })

  console.log(arrayNomi)
*/
/* Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70 */
/* 
students.forEach((element) => {
    if(element.grades > 70){
        votiSuperiori = element.grades
    }
    arrayVoti.push(votiSuperiori)
 })

 console.log(arrayVoti)
*/
/* Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120 */
/*
students.forEach((element) => {
    if(element.grades > 70 && element.id > 120){
        votiSuperioriId = `${element.grades} e ${element.id}`
    }
    arrayVotiId.push(votiSuperioriId)
 })

 console.log(arrayVotiId)
 */