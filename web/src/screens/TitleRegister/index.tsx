import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import updateTitle from '../../services/updateTitle';
import postTitle from '../../services/postTitle';
import getDirectors from '../../services/getDirectors';
import getClass from '../../services/getClass';
import getActors from '../../services/getActors';

interface Title {
    id: any,
    name: any,
    year: any,
    synopsis: any,
    category: any,
    actorDTOList: any[],
    directorDTO: any,
    typeDTO: any,
}
export default function TitleRegister() {

    // Dados do server
    const [listDirectors, setListDirectors] = React.useState<any[]>([]);
    const [listClasse, setListClasse] = React.useState<any[]>([]);
    const [listAtor, setListAtor] = React.useState<any[]>([]);

    // Formulário
    const [titleName, setTitleName] = React.useState('TESTE_FILME');
    const [titleYear, setTitleYear] = React.useState('');
    const [titleSinopse, setTitleSinopse] = React.useState('');
    const [titleDirector, setTitleDirector] = React.useState<any>();
    const [titleClassType, setTitleClassType] = React.useState('');
    const [titleCategoria, setTitleCategoria] = React.useState('');
    const [titleActors, setTitleActors] = React.useState<any[]>([]);

    // Informações do Título
    const [titleProps, setTitleProps] = React.useState<Title>();

    // Navegação
    const navigate = useNavigate();
    const params = useLocation();

    function handleSubmitForm() {
        const title = {
            id: titleProps ? titleProps.id : null,
            nome: titleName,
            ano: titleYear,
            sinopse: titleSinopse,
            diretor: titleDirector ? listDirectors.find((director) => director.id === Number(titleDirector)) : listDirectors[0],
            classe: titleClassType ? listClasse.find((classe) => classe.id === Number(titleClassType)) : listClasse[0],
            categoria: titleCategoria,
            atores: titleActors
        }

        titleProps ?
            updateTitle(title).then((data) => {
                navigate(-1)
                alert((data.name || "Título") + " Atualizado com sucesso!");
            }).catch((error: any) => {
                navigate(-1)
                alert(error.message + " falha!");
            })
            :
            postTitle(title).then((data) => {
                navigate(-1)
                alert((data.name || "Título") + " Cadastrado com sucesso!");
            }).catch((error) => {
                navigate(-1)
                alert(error.message + " falha!");
            });
    }

    function handleInputChange1(event: any) {
        setTitleName(event.target.value);
    }

    function handleInputChange2(event: any) {
        setTitleYear(event.target.value);
    }

    function handleInputChange3(event: any) {
        setTitleSinopse(event.target.value);
    }

    function handleInputChange4(event: any) {
        setTitleCategoria(event.target.value);
    }

    function handleInputChange5(event: any) {
        console.log(event.target.value);
        setTitleDirector(event.target.value);
    }

    function handleInputChange6(event: any) {
        setTitleClassType(event.target.value);
    }

    function handleInputChange7(event: any) {
        setTitleActors(event.target.value);
    }

    React.useEffect(() => {
        
        params.state ? (
            console.log(params.state.titleProps),
            setTitleProps(params.state.titleProps)
        ) : null;

    }, []);

    React.useEffect(() => {
        
        titleProps ? (
            setTitleName(titleProps.name),
            setTitleYear(titleProps.year),
            setTitleSinopse(titleProps.synopsis),
            setTitleDirector(titleProps.directorDTO ? titleProps.directorDTO.id : undefined),
            setTitleClassType(titleProps.typeDTO ? titleProps.typeDTO.id : undefined),
            setTitleCategoria(titleProps.category),
            setTitleActors(titleProps.actorDTOList)
        ) : null;

    }, [titleProps]);

    React.useEffect(() => {
        getDirectors().then((data) => {
            setListDirectors(data);
        }).catch((error) => {
            alert("Erro ao obter lista de diretores: " + error.message);
        });

        getClass().then((data) => {
            setListClasse(data);
        }).catch((error) => {
            alert("Erro ao obter lista de tipos de locação: " + error.message);
        });

        getActors().then((data) => {
            setListAtor(data);
        }).catch((error) => {
            alert("Erro ao obter lista de atores: " + error.message);
        });
    }, [titleProps]);

    return (
        <div className="App-content">
            <div className="column-content">
                <button
                    className='back-button'
                    onClick={() => navigate('/titulos')}
                >
                    Voltar
                </button>
                <form onSubmit={handleSubmitForm}>
                    <div className='form-div'>
                        <label>Nome:</label>
                        <input
                            className="input-space"
                            type="text"
                            name="name"
                            value={titleName}
                            onChange={handleInputChange1}
                        />
                    </div>

                    <div className='form-div'>
                        <label>Ano:</label>
                        <input
                            className="input-space"
                            type="text"
                            name="year"
                            value={titleYear}
                            onChange={handleInputChange2}
                        />
                    </div>

                    <div className='form-div'>
                        <label>Sinopse:</label>
                        <input
                            className="input-space"
                            type="text"
                            name="synopsis"
                            value={titleSinopse}
                            onChange={handleInputChange3}
                        />
                    </div>

                    <div className='form-div'>
                        <label>Categoria:</label>
                        <input
                            className="input-space"
                            type="text"
                            name="categoria"
                            value={titleCategoria}
                            onChange={handleInputChange4}
                        />
                    </div>

                    <div className='form-div'>
                        <label>Diretor:</label>
                        <select
                            className="input-space"
                            name="diretor"
                            onChange={handleInputChange5}
                        >
                            {listDirectors.map((director) => (
                                <option
                                    key={director.id}
                                    value={director.id}
                                >
                                    {director.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='form-div'>
                        <label>Classe: </label>
                        <select
                            className="input-space"
                            name="classe"
                            onChange={handleInputChange6}
                        >
                            {listClasse.map((classe) => (
                                <option
                                    key={classe.id}
                                    value={classe.id}
                                >
                                    {classe.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='form-div'>
                        <label>Elenco:</label>
                        <select
                            className="input-space"
                            name="diretor"
                            onChange={handleInputChange6}
                            multiple
                        >
                            {listAtor.map((actor) => (
                                <option
                                    key={actor.id}
                                    value={actor.id}
                                >
                                    {actor.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div
                        className='submit-button-div'
                    >
                        <button
                            className='submit-button'
                            type="submit"
                        >
                            {titleProps ? 'Editar Título' : 'Cadastrar Título'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}