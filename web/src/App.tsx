import React from 'react';
import logo from './assets/rentamovie.png';
import './App.css';

function App() {

  const [actorName, setActorName] = React.useState('');

  function handleSubmit() {

    alert(actorName + " Cadastrado com sucesso!");
  }

  function handleInputChange(event: any) {
    setActorName(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

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
    </div>
  );
}

export default App;
