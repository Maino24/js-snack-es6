/*Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */

 let arrayBici = [

    { name: 'Scott', peso: 14},
    { name: 'Orbea', peso: 15 },
    { name: 'Ktm', peso: 16 },
    { name: 'Cannondale', peso: 18 },
    { name: 'Cervelo', peso: 14 },

]

//let {name, peso} = arrayBici[0]
//console.log( arrayBici[0] )


for (i = 0; i < arrayBici.length; i++){
   const {name, peso} = arrayBici[i]

   if (arrayBici.peso > peso){
    arrayBici = {
        name,
        peso,
    }
    
   }
}