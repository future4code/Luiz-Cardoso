// function imprimeArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }

//     return array.length
// }

// let banana = [1, 2, 3, 4, 10, 18, 20]
// let palavras = ['a', 'b']

// const tamanhoDoArray = imprimeArray(banana)
// console.log("Tamanho: ", tamanhoDoArray)




// const minhaFuncao = (quantidade) => {
// 	const array = []
// 	for(let i = 0; i < quantidade; i+=2) {
//         // i = i + 2 
// 			for(let j = 0; j < i; j++) {
//                 // j = 1
// 				array.push(j)
// 			}
// 	}
// 	return array
// }

// let resultado = minhaFuncao(8)
// console.log(resultado)

//a. [] - da primeira vez que o loop acontece, o i fica com valor de 0, não entrando na próxima continuação, retornando valor false
//b. [0, 1, 0, 1, 2, 3] - o loop acontece 6 vezes, até que na um valor seja maior que a quantidade.
//c. [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5] 

//exercicio 2
// let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

// const funcao = (lista, nome) => {
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] === nome) {
//       return i;
//     }
//   }
// };

// console.log(funcao(arrayDeNomes, "Darvas"));
// console.log(funcao(arrayDeNomes, "João"));
// console.log(funcao(arrayDeNomes, "Paula"));
// A. 0 2 undefined - o nome da terceira informação não tem no array, portanto não consegue definir sua posição
//B. funcionaria, pois a função pede pra retornar o indice, e não o nome (conteudo) da array

//execicio 3

// const num = [2, 3, 4]
// function metodo(array) {
//     let resultadoA = 0;
//     let resultadoB = 1;
//     let arrayFinal = [];
  
//     for (let x of array) {
//       resultadoA += x; 0 + 2 = 2 + 3 = 5 + 4 = 9
//       resultadoB *= x; 1 * 2 = 2 * 3 = 6 * 4 = 24
//     }
  
//     arrayFinal.push(resultadoA);
//     arrayFinal.push(resultadoB);
//     return arrayFinal;
//   }

//   console.log(metodo(num))

// R: Vai pegar todos os elementos do array somados no resultadoA, depois vai pegar todos os elementos multiplicados no resultadoB e colocar dentro do array final
// R: quebranozes (método)

//exercício 4
//a.
// let idadeQuestao = Number(prompt("Qual idade do cachorro?"))

// let idadeCachorro = () => {
//     let resultado = idadeQuestao * 7;
//     return resultado
// }
// console.log("A idade do dog é ", idadeCachorro(idadeQuestao))

//exercicio 5

let nome = prompt("Qual seu nome?")
let idade = Number(prompt("Qual sua idade?"))
let end = prompt("Qual seu endereço?")
let resposta = prompt("Você é estudante? S / N")

let fun = () => {
    if(resposta === "s"){
         resposta = "sou estudante"
    }
    else{
        resposta  = "não sou estudante"
    } 
    let mensagem = "Eu sou " + nome + " tenho " + idade + " anos, moro em " + end +" e " + resposta
    return mensagem
}
console.log(fun(nome, idade, end, resposta))