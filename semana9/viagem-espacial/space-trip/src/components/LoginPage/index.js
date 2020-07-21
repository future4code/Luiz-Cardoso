import React from 'react';
import { useHistory, useParams} from 'react-router-dom';


const Login = () => {
    let history = useHistory();

    const goToAboutPage = () => {
        history.push('/home-page')
    };

    const goToListDashboard = () => {
        history.push('/trips/list')
    };

  return (
    <div>
        <button onClick={goToAboutPage}>Home</button>
        <h1>Faça seu Login</h1>
        <div>
            <label>Email:</label>
            <input></input>
        </div>
        <div>
            <label>Senha:</label>
            <input></input>
        </div>
        <button onClick={goToListDashboard}>Entrar</button>
    </div>
  );
}

export default Login;