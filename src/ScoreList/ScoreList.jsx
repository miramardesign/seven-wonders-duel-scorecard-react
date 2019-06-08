import React from 'react';
import './ScoreList.scss';

class ScoreList extends React.Component {
  constructor(props) {
    super(props);




  }



  render() {

    return (
      <div id="scorelist">

        {this.props.scoreList.map((item, i) => (
          <div className="row input-row" key={item.title}>
            <div className="col-md" >{item.title}</div>
          </div>
        ))}

        <div className="row input-row" >

          <div className="col-md" >Total</div>
        </div>
      </div>

    );
  }

}


export default ScoreList;
