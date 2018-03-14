import React, { Component } from 'react';
import Aide from './Aide';
import Landing from './Landing';
import './App.css';
import './Aide.css';
import './lieu.css';
import {Button} from 'react-bootstrap';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      page: 1,
      aide_type: 0
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
    }
    if (this.state.page == 2){
      return(
        <div className="Aide">
         <div className="Aide_category">
           <a className="Aide_typelink" onClick={() => this.setState({aide_type: 0})}>
             <div className="Aide_type">
               Tout
             </div>
           </a>
             <a className="Aide_typelink" onClick={() => this.setState({aide_type: 1})}>
               <div className="Aide_type">
                 Logement
               </div>
             </a>
             <a className="Aide_typelink" onClick={() => this.setState({aide_type: 2})}>
               <div className="Aide_type">
                 Culture
               </div>
             </a>
             <a className="Aide_typelink" onClick={() => this.setState({aide_type: 3})}>
               <div className="Aide_type">
                 famille
               </div>
             </a>
             <a className="Aide_typelink" onClick={() => this.setState({aide_type: 4})}>
               <div className="Aide_type">
                 Etude
               </div>
             </a>
         </div>
         <Aide type={this.state.aide_type}/>
         <Button className="Aide_button" onClick={() => this.setState({page: 3})}>
           Valider
         </Button>
        </div>
      );
    }
  }
}

export default App;
