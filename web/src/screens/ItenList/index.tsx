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
      console.log(response)
    })
  }, []);

  return (
    <div className="App-content">
      <table>
        <thead>
          <tr>
            <th className='th-left'>Número de Série</th>
            <th className='th-left'>Tipo de Item</th>
            <th className='th-left'>Filme</th>
            <th className='th-left'>Aquisição</th>
            <th className='th-right'>Ação</th>
          </tr>
        </thead>
        <tbody>
          {itemList.map((item, index) => (
            <tr key={index}>
              <td>{item.serialNumber}</td>
              <td>{item.itemType}</td>
              <td className='tableCell' onError={()=>""}>{item.titleDTO ? item.titleDTO.name : "-"}</td>
              <td>{item.dtAquisicao}</td>
              <td className='button-td-div'>
                <button
                  id='edit-actor'
                  className="button-td-left"
                  onClick={()=> navigate('add', { state: { itemProps: item } })}
                >
                  Editar
                </button>
                <button
                  id='delete-actor'
                  className="button-td-right"
                  onClick={()=> {
                    deleteItem(item.id)
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