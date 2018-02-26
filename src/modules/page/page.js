import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Menu extends Component {

    render() {

        return (
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
        )
    }
}

module.exports = {
    Menu: Menu,
};