import React from 'react';

const CopyToClipboardButton = ({ content }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content); // Copies the provided content to clipboard
      alert('Copied to clipboard!'); // Success message
    } catch (error) {
      alert('Unable to copy to clipboard.. :('); // Error message
      console.error('Copy to clipboard failed:', error); // Log the error to console for debugging
    }
  };

  return (
    <button onClick={handleCopy}>Copy Link</button> // Button to trigger handleCopy function
  );
};

export default CopyToClipboardButton;
