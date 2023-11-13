// Funções 
import React from 'react';

// Navegação
import { useNavigate, useRouteError } from "react-router-dom";
import getTitle from '../../services/getTitle';
import deleteTitle from '../../services/deleteTitle';

export default function TitleList() {

  const [titleList, setTitleList] = React.useState<any[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    getTitle().then((response) => {
      setTitleList(response);
    })
  }, []);

  return (
    <div className="App-content">
      <table>
        <thead>
          <tr>
            <th className='th-left'>Nome</th>
            <th className='th-left'>Ano</th>
            <th className='th-left'>Sinopse</th>
            <th className='th-left'>Categoria</th>
            <th className='th-right'>Ação</th>
          </tr>
        </thead>
        <tbody>
          {titleList.map((title, index) => (
            <tr key={index}>
              <td className='tableCell'>{title.nome}</td>
              <td className='tableCell'>{title.ano}</td>
              <td className='tableCell'>{title.sinopse}</td>
              <td className='tableCell'>{title.categoria}</td>
              <td className='button-td-div'>
                <button
                  id='edit-title'
                  className="button-td-left"
                  onClick={() => navigate('add', { state: { titleProps: title } })}
                >
                  Editar
                </button>
                <button
                  id='delete-title'
                  className="button-td-right"
                  onClick={() => {
                    deleteTitle(title.id)
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
        Adicionar Título
      </button>
    </div>
  );
}