"use strict";
function apuraVotacao(votos) {
    let votos1 = 0;
    let votos2 = 0;
    let votos3 = 0;
    // Contar os votos
    for (const voto of votos) {
        if (voto === 1)
            votos1++;
        else if (voto === 2)
            votos2++;
        else if (voto === 3)
            votos3++;
    }
    // Verificar quem teve mais votos
    if (votos1 > votos2 && votos1 > votos3) {
        return "Vencedor: 1";
    }
    else if (votos2 > votos1 && votos2 > votos3) {
        return "Vencedor: 2";
    }
    else if (votos3 > votos1 && votos3 > votos2) {
        return "Vencedor: 3";
    }
    else {
        return "Empate";
    }
}
// Testes
console.log(apuraVotacao([1, 1, 1, 2, 3, 3, 2])); // Vencedor: 1
console.log(apuraVotacao([2, 2, 2, 2, 1])); // Vencedor: 2
console.log(apuraVotacao([2, 2, 3, 3, 3, 3])); // Vencedor: 3
console.log(apuraVotacao([1, 2, 2, 2, 3, 3, 3])); // Empate
