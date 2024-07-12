import React from 'react';
import './RSVPButton.css'; // Import CSS styles for RSVPButton

function RSVPButton({ handleClick }) {
  return (
    <button onClick={handleClick} className="pill">
      RSVP {/* Button text */}
    </button>
  );
}

export default RSVPButton;
