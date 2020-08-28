import React from 'react';
import { useHistory, useParams} from 'react-router-dom';
import {} from '../HomePage/style'


const HomePage = () => {
    let history = useHistory();

    const goToLoginPage = () => {
        history.push('/login')
    }

    const goToApllicationFormPage = () => {
        history.push('/form-page')
    }

  return (
    <div>
        <h1>HomePage</h1>
        <div>
            <button onClick={goToLoginPage}>Fazer Login</button>
        </div>
        <div>
            <button onClick={goToApllicationFormPage}>Página de inscrição</button>
        </div>
    </div>
  );
}

export default HomePage;