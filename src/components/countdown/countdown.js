import React, { useState, useEffect } from 'react';
import './countdown.css';

// Target date for the countdown
const COUNTDOWN_DATE = new Date("2024-07-20T09:00:00");

// Function to calculate time left until COUNTDOWN_DATE
const getTimeLeft = () => {
    const totalTimeLeft = COUNTDOWN_DATE - new Date();
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(totalTimeLeft / (1000 * 60 * 60) % 24);
    const minutes = Math.floor(totalTimeLeft / (1000 * 60) % 60);
    const seconds = Math.floor(totalTimeLeft / 1000 % 60);
    return { days, hours, minutes, seconds };
};

const Countdown = () => {
    // State to store the time left
    const [timeLeft, setTimeLeft] = useState(getTimeLeft);

    // Update timeLeft every second using useEffect and setInterval
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        // Clean up the timer when component unmounts
        return () => clearInterval(timer);
    }, []);

    // Render the countdown component
    return (
        <div className="countdown">
            <h2>Who's Ready? Countdown to the event:</h2>
            <div className='content'>
                {/* Map through timeLeft object to display days, hours, minutes, seconds */}
                {Object.entries(timeLeft).map((entry) => {
                    const label = entry[0]; // Label (days, hours, minutes, seconds)
                    const value = entry[1]; // Value (corresponding count)

                    return (
                        <div className='box' key={label}>
                            <div className='value'>
                                <span>{value}</span>
                            </div>
                            <span className='label'>{label}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Countdown;
