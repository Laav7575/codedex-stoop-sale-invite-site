import React from 'react';

const CopyToClipboardButton = ({ content }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("put link here");
      alert('Copied!', "put link here");
    } catch (error) {
      alert('Unable to copy to clipboard.. :(', error);
    }
  };

  return (
    <button onClick={handleCopy}>Copy Link</button>
  );
};

export default CopyToClipboardButton;