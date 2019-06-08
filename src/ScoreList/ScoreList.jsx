import React from 'react';
import './ScoreList.scss';

class ScoreList extends React.Component {

  render() {

    return (
      <div id="scorelist">

        {this.props.scoreList.map((item, i) => (
          <div className="row input-row" key={item.title}>
            <div className="col-md" >{item.title}  <span className={item.cls}></span>  </div>
          </div>
        ))}

        <div className="row input-row" >

          <div className="col-md" >Total <span className="i-sigma"></span>

          <span className="icon-pyramid"></span>

          
          <span className="icon-card"></span>

          <span className="icon-shield"></span>
          </div>
        </div>
      </div>

    );
  }

}

export default ScoreList;
