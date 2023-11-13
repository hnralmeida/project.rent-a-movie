import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import updateItem from '../../services/updateItem';
import postItem from '../../services/postItem';

export default function ItemRegister() {

    const [itemNumSerie, setItemNumSerie] = React.useState('');
    const [itemdtAquisicao, setItemdtAquisicao] = React.useState('');
    const [itemTipo, setItemTipo] = React.useState('');
    const [itemProps, setItemProps] = React.useState<any>(null);
    const navigate = useNavigate();
    const params = useLocation();

    function handleSubmit() {
        itemProps ?
            updateItem(itemNumSerie, itemdtAquisicao, itemTipo, itemProps.id).then((data) => {
                alert(data + " Atualizado com sucesso!");
                navigate(-1)
            })
            :
            postItem(itemNumSerie).then((data) => {
                alert(data + " Cadastrado com sucesso!");
                navigate(-1)
            })
    }

    function handleInputChange1(event: any) {
        setItemNumSerie(event.target.value);
    }

    function handleInputChange2(event: any) {
        setItemdtAquisicao(event.target.value);
    }

    function handleInputChange3(event: any) {
        setItemTipo(event.target.value);
    }

    React.useEffect(() => {
        params.state ? (
            setItemNumSerie(params.state.itemProps.name),
            setItemProps(params.state.itemProps)
        ) : null;
    }, [params]);

    return (
        <div className="App-content">
            <div className="row-content">
                <button
                    className='back-button'
                    onClick={() => navigate('/itens')}
                >
                    Voltar
                </button>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="input-center">
                            <label>Número de Serie:</label>
                            <input
                                type="text"
                                name="name"
                                value={itemNumSerie}
                                onChange={handleInputChange1}
                            />
                        </div>
                        <div className="input-center">
                            <label>Data de Aquisição: </label>
                            <input
                                className="input-space"
                                type="number"
                                name="classValue"
                                value={itemdtAquisicao}
                                onChange={handleInputChange2}
                            />
                        </div>
                        <div className="input-center">
                            <label>Tipo: </label>
                            <input
                                className="input-space"
                                type="number"
                                name="classValue"
                                value={itemTipo}
                                onChange={handleInputChange3}
                            />
                        </div>
                    </div>

                    <div
                        className='submit-button-div'
                    >
                        <button
                            className='submit-button'
                            type="submit"
                        >
                            {itemProps ? 'Editar Item' : 'Cadastrar Item'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}