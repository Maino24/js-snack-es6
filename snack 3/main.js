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



