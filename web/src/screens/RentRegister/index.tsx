import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import updateRent from '../../services/updateRent';
import postRent from '../../services/postRent';
import getItem from '../../services/getItem';
import listTitle from '../../services/listTitle';

export default function RentRegister() {

    // Dados do servidor
    const [listItem, setlistItem] = React.useState<any[]>([]);
    const [listClient, setlistClient] = React.useState<any[]>([]);


    const [idItemSelected, setItemId] = React.useState('');
    const [itemSelected, setItemSelected] = React.useState<any>(null);
    const [cliente, setCliente] = React.useState('');
    const [returnDate, setReturnDate] = React.useState<any>();
    const [limitDate, setLimitDate] = React.useState('');
    const [rentDate, setRentDate] = React.useState<any>();
    const [charge, setcharge] = React.useState('');
    const [lateFee, setLateFee] = React.useState('');

    const [RentProps, setRentProps] = React.useState<any>(null);
    const navigate = useNavigate();
    const params = useLocation();

    function handleSubmit() {
        const rentSubmit = {
            id: RentProps ? RentProps.id : null,
            dtLocacao: rentDate,
            dtPrevista: limitDate,
            dtDevolucao: returnDate,
            cliente: cliente ? listClient.find((cli) => cli.id === Number(cliente)) : listClient[0],
            item: itemSelected ? itemSelected : listItem[0],
            valorCobrado: charge,
            multa: lateFee,
        }
        RentProps ?
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
    
    function handleItemInputChange(event: any) {
        setItemId(event.target.value);
        setItemSelected(listItem.find((item) => item.id === Number(event.target.value)));
    }

    function handleClienteInputChange(event: any) {
        setCliente(event.target.value);
    }

    function handleReturnDateInputChange(event: any) {
        setReturnDate(event.target.value);
    }

    function handleLimitDateInputChange(event: any) {
        setLimitDate(event.target.value);
    }

    function handleRentDateInputChange(event: any) {
        setRentDate(event.target.value);
    }

    function handleChargeInputChange(event: any) {
        setcharge(event.target.value);
    }

    function handleLateFeeInputChange(event: any) {
        setLateFee(event.target.value);
    }

    
    useEffect(() => {
        itemSelected ? (
            setLimitDate(itemSelected.typeDTO.returnDate + new Date()),
            setcharge(itemSelected.typeDTO.classValue),
            setRentDate(new Date().getTime())
        ) : null;
    }, [itemSelected]);

    React.useEffect(() => {
        params.state ? (
            setRentProps(params.state.classProps)
        ) : null;

        getItem().then((response) => {
            setlistItem(response);
        })
    }, []);


    React.useEffect(() => {
        RentProps ? (
            setItemId(params.state.classProps.name),
            setCliente(params.state.classProps.classValue),
            setReturnDate(params.state.classProps.returnDate)
        ) : null;

    }, [RentProps]);


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
                        <label>Cliente:</label>
                        <select
                            className="input-space"
                            name="cliente"
                            onChange={handleClienteInputChange}
                        >
                            {listClient.map((cliente) => (
                                <option
                                    key={cliente.id}
                                    value={cliente.id}
                                >
                                    {cliente.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="input-center">
                        <label>Item: </label>
                        <select
                            className="input-space"
                            name="item"
                            onChange={handleItemInputChange}
                        >
                            {listItem.map((item) => (
                                <option
                                    key={item.id}
                                    value={item.id}
                                >
                                    {item.titleDTO.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="input-center">
                        <label>Valor: </label>
                        <text
                            name="returnDate"
                        >
                            R$ {itemSelected ? itemSelected.typeDTO.classValue : '?'}
                        </text>
                    </div>
                    {
                        RentProps ?
                            (
                                <>
                                    <div className="input-center">
                                        <label>Empréstimo: </label>
                                        <input
                                            className="form-div"
                                            type="date"
                                            name="rentDate"
                                            value={rentDate}
                                            onChange={handleRentDateInputChange}
                                        />
                                    </div>

                                    <div className="input-center">
                                        <label>Devolução: </label>
                                        <input
                                            className="form-div"
                                            type="date"
                                            name="returnDate"
                                            value={returnDate}
                                            onChange={handleReturnDateInputChange}
                                        />
                                    </div>

                                    <div className="input-center">
                                        <label>Limite: </label>
                                        <input
                                            className="form-div"
                                            type="date"
                                            name="limitDate"
                                            value={limitDate}
                                            onChange={handleLimitDateInputChange}
                                        />
                                    </div>

                                    <div className="input-center">
                                        <label>Valor Cobrado: </label>
                                        <input
                                            className="form-div"
                                            type="number"
                                            name="charge"
                                            value={charge}
                                            onChange={handleChargeInputChange}
                                        />
                                    </div>

                                    <div className="input-center">
                                        <label>Multa: </label>
                                        <input
                                            className="form-div"
                                            type="number"
                                            name="lateFee"
                                            value={lateFee}
                                            onChange={handleLateFeeInputChange}
                                        />
                                    </div>
                                </>
                            ) : (
                                <div className="input-center">
                                    <label>Prazo de Devolução: </label>
                                    <text
                                        name="returnDate"
                                    >
                                        {itemSelected ? itemSelected.typeDTO.returnDate + ' dias' : '?'}
                                    </text>
                                </div>
                            )

                    }

                    <div
                        className='submit-button-div'
                    >
                        <button
                            className='submit-button'
                            type="submit"
                        >
                            {RentProps ? 'Editar Locação' : 'Cadastrar Locação'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}