function limparDespesas(){
    let valorDespesa = document.getElementById("meuInput1")
    let descricao = document.getElementById("inputDescricao")
    let select = document.getElementById("meuSelect")
    valorDespesa.value = ""
    descricao.value = ""
    select.value = ""
}

const cadastrar = (limpar) => {
    let valor = document.getElementById("meuInput1")
    let descricao = document.getElementById("inputDescricao")
    let select = document.getElementById("meuSelect")

    if((valor.value !== "") && (descricao.value !== "") && (select.value !== "")){

        let infos = {
            valor: valor.value,
            tipo: select.value,
            descricao: descricao.value
        }
        
        
        arrayCadastrar.push(infos)
        console.log(arrayCadastrar)
        
        
        listaDespesas.innerHTML += `<h3>Despesa<h3> <p>Valor: ${valor.value}</p> <p>Tipo: ${select.value}</p> <p>Descrição: ${descricao.value}</p> `
    }
    else{
        alert("Campos Vazios")
    }
    
    limparDespesas()
}
    let arrayCadastrar = []
    let listaDespesas = document.getElementById("lista-despesa")

const filtrar = () =>{
    let valor2 = document.getElementById("meuSelect2")
    let valorMax = document.getElementById("meuInput2")
    let valorMin = document.getElementById("meuInput3")
    let arrayDespesas = []
    let listaFiltrada = []

    
    arrayDespesas = arrayCadastrar.filter((valor, idx, arr) =>{
    return valor.tipo === valor2.value 
     })
     
     console.log

     if(valorMin.value < valorMax.valor && valorMax > valorMin.valor){
        listaDespesas.innerHTML += 
     }

     }