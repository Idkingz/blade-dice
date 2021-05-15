import React, { useState } from 'react';
import './App.css';

const tks = require('./tricks.json')

function App() {
  const [bladeTrick, setBladeTrick] = useState({});
  const [level, setLevel] = useState(1)

  const getRandom = (obj, level) => {
    const keys = Object.keys(obj)
    const key = keys[Math.floor(Math.random() * keys.length)]
    if (obj[key].level <= level)
      return key
    getRandom(obj, level)
  }

  function sort(e) {
    const { 
      in: enter, 
      tricks,
      out,
      variations,
      side,
    } = tks

    const trick = {
      enter: getRandom(enter, level),
      out: getRandom(out, level),
      trick: getRandom(tricks, level),
      variation: getRandom(variations, level),
      side: getRandom(side, level)
    }

    setBladeTrick(bladeTrick => ({bladeTrick, ...trick}))
  }

  return (
    <div className="App">
        <div className="card">
          <p id="level">
            <span>Level:  </span>
            <input onChange={event => setLevel(event.target.value)} type="text" />
          </p>
          <br />
          <p>In: {bladeTrick.enter}</p>
          <p>Varition: {bladeTrick.variation}</p>
          <p>Side: {bladeTrick.side}</p>
          <p>Trick: {bladeTrick.trick}</p>
          <p>Out: {bladeTrick.out}</p>
          <br />
          <center>
            <button value="blood" onClick={sort}>Trick</button>
          </center>
        </div>
    </div>
  );
}

export default App;
