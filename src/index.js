import React from 'react';
import ReactDOM from 'react-dom';

const App = require('./modules/app/app.js').App;

import { unregister } from './registerServiceWorker';

ReactDOM.render(
    <App />, document.querySelector('#root')
);


unregister();
