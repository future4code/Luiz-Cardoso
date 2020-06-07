/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 const usuario = [comprarCarta(), comprarCarta()]
 const cpu = [comprarCarta(), comprarCarta()]

if(confirm("Quer iniciar uma nova rodada?")){
      while(usuario[0].valor === 11  && cpu[0].valor === 11){
         usuario[0] = comprarCarta()
         cpu[0] = comprarCarta()
         usuario[1] = comprarCarta()
         cpu[1] = comprarCarta()
         console.log("Os dois foram A, embaralhando novamente.")

      }alert("Suas cartas são " + usuario[0].texto + " " + usuario[1].texto + " a carta revelada do cpu é " + cpu[0].texto)
      // usuario comprar mais cartas
      let pontuacaoUsuario = usuario[0].valor + usuario[1].valor
      let pontuacaoCpu = cpu[0].valor + cpu[1].valor
      let comprarNovaCarta = confirm("Deseja comprar mais cartas?")
      let mensagem = usuario[0].texto + " " + usuario[1].texto + " " 
      
      while (comprarNovaCarta && pontuacaoUsuario < 21){
         usuario.push(comprarCarta())
         pontuacaoUsuario += usuario[usuario.length-1].valor
         mensagem += usuario[usuario.length-1].texto
         alert("Suas cartas são " + mensagem + " a carta revelada do cpu é " + cpu[0].texto)
         comprarNovaCarta = confirm("Deseja comprar mais cartas?")
      } 

      // pontuação cpu
      let mensagemCpu = cpu[0].texto + " " + cpu[1].texto + " "

      while (pontuacaoCpu < pontuacaoUsuario){
         cpu.push(comprarCarta())
         mensagemCpu += cpu[cpu.length-1].texto
         pontuacaoCpu += cpu[cpu.length-1].valor
      }
      // mostra mensagem fim de jogo
      alert("Suas cartas são " + mensagem + " e a sua pontuação é " + pontuacaoUsuario + "\ncartas da cpu são: " + mensagemCpu + " e a pontuação é " + pontuacaoCpu)


      if(pontuacaoUsuario < 21){
         alert("Pontuação menor que 21, o usuário ganhou")
      }
      else if (pontuacaoCpu > 21 && pontuacaoUsuario < 21){
         alert("usuario win")
      }else if (pontuacaoUsuario === pontuacaoCpu){
         alert("empateeeeeeeee xD")
      }else if (pontuacaoUsuario > 21){
         alert("Pontuação do usuário maior que 21, a cpu ganhou")
      }
   }else{
      alert("O jogo acabou")
      }

      // console.log("Carta do usuario ", carta1.texto, carta2.texto, "pontuação", carta1.valor + carta2.valor)
      // console.log("Carta do computador", carta3.texto, carta4.texto, "pontuação", carta3.valor + carta4.valor)
      // if ((carta1.valor + carta2.valor) === (carta3.valor + carta4.valor)){
      //    console.log("Empate!")
      // } else if ((carta1.valor + carta2.valor) > (carta3.valor + carta4.valor)){
      //    console.log("O usuario ganhou")
      // }else if ((carta1.valor + carta2.valor) < (carta3.valor + carta4.valor)){
      //    console.log("O computador ganhou")
      // }
      // }else{
      //  console.log("o jogo acabou")
      // }