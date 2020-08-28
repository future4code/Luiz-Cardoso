import React, {  useEffect, useState } from 'react';
import { useHistory, useParams} from 'react-router-dom';

const useForm = initialValues => {
    const [form, setForm] = useState(initialValues);    

    const onChange = (name, value) => {
        const newForm = {...form, [name]: value};
        setForm(newForm)
    }

    return {form, onChange};
}

const FormPage = () => {
    let history = useHistory();
    const {form, onChange} = useForm({name: "", age: "", profession: "", apllicationText: ""})

    const handleInput = event => {
        const { name, value} = event.target

        onChange(name, value)
    }

    const goToHomePage = () => {
        history.push('/home-page')
    }
    
    return (
        <div>
            <button onClick={goToHomePage}>Home</button>
            <form>
                <input 
                    name="nome"
                    value={form.name}
                    onChange={handleInput}
                    placeholder="nome"
                    required
                />
                <input 
                    name="idade"
                    value={form.age}
                    onChange={handleInput}
                    placeholder="idade"
                    required
                />
                <input 
                    name="profissao"
                    value={form.profession}
                    onChange={handleInput}
                    placeholder="profissão"
                    required
                />
                <select> 
                    <option>---- Pais ---- </option>

                </select>
                <input 
                    name="motivo"
                    value={form.apllicationText}
                    onChange={handleInput}
                    placeholder="motivo"
                    required
                />
                <button>Inscrever-se</button>
            </form>
        </div>
    );
}

export default FormPage;