import React, { useState } from 'react';
import "./RSVPForm.css"; // Import CSS styles for RSVPForm

export default function Form({ onClose }) {
    const [rsvpd, setRsvpd] = useState(false); // State to track if user has RSVP'd

    // Function to handle RSVP submission
    function handleClick() {
        setRsvpd(true); // Set rsvpd state to true when user submits RSVP
    }

    return (
        <div className="popup-container">
            <div className="blocker"></div> {/* Blocker div for background overlay */}
            <div className="popup">
                <div className="close-button" onClick={onClose}>X</div> {/* Close button to close the popup */}
                {!rsvpd && (
                    <div className="center">
                        <span className="title">RSVP to our Super Stoop Sale!</span> {/* Form title */}
                        <div className="form">
                            <div className="line">
                                <span>Email</span>
                                <div><input type="text"></input></div> {/* Email input field */}
                            </div>
                            <div className="line">
                                <span>Name</span>
                                <div><input type="text"></input></div> {/* Name input field */}
                            </div>
                            <div>
                                <button onClick={handleClick}>Submit</button> {/* Submit button */}
                            </div>
                        </div>
                    </div>
                )}
                {rsvpd && (
                    <div className="rsvp-image">
                        <div className="rsvp-text">Thanks for RSVP'ing! We're excited to see you there!</div> {/* Confirmation message */}
                        <img src="./assets/chelsealil.png" alt-text="image of chelsea and lil happy"/> {/* Image */}
                    </div>
                )}
            </div>
        </div>
    )
}
