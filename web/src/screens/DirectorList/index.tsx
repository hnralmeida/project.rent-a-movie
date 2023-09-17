// Funções 
import React from 'react';

// Navegação
import { useNavigate, useRouteError } from "react-router-dom";
import getDirectors from '../../services/getDirectors';
import deleteDirectors from '../../services/deleteDirector';

export default function DirectorList() {

  const [directorsList, setDirector] = React.useState<any[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    getDirectors().then((response) => {
      setDirector(response);
    })
  }, []);


  return (
    <div className="App-content">
      <table>
        <thead>
          <tr>
            <th>Nome do Diretor</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {directorsList.map((ator, index) => (
            <tr key={index}>
              <td>{ator.nome}</td>
              <td className='button-td-div'>
                <button
                  id='edit-actor'
                  className="button-td-left"
                  onClick={()=> navigate('add', { state: { actorProps: ator } })}
                >
                  Editar
                </button>
                <button
                  id='delete-actor'
                  className="button-td-right"
                  onClick={()=> deleteDirectors(ator.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        className='add-actor'
        onClick={() => navigate('add')}
      >
        Adicionar Diretor
      </button>
    </div>
  );
}