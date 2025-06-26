"use strict";
// TypeScript Basics
let nome = "Vynicius";
let idade = 22;
let ativo = true;
// Tipos avançados
// Union Types sendo utilizado para mais de um valor
let myVariable;
myVariable = "Hello";
myVariable = 42;
// any é qualquer tipo de dado
let teste = 22;
teste = "texto";
//unknown é um tipo de dado que não sabemos o que é, mas sabemos que é um tipo de dado
let valor = 100;
valor = "texto agora";
let converte = valor;
console.log(converte.length);
//array - ts tem uma sintaxe especifica para matrizes
const names = [];
names.push(100);
names.push(2);
//interferencia de tipos
const numbers = [1, 2, 3];
numbers.push(4);
let y = numbers[0];
//readonly array - não pode ser alterada
const nomes = ["Vynicius"];
//tuplas - array com tipos diferentes
let nossaTupla;
nossaTupla = ["Vynicius", 22, true];
//objetos variaveis com valores dentro
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2003
};
carro.motor = 1.0; // opcional, pois motor é um campo opcional
//Assinaturas de indice
const nomeIdade = {};
nomeIdade["Vynicius"] = 22;
//Exemplo de uso de aliase
const Uno = 2003;
const gol = "VW";
const Ferrari = "F40";
const Porsche = {
    marca: "Porsche",
    modelo: "911",
    ano: 2022
};
//Exemplo de uso de interface
const retangulo = {
    altura: 10,
    largura: 20
};
//Exemplo de uso de interface extendida
const quadrado = {
    altura: 10,
    largura: 10,
    cor: "preto"
};
// FUNÇÕES 
//Definindo o tipo de retorno da função
function getTime() {
    return new Date().getTime();
}
//Void - não retorna nada
function semRetorno() {
    console.log("Essa função não retorna nada");
}
//Função com parâmetros tipados -- multiplicação(5,5) retorna 25
function multiplicacao(a, b) {
    return a * b;
}
//Função com parâmetros opcionais -- add(5, 10) retorna 15, add(5, 10, 2) retorna 1
function add(a, b, c) {
    return a + b + (c || 0);
}
//Função com valores inicias padrão 
function saudacao(nome = "Vynicius") {
    console.log(`Olá, ${nome}!`);
}
saudacao(); // Olá, Vynicius!
saudacao("Ana"); // Olá, Ana!
//Parametros nomeados - passando parametros de forma mais clara
function hello({ nome, idade }) {
    console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
}
hello({ nome: "Vynicius", idade: 22 }); // Olá, Vynicius! Você tem 22 anos. 
//Funções genericas - permite que a função trabalhe com diferentes tipos de dados
function imprimirValor(valor) {
    console.log(`O valor é: ${valor}`);
}
imprimirValor("Olá, mundo!"); // O valor é: Olá, mundo!
imprimirValor(42); // O valor é: 42
//Funções genericas com mais de um tipo
function imprimirValores(valor1, valor2) {
    console.log(`Valor 1: ${valor1}, Valor 2: ${valor2}`);
}
//ARQUIVO DE ESTUDO!//
