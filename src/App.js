import React, { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [ message, setMessage ] = useState('Welcome!');

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ message }</h1>
        <h2>{ score }</h2>
        <button onClick={() => setScore(prevScore => prevScore + 1)}>   {/* Update the score state */}
          Increase score
        </button>
        <button onClick={() => setScore(prevScore => prevScore - 1)}>   {/* Update the score state */}
          Decrease score
        </button>
        <button onClick={() => setScore(0)}>   {/* Update the score state */}
          Reset score
        </button>
      </header>
    </div>
  );
}

export default App;
