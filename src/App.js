import React, {Component} from 'react';
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
import xbJingle from './resources/sounds/AchievementUnlocked.mp3';

//Konami
import Konami from 'Konami';

import PropTypes from 'prop-types';

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
                            <img src={avatarUrl} className="col " alt="Avatar"/>
                        </div>
                        <p id="catchPhrase" className="row no-gutters">
                            <span className="col chrome">{catchPhrase}</span>
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

class EasterEgg extends Component {

    constructor(props) {
        super(props);
        this.state = {triggered: false};
        this.toggleState = this.toggleState.bind(this);
    }

    toggleState() {
        this.setState((prevState) => {
            return {triggered: !prevState.triggered }
        });
    }

    render() {
        const self = this;
        new Konami(function () {

            console.log('Triggered ? ', self);
            self.toggleState();

            const jingle = new Howl({
                src: [xbJingle],
                volume: 0.5
            });
            jingle.play();
        });

        return (
            <div>
                { this.state.triggered ?

                <div className="achievement-container">
                    <div className="achievement achievement-banner">
                        <div className="achievement achievement-icon">
                            <span className="achievement icon">
                                <span className="icon-trophy"></span>
                            </span>
                        </div>
                        <div className="achievement achievement-text">
                            <p className="achievement achievement-notification">Achievement unlocked</p>
                            <p className="achievement achievement-name">25G &ndash; Konami Code</p>
                        </div>
                    </div>
                </div>

                    :

                <img className="kcode" src={kcodeLogo}/>

                }
            </div>
        );
    }
}

module.exports = {
    main : App,
    easterEgg : EasterEgg,
};
