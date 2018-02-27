import React from 'react';
import ReactDOM from 'react-dom';
import { unregister } from './registerServiceWorker';

const App = require('./modules/app/app.js').App;

ReactDOM.render(
    <App />, document.querySelector('#root')
);


unregister();
