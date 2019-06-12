import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import ScoreCard from './ScoreCard/ScoreCard';

function App() {

  return (
    <div className="App container">

      <header className="App-header">
        <h1>Seven Wonders Duel Scorecard </h1>
      </header>
      <div className="row" >

        <div className="col-md-6" >
          <ScoreCard></ScoreCard>
        </div>
        <div className="col-md-6" >
          <ScoreCard></ScoreCard>
        </div>
      </div>
    </div>

  );
}

export default App;
