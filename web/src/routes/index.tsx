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
import logo from '../assets/rentamovie.png';
import { Sidebar } from '../components/sidebar';

// Páginas
import { Home } from '../screens/Home';
import ErrorPage from '../screens/ErrorPage';
import Actor from '../screens/Actor';
import ActorList from '../screens/ActorList';
import ActorRegister from '../screens/ActorRegister';

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
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <Sidebar />

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
              path="/atores/:actorId"
              element={<Actor />}
              errorElement={<ErrorBoundary />}
            />

            {/* Locação  */}
            <Route
              path="/locacao"
              element={<ActorList />}
              errorElement={<ErrorBoundary />}
            />
            <Route
              path="/locacao/:classId"
              element={<Actor />}
              errorElement={<ErrorBoundary />}
            />
            
            {/* Diretores  */}
            <Route
              path="/diretores"
              element={<ActorList />}
              errorElement={<ErrorBoundary />}
            />
            <Route
              path="/diretores/:directorId"
              element={<Actor />}
              errorElement={<ErrorBoundary />}
            />

          </Routes>
        </div>

      </div>
    </>
  );
}
