// Funções 
import React from 'react';

// Navegação
import { useNavigate, useRouteError } from "react-router-dom";
import getClass from '../../services/getClass';
import deleteClass from '../../services/deleteClass';

export default function ClassList() {

  const [classList, setClassList] = React.useState<any[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    getClass().then((response) => {
      setClassList(response);
    })
  }, []);

  return (
    <div className="App-content">
      <table>
        <thead>
          <tr>
            <th>Nome do Filme</th>
            <th>Valor</th>
            <th>Prazo de Devolução</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {classList.map((classKey, index) => (
            <tr key={index}>
              <td>{classKey.name}</td>
              {
                <td className='td-center'>R${classKey.value.includes(",00") ? classKey.value : `${classKey.value},00`}</td>
              }

              <td className='td-center'>{classKey.deadline} dias</td>
              <td className='button-td-div'>
                <button
                  id='edit-actor'
                  className="button-td-left"
                  onClick={()=>navigate('add', { state: { classProps: classKey } })}
                >
                  Editar
                </button>
                <button
                  id='delete-actor'
                  className="button-td-right"
                  onClick={()=> deleteClass(classKey.id)}
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
        Adicionar Filme
      </button>
    </div>
  );
}