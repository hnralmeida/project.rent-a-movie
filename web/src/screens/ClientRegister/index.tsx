import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import updateClient from '../../services/updateClient';
import postClient from '../../services/postClient';
import getClient from '../../services/listClient';
import postDependent from '../../services/postDependent';
import updateDepedent from '../../services/updateDependent';

export default function ClientRegister() {

    //Dados do servidor
    const [socioList, setSocioList] = React.useState<any[]>([]);

    // Dados do Formulário
    const [name, setName] = React.useState('');
    const [birthday, setBirthday] = React.useState<any>();
    const [sexoBiologico, setSexoBiologico] = React.useState('MASCULINO');
    const [CPF, setCPF] = React.useState('');
    const [checkSocio, setCheckSocio] = React.useState(false);
    const [endereco, setEndereco] = React.useState('');
    const [telefone, setTelefone] = React.useState('');
    const [socioID, setSocioID] = React.useState('');

    const [ClientProps, setClientProps] = React.useState<any>(null);
    const navigate = useNavigate();
    const params = useLocation();

    function handleSubmit() {
        const clientSubmit = checkSocio ? {
            id: ClientProps ? ClientProps.id : 0,
            sub: 1024,
            name: name,
            birthday: birthday.getTime(),
            bioSex: sexoBiologico,
            cpf: CPF,
            address: endereco,
            telefone: telefone,
        } : {
            id: ClientProps ? ClientProps.id : 0,
            sub: 1024,
            name: name,
            birthday: birthday.getTime(),
            bioSex: sexoBiologico,
            socio: socioList.find((socio) => socio.id === Number(socioID)),
        }

        checkSocio ? (
            ClientProps ?
            updateClient(clientSubmit).then((data) => {
                navigate(-1)
                alert(data + " Atualizado com sucesso!");
            }).catch((error) => {
                alert(error);
            })
            :
            postClient(clientSubmit).then((data) => {
                navigate(-1)
                alert(data + " Cadastrado com sucesso!");
            }).catch((error) => {
                alert(error);
            })
        ) : (
            ClientProps ?
            updateDepedent(clientSubmit).then((data) => {
                navigate(-1)
                alert(data + " Atualizado com sucesso!");
            }).catch((error) => {
                alert(error);
            })
            :
            postDependent(clientSubmit).then((data) => {
                navigate(-1)
                alert(data + " Cadastrado com sucesso!");
            }).catch((error) => {
                alert(error);
            })
        )

    }

    function handleNameInputChange(event: any) {
        setName(event.target.value);
    }

    function handleValueInputChange(event: any) {
        setBirthday(event.target.value);
    }

    function handleBioSexInputChange(event: any) {
        setSexoBiologico(event.target.value);
        console.log(event.target.value);
    }

    function handleCheckBoxChange(event: any) {
        setCheckSocio(!checkSocio);
    }

    function handleCPFInputChange(event: any) {
        setCPF(event.target.value);
    }

    function handleEnderecoInputChange(event: any) {
        setEndereco(event.target.value);
    }

    function handleTelefoneInputChange(event: any) {
        setTelefone(event.target.value);
    }

    function handleSocioInputChange(event: any) {
        setSocioID(event.target.value);
    }

    React.useEffect(() => {
        params.state ? (
            setClientProps(params.state.clientProps)
        ) : null;

        getClient().then((data) => {
            setSocioList(data);
        }).catch((erro: any) => {
            alert("Erro ao obter sócios: " + erro.message)
        })
    }, []);

    React.useEffect(() => {
        ClientProps ? (
            setName(ClientProps.name),
            setBirthday(new Date(ClientProps.birthDate)),
            setSexoBiologico(ClientProps.gender),
            setSocioID(ClientProps.socio ? ClientProps.socio.id : '')
        ) : null;
    }, [ClientProps]);

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
                            className="form-div"
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleNameInputChange}
                        />
                    </div>

                    <div className="input-center">
                        <label>Nascimento: </label>
                        <input
                            className="form-div"
                            type="date"
                            name="birthday"
                            value={birthday}
                            onChange={handleValueInputChange}
                        />
                    </div>

                    <div className="input-center">
                        <label>Sexo: </label>
                        <select
                            className="form-div"
                            name="sexoBiologico"
                            onChange={handleBioSexInputChange}
                            defaultValue={ClientProps ? ClientProps.gender : sexoBiologico}
                        >
                            <option value="">Selecione sexo Biológico</option>
                            <option key={'FEMININO'} value={'FEMININO'}>
                                Feminino
                            </option>
                            <option key={'MASCULINO'} value={'MASCULINO'}>
                                Masculino
                            </option>
                        </select>
                    </div>

                    <div className="form-checkbox">
                        <input
                            type="checkbox"
                            name="checkSocio"
                            onChange={handleCheckBoxChange}
                        />
                        <label> Sócio </label>
                    </div>

                    {checkSocio &&
                        <div className="input-center">
                            <label>CPF: </label>
                            <input
                                className="form-div"
                                type="text"
                                name="cpf"
                                value={CPF}
                                onChange={handleCPFInputChange}
                            />
                        </div>
                    }

                    {checkSocio &&
                        <div className="input-center">
                            <label>Endereço: </label>
                            <input
                                className="form-div"
                                type="text"
                                name="endereco"
                                value={endereco}
                                onChange={handleEnderecoInputChange}
                            />
                        </div>
                    }

                    {checkSocio &&
                        <div className="input-center">
                            <label>Telefone: </label>
                            <input
                                className="form-div"
                                type="text"
                                name="telefone"
                                value={telefone}
                                onChange={handleTelefoneInputChange}
                            />
                        </div>
                    }

                    {!checkSocio &&
                        <div className="input-center">
                            <label>Sócio: </label>
                            <select
                                className="form-div"
                                name="socio"
                                onChange={handleSocioInputChange}
                            >
                                <option value="">Selecione sócio a qual pertence</option>
                                {
                                    socioList.map((socio) => (
                                        <option
                                            key={socio.id}
                                            value={socio.id}
                                        >
                                            {socio.name}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    }

                    <div
                        className='submit-button-div'
                    >
                        <button
                            className='submit-button'
                            type="submit"
                        >
                            {ClientProps ? 'Editar Cliente' : 'Cadastrar Cliente'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}