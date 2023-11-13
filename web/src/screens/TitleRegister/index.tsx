import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import postActors from '../../services/postActors';
import updateActors from '../../services/updateActors';
import { Link } from 'react-router-dom';


export default function TitleRegister() {

    const [titleName, setTitleName] = React.useState('');
    const [titleYear, setTitleYear] = React.useState('');
    const [titleSinopse, setTitleSinopse] = React.useState('');
    const [titleCategoria, setTitleCategoria] = React.useState('');
    const [titleProps, setTitleProps] = React.useState<any>(null);
    const navigate = useNavigate();
    const params = useLocation();

    function handleSubmit() {
        titleProps ? 
        updateActors(titleName, titleProps.id).then((data)=>{
            navigate(-1)
            alert((data.name||"Título") + " Atualizado com sucesso!");
        }).catch((error: any) => {
            alert(error.message + " falha!");
        })
        :
        postActors(titleName).then((data)=>{
            navigate(-1)
            alert((data.name||"Título") + " Cadastrado com sucesso!");
        }).catch((error)=>{
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

    React.useEffect(() => {
        params.state ? (
            setTitleName(params.state.titleProps.name),
            setTitleProps(params.state.titleProps)
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
                            name="nome"
                            value={titleName}
                            onChange={handleInputChange1}
                        />
                    </div>

                    <div className='form-div'>
                        <label>Ano:</label>
                        <input
                            className="input-space"
                            type="text"
                            name="ano"
                            value={titleYear}
                            onChange={handleInputChange2}
                        />
                    </div>

                    <div className='form-div'>
                        <label>Sinopse:</label>
                        <input
                            className="input-space"
                            type="text"
                            name="sinopse"
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