// exericio 1
//R: Vai pegar o valor da função conversorDeMoeda e multiplicar pelo valor colocado no prompt

//exercicio 2
// R: A função pega os valores das variaveis da função e multiplica o valor dela com os case do switch, resultand no valor da multiplicação aplicada em cada case. 
//Será exibido no console então, no primeiro caso, a case "Ações" com o resultado da multiplicação de 150 * 1.1, e no segundo caso, aparecerá a mensagem default, 
//já que "Tesouro Direto", não é um dos case do switch. 

//exercicio 3
//R: A função pega todo numero que a sobra da divisão por 2 é igual a 0 e empurra o resultado ao array1, caso for !== de 0, pro array 2. O console, mostra primeiro a quantidade
// de posições do array, abaixo, mostra a quantidade de posições que tem no array1, e depois a mesma coisa com o array2

//exercicio 4
//R: Será exibido no console, o maior e o menor numero do array, já que o laço faz com que percorra todo o arrei mantendo o meior e menor numero como valor em cada variavel

//exercicio Lógica Programação

//1.

//R: Podemos usar a propriedade for e seus atributos como: of, i = 0, forEach

// for(let algo of array){
    
// } - criei uma variavel algo, para percorrer todo o array

// for(let i = 0; i < array.lenght; i++){

// } - o elemento i vai percorrer todo o array, por conta da ferramenta .lenght, a cada vez que acabar a verificação de certo elemento, ele adiciona ele mesmo
// fazendo com que vá pro próximo

// array.forEach((array, idx, arr)) {

// } - o forEach pega cada informação do array, possibilitando você alterar ou modificar

// 2. 

// const booleano1 = true
// const booleano2 = false
// const booleano3 = !booleano2 - true
// const booleano4 = !booleano3  - false


// a) `booleano1 && booleano2  && !booleano4` -  false

// b) `(booleano1 && booleano2) || !booleano3` - false

// c)  `(booleano2 || booleano3) && (booleano4 || booleano1)` - true

// d) `!(booleano2 && booleano3) || !(booleano1 && booleano3)` - true

// e) `!(booleano1)  && !(booleano3) || (!booleano4 && booleano3  && booleano3)` - true

// 3. 

// const quantidadeDeNumerosPares
    // let i = 0
    // while(i <= quantidadeDeNumerosPares) {
    // console.log(i*2)
    // } - não vai funcionar pois falta um incremento, e um valor pra variável. Falta o incremento de i++, para adicionar à i, mais 1 a cada loop que fizer

    // const quantidadeDeNumerosPares = 5

    // let i = 0

    // while(i < quantidadeDeNumerosPares) {
    //     console.log(i*2)
    //     i++
    // }
    
    // exercicio 4

    // function trigronometria(a, b, c){
    //     if((a === b) && (b === c)){
    //         console.log("Equilatero")
    //     } 
    //     else if((a !== b) && (b !== c)){
    //         console.log("Escaleno")
    //     }
    //     else{
    //         console.log("Isósceles")
    //     }
    // }
    // trigronometria(5, 5, 2)

//     //5.
    
//     function numeroVerificado(numero1, numero2){
//         if(numero1 > numero2){
//             console.log(`O maior numero é ${numero1}`)
//         }
//         else {
//             console.log(`O menor numero é  ${numero1}`)
//         }

//         if(numero1 % numero2 === 0){
//             console.log(`${numero1} é divisivel por ${numero2}`)
//         }
//         else{
//             console.log(`${numero1} não é divisivel por ${numero2}`)
//         }
//         if(numero1 < numero2){
//             resultado = numero2 - numero1
//             console.log(`A diferença entre eles é ${resultado}`)
//         } else{
//             resultado = numero1 - numero2
//             console.log(`A diferença entre eles é ${resultado}`)
//         }
//     }
// numeroVerificado(15, 30)

// EXERCICIO DE FUNÇÕES

//1.

// const numeros = [50, 28, 40, 89, -50, -14, 80, 100, 150, 70]

// function selectNum(array){
//     let numero1 = Infinity 
//     let numero2 = 0

//     for(let numero of array){
//         if(numero < numero1){
//             numero1 = numero 
//         }
//         if(numero > numero2){
//             numero2 = numero
//     }
// }

//     array = array.filter((p, i, a) => {
//         return p !== numero1
//     })

//     array = array.filter((p, i, a) => {
//         return p !== numero2
//     })

//     numero1 = Infinity 
//     numero2 = 0

//     for(let numero of array){
//         if(numero < numero1){
//             numero1 = numero 
//         }
//         if(numero > numero2){
//             numero2 = numero
//         }
//     }
//     console.log("O segundo menor numero é ",numero1,"O segundo maior numero é ", numero2)
// }
// selectNum(numeros)

//2.
// let sayHello = () => {
//     alert("Hello LabenU")
// }

// sayHello()

// function criaRetangulo(lado1, lado2){
//     return {
//         largura: lado1,
//         altura: lado2,
//         perimetro: 2 * (lado1 + lado2),
//         area: (lado1*lado2)
//     }
// }

// console.log(criaRetangulo(10,20))

//3. 
// let filmeFavorito = {
//     titulo: "Velozes e Furiosos",
//     ano: "2001",
//     diretor: "Justin Lin",
//     atores: ["Vin Diesel", " Michelle Rodriguez", " Jordana Brewster", " Tyrese Gibson", " Paul Walker"]
// }

// console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ano ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores}`)

//4. 

let nome = prompt("qual seu nome?")
let idade = Number(prompt("qual sua idade?"))
let email = prompt("qual seu email?")
let endereco = prompt("qual seu endereço?")

let pessoa = {
    nome: nome,
    idade: idade,
    email: email,
    endereco: endereco
}

let anonimizarPessoa = (a) => {
    a.nome = "Anonimo"
}

anonimizarPessoa(pessoa)

console.log(pessoa)

