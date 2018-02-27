import React, {Component, Fragment} from 'react';

import './styles/css/page.css';

import homeIcon from './img/home.svg';

import sampleIcon from './img/binoculars.svg';
import contactIcon from './img/chat.svg';


import 'bootstrap/dist/css/bootstrap.css';


class Menu extends Component {

    render() {

        return (
            <ul className="nav flex-column vertical-menu">
                <li className="nav-item d-flex justify-content-center">
                    <a className="nav-link" href="#"><img src={homeIcon} height="100%" width="100%"/></a>
                </li>
                <li className="nav-item d-flex justify-content-center">
                    <a className="nav-link" href="#"><img src={sampleIcon} height="100%" width="100%"/></a>
                </li>
                <li className="nav-item d-flex justify-content-center">
                    <a className="nav-link" href="#"><img src={contactIcon} height="100%" width="100%"/></a>
                </li>
            </ul>
        )
    }
}

class RepoCards extends Component {
    render() {
        return (
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's
                    content.</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        )
    }
}

class Page extends Component {
    render() {
        return (
            <Fragment>
                <Menu/>
                <RepoCards/>
            </Fragment>
        )
    }
}



module.exports = {
    Page : Page,
};