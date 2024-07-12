import React, { useState } from 'react';
import "./RSVPForm.css";

export default function Form({onClose}) {
    const [ rsvpd, setRsvpd ] = useState(false);

    function handleClick() {
        setRsvpd(true);
    }

    return (
        <div className="popup-container">
            <div className="blocker"></div>
            <div className="popup">
                <div className="close-button" onClick={onClose}>X</div>
                {!rsvpd && <div className="center">
                    <span className="title">RSVP to our Super Stoop Sale!</span>
                    <div className="form">
                        <div className="line">
                            <span>Email</span>
                            <div><input type="text"></input></div>
                        </div>
                        <div className="line">
                            <span>Name</span>
                            <div><input type="text"></input></div>
                        </div>
                        <div>
                            <button onClick={handleClick}>Submit</button>
                        </div>
                    </div>
                </div>}
                {rsvpd && <div className="rsvp-image">
                    <div className="rsvp-text">Thanks for RSVP'ing! We're excited to see you there!</div>
                    <img src="./assets/chelsealil.png" alt-text="image of chelsea and lil happy"/>
                </div>}
            </div>
        </div>
    )
}