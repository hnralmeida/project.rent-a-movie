// Funções 
import React from 'react';

// Navegação
import { useNavigate, useRouteError } from "react-router-dom";
import getTitle from '../../services/getTitle';
import deleteTitle from '../../services/deleteTitle';
import listTitle from '../../services/listTitle';
import ModalActors from '../../components/modalActors';
import ModalText from '../../components/modalText';

export default function TitleList() {

  const [titleList, setTitleList] = React.useState<any[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    listTitle().then((response) => {
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
            <th className='th-left'>Diretor</th>
            <th className='th-left'>Classe</th>
            <th className='th-left'>Categoria</th>
            <th className='th-left'>Elenco</th>
            <th className='th-right'>Ação</th>
          </tr>
        </thead>
        <tbody>
          {
            titleList.map((title, index) => (
              <tr key={index}>
                <td className='tableCell'>{title.name}</td>
                <td className='tableCell'>{title.year||"-"}</td>
                <td className='tableCell'>
                  <ModalText text={title.synopsis} header={title.name}/>
                </td>
                <td className='tableCell'>{title.directorDTO||"?"}</td>
                <td className='tableCell'>{title.typeDTO||"?"}</td>
                <td className='tableCell'>{title.category}</td>
                <td className='tableCell'>
                  <ModalActors
                    title_id={title.id}
                    cast={[
                      {
                        id: 1,
                        name: 'Ator 1'
                      },
                      {
                        id: 2,
                        name: 'Ator 2'
                      },
                      {
                        id: 3,
                        name: 'Ator 3'
                      }
                    ]
                    }
                  />
                </td>
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
            ))
          }
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