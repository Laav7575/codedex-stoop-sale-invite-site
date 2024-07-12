import React, {useState} from 'react'
import './RSVPButton.css'



function RSVPButton({handleClick}) {
  // function clickMe(){
  //   alert('Successfully RSVPd!');
  // }
  

  return (
    <button onClick={handleClick} className="pill">
      RSVP
    </button>
    
  )
}

export default RSVPButton
