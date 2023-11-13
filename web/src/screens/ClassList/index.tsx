// Funções 
import React from 'react';

// Navegação
import { useNavigate, Navigate } from "react-router-dom";
import getClass from '../../services/getClass';
import deleteClass from '../../services/deleteClass';

export default function ClassList() {

  const [classList, setClassList] = React.useState<any[]>([]);
  const [refresh, setRefresh] = React.useState<any[]>([]);
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
            <th className='th-left'>Nome do Filme</th>
            <th>Valor</th>
            <th>Prazo de Devolução</th>
            <th className='th-right'>Ação</th>
          </tr>
        </thead>
        <tbody>
          {
            classList.map((classKey, index) => (
              <tr key={index}>
                <td>{classKey.name}</td>
                {
                  <td className='td-center'>R${`${classKey.classValue},00`}</td>
                }

                <td className='td-center'>{classKey.returnDate || 0} dias</td>
                <td className='button-td-div'>
                  <button
                    id='edit-actor'
                    className="button-td-left"
                    onClick={() => navigate('add', { state: { classProps: classKey } })}
                  >
                    Editar
                  </button>
                  <button
                    id='delete-actor'
                    className="button-td-right"
                    onClick={() => {
                      deleteClass(classKey.id).then(() => {
                        navigate(0);
                      })
                    }}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <button
        className='add-button'
        onClick={() => navigate('add')}
      >
        Adicionar Classe
      </button>
    </div>
  );
}