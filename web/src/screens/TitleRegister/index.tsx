import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import updateTitle from '../../services/updateTitle';
import postTitle from '../../services/postTitle';

interface Title {
    id: any,
    title: any,
    nome: any,
    ano: any,
    sinopse: any,
    diretor: any,
    classe: any,
    categoria: any,
    atores: any
}
export default function TitleRegister() {

    // Fomrulário
    const [titleName, setTitleName] = React.useState('default');
    const [titleYear, setTitleYear] = React.useState('');
    const [titleSinopse, setTitleSinopse] = React.useState('');
    const [titleDirector, setTitleDirector] = React.useState('');
    const [titleClassType, setTitleClassType] = React.useState('');
    const [titleCategoria, setTitleCategoria] = React.useState('');
    const [titleActors, setTitleActors] = React.useState<any[]>([]);

    // Informações do Título
    const [titleProps, setTitleProps] = React.useState<Title>(
    );

    // Navegação
    const navigate = useNavigate();
    const params = useLocation();

    function handleSubmit() {
        const title = {
            title: titleProps?.id,
            nome: titleName,
            ano: titleYear,
            sinopse: titleSinopse,
            diretor: titleDirector,
            classe: titleClassType,
            categoria: titleCategoria,
            atores: titleActors
        }

        titleProps ?
            updateTitle(title).then((data) => {
                navigate(-1)
                alert((data.name || "Título") + " Atualizado com sucesso!");
            }).catch((error: any) => {
                alert(error.message + " falha!");
            })
            :
            postTitle(title).then((data) => {
                navigate(-1)
                alert((data.name || "Título") + " Cadastrado com sucesso!");
            }).catch((error) => {
                alert(error.message + " falha!");
            });
    }

    function handleInputChange(event: any, at: string) {
        const newTitleProps = {
            ...titleProps, 
            [at]: event.target.value
        }

        setTitleProps(newTitleProps as Title);
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

    React.useEffect(() => {
        console.log(params.state);
        params.state ? (
            setTitleProps(params.state.titleProps),
            setTitleName(params.state.titleProps.TitleName),
            setTitleYear(params.state.titleProps.TitleYear),
            setTitleSinopse(params.state.titleProps.TitleSinopse),
            setTitleDirector(params.state.titleProps.TitleDirector),
            setTitleClassType(params.state.titleProps.TitleClassType),
            setTitleCategoria(params.state.titleProps.TitleCategoria),
            setTitleActors(params.state.titleProps.TitleActors)
        ) : null;
    }, [params]);

    return (
        <div className="App-content">
            <div className="column-content">
                <button
                    className='back-button'
                    onClick={() => navigate('/titulos')}
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