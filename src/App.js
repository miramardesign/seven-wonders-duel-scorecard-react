import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import ScoreCard from './ScoreCard/ScoreCard';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>Seven Wonders Duel Scorecard </h1>
      </header>
      <ScoreCard></ScoreCard>

    </div>
  );
}

export default App;
