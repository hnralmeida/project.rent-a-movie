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
            <th className='th-left'>Serial</th>
            <th>Filme</th>
            <th>Cliente</th>
            <th>Empréstimo</th>
            <th>Devolução</th>
            <th>Multa</th>
            <th className='th-right'>Ação</th>
          </tr>
        </thead>
        <tbody>
          {
            rentList.map((locacao, index) => (
              <tr key={index}>
                <td>{locacao.itemDTO ? locacao.itemDTO.serialNumber : "?"}</td>
                <td className='tableCell'>
                  {locacao.item? <ModalMovie id={locacao.id}/>: '?'}
                </td>
                <td className='td-center'>{locacao.client ? locacao.client.name : "?"}</td>
                <td className='td-center'>{locacao.dtLease ? functions.timestampToDate(locacao.dtLease) : "?"}</td>
                <td className='td-center'>{locacao.dtActualReturn ? functions.timestampToDate(locacao.dtActualReturn)  : "?"}</td>
                <td className='td-right'>{locacao.amountCharged ? locacao.amountCharged : "?"}</td>
                <td className='button-td-div'>
                  <button
                    id='edit-actor'
                    className="button-td-left"
                    onClick={() => navigate('add', { state: { classProps: locacao } })}
                  >
                    Editar
                  </button>
                  <button
                    id='delete-actor'
                    className="button-td-right"
                    onClick={() => {
                      deleteRent(locacao.id).then(() => {
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