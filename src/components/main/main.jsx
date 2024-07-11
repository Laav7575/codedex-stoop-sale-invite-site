import React from 'react';
import "./main.css"
import Button from "../RSVPButton";

export default function main() {
    return (
        <div className="main">
            <div className="header">
                <div className="subtitle">You're Invited!</div>
                <div className="title">BROOKLYN STOOP SALE</div>
            </div>
            <div className="body">
                <div className="info">
                    <div className="hero">
                        <div className="location">placeholder for map here</div>
                        <div className="blurb">
                            <span>Come by Carroll Gardens and check out Chelsea and Lil's Stoop Sale! Shoes, clothing, and more!</span>
                            <span>Saturday July 20th, 9am-3pm</span>
                        </div>
                    </div>
                    <div>
                        <div className="countdown">placeholder for countdown here</div>
                    </div>
                </div>
                <div className="rsvp">
                    <div><Button type="pill" /></div>
                </div>
            </div>
            <div className="game">
                game goes here
            </div>
        </div>
    )
}