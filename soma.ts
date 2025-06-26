function somaDobrada(a: number, b: number): number {
  // número menor que 1
  if (a < 1 || b < 1) {
    return -1;
  }

  // números iguais, soma e dobra
  if (a == b) {
    return (a + b) * 2;
  }

  // demais casos: soma normal
  return a + b;
}

// Testes
console.log(somaDobrada(1, 2)); 
console.log(somaDobrada(2, 2)); 
console.log(somaDobrada(3, -3));