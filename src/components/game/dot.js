// import React from "react";

// const Dot = (props) => {
//     const {color, x, y, size, index, onClick} = props;    
//     const dotStyle = {
//         backgroundColor: color,
//         height: `${size}px`,
//         width: `${size}px`,
//         left: `${x}px`,
//         top: `${y}px`,
//     };
// return (
//         <div 
//             className="dot"
//             style={dotStyle}
//             onClick={() => onClick(index)}
//         />
//     );
// };
// export default Dot;

// import React, { useState } from "react";

// const Dot = (props) => {
//     const { x, y, size, index, onClick, assets } = props;    
//     const [currentAssetIndex, setCurrentAssetIndex] = useState(Math.floor(Math.random()*assets.length));

//     const dotStyle = {
//         position: "absolute",
//         left: `${x}px`,
//         top: `${y}px`,
//         width: `${size}px`,
//         height: `${size}px`,
//         cursor: 'pointer',
//     };

//     const handleClick = () => {
//         const nextIndex = (currentAssetIndex + 1) % assets.length;
//         setCurrentAssetIndex(nextIndex);
//         onClick(index);
//     };

//     return (
//         <img 
//             src={assets[currentAssetIndex]} 
//             alt={`Dot ${index}`} 
//             style={dotStyle}
//             onClick={handleClick}
//         />
//     );
// };

// export default Dot;

import React, { useState } from "react";



const Dot = React.memo(({ x, y, size, index, onMouseEnter, assets }) => {

    // const preloadedImages = {};
    // assets.forEach(asset => {
    // const img = new Image();
    // img.src = asset;
    // preloadedImages[asset] = img;
    // });

    const [currentAssetIndex, setCurrentAssetIndex] = useState(
        Math.floor(Math.random() * assets.length)
    );

    const dotStyle = {
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
        cursor: 'pointer',
    };

    const handleMouseEnter = () => {
        const nextIndex = (currentAssetIndex + 1) % assets.length;
        setCurrentAssetIndex(nextIndex);
        onMouseEnter(index);
    };

    return (
        <img
            src={assets[currentAssetIndex]}
            alt={`Dot ${index}`}
            style={dotStyle}
            onMouseEnter={handleMouseEnter}
        />
    );
});

export default Dot;
