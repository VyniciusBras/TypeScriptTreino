"use strict";
function narmstrong(numero) {
    const numeroStr = numero.toString();
    const numDigitos = numeroStr.length;
    let soma = 0;
    for (const digitoChar of numeroStr) {
        const digito = parseInt(digitoChar);
        soma += Math.pow(digito, numDigitos);
    }
    if (soma === numero) {
        return "Este é um número de Armstrong!";
    }
    else {
        return "Este não é um número de Armstrong!";
    }
}
// Casos de teste
console.log(narmstrong(3)); // Este é um número de Armstrong!
console.log(narmstrong(153)); // Este é um número de Armstrong!
console.log(narmstrong(10)); // Este não é um número de Armstrong!
console.log(narmstrong(154)); // Este não é um número de Armstrong!
