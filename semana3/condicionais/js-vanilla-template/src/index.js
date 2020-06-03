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

const penas = ""
const terrestre = ""
const vive = ""

const animal = prompt("Informe o nome do animal")
const vertebrado = prompt("O animal possui ossos?")

if(vertebrado === "sim"){
    const mamifero = prompt("O animal possui pelos?")
    if(mamifero === "sim"){
        const racional = prompt ("O animal é racional?")
        if (racional === "sim"){
            console.log("O animal " + animal + " É um ser humano")
        }else {
            console.log("O animal " + animal + " um mamifero não humano")
        }
    }else {
        const penas = prompt("O animal possui penas?")
        if(penas === "sim"){
        console.log("O animal " + animal + " é uma ave")
        }else{
        const terrestre = prompt("O animal é terrestre?")
            if(terrestre === "sim"){
                const vive = prompt("Passa a maior parte do tempo na agua?")
                if(vive === "sim"){
                    console.log("O animal " + animal + " é anfíbio")
                }else{
                    console.log("O animal " + animal + " é um réptil")
                }
            }else {
                console.log("O animal " + animal + " é um peixe")
            }
        }
    }
}
else{
    console.log("O animal" + animal + " é um invertebrado")
}