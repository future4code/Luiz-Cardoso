// function criarTarefa(){
//     const meuInput = document.getElementById("inputTarefa")
//     let item = meuInput.value

    
//     let diaSelecionado = document.getElementById("diaDaSemana")
//     let valor = diaSelecionado.value
    
//         if(valor === "segunda"){
//             const listaTarefas = document.getElementById("segunda")
//             listaTarefas.innerHTML += `<li> ${item} </li>`
//             meuInput.value = ""
//         }else if(valor === "terca"){
//             const listaTarefas = document.getElementById("terca")
//             listaTarefas.innerHTML += `<li> ${item} </li>`
//             meuInput.value = ""
//         }else if(valor === "quarta"){
//             const listaTarefas = document.getElementById("quarta")
//             listaTarefas.innerHTML += `<li> ${item} </li>`
//             meuInput.value = ""
//         }else if(valor === "quinta"){
//             const listaTarefas = document.getElementById("quinta")
//             listaTarefas.innerHTML += `<li> ${item} </li>`
//             meuInput.value = ""
//         }else if(valor === "sexta"){
//             const listaTarefas = document.getElementById("sexta")
//             listaTarefas.innerHTML += `<li> ${item} </li>`
//             meuInput.value = ""
//         }else if(valor === "sabado"){
//             const listaTarefas = document.getElementById("sabado")
//             listaTarefas.innerHTML += `<li> ${item} </li>`
//             meuInput.value = ""
//         }else if(valor === "domingo"){
//             const listaTarefas = document.getElementById("domingo")
//             listaTarefas.innerHTML += `<li> ${item} </li>`
//             meuInput.value = ""
//         }
        
// }


//DESAFIO 

function criarTarefa(){
    const meuInput = document.getElementById("inputTarefa")
    let item = meuInput.value

    
    let diaSelecionado = document.getElementById("diaDaSemana")
    let valor = diaSelecionado.value
        if(meuInput.value !== ""){

        if(valor === "segunda"){
                const listaTarefas = document.getElementById("segunda")
                listaTarefas.innerHTML += `<li> ${item} </li>`
                meuInput.value = ""
            }else if(valor === "terca"){
                const listaTarefas = document.getElementById("terca")
                listaTarefas.innerHTML += `<li> ${item} </li>`
                meuInput.value = ""
            }else if(valor === "quarta"){
                const listaTarefas = document.getElementById("quarta")
                listaTarefas.innerHTML += `<li> ${item} </li>`
                meuInput.value = ""
            }else if(valor === "quinta"){
                const listaTarefas = document.getElementById("quinta")
                listaTarefas.innerHTML += `<li> ${item} </li>`
                meuInput.value = ""
            }else if(valor === "sexta"){
                const listaTarefas = document.getElementById("sexta")
                listaTarefas.innerHTML += `<li> ${item} </li>`
                meuInput.value = ""
            }else if(valor === "sabado"){
                const listaTarefas = document.getElementById("sabado")
                listaTarefas.innerHTML += `<li> ${item} </li>`
                meuInput.value = ""
            }else if(valor === "domingo"){
                const listaTarefas = document.getElementById("domingo")
                listaTarefas.innerHTML += `<li> ${item} </li>`
                meuInput.value = ""
            }
        }else{
            alert("Nenhuma tarefa designada!")
        }
}
