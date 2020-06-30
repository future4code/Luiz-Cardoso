import React from 'react';


class CadastroUsuarios extends React.Component {
    state = {
        inputNome: "",
        inputEmail: ""
    }

    onChangeNomeValue = event =>{
        this.setState({inputNome: event.target.value})
    }
    
    onChangeEmailValue = event => {
        this.setState({inputEmail: event.target.value})
    }

  render(){
    return (
      <div >
        <div>
            <button>Ir para página de lista</button>
            <div>
                <label>Nome:</label>
                <input 
                    value={this.state.inputNome}
                    onChange={this.onChangeNomeValue}
            />
            </div>
            <div>
                <label>Email:</label>
                <input 
                    value={this.state.inputEmail}
                    onChange={this.onChangeEmailValue}
                />
                <div>
                    <button> Salvar </button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default CadastroUsuarios;
