// Funções 
import React from 'react';

// Navegação
import { useRouteError } from "react-router-dom";

export default function Director() {
  const error:any = useRouteError();

  return (
    <div id="App-content">
      <h1>Lista de Diretores!</h1>
      <p>Em construção.</p>
      <p>
        <i>Página de Diretor</i>
      </p>
    </div>
  );
}