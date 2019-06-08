import React from 'react';
import './ScoreList.scss';

class ScoreList extends React.Component {

  render() {

    return (
      <div id="scorelist">

        <div className="row input-row" >
         
             <label className="col-md col-form-label">
              <span className="black i-player"></span> Player Name 
             </label>
         
        </div>

        {this.props.scoreList.map((item, i) => (
          <div className="row input-row" key={item.title}>

            <label className="col-md col-form-label">
            <span className={item.cls}></span> {item.title}
            </label>

          </div>
        ))}

        <div className="row" >

          <label className="col-md col-form-label"> <span className="i-sigma"></span> Total
          </label>

        </div>
      </div>

    );
  }

}

export default ScoreList;
