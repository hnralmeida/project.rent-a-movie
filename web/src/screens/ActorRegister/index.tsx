import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import postActors from '../../services/postActors';
import updateActors from '../../services/updateActors';
import { Link } from 'react-router-dom';


export default function ActorRegister() {

    const [actorName, setActorName] = React.useState('');
    const [actorProps, setActorProps] = React.useState<any>(null);
    const navigate = useNavigate();
    const params = useLocation();

    function handleSubmit() {
        actorProps ?
            updateActors(actorName, actorProps.id).then((data) => {
                alert((data.name || "Ator") + " Atualizado com sucesso!");
            }).catch((error: any) => {
                alert(error.message + " falha!");
            })
            :
            postActors(actorName).then((data) => {
                alert((data.name || "Ator") + " Cadastrado com sucesso!");
            }).catch((error) => {
                alert(error.message + " falha!");
            });
        navigate("/atores")

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
            <div className="column-content">
                <button
                    className='back-button'
                    onClick={() => navigate('/atores')}
                >
                    Voltar
                </button>
                <form onSubmit={handleSubmit}>
                    <div className='form-div'>
                        <label>Nome:</label>
                        <input
                            className="input-space"
                            type="text"
                            name="name"
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