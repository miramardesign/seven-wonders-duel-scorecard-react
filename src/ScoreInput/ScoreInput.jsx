import React, { useEffect, useState } from "react";
import "./ScoreInput.scss";

const ScoreInput = ({ currentPlayer, onUpdatePoints }) => {

  const [ player, setPlayer] = useState({...currentPlayer});

  // useEffect(() => {
  //   console.log(999999);
  //   setPlayer(currentPlayer)
  // }, [currentPlayer]);

  const handleChange = (e, item) => {
    const val = +e.target.value;
    console.log(1414141414);
    console.log(currentPlayer === player, 155555555);
    const newPlayer = player;
    newPlayer.scores.map(score => 
      (score.title === item.title) ? score.points = val : +score.points
    );
    // newPlayer.scores[1].points = +e.target.value;

    console.log(newPlayer,19191919);
    setPlayer(newPlayer)
    console.log(currentPlayer, 21111111111111111111111111);
    onUpdatePoints(newPlayer);
  };

  return (
    <section id="scoreinput">
      <div className="row">
        <div className="col-md">
          <input
            type="text"
            className="form-control"
            placeholder="Player Name"
          />
        </div>
      </div>
      {player.name},
      {player.id}
      {player.scores.map(item => (
        <div className="row" key={item.title}>
          <div className="col-md">
            {/* <label className="col-md col-form-label">
              <span className={item.cls}></span>
              {item.title}
            </label> */}
 
            <input
              type="number"
              className="form-control"
              value={item.points}
              onChange={e => handleChange(e, item)}
            />
          </div>
        </div>
      ))}
      <div className="row">
        <div className="col-md">
          <input
            type="text"
            className="form-control"
            value={player.totalScore}
            readOnly="readOnly"
          />
        </div>
      </div>
    </section>
  );
};

export default ScoreInput;
