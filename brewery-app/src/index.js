import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'



// changed ReactDOM.render() to the following to take care of reacDom error
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')

);


