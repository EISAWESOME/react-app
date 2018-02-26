import React from 'react';
import ReactDOM from 'react-dom';

const Stars = require('./profile.js').Stars;

import { unregister } from './registerServiceWorker';

ReactDOM.render(
    <Stars />, document.querySelector('#root'));
unregister();
