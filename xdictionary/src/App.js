import { useState } from 'react'

function App() {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ])
  const [word, setWord] = useState("");
  const [ wordMeaning, setWordMeaning] = useState("");


  const handleSearch = () => {
  if (word) { 
    let result = dictionary.filter((inputword) => inputword.word.toLowerCase().includes(word.toLowerCase()))
    if(result.length > 0) {
      setWordMeaning(result[0].meaning);
    } else {
      setWordMeaning("Word not found in the dictionary.");
    }
  }
  else {
    setWordMeaning("Word not found in the dictionary.");
  }  
}   

  return (
    <>  
      <div>
        <h2>Dictionary App</h2>
        <div>
            <input 
              type="text"  
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
        <div>
          <h2>Definition:</h2>
          <p>{wordMeaning}</p>
        </div> 
      </div>
    </>
  )
}

export default App