import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import postActors from '../../services/postActors';
import updateActors from '../../services/updateActors';


export default function ActorRegister() {

    const [actorName, setActorName] = React.useState('');
    const [actorProps, setActorProps] = React.useState<any>(null);
    const navigate = useNavigate();
    const params = useLocation();

    function handleSubmit() {
        actorProps ? 
        updateActors(actorName, actorProps.id).then((data)=>{
            alert(data + " Atualizado com sucesso!");
            navigate('/atores');
        })
        :
        postActors(actorName).then((data)=>{
            alert(data + " Cadastrado com sucesso!");
            navigate('/atores');
        }).catch((error)=>{
            alert(error.message + " falha!");
        });

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