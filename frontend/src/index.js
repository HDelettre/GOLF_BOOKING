import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '../src/Styles/styles.css';

import Banner from './Components/Header/Banner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Banner />
    <App />
  </React.StrictMode>
);
