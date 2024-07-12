import React, { useState } from "react";

const Dot = React.memo(({ x, y, size, index, onMouseEnter, assets }) => {
    // State to manage the current asset (image) index for the dot
    const [currentAssetIndex, setCurrentAssetIndex] = useState(
        Math.floor(Math.random() * assets.length)
    );

    // Style object for positioning and sizing the dot
    const dotStyle = {
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
        cursor: 'pointer',
    };

    // Handler for when the mouse enters the dot
    const handleMouseEnter = () => {
        // Cycle to the next asset index in the assets array
        const nextIndex = (currentAssetIndex + 1) % assets.length;
        setCurrentAssetIndex(nextIndex); // Update the current asset index
        onMouseEnter(index); // Trigger parent component callback with dot index
    };

    // Render the dot as an image element with dynamic source and style
    return (
        <img
            src={assets[currentAssetIndex]} // Source of the image based on currentAssetIndex
            alt={`Dot ${index}`} // Alt text for accessibility
            style={dotStyle} // Apply inline style for positioning and size
            onMouseEnter={handleMouseEnter} // Handle mouse enter event
        />
    );
});

export default Dot;
