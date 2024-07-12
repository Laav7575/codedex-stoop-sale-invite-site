import React, {useState, useEffect} from 'react'
import './countdown.css'

const COUNTDOWN_DATE = new Date("2024-07-20T09:00:00");

const getTimeLeft = () => {
    const totalTimeLeft = COUNTDOWN_DATE - new Date();
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24)); //convert to ms
    const hours = Math.floor(totalTimeLeft / (1000 * 60 * 60) % 24);
    const minutes = Math.floor(totalTimeLeft / (1000 * 60) % 60);
    const seconds = Math.floor(totalTimeLeft / (1000) % 60);
    return {days, hours, minutes, seconds};
};

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft())
        }, 1000);

        return() => {
            clearInterval(timer);
        }
    }, [])

  return ( 
    <div className="countdown"> 
        <h2>Who's Ready? Countdown to the event:</h2>
        <div className='content'>
            {Object.entries(timeLeft).map((el) => {
                const label = el[0];
                const value = el[1];
                return (
                    <div className='box' key={label}>
                        <div className='value'>
                         <span>{value}</span>
                        </div>
                        <span className='label'> {label} </span>
                    </div>
                );
            })}
        </div>
    </div>
  );
};

export default Countdown
