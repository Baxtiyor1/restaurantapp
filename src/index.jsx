import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { CatProvider } from './Context/catContext'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CatProvider>
        <App />
      </CatProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
