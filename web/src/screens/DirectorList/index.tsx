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
            <th className='th-left'>Nome do Diretor</th>
            <th className='th-right'>Ação</th>
          </tr>
        </thead>
        <tbody>
          {directorsList.map((director, index) => (
            <tr key={index}>
              <td>{director.name}</td>
              <td className='button-td-div'>
                <button
                  id='edit-actor'
                  className="button-td-left"
                  onClick={()=> navigate('add', { state: { DirectorProps: director } })}
                >
                  Editar
                </button>
                <button
                  id='delete-actor'
                  className="button-td-right"
                  onClick={()=> {
                    deleteDirectors(director.id)
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
        Adicionar Diretor
      </button>
    </div>
  );
}