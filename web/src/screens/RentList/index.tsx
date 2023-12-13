// Funções 
import React from 'react';

// Navegação
import { useNavigate, Navigate } from "react-router-dom";
import listRent from '../../services/listRent';
import deleteRent from '../../services/deleteRent';
import ModalMovie from '../../components/modalMovie';
import DefaultFunctions from '../../services/defaultFunctions';

export default function RentList() {

  // lib de funções
  const functions = new DefaultFunctions();
  
  // dados do banco
  const [rentList, setRientList] = React.useState<any[]>([]);
  const [refresh, setRefresh] = React.useState<any[]>([]);

  // Navegação padrao
  const navigate = useNavigate();

  React.useEffect(() => {
    listRent().then((response) => {
      setRientList(response);
    })
  }, []);

  return (
    <div className="App-content">
      <table>
        <thead>
          <tr>
            <th className='th-left'>N° de Série</th>
            <th>Cliente</th>
            <th>Empréstimo</th>
            <th>Retorno</th>
            <th>Multa</th>
            <th>Filme</th>
            <th className='th-right'>Ação</th>
          </tr>
        </thead>
        <tbody>
          {
            rentList.map((item, index) => (
              <tr key={index}>
                <td>{item.itemDTO ? item.itemDTO.serialNumber : "?"}</td>
                <td className='td-center'>{item.ClientDTO ? item.ClientDTO.name : "?"}</td>
                <td className='td-center'>{item.dtExpectedReturn ? functions.timestampToDate(item.dtExpectedReturn) : "?"}</td>
                <td className='td-center'>{item.dtActualReturn ? functions.timestampToDate(item.dtActualReturn)  : "?"}</td>
                <td className='td-right'>{item.amountCharged ? item.amountCharged : "?"}</td>
                <td className='tableCell'>
                  {item.item? <ModalMovie id={item.id}/>: '?'}
                </td>
                <td className='button-td-div'>
                  <button
                    id='edit-actor'
                    className="button-td-left"
                    onClick={() => navigate('add', { state: { classProps: item } })}
                  >
                    Editar
                  </button>
                  <button
                    id='delete-actor'
                    className="button-td-right"
                    onClick={() => {
                      deleteRent(item.id).then(() => {
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
        Locar Item
      </button>
    </div>
  );
}