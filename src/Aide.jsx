import React, { Component } from 'react';
import './Aide.css';
import App from './App';
import { Checkbox } from 'react-bootstrap';

class Aide extends Component {
  render(){
    if (this.props.type == 0)
    {
      return(
        <div className="Aide_content">
          <div className="Aide_aide">
            <div className="Aide_title">
              <p className="Aide_titleText">APL</p>
            </div>
            <div className="Aide_under">
              <div className="Aide_underText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo dolor, lacinia tempus nulla vitae, hendrerit vehicula risus. Curabitur tincidunt, tellus nec pulvinar porttitor, odio orci eleifend nibh, et consequat nulla purus quis turpis. Nunc sit amet laoreet lectus, vitae faucibus ante. Nam hendrerit porta dolor, ac fermentum nunc aliquet ac. Nunc in gravida sapien.
              </div>
              <div className="Aide_Checkbox">
                <p className="Aide_CheckboxText">choisir cette aide:</p>
                <Checkbox className="Aide_Checkbox_Checkbox"/>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else if(this.props.type == 1) {
      return(
        <div className="Aide_content">
          1
        </div>
      );
    }
    else if(this.props.type == 2) {
      return(
        <div className="Aide_content">
          2
        </div>
      );
    }
    else if(this.props.type == 3) {
      return(
        <div className="Aide_content">
          3
        </div>
      );
    }
    else if(this.props.type == 4) {
      return(
        <div className="Aide_content">
          4
        </div>
      );
    }
  }
}

export default Aide;
