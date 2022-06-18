import React from 'react';
import ReactDOM from 'react-dom';
import * as ServiceWorkerRegistration from './serviceWorkerRegistration';
import App from './component/App';

ReactDOM.render(<App/>,document.getElementById('root'));
ServiceWorkerRegistration.register();