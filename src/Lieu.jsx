import React, { Component } from 'react';
import './lieu.css';
import {Button} from 'react-bootstrap';
import App from './App';

class Lieu extends Component {
  render(){
    return(
      <div>
        <p className="Lieu_Text">J'habite dans le</p>
          <form>
            <select className="Lieu_DropDown" MULTIPLE>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select><br />
              <Button className="Lieu_Button" onClick={() => App.setState({page: 2})}>
                Valider
              </Button>
          </form>
      </div>
    );
  }
}

export default Lieu
