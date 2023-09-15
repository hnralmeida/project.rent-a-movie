// Funções 
import React from 'react';

// Navegação
import { useRouteError } from "react-router-dom";

export default function ActorList() {

  const actorList = [
    {
      nome: 'Tom Hanks',
      idade: 65,
      genero: 'Masculino',
      filmesPopulares: ['Forrest Gump', 'Saving Private Ryan', 'Cast Away'],
    },
    {
      nome: 'Meryl Streep',
      idade: 72,
      genero: 'Feminino',
      filmesPopulares: ['The Devil Wears Prada', 'Mamma Mia!', 'Sophie\'s Choice'],
    },
    {
      nome: 'Brad Pitt',
      idade: 58,
      genero: 'Masculino',
      filmesPopulares: ['Fight Club', 'Inglourious Basterds', 'The Curious Case of Benjamin Button'],
    },
    {
      nome: 'Scarlett Johansson',
      idade: 36,
      genero: 'Feminino',
      filmesPopulares: ['The Avengers', 'Lost in Translation', 'Marriage Story'],
    }
  ]

  return (
    <div className="App-content">
      <table>
        <thead>
          <tr>
            <th>Nome do Ator</th>
            <th>Idade</th>
            <th>Gênero</th>
            <th>Filmes Populares</th>
          </tr>
        </thead>
        <tbody>
          {actorList.map((ator, index) => (
            <tr key={index}>
              <td>{ator.nome}</td>
              <td>{ator.idade}</td>
              <td>{ator.genero}</td>
              <td>{ator.filmesPopulares.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className='add-actor'>
        Adicionar Ator
      </button>
    </div>
  );
}