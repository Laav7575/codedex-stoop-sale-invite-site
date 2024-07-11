import React from 'react'
import './RSVPButton.css'
//test button
function clickMe(){
  alert('Successfully RSVPd!');
}

function RSVPButton({type}) {
  return <button onClick={clickMe} className={type}>RSVP</button>
  
}

export default RSVPButton
