function limparDespesas(){
    let valorDespesa = document.getElementById("meuInput1")
    let descricao = document.getElementById("inputDescricao")
    let select = document.getElementById("meuSelect")
    valorDespesa.value = ""
    descricao.value = ""
    select.value = ""
}

let arrayCadastrar = []

const cadastrar = (limpar) => {
    let valor = document.getElementById("meuInput1")
    let descricao = document.getElementById("inputDescricao")
    let select = document.getElementById("meuSelect")

    if(valor !== "" || descricao !== "" || select !== ""){
        
        let infos = {
            valor: valorDespesa,
            tipo: select,
            descricao: descricao
        }
        
        arrayCadastrar.push(infos)
        limparDespesas()
    }
}