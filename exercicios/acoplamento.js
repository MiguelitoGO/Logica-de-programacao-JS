/*Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.*/
/*Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.*/

alert('Boas vindas');

let nome = 'Fabio Miguel';

console.log(`Ola ${nome}`);


//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
alert(`Ola, ${nome}`)


//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagemFavorita = prompt('Qual a linguagem de programação você mais gosta?')
console.log(linguagemFavorita)


/*Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene 
o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.*/

let valor1 = 9;
let valor2 = 4;

let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);


/*Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e 
armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." 
no console.*/

let subtracao = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${subtracao}`);

/*Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem 
apropriada no console. */

let idade = prompt('Insira sua idade:')

if(idade >= 18) {
    alert('Você esta apto para tira sua CNH')
} else {
    alert('Você ainda é menor de idade, volte ao completar 18.')
}

//continua...