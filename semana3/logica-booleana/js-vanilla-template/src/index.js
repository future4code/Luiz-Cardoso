const bool1 = true
const bool2 = false
const bool3 = !bool2 //true 

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado) //r: false - pois os booleanos envolvidos não receberam o mesmo valor, são compostos por valores diferentes. 

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado) //r: false - sendo dentro do parenteses retornado valor true, pois esse operador só retorna false, se todos os booleanos envolvidos forem false. true && contrário do booleano 3, resultam no contrário do contrário do booleano 2, que é false.

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado) //r: true - dentro do parenteses tem 2 booleanos com valor igual, operando ele com o contrário do ultimo resultado, retornam 2 valores iguais, ou seja, true. 

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado) //r: false - resultado = true, (contrario bool1 = false || bool2 = false) - false com false = false, !(contrario do)bool3 = false (contrário de bool2 é true), sendo assim - true && false && false - true com false resulta em false, sobrando, false && false = false.

console.log("e. ", typeof resultado) //r: boolean - o resultado está em formato booleano, typeof faz com que seja impresso o tipo de informação está sendo utilizada na sintaxe


// exercicio 2 //

let array
console.log('I. ', array)

array = null
console.log('II. ', array)


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])

i = array.length - 1 // 10
array[i] = array[i-3] // posição 7 - [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 10]
const resultadoC = array[i]%array[1] // i = 10 
console.log('VII. ', resultadoC)

// a. O que é `array` e como se declara em `JS`? r: permite colocar mais de uma informação ao mesmo tempo. Se declara com cochetes.

// b. Qual o index inicial de um `array`? r: 0

// c. Como se determinar o tamanho do `array`? r: Colocando a propriedade .length. 

// d. Indique todas as mensagens impressas no console.
/* r: I. undefinied - não foi determinado valor a array
     II. Null - foi dado um valor nulo ao array
     III. 11 - determina o tamanho do array a propriedade .length
     IV. 3 e 4 - i [0] - indica a posição do array, sendo 0 = 3 e somado mais um é = 4
     V. 19 e 9 
     VI. 3 - i recebeu adição de valor a sua posição, tornando ela a posição 1, recebendo o valor de 1-1 que é = 0, sendo a informação desta posição, 3
     VII. 2 - sendo 2 o resto da equação da divisão entre a posição a posição 10 que é o valor de i e a posição 1 que foi determinado ao segundo array.

    */

    // exercicio 3 
// F PARA K
let kelvin;
kelvin = (77 - 32)*5/9 + 273.15
console.log("temperatura de F para K" + " "+  kelvin + "ºK" )

//C PARA F
let f;
f = (80)*9/5 + 32
console.log("temperatura de C para F" + " " + f + "ºF")