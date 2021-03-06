import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {store} from './features/store/store'
import { CookiesProvider } from 'react-cookie'
//import './index.css'
ReactDOM.render(
  <React.StrictMode>
    
  <Provider store={store}>

    <CookiesProvider>
    <App />
    </CookiesProvider>

  </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


