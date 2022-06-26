import React from 'react';
import ReactDOM from 'react-dom';
import * as ServiceWorkerRegistration from './serviceWorkerRegistration';
import App from './component/App';
import {Provider} from 'react-redux';
import store from "./redux/store";
ReactDOM.render(
    <React.StrictMode>
          <Provider store={store}>
        <App/>
    </Provider>

    </React.StrictMode>
  
,document.getElementById('root'));

ServiceWorkerRegistration.register();