import { atom } from 'recoil';

// Atom for controlling game options
export const controlOptions = atom({
    key: 'controlOptions', // Unique identifier for this atom
    default: {
        isRunning: false, // Initial state: game is not running
        speed: 5,         // Initial state: default speed set to 5
    },
});

// Atom for managing dots state
export const dotsState = atom({
    key: 'dotsState', // Unique identifier for this atom
    default: [],      // Initial state: empty array for no dots initially
});

// Atom for managing score state
export const scoreState = atom({
    key: 'scoreState', // Unique identifier for this atom
    default: 0,        // Initial state: score starts at 0
});
