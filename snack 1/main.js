/*
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.
*/

//con forEach

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

//con filter





