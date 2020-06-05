// const respostaDoUsuario = prompt("Digite o número que você quer testar?")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) { 
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// // divide o numero que o usuário digitar por 2 e verifica se terá algum resto
// // os que não tem resto, ou seja, numeros pares
// // para os impares, que deixam resto de divisão ao serem divididos por 2


// //exercicio 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM d.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// // a. pra informar o preço do produto escolhido pelo cliente
// // b. o preço da fruta maça é R$ 2.25
// // c. Resultará o valor de R$24,55, pois nas variáveis não tem "banana", recebendo o valor do default
// // d. O preço da fruta pera é R$ 5

// //exercício 3
// const numero1 = prompt("Digite o primeiro número.")
// const numero2 = prompt("Digite o próximo número?")

// if(numero1 > 0 && numero2 > 0) {
//   let mensagem
//   if(numero1 > numero2) {
//     mensagem = "Número 1 é maior que o 2!"
//   } else {
//     mensagem = "Número 1 é menor ou igual ao 2!"
//   }
// }

// console.log(mensagem)

// da erro pois o console está no global e não no bloco pai, sendo assim, ele não consegue ler o valor das variáveis


//exercicio 4 

//a
// let firstNumber = Number(prompt("Digite um numero"))
// let secondNumber = Number(prompt("Digite um numero"))

// if(firstNumber > secondNumber){
//     console.log(firstNumber, secondNumber)
// } else if(secondNumber > firstNumber){
//     console.log(secondNumber, firstNumber)
// } 
// // não acontece nada, quando coloco 2 numeros iguais

// //b 
// let firstNumber = Number(prompt("Digite um numero"))
// let secondNumber = Number(prompt("Digite um numero"))
// let thirdNumber = Number(prompt("Digite um numero"))

// if((firstNumber > secondNumber) && (secondNumber > thirdNumber)){
//     console.log(firstNumber,secondNumber,thirdNumber)
// } else if((secondNumber > firstNumber) && (firstNumber > thirdNumber)){
//     console.log(secondNumber,firstNumber,thirdNumber)
// } else if ((thirdNumber > secondNumber) && (secondNumber > firstNumber)){
//     console.log(thirdNumber,secondNumber,firstNumber)
// } else if ((secondNumber > thirdNumber) && (thirdNumber > firstNumber)){
//     console.log(secondNumber,thirdNumber,firstNumber)
// }  else if ((thirdNumber > firstNumber) && (firstNumber > secondNumber)){
//     console.log(thirdNumber,firstNumber,secondNumber)
// } else if ((thirdNumber > firstNumber) && (firstNumber < secondNumber)){
//     console.log(thirdNumber,secondNumber,thirdNumber)
// } else if ((firstNumber > thirdNumber) && (thirdNumber > secondNumber)){
//     console.log(firstNumber, thirdNumber, secondNumber)
// }

// //ao digitar valores iguais, nada é impresso

//c 
// let firstNumber = Number(prompt("Digite um numero"))
// let secondNumber = Number(prompt("Digite um numero"))
// let thirdNumber = Number(prompt("Digite um numero"))

// if((firstNumber > secondNumber) && (secondNumber > thirdNumber)){
//     console.log(firstNumber,secondNumber,thirdNumber)
// } else if((secondNumber > firstNumber) && (firstNumber > thirdNumber)){
//     console.log(secondNumber,firstNumber,thirdNumber)
// } else if ((thirdNumber > secondNumber) && (secondNumber > firstNumber)){
//     console.log(thirdNumber,secondNumber,firstNumber)
// } else if ((secondNumber > thirdNumber) && (thirdNumber > firstNumber)){
//     console.log(secondNumber,thirdNumber,firstNumber)
// }  else if ((thirdNumber > firstNumber) && (firstNumber > secondNumber)){
//     console.log(thirdNumber,firstNumber,secondNumber)
// } else if ((thirdNumber > firstNumber) && (firstNumber < secondNumber)){
//     console.log(thirdNumber,secondNumber,thirdNumber)
// } else if ((firstNumber > thirdNumber) && (thirdNumber > secondNumber)){
//     console.log(firstNumber, thirdNumber, secondNumber)
// } else {
//     console.log("os numeros digitados foram iguais, digite ao menos, um numero diferente")
// }


//exercicio 5
// let animal = prompt("Digite o nome do animal")
// let espinha = prompt("Esse animal é vertebrado?")
// switch (espinha){
//     case "sim":
//         let mamifero = prompt("Esse animal é um mamifero?")
//             switch (mamifero){
//                 case "sim":
//                     let tipo = prompt("Esse animal é humano?")
//                     break
//                     case "não":

//                     switch (pelo){
//                         case "sim":
//                             let 
//                     }
//             }
// }

// const penas = ""
// const terrestre = ""
// const vive = ""

// const animal = prompt("Informe o nome do animal")
// const vertebrado = prompt("O animal possui ossos?")

// if(vertebrado === "sim"){
//     const mamifero = prompt("O animal possui pelos?")
//     if(mamifero === "sim"){
//         const racional = prompt ("O animal é racional?")
//         if (racional === "sim"){
//             console.log("O animal " + animal + " É um ser humano")
//         }else {
//             console.log("O animal " + animal + " um mamifero não humano")
//         }
//     }else {
//         const penas = prompt("O animal possui penas?")
//         if(penas === "sim"){
//         console.log("O animal " + animal + " é uma ave")
//         }else{
//         const terrestre = prompt("O animal é terrestre?")
//             if(terrestre === "sim"){
//                 const vive = prompt("Passa a maior parte do tempo na agua?")
//                 if(vive === "sim"){
//                     console.log("O animal " + animal + " é anfíbio")
//                 }else{
//                     console.log("O animal " + animal + " é um réptil")
//                 }
//             }else {
//                 console.log("O animal " + animal + " é um peixe")
//             }
//         }
//     }
// }
// else{
//     console.log("O animal" + animal + " é um invertebrado")
// }


// exercícios aula 11

// let sum = 0
// for(let i = 0; i < 15; i++) {
//   sum += i 
// }
// console.log(sum) 

// R: aparece 105, pois o i, indica quantas vezes o loop tem que rodar, até alcançar a quantidade menor ou = a 15



// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// const novaLista = []
// const numero = 4
// for(const item of lista) {
//   if(item%numero === 0) {
//     novaLista.push(item)
//   }
// }
// console.log(novaLista)

// a. Faz com que os valores que não tem sobra, sejam empurrados a variavel novaLista
// b. (4)- indicando a quantidade de informações no array [10, 15, 25, 30]
// c. (6) [12, 15, 21, 27, 30]
// numero = 4 - 0 - indica posição, porém não aparece - [12]

//3a.
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let maiorNumero = array[0]
// let menorNumero = array[0]

// for(let i = 0; i < 12; i++){
//     let elemento = array[i]
//     if(elemento > maiorNumero){
//         maiorNumero = elemento
//     }
//     if(elemento < menorNumero){
//         menorNumero = elemento
//     }
// }

// console.log("O maior numero é ", maiorNumero);
// console.log(" O menor numero é ", menorNumero)

//b
// const array1 = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let novoArray = []

// for(let i of array1){ 
//     novoArray.push(i / 10)
// }
// console.log(novoArray)

//c 
// const array1 = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let novoArray = []

// for(let i of array1){ 
//     if(i%2 === 0){
//         novoArray.push(i)
//     }
// }
// console.log(novoArray)
    
//d
// const array1 = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for(let i = 0; i < array1.length-1; i++){ 
//     console.log("O elemento do " + i + " é " + array1[i])
// }
