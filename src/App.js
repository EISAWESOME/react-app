import React, {Component} from 'react';
import logo from './logo.svg';

import './styles/css/app.css'
import './styles/css/stars.css';
import './styles/css/achievement.css';

import 'bootstrap/dist/css/bootstrap.css';

import ghLogo from './img/github.png';
import liLogo from './img/linkedin.png';
import reLogo from './img/resume.png';
import kcodeLogo from './img/kcode-small.png';

//Howler
import 'Howler';

//Konami
import 'Konami';

//Css loader
import 'css-loader';





class App extends Component {
    render() {

        document.title = "Clément S - React";

        const username = "EISAWESOME";
        const avatarUrl = "https://github.com/" + username + ".png";

        const catchPhrase = "<clement-s/>";

        return (
            <div className="starsContainer">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>

                <div className="animate-opacity main container align-items-center">
                    <div className="constr"> EN CONSTRUCTION</div>

                    <div className="profileCard row no-gutters align-items-center">


                        <div id="avatar" className="row no-gutters align-items-center">
                            <img src={avatarUrl} className="col-sm " alt="Avatar"/>
                        </div>

                        <p id="catchPhrase" className="row no-gutters">
                            <span className="col-sm ">{catchPhrase}</span>
                        </p>

                        <div id="links" className="row no-gutters align-items-center">

                            <div className="col">
                                <a href="https://github.com/EISAWESOME">
                                    <img className="scale-small github" src={ghLogo} alt="GitHub"/>
                                </a>
                            </div>

                            <div className="col">
                                <a href="https://www.linkedin.com/in/csimonin-dev/">
                                    <img className="scale-small linkedin" src={liLogo} alt="LinkedIn"/>
                                </a>
                            </div>

                            <div className="col">
                                <a href="./resources/CV-clement-simonin.pdf" target="_blank">
                                    <img className="scale-small resume" src={reLogo} alt="Resumé"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
