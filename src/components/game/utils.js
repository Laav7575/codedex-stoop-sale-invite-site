import { MAX_POINTS, COLORS, SIZES } from './constants';

// Function to create a new dot
export const createDot = () => {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)]; // Random color selection
    const size = SIZES[Math.floor(Math.random() * SIZES.length)]; // Random size selection
    
    let x = Math.floor(Math.random() * 100); // Random x position between 0 and 100
    return {
        color,
        size,
        x,
        y: 0, // Initial y position at the top of the field (0)
    };
};

// Function to remove a dot from the array
export const removeDot = (dots, index) => {
    const newDots = [...dots]; // Create a copy of the dots array
    newDots.splice(index, 1); // Remove the dot at the specified index
    return newDots; // Return the new array without the removed dot
};

// Function to calculate points for a dot based on its size
export const calculatePoints = (dot) => {
    return MAX_POINTS - dot.size; // Calculate points based on MAX_POINTS and dot size
};
