"use strict";
function contadorDeOcorrencia(texto, busca) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === busca) {
            contador++;
        }
    }
    return contador;
}
// Testes
console.log(contadorDeOcorrencia("bolo", "o")); // 2
console.log(contadorDeOcorrencia("batata", "a")); // 3
console.log(contadorDeOcorrencia("Alejandro", "a")); // 1
console.log(contadorDeOcorrencia("Uma Escola", "e")); // 0
