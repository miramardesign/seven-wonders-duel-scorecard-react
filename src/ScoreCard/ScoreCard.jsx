import React, { useState, useEffect, useCallback } from 'react';
import './ScoreCard.scss';
import ScoreList from '../ScoreList/ScoreList';
import ScoreInput from '../ScoreInput/ScoreInput';

const ScoreCard = () => {
  const scoreListInitialState = [
    {
      title: 'Blue Cards',
      points: "",
      cls: 'blue i-card'
    },
    {
      title: 'Green Cards',
      points: "",
      cls: 'green i-card'
    },
    {
      title: 'Yellow Cards',
      points: "",
      cls: 'yellow i-card'
    },

    {
      title: 'Purple Cards',
      points: "",
      cls: 'purple i-card'
    },
    {
      title: 'Wonders',
      points: "",
      cls: 'yellow i-pyramid'
    },
    {
      title: 'Tech Chips',
      points: "",
      cls: 'green i-chip'
    },
    {
      title: 'Money',
      points: "",
      cls: 'yellow i-chip'
    },
    {
      title: 'Military Points',
      points: "",
      cls: 'red i-shield'
    }

  ];

  const playersInitialState = [
    {
    name: 'One',
    totalScore: 0,
    scores: scoreListInitialState

  }, {
    name: 'Two',
    totalScore: 0,
    scores: scoreListInitialState
  }];

  /** use setter */
  const [scoreList, setScoreList] = useState(scoreListInitialState);
  const [players, setPlayers] = useState(playersInitialState);

  const handleUpdatePlayer = (playerInput) => {
   // if(playerPlayer.name === player[0].name ){
      const newPlayer = playerInput;  
      let total = 0;
       playerInput.scores.map(score => total += +score.points); 
       newPlayer.totalScore = total;
       //let playerCopy = JSON.parse(JSON.stringify(newPlayer));
       setPlayers([newPlayer]);
      console.log(players,76);
    // }else
    // }
  };


  return (
    <section id="scorecard" className="form-group" >

      <div className="row" >
        <div className="col-md-4" >
          <ScoreList scoreList={scoreList}></ScoreList>
        </div>
        <div className="col-md-4" >
          <ScoreInput currentPlayer={players[0]} 
          onUpdatePoints={handleUpdatePlayer}
          ></ScoreInput>
        </div>
        {/* <div className="col-md-4" >
          <ScoreInput currentPlayer={players[1]} 
          onUpdatePoints={handleUpdatePlayer}
          ></ScoreInput>
        </div> */}

      </div>

    </section>

  );

}

//     this.perist = {
//       set(key, data) {
//         try {
//           localStorage.setItem(key, JSON.stringify(data));
//         } catch (e) {
//           console.error('Error saving to localStorage', e);
//         }
//       },
//       get(key) {
//         try {
//           return JSON.parse(localStorage.getItem(key));
//         } catch (e) {
//           console.error('Error getting data from localStorage', e);
//           return "";
//         }
//       },
//       clear() {
//         localStorage.clear();
//       }
//     }

export default ScoreCard;
