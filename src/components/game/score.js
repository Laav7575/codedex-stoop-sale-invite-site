import React from 'react';
import { useRecoilValue } from 'recoil';
import { scoreState } from './atom';

const Score = () => {
    const score = useRecoilValue(scoreState); // Fetch the score from Recoil state

    return (
        <div className="score"> {/* Score container */}
            <p>{`Score: ${score}`}</p> {/* Display the score */}
        </div>
    );
};

export default React.memo(Score); // Memoize to optimize re-renders
