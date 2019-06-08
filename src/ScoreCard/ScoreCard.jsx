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
        title: 'Blue Cards',
        points: 0,
        cls: 'blue i-card'
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
        cls: 'gold i-pyramid'
      },
      {
        title: 'Technology Chips',
        points: 0,
        cls: 'green i-chip'
      },
      {
        title: 'Money',
        points: 0,
        cls: 'gold i-chip'
      },
      {
        title: 'Military Points',
        points: 0,
        cls: 'red i-shield'
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
      <section id="scorecard" className="form-group " >

        <div className="row" >
          <div className="col-md-2 offset-md-3" >
            <ScoreList scoreList={this.scoreList}></ScoreList>
          </div>

          <div className="col-md-2" >
            <ScoreInput player={this.state.player1} scoreList={this.scoreList}></ScoreInput>
          </div>
          <div className="col-md-2" >
            <ScoreInput player={this.state.player2} scoreList={this.scoreList}></ScoreInput>
          </div>

        </div>

      </section>

    );
  }

}


export default ScoreCard;
