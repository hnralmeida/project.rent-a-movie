import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DirectorRegister() {

    const [directorName, setDirectorName] = React.useState('');
    const navigate = useNavigate();

    function handleSubmit() {

        alert(directorName + " Cadastrado com sucesso!");
    }

    function handleInputChange(event: any) {
        setDirectorName(event.target.value);
    }

    return (
        <div className="App-content">
            <div className="row-content">
                <button
                    className='back-button'
                    onClick={() => navigate('/diretores')}
                >
                    Voltar
                </button>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nome:</label>
                        <input
                            type="text"
                            name="name"
                            value={directorName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div
                        className='submit-button-div'
                    >
                        <button
                            className='submit-button'
                            type="submit"
                        >
                            Cadastrar Diretor
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}