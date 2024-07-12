import React, { useState } from 'react';
import "./main.css"
import Button from "../RSVP/RSVPButton";
import Form from "../RSVP/RSVPForm";
import Countdown from "../countdown/countdown"
import CopyButton from "../sharability/copylinkbutton.js";


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
                            <div>Come by Carroll Gardens and check out Chelsea and Lil's Stoop Sale! Selling shoes, clothing, and more. Write some more stuff here!</div>
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
            <div className="copylink"><CopyButton /></div>
            <div className="game">
                game goes here
            </div>
        </div>
    )
}