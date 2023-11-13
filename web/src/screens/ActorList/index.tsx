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
            <th className='th-left'>Nome do Ator</th>
            <th className='th-right'>Ação</th>
          </tr>
        </thead>
        <tbody>
          {actorList.map((ator, index) => (
            <tr key={index}>
              <td className='tableCell'>{ator.name}</td>
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
                    navigate(0)
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
        className='add-button'
        onClick={() => navigate('add')}
      >
        Adicionar Ator
      </button>
    </div>
  );
}