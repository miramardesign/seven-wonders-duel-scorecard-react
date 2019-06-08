import React from 'react';
import './ScoreList.scss';

class ScoreList extends React.Component {
  constructor(props) {
    super(props);

    this.perist = {
      set(key, data) {
        try {
          localStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
          console.error('Error saving to localStorage', e);
        }
      },
      get(key) {
        try {
          return JSON.parse(localStorage.getItem(key));
        } catch (e) {
          console.error('Error getting data from localStorage', e);
          return null;
        }
      },
      clear() {
        localStorage.clear();
      }
    }

     //todo add icons and tooltip hints

    this.scoreObj = {
      'Blue Card': 0,
      'Yellow Card': 0,
      'Purple Card': 0,
    }

     this.scoreList = [
      {
        title: 'Blue Card',
        points: 0
      },
      {
        title: 'Yellow Card',
        points: 0
      },
      {
        title: 'Purple Card',
        points: 0
      },
      {
        title: 'Wonders',
        points: 0
      },
      {
        title: 'Technology Chips',
        points: 0
      },
      {
        title: 'Money',
        points: 0
      },
      {
        title: 'Military Points',
        points: 0
      }

    ];

    this.state = {

      player1:
      {
        name: 'One',
        totalScore: 0,
        scores: this.scoreList.slice(0)
      },
      player2:
      {
        name: 'Two',
        totalScore: 0,
        scores: this.scoreList.slice(0)
      }

    };

  }
  handleChangeScore = (event, scoreI, playerId) => {

    let val = event.target.value;
    this.setState( state => {
      console.log(val, 666)
      //const { player } = state;
      const player = state[playerId];

      player.scores[scoreI].points = val;
      player.totalScore = this.calcTotalScore(player);
      return {
        player
       // player
      }
    });

  }

  calcTotalScore(player){
    let total = 0;
    player.scores.forEach( function(score) {
      var pts = +score.points ;
      if(!pts){
        pts = 0;
      }
      total = total + pts
    });
    return total;
  };

  render() {

    return (
      <section id="scorecard">
     
        {this.scoreList.map( (item, i) => (
          <div className="row" key={item.title}>
            <div className="col-md-4" >{item.title}</div>
            <div className="col-md-4" >
              <input type="text" value={this.state.value}
                onChange={(e) => this.handleChangeScore(e, i, "player1")} />
            </div>
           
          </div>
        ))}

    

      </section>

    );
  }

}


export default ScoreList;
