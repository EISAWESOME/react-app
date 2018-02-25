import React from 'react';
import ReactDOM from 'react-dom';

const Stars = require('./profile.js').Stars;
const Profile = require('./profile.js').Rrofile;
const Easteregg = require('./profile.js').EasterEgg;

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Stars />, document.querySelector('#root'));
registerServiceWorker();
