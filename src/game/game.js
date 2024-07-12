import React, { useCallback, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { controlOptions, dotsState, scoreState } from './atom';
import { SPEED_STEP, SPAWN_INTERVAL } from './constants';
import { createDot, removeDot, calculatePoints } from './utils';
import Control from './control';
import Dot from './dot';
import Score from './score';

const Game = () => {
    const [dots, updateDots] = useRecoilState(dotsState);
    const [controlState, setControlState] = useRecoilState(controlOptions);
    const [score, setScore] = useRecoilState(scoreState);
    const requestRef = useRef();
    const intervalRef = useRef();
    const fieldRef = useRef();

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

    const spawnDot = useCallback(() => {
        updateDots((oldDots) => [...oldDots, createDot()]);
    }, [updateDots]);

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
        return () => stop();
    }, [controlState.isRunning, advanceStep, spawnDot]);

    const clear = useCallback(() => {
        setControlState({ ...controlState, isRunning: false, speed: 5 });
        updateDots([]);
        setScore(0);
    }, [setControlState, setScore, updateDots, controlState]);

    const onDotMouseEnter = useCallback((index) => {
        setScore(score + calculatePoints(dots[index]));
        updateDots(removeDot(dots, index));
    }, [dots, setScore, updateDots]);

    document.addEventListener('mousemove', function(e) {
        var image = document.getElementById('cursor-follow-image');
        var offsetX = 115; 
        var offsetY = 400; 
    
        image.style.left = (e.pageX - offsetX) + 'px';
        image.style.top = (e.pageY - offsetY) + 'px';
      });

    const assets = [
        "assets/jeans.png",
        "assets/greyshirt.png",
        "assets/jeans.png",
        "assets/reddress.png",
        "assets/shirt.png",
        "assets/tie.png",
    ];

    return (
        <div className="main">
            <div className="panel">
                <Control onClear={clear} />
                <Score />
            </div>
            <div className="field" ref={fieldRef}>
            <img id="cursor-follow-image" src="assets/basket.png" alt="Image"></img>
                {dots.map((dot, index) => {
                    const x = (fieldRef.current.offsetWidth - dot.size) * dot.x / 100;
                    return (
                        <Dot
                            key={`dot-${index}`} 
                            {...dot}
                            x={x}
                            index={index} 
                            onMouseEnter={onDotMouseEnter} 
                            assets={assets} // Pass the assets array to each Dot
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Game;
