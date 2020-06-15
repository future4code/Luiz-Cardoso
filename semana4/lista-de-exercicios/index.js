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

// let nome = prompt("qual seu nome?")
// let idade = Number(prompt("qual sua idade?"))
// let email = prompt("qual seu email?")
// let endereco = prompt("qual seu endereço?")

// let pessoa = {
//     nome: nome,
//     idade: idade,
//     email: email,
//     endereco: endereco
// }

// let anonimizarPessoa = (a) => {
//     let novoObjeto ={ 
//         ...pessoa,
//         nome: "Anonimo"
//     }
//     return novoObjeto
// }

// anonimizarPessoa(pessoa)

// console.log(pessoa)

//FUNÇÕES DE ARRAY


// let pessoas = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]
//a
// let retornaPessoaAdulta = (a) => {
//         a = a.filter((p, i, arr) => {
//         return p.idade >= 20
//     })  
//     return a
// }
// console.log(retornaPessoaAdulta(pessoas))

//b.
// let retornaPessoaMenor = (a) => {
//         a = a.filter((p, i, arr) => {
//         return p.idade < 20
//     })    
//     return a

// }
// console.log(retornaPessoaMenor(pessoas))

//2.
// const array = [1, 2, 3, 4, 5, 6]
//a.

// function multiplicarPorDois(a){
//     a = array.map((e, i, arr) => {
//     e *= 2
//     return e
// })
//     return a
// }
// console.log(multiplicarPorDois(array))

//b.
// function multiplicarPorTres(a){
//     a = array.map((e, i, arr) => {
//     e *= 3
//     return "" + e
// })
//     return a
// }
// console.log(multiplicarPorTres(array))

//c. 

// function parImpar(a) {
//     let mensagem = ""

//     a = array.map((e, i, arr) => {
//         if(e % 2 === 0){
//            return mensagem = e + " é par"
//         }else{
//             return mensagem = e + " é impar"
//         }
//     })
//     return a
// }
// console.log(parImpar(array))

//3. 
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]
// a.
// function selecionarPessoa(a){
//     a = a.filter((e, i, arr) =>{
//         return e.altura >= 1.5
//     })
//     a = a.filter((e, i, arr) => {
//         return e.idade >= 14 && e.idade <= 60
//     })

//     return a
// }
// console.log(selecionarPessoa(pessoas))

//b.
// function selecionarPessoa(a){
//     a = a.filter((e, i, arr) =>{
//         if(e.altura < 1.5 || e.idade < 14 || e.idade > 60){
//             return true
//         }
//     })   
//     return a
// }
// console.log(selecionarPessoa(pessoas))

//4. 
// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// const emails = []


//     consultas.forEach((e, i, arr) =>{
//         if(e.genero === "feminino" && e.cancelada === false){
//             emails.push(`Olá, Sra. ${e.nome}. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${e.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`)
//         }else if(e.genero === "masculino" && e.cancelada === false){
//             emails.push(`Olá, Sr. ${e.nome}. Estamos enviando esta mensagem para lembrá-la da sua consulta no dia ${e.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`)
//         }else if(e.genero === "feminino" && e.cancelada === true){
//             emails.push(`Olá, Sra. ${e.nome}. Infelizmente, sua consulta marcad para o dia ${e.dataDaConsulta} foi cancelada. Se quiser, pode entrar em  contato conosco para remarcá-la`)
//         }else if (e.genero === "masculino" && e.cancelada === true){
//             emails.push(`Olá, Sr.${e.nome}. Infelizmente, sua consulta marcada para o dia ${e.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`)
//         }
//     }) 
// console.log(emails)

//5. 

// const contas = [
// 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
// ]

// function atualizaSaldo(){
//     let atualiza = contas.forEach((e, i, arr)=>{
//         let c = 0

//         for(let i of e.compras){
//             c += i
//         }
//         e.saldoTotal = e.saldoTotal - c
//         c = 0 
//     })
//     return contas
// }
// console.log(atualizaSaldo(contas))