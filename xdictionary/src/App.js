import React, { useState } from 'react';

// Initial dictionary state
const initialDictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
];

function XDictionary() {
    const [dictionary] = useState(initialDictionary); // Dictionary state
    const [searchTerm, setSearchTerm] = useState(''); // Input state
    const [result, setResult] = useState(''); // Result state

    // Handler for search
    const handleSearch = () => {
        // Search in the dictionary (case-insensitive)
        const foundWord = dictionary.find(item => item.word.toLowerCase() === searchTerm.toLowerCase());

        // Update result based on the search
        if (foundWord) {
            setResult(foundWord.meaning);
        } else {
            setResult("Word not found in the dictionary.");
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h1>Dictionary App</h1>
            <input 
                type="text" 
                placeholder="Search for a word..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ padding: '10px', width: 'calc(100% - 20px)', marginBottom: '10px' }}
            />
            <button 
                onClick={handleSearch} 
                style={{ padding: '10px', cursor: 'pointer' }}
            >
                Search
            </button>
            <p style={{ marginTop: '20px', fontWeight: 'bold' }}>Definition:</p>
            <p>{result}</p>
        </div>
    );
}

export default XDictionary;