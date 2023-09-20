// Funções 
import React from 'react';

// Navegação
import { useNavigate, useRouteError } from "react-router-dom";
import getActors from '../../services/getActors';
import deleteActors from '../../services/deleteActors';

export default function ActorList() {

  const [actorList, setActorList] = React.useState<any[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    getActors().then((response) => {
      setActorList(response);
    })
  }, []);

  return (
    <div className="App-content">
      <table>
        <thead>
          <tr>
            <th>Nome do Ator</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {actorList.map((ator, index) => (
            <tr key={index}>
              <td>{ator.name}</td>
              <td className='button-td-div'>
                <button
                  id='edit-actor'
                  className="button-td-left"
                  onClick={() => navigate('add', { state: { actorProps: ator } })}
                >
                  Editar
                </button>
                <button
                  id='delete-actor'
                  className="button-td-right"
                  onClick={() => {
                    deleteActors(ator.id)
                  }}
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
        Adicionar Ator
      </button>
    </div>
  );
}