import React from 'react';
import ReactDOM from 'react-dom';
import * as ServiceWorkerRegistration from './serviceWorkerRegistration';
import App from './components/App';
import AppBar from './components/AppBar'
import {Provider} from 'react-redux';
import store from "./redux/store";
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
    <HelmetProvider>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </HelmetProvider>
    // <React.StrictMode>
    //       <Provider store={store}>
            
           
    //     <App/>
    // </Provider>

    // </React.StrictMode>
  
,document.getElementById('root'));

ServiceWorkerRegistration.register();