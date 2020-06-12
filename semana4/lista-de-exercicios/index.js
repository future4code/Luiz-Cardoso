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

    const quantidadeDeNumerosPares = 5

    let i = 0

    while(i < quantidadeDeNumerosPares) {
        console.log(i*2)
        i++
    }
    