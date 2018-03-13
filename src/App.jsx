import React, { Component } from 'react';
import Landing from './Landing';
import Lieu from './Lieu';
import './App.css';
import {Button} from 'react-bootstrap';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      page: 1
    }
  }
  render() {
    if (this.state.page == 0){
      return (
         <Landing />
        //<Lieu page={this.state.page}/>
      );
    }
    if (this.state.page == 1){
      return (
        // <Landing />
        // <Lieu page={this.state.page}/>
        <div>
          <p className="Lieu_Text">J'habite dans le</p>
            <form>
              <select className="Lieu_DropDown" MULTIPLE>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select><br />
            <Button className="Lieu_Button" onClick={() => this.setState({page: 2})}>
                  Valider
                </Button>
            </form>
        </div>
      );
    if (this.state.page == 2){
      <div>
        
      </div>
    }
    }
  }
}

export default App;
