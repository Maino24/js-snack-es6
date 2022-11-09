/*Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */

 let arrayBici = [

    { name: 'Scott', peso: 14},
    { name: 'Orbea', peso: 15 },
    { name: 'Ktm', peso: 16 },
    { name: 'Cannondale', peso: 18 },
    { name: 'Cervelo', peso: 20 },

]

const  {name, peso} = arrayBici[0];

console.log (name,peso); 

let minBici = {
    name,
    peso,
};
console.log (minBici); 


let maxBici = {
    name,
    peso,
};

console.log (maxBici);  


for (let i = 0; i < arrayBici.length; i++) {  
    const {name, peso} = arrayBici[i];
    console.log (arrayBici[i]); 

    if (minBici.peso > peso) {    
        
        console.log ("bici leggera " + peso); 

        minBici = {
            name,
            peso,
        };
    };

    if (maxBici.peso < peso){

        console.log ("Bici pesante " + peso); 

        maxBici = {
            name,
            peso,
        };
    }
    
}



console.log(`La bici più leggera è la ${minBici.name}, pesa ${minBici.peso} kg.`)


/* CORREZIONE */


const bici = [

    { name: `Pinarello`, peso: 10},
    { name: `Bianchi`, peso: 8},
    { name: `Scott`, peso: 11},

]

let biciLeggera = bici[0]

    
    for (let i=0; i<bici.length; i++){
        
        let elementoCorrente = bici[i]
        let { peso } = elementoCorrente  //di ogni elemento che confronto prendo soltanto il peso

        if( peso < biciLeggera.peso ){

            biciLeggera = elementoCorrente

        }

}

console.log(biciLeggera)
//document.getElementById(`output`).innerHTML = `${biciLeggera}`