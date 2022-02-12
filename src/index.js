import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename="/FashionInternational_React">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);