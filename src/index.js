import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';

ReactDOM.render(

    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App/>
    </BrowserRouter>,
  document.getElementById('root')
);