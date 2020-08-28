import React, { useState } from 'react';
import { useHistory, useParams} from 'react-router-dom';
import axios from 'axios';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/bombonatti"

const Login = () => {
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    const goToAboutPage = () => {
        history.push('/home-page')
    };

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangeSenha = (e) => {
        setSenha(e.target.value);
    }

    const login = () => {
        const body = {
            email: email,
            password: senha
        }

        axios.post(`${baseUrl}/login`, body).then(response => {
            window.localStorage.setItem("token", response.data.token);

            console.log(response)
            history.push('/trips/list')
        }).catch( err => {
            console.log(err.message)
        })
    }

  return (
    <div>
        <button onClick={goToAboutPage}>Home</button>
        <h1>Faça seu Login</h1>
        <div>
            <label>Email:</label>
            <input value={email} onChange={onChangeEmail}></input>
        </div>
        <div>
            <label>Senha:</label>
            <input value={senha} onChange={onChangeSenha}></input>
        </div>
        <button onClick={login}>Entrar</button>
    </div>
  );
}

export default Login;