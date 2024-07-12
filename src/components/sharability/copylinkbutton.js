import React from 'react';

// Define a functional component named CopyToClipboardButton that takes a 'content' prop
const CopyToClipboardButton = ({ content }) => {
  // Define an asynchronous function to handle copying text to the clipboard
  const handleCopy = async () => {
    try {
      // Attempt to write the specified text to the clipboard
      await navigator.clipboard.writeText("https://codedex-super-stoop-sale.vercel.app/");
      // Alert the user that the text has been copied successfully
      alert('Copied!', "https://codedex-super-stoop-sale.vercel.app/");
    } catch (error) {
      // Alert the user if there was an error copying the text
      alert('Unable to copy to clipboard.. :(', error);
    }
  };

  // Return a button element that triggers the handleCopy function when clicked
  return (
    <button onClick={handleCopy}>Copy Link</button>
  );
};

// Export the CopyToClipboardButton component as the default export of the module
export default CopyToClipboardButton;
