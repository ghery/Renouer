import React, { Component } from 'react';
import './Ambassadeur.css';
import App from './App';


class Ambassadeur extends Component {
  render(){
    if (this.props.ambassadeur == 0){
      return(
        <div>
        </div>
      );
    }
    if (this.props.ambassadeur == 1){
      return(
        <div>
          <img className="Ambassadeur_returnPic" src="img/joanna.jpeg"/>
          <p className="Ambassadeur_returnText">Joanna vous recontactera</p>
        </div>
      );
    }
    if (this.props.ambassadeur == 2){
      return(
        <div>
          <img className="Ambassadeur_returnPic" src="img/yamine.jpeg"/>
          <p className="Ambassadeur_returnText">Yamine vous recontactera</p>
        </div>
      );
    }
    if (this.props.ambassadeur == 3){
      return(
        <div>
          <img className="Ambassadeur_returnPic" src="img/siegrid.jpeg"/>
          <p className="Ambassadeur_returnText">Siegrid vous recontactera</p>
        </div>
      );
    }
    if (this.props.ambassadeur == 4){
      return(
        <div>
          <img className="Ambassadeur_returnPic" src="img/gildas.jpeg"/>
          <p className="Ambassadeur_returnText">Gildas vous recontactera</p>
        </div>
      );
    }
  }
}

export default Ambassadeur
