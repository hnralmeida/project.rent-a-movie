// Funções 
import React from 'react';

// Navegação
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  Route,
  useRouteError,
  isRouteErrorResponse
} from "react-router-dom";

// componentes
import { MenuBar } from '../components/menuBar';

// Páginas
import { Home } from '../screens/Home';
import ErrorPage from '../screens/ErrorPage';
import ActorList from '../screens/ActorList';
import ActorRegister from '../screens/ActorRegister';
import ClassList from '../screens/ClassList';
import DirectorList from '../screens/DirectorList';
import { Link } from 'react-router-dom';
import ClassRegister from '../screens/ClassRegister';
import DirectorRegister from '../screens/DirectorRegister';
import TitleList from '../screens/TitleList';
import TitleRegister from '../screens/TitleRegister';
import ItemList from '../screens/ItenList';
import ItemRegister from '../screens/ItenRegister';

export type TabStackParamsList = {
  Home: undefined,
  Actor: undefined,
  Movie: undefined,
  Rent: undefined,
}
export function StackRoutes() {

  function ErrorBoundary() {
    const error = useRouteError();
    console.error(error);
    if (isRouteErrorResponse(error)) {
      return <div>{error.data.message}</div>;
    } else {
      return <div>Erro desconhecido</div>;
    }

  }

  return (
    <>
      <div className="App">
        <div className='App-Header'>
          <MenuBar />
        </div>

        <div className="App-pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
              errorElement={<ErrorBoundary />}
            />

            {/* Atores  */}
            <Route
              path="/atores"
              element={<ActorList />}
              errorElement={<ErrorBoundary />}
            />
            <Route
              path="/atores/add"
              element={<ActorRegister />}
              errorElement={<ErrorBoundary />}
            />

            {/* Filmes */}
            <Route
              path="/titulos"
              element={<TitleList />}
              errorElement={<ErrorBoundary />}
            />

            <Route
              path="/titulos/add"
              element={<TitleRegister />}
              errorElement={<ErrorBoundary />}
            />

            {/* Diretores  */}
            <Route
              path="/diretores"
              element={<DirectorList />}
              errorElement={<ErrorBoundary />}
            />
            <Route
              path="/diretores/add"
              element={<DirectorRegister />}
              errorElement={<ErrorBoundary />}
            />

            {/* Itens  */}
            <Route
              path="/itens"
              element={<ItemList />}
              errorElement={<ErrorBoundary />}
            />
            <Route
              path="/itens/add"
              element={<ItemRegister />}
              errorElement={<ErrorBoundary />}
            />

            {/* Classes  */}
            <Route
              path="/classes"
              element={<ClassList />}
              errorElement={<ErrorBoundary />}
            />
            <Route
              path="/classes/add"
              element={<ClassRegister />}
              errorElement={<ErrorBoundary />}
            />

          </Routes>
        </div>
      </div>
    </>
  );
}
