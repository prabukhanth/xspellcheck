import React, { useState, useEffect } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

function XSpellCheck() {
  const [inputText, setInputText] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  useEffect(() => {
    // Reset suggestion on input change
    if (!inputText) {
      setSuggestion('');
      return;
    }

    // Split the input text into words
    const words = inputText.toLowerCase().split(' ');

    // Find the first misspelled word in the dictionary
    const misspelledWord = words.find(word => customDictionary[word]);

    // If there's a misspelled word, suggest the correction
    if (misspelledWord) {
      const correctedWord = customDictionary[misspelledWord];
      setSuggestion(
        <span>
          Did you mean: <strong>{correctedWord}</strong>?
        </span>
      );
    } else {
      setSuggestion('');
    }
  }, [inputText]);

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea 
        value={inputText} 
        onChange={handleInputChange} 
        placeholder="Enter text..." 
        rows="4" 
        cols="50"
      />
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
}

export default XSpellCheck;