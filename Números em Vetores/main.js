let vetor = [];
let pares = [];
let impares = [];

for (let index = 0; index < vetor.length; index++) {
    if(vetor[index] % 2 === 0){
        pares.push(vetor[index])
    }else{
        impares.push(vetor[index])
    }
}
    console.log('vetor: '+vetor)
    console.log('pares: '+pares)
    console.log('impares: '+impares)    

