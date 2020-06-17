import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {
    this.setState({
    curtido: !this.state.curtido,
  })
  
    if(this.state.curtido === false){
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas  + 1
      })
    }else{
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  } //6. o state é inicializado após as funções, que tem como propriedade as mesmas propriedades do state

  render() {
    let iconeCurtida

    if(this.state.curtido) { //o meu icone está com coração branco, sendo que se eu ainda n curti, ele deve permanecer preto, sendo que continua branco
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/> // fiquei confuso nessa parte, não entendi muito bem
    } //11. a função comentário é usada quando clicado o botão "enviar", fazendo com que a propriedade comentando retorne pra FALSE e adiciona a propriedade numeroComentarios +1, fazendo com que ela seja 1 ao inves de 0 

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida} //8. está sendo usada ao clicar no botão de curtida e como resultado da um console.log com a string "curtiu"
          valorContador={this.state.numeroCurtidas} // São props criadas dentro do componente IconeComContador, e no componente Post, essas props recebem os valores criados a partir das variaveis criadas no componente post.
        /> 
      
        <IconeComContador
          icone={iconeComentario}//9. altera o valor da propriedade comentando, ou seja, de false ao clicar se torna TRUE
          onClickIcone={this.onClickComentario} //10. ao clicar retorna o IF, que adiciona a secaoComentario (que inclui um input e um p) 
          valorContador={this.state.numeroComentarios} //abre os icones importados pelo componente post, porém adicionando um <p> com a contagem de quantas vezes esse icone foi ativado
        /> 
      </div> 
      {componenteComentario}
    </div>
  }
}

export default Post