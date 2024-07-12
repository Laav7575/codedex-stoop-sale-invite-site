import React, { useState } from 'react';
import "./main.css"
import Button from "../RSVP/RSVPButton";
import Countdown from "../countdown/countdown"
export default function Main({theMap}) {
    const [ rsvpd, setRsvpd ] = useState(false);

    function handleRSVP() {
        setRsvpd(true);
    }

    return (
        <div className="main">
            <div className="header">
                <div className="subtitle">You're Invited!</div>
                <div className="title">BROOKLYN STOOP SALE</div>
            </div>
            <div className="body">
                <div className="info">
                    <div className="hero">
                        <div className="location">{theMap}</div>
                        <div className="blurb">
                            <div>Come by Carroll Gardens and check out Chelsea and Lil's Stoop Sale! Selling shoes, clothing, and more. Write some more stuff here!</div>
                            <div className="date">Saturday July 20th, 9am-3pm</div>
                        </div>
                    </div>
                    <div>
                        <div className="countdown"><Countdown /></div>
                    </div>
                </div>
                <div className="rsvp">
                    <div className="rsvp-button"><Button handleClick={handleRSVP}/></div>
                    {rsvpd && <div className="rsvp-image">
                        <img src="./assets/chelsealil.png" alt-text="image of chelsea and lil happy"/>
                        <div className="rsvp-text">Thanks for RSVP'ing, excited to see you there!</div>
                    </div>}
                </div>
            </div>
            <div className="game">
                game goes here
            </div>
        </div>
    )
}