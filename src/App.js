import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import GlobalStyles from './styles/global';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
