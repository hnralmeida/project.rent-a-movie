// Funções 
import React from 'react';

// Navegação
import { useRouteError } from "react-router-dom";

export default function Class() {
  const error:any = useRouteError();

  return (
    <div id="App-content">
      <h1>Lista de Classes!</h1>
      <p>Em construção.</p>
      <p>
        <i>Página de Classes</i>
      </p>
    </div>
  );
}