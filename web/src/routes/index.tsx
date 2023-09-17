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
import { TopBar } from '../components/sidebar';

// Páginas
import { Home } from '../screens/Home';
import ErrorPage from '../screens/ErrorPage';
import Actor from '../screens/Actor';
import ActorList from '../screens/ActorList';
import ActorRegister from '../screens/ActorRegister';
import ClassList from '../screens/ClassList';
import Class from '../screens/Class';
import DirectorList from '../screens/DirectorList';
import Director from '../screens/Director';
import { Link } from 'react-router-dom';
import ClassRegister from '../screens/ClassRegister';
import DirectorRegister from '../screens/DirectorRegister';

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
        <TopBar />

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
            <Route
              path="/atores/add"
              element={<ActorRegister />}
              errorElement={<ErrorBoundary />}
            />

            {/* Locação  */}
            <Route
              path="/filmes"
              element={<ClassList />}
              errorElement={<ErrorBoundary />}
            />
            <Route
              path="/filmes/:classId"
              element={<Class />}
              errorElement={<ErrorBoundary />}
            />
            <Route
              path="/filmes/add"
              element={<ClassRegister />}
              errorElement={<ErrorBoundary />}
            />

            {/* Diretores  */}
            <Route
              path="/diretores"
              element={<DirectorList />}
              errorElement={<ErrorBoundary />}
            />
            <Route
              path="/diretores/:directorId"
              element={<Director />}
              errorElement={<ErrorBoundary />}
            />
            <Route
              path="/diretores/add"
              element={<DirectorRegister />}
              errorElement={<ErrorBoundary />}
            />

          </Routes>
        </div>
      </div>
    </>
  );
}
