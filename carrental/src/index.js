import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ApiContext from './context/ApiContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ApiContext>
    <App />
  </ApiContext>

  // </React.StrictMode>
);

