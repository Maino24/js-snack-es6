let output = document.getElementById(`output`)

const teams = [

    { nome: `PSG`, punti: 0, falli: 0,},
    { nome: `Ajax`, punti: 0, falli: 0,},
    { nome: `Manchester City`, punti: 0, falli: 0,},
    { nome: `Real Madrid`, punti: 0, falli: 0,},


]

//let obj = {
//    nome: `PSG`,
//    punti: 0,
//    falli: 0,
    
//}

function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//map senza uso del destructuring
const teamsCopia = teams.map( (elem) => {

    elem.punti = numeroRandom(1, 100);
    elem.falli = numeroRandom(1, 100);

    return elem
    
})


console.log( teamsCopia )
