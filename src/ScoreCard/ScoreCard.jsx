import React from 'react';
import './ScoreCard.scss';
import ScoreList from '../ScoreList/ScoreList';
import ScoreInput from '../ScoreInput/ScoreInput';


class ScoreCard extends React.Component {
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
        scores: {}
      },
      player2:
      {
        name: 'Two',
        totalScore: 0,
        scores: {}
      }

    };

  }



  render() {

    return (
      <section id="scorecard">
        <div className="row" >
          <div className="col-md-4" >Player Name </div>
          <div className="col-md-4" ><input type="text" /></div>
          <div className="col-md-4" ><input type="text" /></div>
        </div>

        <div className="row" >
          <div className="col-md-4" >
            <ScoreList scoreList={this.scoreList}></ScoreList>
          </div>

          <div className="col-md-4" >
            <ScoreInput player={this.state.player1} scoreList={this.scoreList}></ScoreInput>
          </div>
          <div className="col-md-4" >
            <ScoreInput player={this.state.player2} scoreList={this.scoreList}></ScoreInput>
          </div>

        </div>

      </section>

    );
  }

}


export default ScoreCard;
