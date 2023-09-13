// Funções 
import React from 'react';

// Navegação
import {
  BrowserRouter,
  Router,
  Route
} from "react-router-dom";

import { Home } from '../screens/Home';

export type TabStackParamsList = {
  Home: undefined,
  Actor: undefined,
  Movie: undefined,  
  Rent: undefined,
}

export function Routes() {
  return (
    <Route>
    </Route>
  );
}
