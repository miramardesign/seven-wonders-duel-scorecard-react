import React, { useState, useEffect, useCallback } from "react";
import "./ScoreCard.scss";
import ScoreList from "../ScoreList/ScoreList";
import ScoreInput from "../ScoreInput/ScoreInput";
import { copyFile } from "fs";

const ScoreCard = () => {
  const scoreListInitialState = [
    {
      title: "Blue Cards",
      points: "",
      cls: "blue i-card"
    },
    {
      title: "Green Cards",
      points: "",
      cls: "green i-card"
    },
    {
      title: "Yellow Cards",
      points: "",
      cls: "yellow i-card"
    },

    {
      title: "Purple Cards",
      points: "",
      cls: "purple i-card"
    },
    {
      title: "Wonders",
      points: "",
      cls: "yellow i-pyramid"
    },
    {
      title: "Tech Chips",
      points: "",
      cls: "green i-chip"
    },
    {
      title: "Money",
      points: "",
      cls: "yellow i-chip"
    },
    {
      title: "Military Points",
      points: "",
      cls: "red i-shield"
    }
  ];

  /** use setter */
  const [scoreList, setScoreList] = useState(scoreListInitialState);
  const [scoreList1, setScoreList1] = useState(JSON.parse(JSON.stringify(scoreListInitialState)));

  const playersInitialState = [
    {
      id: 1,
      name: "One",
      totalScore: 0,
      scores: scoreList
    },
    {
      id: 2,
      name: "Two",
      totalScore: 0,
      scores: scoreList1
    }
  ];

  const [players, setPlayers] = useState(playersInitialState);

  const handleUpdatePlayer = playerInput => {
    console.log(players[0].scores === players[1].scores, 82822828);
    const newPlayer = playerInput;
    let total = 0;

    newPlayer.scores.map(score => (total += +score.points));
    newPlayer.totalScore = total;
    const newPlayers = [...players];
    const updatePlayers = newPlayers.map(p => p.id === newPlayer.id ? newPlayer : p );

    setPlayers(updatePlayers);
    console.log(updatePlayers, 76);
  };

  return (
    <section id="scorecard" className="form-group">
      <div className="row">
        <div className="col-md-4">
          <ScoreList scoreList={scoreList} />
        </div>
        <div className="col-md-4">
          <ScoreInput
            currentPlayer={players[0]}
            onUpdatePoints={handleUpdatePlayer}
          />
        </div>
        <div className="col-md-4">
          <ScoreInput
            currentPlayer={players[1]}
            onUpdatePoints={handleUpdatePlayer}
          />
        </div>
      </div>
    </section>
  );
};

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
