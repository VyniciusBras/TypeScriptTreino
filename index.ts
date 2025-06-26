// TypeScript Basics
let nome:string = "Vynicius";
let idade:number = 22;
let ativo:boolean = true;

// Tipos avançados
// Union Types sendo utilizado para mais de um valor
let myVariable: string | number;
myVariable = "Hello";
myVariable = 42;

// any é qualquer tipo de dado
let teste: any = 22;
teste = "texto";

//unknown é um tipo de dado que não sabemos o que é, mas sabemos que é um tipo de dado
let valor: unknown = 100;
valor = "texto agora";

let converte = valor as string;
console.log(converte.length);

//array - ts tem uma sintaxe especifica para matrizes
const names: number[] = [];
names.push(100);
names.push(2);

//interferencia de tipos
const numbers = [1,2,3];
numbers.push(4);
let y: number = numbers[0];

//readonly array - não pode ser alterada
const nomes: readonly string[] = ["Vynicius"];

//tuplas - array com tipos diferentes
let nossaTupla: [string, number, boolean];
nossaTupla = ["Vynicius", 22, true];

//objetos variaveis com valores dentro
const carro: {marca: string, modelo: string, ano: number, motor?: number } = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2003
};
carro.motor = 1.0; // opcional, pois motor é um campo opcional

//Assinaturas de indice
const nomeIdade: { [index: string]: number } = {};
    nomeIdade["Vynicius"] = 22;

// ALIASES -criando tipos de dados personalizados
type AnoVeiculo = number;
type MarcaVeiculo = string;
type ModeloVeiculo = string;
type Carro = {
    marca: MarcaVeiculo;
    modelo: ModeloVeiculo;
    ano: AnoVeiculo;
};

//Exemplo de uso de aliase

const Uno: AnoVeiculo = 2003;
const gol: MarcaVeiculo = "VW";
const Ferrari: ModeloVeiculo = "F40";
const Porsche: Carro = {
    marca: "Porsche", 
    modelo: "911",
    ano: 2022
};

//interface 
interface Retangulo {
    altura: number;
    largura: number;
}

//Exemplo de uso de interface
const retangulo: Retangulo = {
    altura: 10,
    largura: 20
};

//Estendendo interfaces - herdando propriedades do original e adiconando novas
interface Quadrado extends Retangulo {
    cor: string;
}

//Exemplo de uso de interface extendida
const quadrado: Quadrado = {
    altura: 10,
    largura: 10,
    cor: "preto"
};

// FUNÇÕES 

//Definindo o tipo de retorno da função
function getTime(): number {
    return new Date().getTime();
}

//Void - não retorna nada
function semRetorno(): void {
    console.log("Essa função não retorna nada");
}

//Função com parâmetros tipados -- multiplicação(5,5) retorna 25
function multiplicacao(a: number, b: number): number {
    return a * b;
}

//Função com parâmetros opcionais -- add(5, 10) retorna 15, add(5, 10, 2) retorna 1
function add(a: number, b: number, c?: number): number {
    return a + b + (c || 0);
}

//Função com valores inicias padrão 
function saudacao(nome: string = "Vynicius"): void {
    console.log(`Olá, ${nome}!`);
}

saudacao(); // Olá, Vynicius!
saudacao("Ana"); // Olá, Ana!

//Parametros nomeados - passando parametros de forma mais clara
function hello({ nome, idade }: { nome: string; idade: number }): void {
    console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
}

hello({ nome: "Vynicius", idade: 22 }); // Olá, Vynicius! Você tem 22 anos. 

//Funções genericas - permite que a função trabalhe com diferentes tipos de dados
function imprimirValor<T>(valor: T): void {
    console.log(`O valor é: ${valor}`);
}

imprimirValor<string>("Olá, mundo!"); // O valor é: Olá, mundo!
imprimirValor<number>(42); // O valor é: 42
//Funções genericas com mais de um tipo
function imprimirValores<T, U>(valor1: T, valor2: U): void {
    console.log(`Valor 1: ${valor1}, Valor 2: ${valor2}`);
}


//ARQUIVO DE ESTUDO!//