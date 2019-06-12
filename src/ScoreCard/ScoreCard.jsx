import React, { useState, useEffect, useCallback } from 'react';
import './ScoreCard.scss';
import ScoreList from '../ScoreList/ScoreList';
import ScoreInput from '../ScoreInput/ScoreInput';

const ScoreCard = () => {
  const scoreListInitialState = [
    {
      title: 'Blue Cards',
      points: 0,
      cls: 'blue i-card'
    },
    {
      title: 'Green Cards',
      points: 0,
      cls: 'green i-card'
    },
    {
      title: 'Yellow Cards',
      points: 0,
      cls: 'yellow i-card'
    },

    {
      title: 'Purple Cards',
      points: 0,
      cls: 'purple i-card'
    },
    {
      title: 'Wonders',
      points: 0,
      cls: 'yellow i-pyramid'
    },
    {
      title: 'Tech Chips',
      points: 0,
      cls: 'green i-chip'
    },
    {
      title: 'Money',
      points: 0,
      cls: 'yellow i-chip'
    },
    {
      title: 'Military Points',
      points: 0,
      cls: 'red i-shield'
    }

  ];

  // const scoreInit = {
  //   Money: 0,
  //   'Military Points': 0,
  // }

  const player1InitialState = {
    name: 'One',
    totalScore: 0,
    scores: scoreListInitialState
      // 'Blue Cards': 0,
      // 'Green Cards': 0,

      // // 'Blue Cards': 0,
      // // 'Green Cards': 0,
      // // 'Blue Cards': 0,
      // // 'Green Cards': 0,

  };

  const player2InitialState = {
    name: 'Two',
    totalScore: 0,
    scores: scoreListInitialState
  };

  /** use setter */
  const useForceUpdate = () => useState()[1];
  const [scoreList, setScoreList] = useState(scoreListInitialState);
  const [player1, setPlayer1] = useState(player1InitialState);
  const [player2, setPlayer2] = useState(player2InitialState);


  //hook that triggers when something updates
  useEffect(() => {
    // const newPlayer1 = player1;
    // newPlayer1.scores = scoreListInitialState;
    // setPlayer1(newPlayer1);

    // const newPlayer2 = player2;
    // newPlayer2.scores = scoreListInitialState;
    // setPlayer2(newPlayer2);
    // console.log(888888, newPlayer1);
    console.log('pleaseee')
    setPlayer1(player1);
  }, [player1]);
  
  const forceUpdate = useForceUpdate();


  const handleUpdatePlayer = (player) => {
    if(player.name === player1.name ){
      const newPlayer = player;  
      let total = 0;
       player1.scores.map(score => total += score.points); 
       newPlayer.totalScore = total;
       let playerCopy = JSON.parse(JSON.stringify(newPlayer));
       setPlayer1(playerCopy);
      console.log(player1,1000);
    }else{

    }
  };


  return (
    <section id="scorecard" className="form-group" >

      <div className="row" >
        <div className="col-md-4" >
          <ScoreList scoreList={scoreList}></ScoreList>
        </div>
        <div className="col-md-4" >
          <ScoreInput currentPlayer={player1} 
          onUpdatePoints={handleUpdatePlayer}
          ></ScoreInput>
        </div>
        <div className="col-md-4" >
          <ScoreInput currentPlayer={player2} 
          onUpdatePoints={handleUpdatePlayer}
          ></ScoreInput>
        </div>

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
//           return null;
//         }
//       },
//       clear() {
//         localStorage.clear();
//       }
//     }

export default ScoreCard;
