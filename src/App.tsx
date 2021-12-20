import React from 'react';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';

export const App: React.FC = () => {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
};
