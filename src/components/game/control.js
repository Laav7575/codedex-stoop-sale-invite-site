import React, { useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { controlOptions } from './atom';

const Control = ({ onClear }) => {
    const [controlState, setControlState] = useRecoilState(controlOptions);
    const { isRunning, speed } = controlState;

    // Function to toggle between start and pause
    const togglePause = () => {
        setControlState(oldState => ({
            ...oldState,
            isRunning: !oldState.isRunning,
        }));
    };
    
    // Function to start the game
    const onStart = useCallback(() => {
        setControlState({ ...controlState, isRunning: true });
    }, [controlState, setControlState]);

    // Function to change the speed
    const onChangeSpeed = useCallback((event) => {
        setControlState({
            ...controlState,
            speed: parseInt(event.target.value, 10), // Ensure speed is parsed as integer
        });
    }, [controlState, setControlState]);

    // Effect to pause the game on visibility change
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                setControlState(oldState => ({
                    ...oldState,
                    isRunning: false,
                }));
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [setControlState]);

    return (
        <div className="control">
            <div className="control__buttons">
                {/* Toggle button for start/pause */}
                {isRunning ? (
                    <button className="green-button" onClick={togglePause}>
                        PAUSE
                    </button>
                ) : (
                    <button className="green-button" onClick={onStart}>
                        START
                    </button>
                )}
                {/* Button to clear the game */}
                <button onClick={onClear}>CLEAR</button>
            </div>
            <div className="control__speed">
                {/* Display current speed and range input */}
                <p>{`Current speed: ${speed}`}</p>
                <input
                    type="range"
                    min="1"
                    max="10"
                    value={speed}
                    onChange={onChangeSpeed}
                />
            </div>
        </div>
    );
};

export default React.memo(Control);
