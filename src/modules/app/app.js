import React, {Component, Fragment} from 'react';
import './styles/css/app.css'
import 'bootstrap/dist/css/bootstrap.css';

const Stars = require('../profile/profile.js').Stars;
const Menu = require('../page/page.js').Menu;

class App extends Component {

    render() {

        return (
            <Fragment>
                <section id="profile" className="row">
                    <Stars/>
                </section>
                <section id="page" className="row">
                    <Menu/>
                </section>
            </Fragment>
        )
    }
}

module.exports = {
    App : App,
};