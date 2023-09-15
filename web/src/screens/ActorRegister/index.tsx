import React from 'react';

export default function ActorRegister() {
    const [actorName, setActorName] = React.useState('');

    function handleSubmit() {

        alert(actorName + " Cadastrado com sucesso!");
    }

    function handleInputChange(event: any) {
        setActorName(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome:</label>
                <input
                    type="text"
                    name="nome"
                    value={actorName}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit">Cadastrar Ator</button>
        </form>
    )
}