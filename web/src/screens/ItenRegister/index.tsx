import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import updateItem from '../../services/updateItem';
import postItem from '../../services/postItem';
import getTitle from '../../services/getTitle';
import listTitle from '../../services/listTitle';

const item_tipo = [
    "DVD",
    "VHS",
    "BLURAY"
]

export default function ItemRegister() {

    // Dados vindo do servidor para o select
    const [titleList, setTitleList] = React.useState<any[]>([]);

    // Register Form elements
    const [itemNumSerie, setItemNumSerie] = React.useState('');
    const [itemdtAquisicao, setItemdtAquisicao] = React.useState<any>();
    const [itemTipo, setItemTipo] = React.useState(1);
    const [titleId, setTitle] = React.useState('');

    // Entrada do modo edição
    const params = useLocation();
    const [itemProps, setItemProps] = React.useState<any>(null);

    const navigate = useNavigate();

    function handleSubmitForm() {
        // Objeto de Item
        const itemSubmit = {
            id: itemProps ? itemProps.id : null,
            numSerie: itemNumSerie,
            dtAquisicao: itemdtAquisicao.getTime(),
            tipoItem: item_tipo[itemTipo],
            title: titleId ? titleList.find((title) => title.id === Number(titleId)) : titleList[0],
        }

        itemProps ?
            updateItem(itemSubmit).then((data) => {
                navigate(-1)
                alert("Atualizado com sucesso!");
            }).catch((error: any) => {
                navigate(-1)
                alert("Falha:" + error.message);
            })
            :
            postItem(itemSubmit).then((data) => {
                alert("Cadastrado com sucesso!");
                navigate(-1)
            }).catch((error: any) => {
                alert("Falha:" + error.message);
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
        setItemTipo(Number(event.target.value));
        console.log(event.target.value)
    }

    function handleInputChange4(event: any) {
        setTitle(event.target.value);
    }

    React.useEffect(() => {
        // Se vier a partir do fluxo de edição, seta os valores iniciais
        params.state ? (
            setItemProps(params.state.itemProps)
        ) : null;
    }, [params]);

    React.useEffect(() => {
        // Se vier a partir do fluxo de edição, seta os valores iniciais
        itemProps ? (
            setItemNumSerie(itemProps.serialNumber),
            setItemTipo(item_tipo.indexOf(itemProps.itemType)||0),
            setTitle(itemProps.titleDTO.id),
            setItemdtAquisicao(itemProps.dtAquisicao)
        ) : null;
    }, [itemProps]);

    React.useEffect(() => {
        // Busca os Titulos
        listTitle()
            .then(res => setTitleList(res))
            .catch(error => alert("Falha: " + error));
    }, []);

    return (
        <div className="App-content">
            <div className="row-content">
                <button
                    className='back-button'
                    onClick={() => navigate('/itens')}
                >
                    Voltar
                </button>
                <form onSubmit={handleSubmitForm}>
                    <div>
                        <div className="form-div">
                            <label>Nº Serie:</label>
                            <input
                                className="input-space"
                                type="text"
                                name="serialNumber"
                                value={itemNumSerie}
                                onChange={handleInputChange1}
                            />
                        </div>
                        <div className="form-div">
                            <label>Aquisição: </label>
                            <input
                                className="input-space"
                                type="date"
                                name="dtAquisicao"
                                value={itemdtAquisicao}
                                onChange={handleInputChange2}
                            />
                        </div>
                        <div className="form-div">
                            <label>Mídia: </label>
                            <select
                                className="input-space"
                                name="itemType"
                                onChange={handleInputChange3}
                                defaultValue={itemTipo}
                            >
                                {item_tipo.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-div">
                            <label id="title">Título: </label>
                            <select
                                className="input-space"
                                id="title"
                                name="title_id"
                                value={titleId}
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