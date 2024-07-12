import React, { useCallback, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { controlOptions, dotsState, scoreState } from './atom'; // Importing Recoil atoms
import { SPEED_STEP, SPAWN_INTERVAL } from './constants'; // Importing constants
import { createDot, removeDot, calculatePoints } from './utils'; // Importing utility functions
import Control from './control'; // Importing Control component
import Dot from './dot'; // Importing Dot component
import Score from './score'; // Importing Score component
import './game.css'; // Importing game-specific CSS

const Game = () => {
    // Recoil state management
    const [dots, updateDots] = useRecoilState(dotsState);
    const [controlState, setControlState] = useRecoilState(controlOptions);
    const [score, setScore] = useRecoilState(scoreState);

    // Refs for animation and DOM manipulation
    const requestRef = useRef();
    const intervalRef = useRef();
    const fieldRef = useRef();

    // Function to advance each step of dot movement
    const advanceStep = useCallback(() => {
        updateDots((oldDots) => {
            const newDots = [];
            for (let dot of oldDots) {
                const newY = dot.y + SPEED_STEP * controlState.speed / 60;
                if (newY <= fieldRef.current.offsetHeight - dot.size / 2) {
                    newDots.push({
                        ...dot,
                        y: newY,
                    });
                }
            }
            return newDots;
        });
        requestRef.current = requestAnimationFrame(advanceStep);
    }, [controlState.speed, updateDots]);

    // Function to spawn new dots at intervals
    const spawnDot = useCallback(() => {
        updateDots((oldDots) => [...oldDots, createDot()]);
    }, [updateDots]);

    // Effect to start and stop game animation based on control state
    useEffect(() => {
        const stop = () => {
            intervalRef.current && clearInterval(intervalRef.current);
            requestRef.current && cancelAnimationFrame(requestRef.current);
        };

        if (controlState.isRunning) {
            intervalRef.current = setInterval(spawnDot, SPAWN_INTERVAL);
            requestRef.current = requestAnimationFrame(advanceStep);
        } else {
            stop();
        }
        return () => stop(); // Cleanup function to clear intervals and animations
    }, [controlState.isRunning, advanceStep, spawnDot]);

    // Function to clear game state
    const clear = useCallback(() => {
        setControlState({ ...controlState, isRunning: false, speed: 5 });
        updateDots([]);
        setScore(0);
    }, [setControlState, setScore, updateDots, controlState]);

    // Function to handle mouse enter on dots
    const onDotMouseEnter = useCallback((index) => {
        setScore(score + calculatePoints(dots[index]));
        updateDots(removeDot(dots, index));
    }, [dots, setScore, updateDots]);

    // Effect to move cursor-following image with mouse movement
    useEffect(() => {
        const handleMouseMove = (e) => {
            const image = document.getElementById('cursor-follow-image');
            const offsetX = 115; 
            const offsetY = 1450; 

            image.style.left = `${e.pageX - offsetX}px`;
            image.style.top = `${e.pageY - offsetY}px`;
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Assets for dots
    const assets = [
        "assets/jeans.png",
        "assets/greyshirt.png",
        "assets/jeans.png",
        "assets/reddress.png",
        "assets/shirt.png",
        "assets/tie.png",
    ];

    return (
        <div>
            {/* Game instructions */}
            <div className="instructions">
                Use your basket to collect the falling clothes!
            </div>
            {/* Control panel and score display */}
            <div className="panel">
                <Control onClear={clear} />
                <Score />
            </div>
            {/* Game field for dots */}
            <div className="field" ref={fieldRef}>
                {/* Cursor-following image */}
                <img id="cursor-follow-image" src="./assets/basket.png" alt="Basket" />
                {/* Rendering dots */}
                {dots.map((dot, index) => {
                    const x = (fieldRef.current.offsetWidth - dot.size) * dot.x / 100;
                    return (
                        <Dot
                            key={`dot-${index}`}
                            {...dot}
                            x={x}
                            index={index}
                            onMouseEnter={() => onDotMouseEnter(index)}
                            assets={assets}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Game;
