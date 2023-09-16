import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ClassRegister() {

    const [name, setName] = React.useState('');
    const [value, setValue] = React.useState('');
    const [deadline, setDeadline] = React.useState('');

    const navigate = useNavigate();

    function handleSubmit() {

        alert(name + " Cadastrado com sucesso!");
    }

    function handleNameInputChange(event: any) {
        setName(event.target.value);
    }

    function handleValueInputChange(event: any) {
        setValue(event.target.value);
    }

    function handleDeadlineInputChange(event: any) {
        setDeadline(event.target.value);
    }

    return (
        <div className="App-content">
            <div className="row-content">
                <button
                    className='back-button'
                    onClick={() => navigate('/filmes')}
                >
                    Voltar
                </button>
                <form onSubmit={handleSubmit}>
                    <div className="input-center">
                        <label>Nome: </label>
                        <input
                            className="input-space"
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleNameInputChange}
                        />
                    </div>

                    <div className="input-center">
                        <label>Valor: </label>
                        <input
                            className="input-space"
                            type="number"
                            name="value"
                            value={value}
                            onChange={handleValueInputChange}
                        />
                    </div>
                    <div className="input-center">
                        <label>Prazo de Devolução: </label>
                        <input
                            className="input-space"
                            type="number"
                            name="deadline"
                            value={deadline}
                            onChange={handleDeadlineInputChange}
                        />
                    </div>

                    <div
                        className='submit-button-div'
                    >
                        <button
                            className='submit-button'
                            type="submit"
                        >
                            Cadastrar Ator
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}