import React, { useState } from 'react';
import "./main.css"; // Import CSS styles for this component
import Button from "../RSVP/RSVPButton"; // Import RSVPButton component
import Form from "../RSVP/RSVPForm"; // Import RSVPForm component
import Countdown from "../countdown/countdown"; // Import Countdown component
import CopyButton from "../sharability/copylinkbutton.js"; // Import CopyButton component
import InstaButton from "../sharability/instagrambutton.js"; // Import InstaButton component
import Game from '../game/game.js'; // Import Game component

export default function Main({ theMap }) {
    const [showPopup, setShowPopup] = useState(false); // State to manage RSVP form visibility

    // Function to open RSVP form popup
    function handleRSVP() {
        setShowPopup(true);
    }

    // Function to close RSVP form popup
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
                    <div className="location">{theMap}</div> {/* Render the Google Map component */}
                    <div className="description">
                        <div className="blurb">
                            <div>
                                Come by Carroll Gardens and check out Chelsea and Lil's Stoop Sale! A stoop sale is a garage sale, but better! Enjoy getting thrifted goods and new treasures, including clothing, shoes, and more. More surprises in store - come by to find out!
                            </div>
                            <div className="date">Saturday July 20th, 9am-3pm</div>
                            <div className="date">Carroll Gardens, corner of Court Street & 2nd Avenue</div>
                        </div>
                        <div className="rsvp">
                            <div className="rsvp-button"><Button handleClick={handleRSVP} /></div> {/* Render RSVPButton */}
                            {showPopup && <Form onClose={closePopup} />} {/* Render RSVPForm if showPopup is true */}
                        </div>
                    </div>
                </div>
                <div>
                    <Countdown /> {/* Render Countdown component */}
                </div>
            </div>
            <div className="game">
                <Game /> {/* Render Game component */}
            </div>
            <div className="footer">
                <div className="instructions">Spread the word!</div>
                <div className="links">
                    <div className="copylink"><CopyButton /></div> {/* Render CopyButton */}
                    <div className="instalink"><InstaButton /></div> {/* Render InstaButton */}
                    <a className="calendarlink" target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NGlldGJ2Z2VobWNkcmhlY3ZyN2VicWlnbzEgbGFhdmFueWEudGhpYWdhQG0&tmsrc=laavanya.thiaga%40gmail.com"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en-GB.gif" alt="Add to Google Calendar" /></a>
                </div>
            </div>
        </div>
    );
}
