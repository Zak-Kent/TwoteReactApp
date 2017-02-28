import React from 'react';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { render } from "react-dom";
import store from './store';


const app = document.getElementById('root');

render(<Provider store={store}>
  <App/>
  </Provider>, app);