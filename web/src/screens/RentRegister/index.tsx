import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import updateRent from '../../services/updateRent';
import postRent from '../../services/postRent';
import getItem from '../../services/getItem';
import listTitle from '../../services/listTitle';
import getClient from '../../services/listClient';

export default function RentRegister() {

    // Dados do servidor
    const [listItem, setlistItem] = React.useState<any[]>([]);
    const [listClient, setlistClient] = React.useState<any[]>([]);

    const [itemSelected, setItemSelected] = React.useState<any>(null);
    const [cliente, setCliente] = React.useState('');
    const [returnDate, setReturnDate] = React.useState<any>();
    const [limitDate, setLimitDate] = React.useState<any>();
    const [rentDate, setRentDate] = React.useState<any>();
    const [charge, setcharge] = React.useState(0);
    const [lateFee, setLateFee] = React.useState(0);

    const [RentProps, setRentProps] = React.useState<any>(null);
    const navigate = useNavigate();
    const params = useLocation();

    function handleSubmitForm() {
        alert(cliente + ' ' + itemSelected.titleDTO.name);

        const rentSubmit = {
            id: RentProps ? RentProps.id : null,
            dtLocacao: rentDate.getTime(),
            dtPrevista: limitDate.getTime(),
            dtDevolucao: returnDate.getTime(),
            cliente: cliente ? listClient.find((cli) => cli.id === Number(cliente)) : listClient[0],
            item: itemSelected,
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
            alert('Enviando: ' + rentSubmit.cliente.name + ' ' + rentSubmit.item.titleDTO.name)
    }

    function handleItemInputChange(event: any) {
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
            setLimitDate(itemSelected.titleDTO.type.returnDate + new Date()),
            setcharge(itemSelected.titleDTO.type.classValue)
        ) : null;
    }, [itemSelected]);

    React.useEffect(() => {
        params.state ? (
            setRentProps(params.state.classProps)
        ) : null;

        setRentDate(new Date().getTime())

        getItem().then((response) => {
            setlistItem(response);
            setItemSelected(response[0]);
        }).catch((error) => {
            alert(error);
        });

        getClient().then((response) => {
            setlistClient(response);
        }).catch((error) => {
            alert(error);
        });

    }, []);


    React.useEffect(() => {

        RentProps ? (
            setItemSelected(params.state.classProps.item),
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
                <form onSubmit={handleSubmitForm}>
                    <div>
                        <div className="input-center">
                            <label>Cliente:</label>
                            <select
                                className="input-space"
                                name="cliente"
                                onChange={handleClienteInputChange}
                            >
                                {
                                    listClient.map((cliente) => (
                                        <option
                                            key={cliente.id}
                                            value={cliente.id}
                                        >
                                            {cliente.name}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="input-center">
                            <label>Item: </label>
                            <select
                                className="input-space"
                                name="item"
                                onChange={handleItemInputChange}
                            >
                                {
                                    listItem.map((item) => (
                                        <option
                                            key={item.id}
                                            value={item.id}
                                        >
                                            {item.titleDTO.name}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="input-center">
                            <label>Valor: </label>
                            <text
                                name="returnDate"
                            >
                                R$ {itemSelected ? itemSelected.titleDTO.type.classValue : '?'}
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
                                                defaultValue={"2023-12-12"}
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
                                            {itemSelected ? itemSelected.titleDTO.type.returnDate + ' dias' : '?'}
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
                    </div>
                </form >
            </div >
        </div >
    )
}