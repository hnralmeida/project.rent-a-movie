import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';


export default function ActorRegister() {

    const [actorName, setActorName] = React.useState('');
    const [actorProps, setActorProps] = React.useState('');
    const navigate = useNavigate();
    const params = useLocation();

    function handleSubmit() {

        alert(actorName + " Cadastrado com sucesso!");
    }

    function handleInputChange(event: any) {
        setActorName(event.target.value);
    }

    React.useEffect(() => {
        params.state ? (
            setActorName(params.state.actorProps.name),
            setActorProps(params.state.actorProps)
        ) : null;
    }, [params]);

    return (
        <div className="App-content">
            <div className="row-content">
                <button
                    className='back-button'
                    onClick={() => navigate('/atores')}
                >
                    Voltar
                </button>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nome:</label>
                        <input
                            className="input-space"
                            type="text"
                            name="nome"
                            value={actorName}
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
                            {actorProps ? 'Editar ator' : 'Cadastrar Ator'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}