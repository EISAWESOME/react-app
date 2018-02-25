import React from 'react';
import ReactDOM from 'react-dom';

var Main = require('./App.js').main;
var Easteregg = require('./App.js').easterEgg;

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main/>, document.querySelector('#root'));
ReactDOM.render(<Easteregg />, document.querySelector('#easterEgg'));
registerServiceWorker();
