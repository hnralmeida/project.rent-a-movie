// Funções 
import React from 'react';

// Navegação
import { useNavigate, useRouteError } from "react-router-dom";
import getItens from '../../services/getItem';
import deleteItem from '../../services/deleteItem';

export default function ItemList() {

  const [itemList, setItem] = React.useState<any[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    getItens().then((response) => {
      setItem(response);
    })
  }, []);

  return (
    <div className="App-content">
      <table>
        <thead>
          <tr>
            <th className='th-left'>Nome do Título</th>
            <th className='th-left'>Ano</th>
            <th className='th-left'>Número de Serie</th>
            <th className='th-left'>Aquisição</th>
            <th className='th-right'>Ação</th>
          </tr>
        </thead>
        <tbody>
          {itemList.map((title, index) => (
            <tr key={index}>
              <td>{title.name}</td>
              <td>{title.year}</td>
              <td>{title.numSerie}</td>
              <td>{title.dtAquisicao}</td>
              <td className='button-td-div'>
                <button
                  id='edit-actor'
                  className="button-td-left"
                  onClick={()=> navigate('add', { state: { DirectorProps: title } })}
                >
                  Editar
                </button>
                <button
                  id='delete-actor'
                  className="button-td-right"
                  onClick={()=> {
                    deleteItem(title.id)
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
        Adicionar Item
      </button>
    </div>
  );
}