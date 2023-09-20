import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import updateDirector from '../../services/updateDirector';
import postDirectors from '../../services/postDirectors';

export default function DirectorRegister() {

    const [directorName, setDirectorName] = React.useState('');
    const [directorProps, setDirectorProps] = React.useState<any>(null);
    const navigate = useNavigate();
    const params = useLocation();

    function handleSubmit() {
        directorProps ?
            updateDirector(directorName, directorProps.id).then((data) => {
                alert(data + " Atualizado com sucesso!");
                navigate('/diretores');
            })
            :
            postDirectors(directorName).then((data) => {
                alert(data + " Cadastrado com sucesso!");
                navigate('/diretores');
            })

    }

    function handleInputChange(event: any) {
        setDirectorName(event.target.value);
    }

    React.useEffect(() => {
        params.state ? (
            setDirectorName(params.state.DirectorProps.name),
            setDirectorProps(params.state.DirectorProps)
        ) : null;
    }, [params]);
    
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
                            {directorProps ? 'Editar Diretor' : 'Cadastrar Diretor'} 
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}