// Funções 
import React from 'react';

// Navegação
import { useNavigate, Navigate } from "react-router-dom";
import listClient from '../../services/listClient';
import deleteClient from '../../services/deleteClient';

export default function ClientList() {

  const [clientList, setClientList] = React.useState<any[]>([]);
  const [refresh, setRefresh] = React.useState<any[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    listClient().then((response) => {
      setClientList(response);
    })
  }, []);

  return (
    <div className="App-content">
      <table>
        <thead>
          <tr>
            <th className='th-left'>Cliente</th>
            <th>Nome</th>
            <th>Data de Nascimento</th>
            <th>Ativo</th>
            <th>Dependentes</th>
            <th className='th-right'>Ação</th>
          </tr>
        </thead>
        <tbody>
          {
            clientList.map((classKey, index) => (
              <tr key={index}>
                <td>{classKey.name}</td>
                <td className='td-center'>{classKey.birthDate || "?"}</td>
                <td>{classKey.isActive}</td>
                <td>...</td>
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
                      deleteClient(classKey.id).then(() => {
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