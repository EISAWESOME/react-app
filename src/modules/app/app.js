import React, {Component, Fragment} from 'react';
import './styles/css/app.css'
import 'bootstrap/dist/css/bootstrap.css';

const Stars = require('../profile/profile.js').Stars;
const Page = require('../page/page.js').Page;

class App extends Component {

    render() {

        return (
            <Fragment>
                <section id="profile" className="row">
                    <Stars/>
                </section>
                <section id="page" className="row">
                    <Page/>
                </section>
            </Fragment>
        )
    }
}

module.exports = {
    App : App,
};