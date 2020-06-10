let postArray = []


function adicaoParagrafo(){
    let inputTitulo = document.getElementById("text1")
    let inputAutor = document.getElementById("text2")
    let inputConteudo = document.getElementById("text3")


    let post = {
        titulo: inputTitulo.value,
        autor: inputAutor.value,
        conteudo: inputConteudo.value,
    }
    postArray.push(post)
    console.log(postArray)
    
    let partePost = document.getElementById("post-parte")
    partePost.innerHTML += `${post.titulo} ${post.autor} ${post.conteudo}`

    

    inputTitulo.value = ""
    inputAutor.value = ""
    inputConteudo.value = "" 
}


function funcaoEnter(evento) {
    if(evento.key === "Enter"){
        adicaoParagrafo()
    }
}