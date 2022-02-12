import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter basename="/FashionInternational_React">
    <App />
  </HashRouter>,
  document.getElementById('root')
);