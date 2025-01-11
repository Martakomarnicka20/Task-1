import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleTruncate = () => {
    const shortText = inputText.slice(0, 20) + (inputText.length > 20 ? '...' : '');
    setOutputText(shortText);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
    console.log('Copied to clipboard:', outputText);
    alert('Copied to clipboard: ' + outputText);
  };

  return (
    <div className='wrap'>
      <input 
        type="text" 
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)} 
        placeholder="Enter text..."
      />
      <button onClick={handleTruncate}>Go</button>
      <button className='btn' onClick={copyToClipboard}>Copy to Clipboard</button>
      <textarea 
        value={outputText} 
        readOnly 
        placeholder="Short text" 
      />
    </div>
  );
};

export default App;


