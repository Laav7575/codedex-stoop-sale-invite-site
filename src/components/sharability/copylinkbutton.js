import React from 'react';

const CopyToClipboardButton = ({ content }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("https://codedex-super-stoop-sale.vercel.app/");
      alert('Copied!', "https://codedex-super-stoop-sale.vercel.app/");
    } catch (error) {
      alert('Unable to copy to clipboard.. :(', error);
    }
  };

  return (
    <button onClick={handleCopy}>Copy Link</button>
  );
};

export default CopyToClipboardButton;