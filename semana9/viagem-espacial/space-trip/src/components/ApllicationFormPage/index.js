import React from 'react';
import { useHistory, useParams} from 'react-router-dom';


const FormPage = () => {
    let history = useHistory();

    const goToHomePage = () => {
        history.push('/home-page')
    }
    
    return (
        <div>
            <button onClick={goToHomePage}>Home</button>
            Pagina de inscrição
        </div>
    );
}

export default FormPage;