// Funções 
import React from 'react';

// Navegação
import { BrowserRouter, Route, redirect } from 'react-router-dom';
import { Home } from '../screens/Home';

export type TabStackParamsList = {
  Home: undefined,
  Actor: undefined,
  Movie: undefined,
  Rent: undefined,
}

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </BrowserRouter>
  );
}
