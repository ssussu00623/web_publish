import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import './index.css';
import AppCgv from './components/cgv_layout/AppCgv.jsx';
import reportWebVitals from './reportWebVitals';


// const root = ReactDOM.createRoot(document.getElementById('root')); cgv쓰는데 안 쓰니까 이렇게 빼고~
const root = ReactDOM.createRoot(document.querySelector('body')); //body를 불러오게 한다.
root.render(
  <React.StrictMode>
    <AppCgv />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
