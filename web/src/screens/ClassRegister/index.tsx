import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import updateClass from '../../services/updateClass';
import postClass from '../../services/postClass';

export default function ClassRegister() {

    const [name, setName] = React.useState('');
    const [value, setValue] = React.useState('');
    const [deadline, setDeadline] = React.useState('');

    const [classProps, setClassProps] = React.useState<any>(null);
    const navigate = useNavigate();
    const params = useLocation();

    function handleSubmit() {
        classProps ?
            updateClass(name, value, deadline, classProps.id).then((data) => {
                alert(data + " Atualizado com sucesso!");
                navigate('/filmes');
            })
            :
            postClass(name, value, deadline).then((data) => {
                alert(data + " Cadastrado com sucesso!");
                navigate('/filmes');
            })
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

    React.useEffect(() => {
        console.log(params.state.classProps)
        params.state ? (
            setName(params.state.classProps.name),
            setValue(params.state.classProps.value),
            setDeadline(params.state.classProps.deadline),
            setClassProps(params.state.classProps)
        ) : null;
    }, [params]);

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
                            {classProps ? 'Editar Filme' : 'Cadastrar Filme'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}