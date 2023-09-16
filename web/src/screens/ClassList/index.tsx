// Funções 
import React from 'react';

// Navegação
import { useNavigate, useRouteError } from "react-router-dom";
import getClass from '../../services/getClass';

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
          {classList.map((ator, index) => (
            <tr key={index}>
              <td>{ator.nome}</td>
              {
                <td className='td-center'>R${ator.valor.includes(",00") ? ator.valor : `${ator.valor},00`}</td>
              }

              <td className='td-center'>{ator.prazoDevolucao} dias</td>
              <td className='button-td-div'>
                <button id='edit-actor' className="button-td-left">
                  Editar
                </button>
                <button id='delete-actor' className="button-td-right">
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