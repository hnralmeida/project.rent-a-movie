import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import updateRent from '../../services/updateRent';
import postRent from '../../services/postRent';

export default function RentRegister() {

    const [name, setName] = React.useState('');
    const [value, setValue] = React.useState('');
    const [returnDate, setreturnDate] = React.useState('');

    const [ClientProps, setClientProps] = React.useState<any>(null);
    const navigate = useNavigate();
    const params = useLocation();

    function handleSubmit() {
        const rentSubmit = {
            id: ClientProps ? ClientProps.id : null,
            name: name,
            value: value,
            returnDate: returnDate
        }
        ClientProps ?
            updateRent(rentSubmit).then((data: any) => {
                navigate(-1)
                alert(data + " Atualizado com sucesso!");
            }).catch((error: any) => {
                alert(error);
            })
            :
            postRent(rentSubmit).then((data: any) => {
                navigate(-1)
                alert(data + " Cadastrado com sucesso!");
            }).catch((error: any) => {
                alert(error);
            });
    }

    function handleNameInputChange(event: any) {
        setName(event.target.value);
    }

    function handleValueInputChange(event: any) {
        setValue(event.target.value);
    }

    function handlereturnDateInputChange(event: any) {
        setreturnDate(event.target.value);
    }

    React.useEffect(() => {
        params.state ? (
            setName(params.state.classProps.name),
            setValue(params.state.classProps.classValue),
            setreturnDate(params.state.classProps.returnDate),
            setClientProps(params.state.classProps)
        ) : null;
    }, [params]);

    return (
        <div className="App-content">
            <div className="row-content">
                <button
                    className='back-button'
                    onClick={() => navigate(-1)}
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
                            name="classValue"
                            value={value}
                            onChange={handleValueInputChange}
                        />
                    </div>
                    <div className="input-center">
                        <label>Prazo de Devolução: </label>
                        <input
                            className="input-space"
                            type="number"
                            name="returnDate"
                            value={returnDate}
                            onChange={handlereturnDateInputChange}
                        />
                    </div>

                    <div
                        className='submit-button-div'
                    >
                        <button
                            className='submit-button'
                            type="submit"
                        >
                            {ClientProps ? 'Editar Filme' : 'Cadastrar Filme'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}