import React, {Component} from 'react';
import {Textfit} from 'react-textfit';
import './styles/css/profile.css'
import './styles/css/stars.css';
import './styles/css/achievement.css';
import 'bootstrap/dist/css/bootstrap.css';
import Img from 'react-image';
import ghLogo from './img/github.png';
import liLogo from './img/linkedin.png';
import reLogo from './img/resume.png';
import kcodeLogo from './img/kcode-small.png';
import 'Howler';
import xbJingle from './resources/sounds/AchievementUnlocked.mp3';
import Konami from 'Konami';

class Profile extends Component {

    render() {

        document.title = "Clément S - React";

        const username = "EISAWESOME";
        const avatarUrl = "https://github.com/" + username + ".png";

        const catchPhrase = "<clement-s/>";


        return (
            <div className="animate-opacity main container align-items-center">
                <div className="constr"> EN CONSTRUCTION</div>

                <div className="profileCard chrome row no-gutters align-items-center">

                    <div id="avatar" className="row no-gutters align-items-center">
                        <Img className="col" src={avatarUrl}/>
                    </div>
                    <div id="catchPhrase" className="row no-gutters">
                        <span className="col chrome">
                            <Textfit mode="single">
                                {catchPhrase}
                            </Textfit>
                        </span>
                    </div>
                    <div id="links" className="row no-gutters align-items-center">

                        <div className="col">
                            <a href="https://github.com/EISAWESOME">
                                <Img className="scale-small github" src={ghLogo} alt="GitHub"/>
                            </a>
                        </div>

                        <div className="col">
                            <a href="https://www.linkedin.com/in/csimonin-dev/">
                                <Img className="scale-small linkedin" src={liLogo} alt="LinkedIn"/>
                            </a>
                        </div>

                        <div className="col">
                            <a href="http://www.doyoubuzz.com/simonin-clement" target="_blank">
                                <Img className="scale-small resume" src={reLogo} alt="Resumé"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

class Easteregg extends Component {

    constructor(props) {
        super(props);
        this.state = {triggered: false};
        this.toggleState = this.toggleState.bind(this);
    }

    toggleState() {
        this.setState((prevState) => {
            return {triggered: !prevState.triggered}
        });
    }

    render() {
        const self = this;
        new Konami(function () {
            //If The easter egg has not been triggered
            if (!self.state.triggered) {
                //Trigger it and play the jingle

                self.toggleState();
                const jingle = new Howl({
                    src: [xbJingle],
                    volume: 0.5
                });
                jingle.play();
            }
        });

        return (
            <div>
                {self.state.triggered ?

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

class Stars extends Component {
    render() {

        return (
            <div className="starsContainer">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>

                <Profile/>

                <Easteregg/>
            </div>

        );
    }
}

module.exports = {
    Stars: Stars,
    Profile: Profile,
    EasterEgg: Easteregg,
};
