import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ScoreInput extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      player: this.props.player
    };
  }

  calcTotalScore(player) {
    let scoresArr = Object.values(player.scores);
    console.log(4444, scoresArr);
    return scoresArr.reduce((a, b) => parseInt(a) + parseInt(b));
  };

  handleChangeScore = (event, scoreI) => {

    let val = event.target.value;

    let player = this.props.player;
    console.dir(player);
    // player.scores.push({ [scoreI]: val});
    player.scores[scoreI] = val;
    player.totalScore = this.calcTotalScore(player);
    console.dir(player);
    this.setState({ player: player });
    this.forceUpdate();

  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <section id="scorecard">

        {this.props.scoreList.map((item, i) => (
          <div className="row" key={item.title}>
            {/* <div className="col-md-4" >{item.title}</div> */}
            <div className="col-md-4" >
              <input type="text" value={this.state.value}
                onChange={(e) => this.handleChangeScore(e, item.title)} />
            </div>

          </div>
        ))}

        <div className="row" >
          {/* <div className="col-md-4" >Total</div> */}
          <div className="col-md-4" >
            <input type="text" value={this.state.player.totalScore} readOnly="readOnly" />
          </div>

        </div>
      </section>
    );
  }
}


export default ScoreInput;