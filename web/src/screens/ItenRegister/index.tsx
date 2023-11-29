import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import updateItem from '../../services/updateItem';
import postItem from '../../services/postItem';
import getTitle from '../../services/getTitle';
import listTitle from '../../services/listTitle';

export default function ItemRegister() {

    const [itemNumSerie, setItemNumSerie] = React.useState('');
    const [itemdtAquisicao, setItemdtAquisicao] = React.useState('');
    const [itemTipo, setItemTipo] = React.useState('');
    const [title_id, setTitle_id] = React.useState('');
    const [titleList, setTitleList] = React.useState<any[]>([]);
    const [itemProps, setItemProps] = React.useState<any>(null);
    const navigate = useNavigate();
    const params = useLocation();

    function handleSubmit() {

        // Objeto de Item
        const itemSubmit = {
            id: itemProps.id,
            numSerie: itemNumSerie,
            dtAquisicao: itemdtAquisicao,
            tipoItem: itemTipo,
            title_id: title_id
        }

        itemProps ?
            updateItem(itemSubmit).then((data) => {
                alert("Atualizado com sucesso!");
                navigate(-1)
            }).catch((error: any) => {
                alert("Falha:" + error.message);
            })
            :
            postItem(itemSubmit).then((data) => {
                alert("Cadastrado com sucesso!");
                navigate(-1)
            }).catch((error: any) => {
                alert("Falha:" + error.message);
            }
            )
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

    function handleInputChange4(event: any) {
        setTitle_id(event.target.value);
    }

    React.useEffect(() => {
        // Busca os Titulos
        listTitle()
            .then(res => setTitleList(res))
            .catch(error => alert("Falha: " + error));

        // Se vier a partir do fluxo de edição, seta os valores iniciais
        params.state ? (
            setItemProps(params.state.itemProps),
            setItemNumSerie(params.state.itemProps.serialNumber),
            setItemTipo(params.state.itemProps.itemType),
            setTitle_id(params.state.itemProps.title_id),
            setItemdtAquisicao(params.state.itemProps.dtAquisicao)
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
                                className="input-space"
                                type="text"
                                name="serialNumber"
                                value={itemNumSerie}
                                onChange={handleInputChange1}
                            />
                        </div>
                        <div className="input-center">
                            <label>Data de Aquisição: </label>
                            <input
                                className="input-space"
                                type="date"
                                name="dtAquisicao"
                                value={itemdtAquisicao}
                                onChange={handleInputChange2}
                            />
                        </div>
                        <div className="input-center">
                            <label>Tipo: </label>
                            <input
                                className="input-space"
                                type="text"
                                name="itemType"
                                value={itemTipo}
                                onChange={handleInputChange3}
                            />
                        </div>
                        <div className="input-center">
                            <label id="title">Título: </label>
                            <select
                                className="input-space"
                                id="title"
                                name="title_id"
                                value={title_id}
                                onChange={handleInputChange4}
                            >
                                {
                                    titleList.map(title => (
                                        <option
                                            key={title.id}
                                            value={title.id}
                                        >
                                            {title.name}
                                        </option>
                                    )
                                    )
                                }
                            </select>
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