import React, { PureComponent, useCallback, useEffect, useState } from "react";
import "./ScoreInput.scss";

const ScoreInput = ({ currentPlayer, onUpdatePoints }) => {

  const [ player, setPlayer] = useState(currentPlayer);

  useEffect(() => {
    console.log(999999);
    setPlayer(currentPlayer)
  }, [currentPlayer]);

  const handleChange = (e, item) => {
    console.log(1414141414);
    const newPlayer = currentPlayer;
    newPlayer.scores.map(score => 
      (score.title === item.title) ? score.points = +e.target.value : +score.points
    );
    console.log(newPlayer,999);
    setPlayer(newPlayer)
    onUpdatePoints(newPlayer);
  };

  // handleChangeScore = (event, scoreI) => {

  //   let val = event.target.value;
  //   let player = this.props.player;
  //   player.scores[scoreI] = val;
  //   player.totalScore = this.calcTotalScore(player);
  //   console.dir(player);
  //   this.setState({ player: player });
  //   this.forceUpdate();

  // }

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
      {currentPlayer.scores.map(item => (
        <div className="row" key={item.title}>
          <div className="col-md">
            {/* <label className="col-md col-form-label">
              <span className={item.cls}></span>
              {item.title}
            </label> */}
            {/* <input
              type="number"
              className=""
              value={this.state.value}
              onChange={e => this.handleChangeScore(e, item.title)}
            />
            */}

{/* value={item.points} */}
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
