function traduzNumero(numero: number): string {
  if (numero % 3 === 0 && numero % 5 === 0) {
    return "FizzBuzz";
  } else if (numero % 3 === 0) {
    return "Fizz";
  } else if (numero % 5 === 0) {
    return "Buzz";
  } else {
    return String(numero);
  }
}

// Testes
console.log(traduzNumero(3));   // "Fizz"
console.log(traduzNumero(6));   // "Fizz"
console.log(traduzNumero(12));  // "Fizz"

console.log(traduzNumero(5));   // "Buzz"

console.log(traduzNumero(15));  // "FizzBuzz"
console.log(traduzNumero(30));  // "FizzBuzz"
console.log(traduzNumero(45));  // "FizzBuzz"

console.log(traduzNumero(7));   // "7"
console.log(traduzNumero(2));   // "2"
