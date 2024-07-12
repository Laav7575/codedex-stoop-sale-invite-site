import React, { useState } from 'react';
import "./main.css"
import Button from "../RSVP/RSVPButton";
import Form from "../RSVP/RSVPForm";
import Countdown from "../countdown/countdown"
import CopyButton from "../sharability/copylinkbutton.js";
import InstaButton from "../sharability/instagrambutton.js"
import Game from '../game/game.js';

export default function Main({theMap}) {
    const [ showPopup, setShowPopup ] = useState(false);

    function handleRSVP() {
        setShowPopup(true);
    }

    function closePopup() {
        setShowPopup(false);
    }    

    return (
        <div className="main">
            <div className="header">
                <div className="subtitle">You're Invited!</div>
                <div className="title">BROOKLYN STOOP SALE</div>
            </div>
            <div className="body">
                <div className="info">
                    <div className="location">{theMap}</div>
                    <div className="description">
                        <div className="blurb">
                            <div>
                                Come by Carroll Gardens and check out Chelsea and Lil's Stoop Sale! A stoop sale is a garage sale, but better! Enjoy getting thrifted goods and new treasures, including clothing, shoes, and more. More surprises in store - come by to find out!
                            </div>
                            <div className="date">Saturday July 20th, 9am-3pm</div>
                        </div>
                        <div className="rsvp">
                            <div className="rsvp-button"><Button handleClick={handleRSVP}/></div>
                            {showPopup && <Form onClose={closePopup}/>}
                        </div>
                    </div>
                </div>
                <div className="countdown">
                    <Countdown />
                </div>
            </div>
            <div className="game">
                <Game />
            </div>
            <div className="footer">
                <div className="instructions">Spread the word!</div>
                <div className="links">
                <div className="copylink"><CopyButton /></div>
                <div className="instalink"><InstaButton /></div>
                <a className="calendarlink" target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NGlldGJ2Z2VobWNkcmhlY3ZyN2VicWlnbzEgbGFhdmFueWEudGhpYWdhQG0&tmsrc=laavanya.thiaga%40gmail.com"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en-GB.gif" /></a>
                </div>
            </div>
        </div>
    )
}