import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.js'
import AppForm from './components/form/AppForm';
import AppRouter from './components/router/AppRouter';
import AppRouter2 from './router2/AppRouter2.jsx';
import AppPortfolio from './portfolio/AppPortfolio.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppPortfolio />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
