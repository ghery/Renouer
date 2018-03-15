import React, { Component } from 'react';
import Aide from './Aide';
import Landing from './Landing';
import Ambassadeur from './Ambassadeur';
import './App.css';
import './Aide.css';
import './lieu.css';
import './Button.css';
import './quartier.css';
import './Ambassadeur.css';
import {Button} from 'react-bootstrap';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      page: 1,
      aide_type: 0,
      ambassadeur: 0
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
          <p className="Lieu_Text">J’HABITE DANS LE ...</p>
            <form>
              <select className="Lieu_DropDown" MULTIPLE>
                <option value="1">1er arrondissement</option>
                <option value="2">2eme arrondissement</option>
                <option value="3">3eme arrondissement</option>
                <option value="4">4eme arrondissement</option>
                <option value="5">5eme arrondissement</option>
                <option value="6">6eme arrondissement</option>
                <option value="1">7eme arrondissement</option>
                <option value="2">8eme arrondissement</option>
                <option value="3">9eme arrondissement</option>
                <option value="4">10eme arrondissement</option>
                <option value="5">11eme arrondissement</option>
                <option value="6">12eme arrondissement</option>
                <option value="1">13eme arrondissement</option>
                <option value="2">14eme arrondissement</option>
                <option value="3">15eme arrondissement</option>
                <option value="4">16eme arrondissement</option>
                <option value="5">17eme arrondissement</option>
                <option value="6">18eme arrondissement</option>
                <option value="1">19eme arrondissement</option>
                <option value="2">20eme arrondissement</option>
                <option value="2">autre</option>
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
                 Travail
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
    if (this.state.page == 3){
      return (
        <div>
          <a className="Button_link" onClick={() => this.setState({page: 4})}>
            <div className="Button_accompagnement">
              Etre accompagné
            </div>
          </a>
          <a className="Button_link" href="https://mes-aides.gouv.fr/">
            <div className="Button_accompagnement">
              Faire mes demarche en ligne
            </div>
          </a>
        </div>
      );
    }
    if (this.state.page == 4){
      return (
        <div>
          <a className="Button_link">
            <div className="Button_Type" href="">
              CAF
            </div>
          </a>
          <a className="Button_link" onClick={() => this.setState({page: 5})}>
            <div className="Button_Type">
              Permanence dans mon quartier
            </div>
          </a>
          <a className="Button_link" onClick={() => this.setState({page: 6})}>
            <div className="Button_Type">
              Ambassadeur local
            </div>
          </a>
        </div>
      );
    }
    if (this.state.page == 5){
      return (
        <div className="quartier">
          <div className="quartier_title">
            Les permanence de mon quartier
          </div>
          <div className="quartier_content">
            <div className="quartier_leftcontent">
              <img className="quartier_leftcontent_img" src="img/Aires10.jpg"/>
                <a className="Button_link">
                  <div className="Button_Type">
                    Recevoire les horaires par SMS
                  </div>
                </a>
            </div>
            <div className="quartier_rightcontent">
              <p className="quartier_rightcontent_text">Aires 10</p>
              <p className="quartier_rightcontent_text">Centre social</p>
              <p className="quartier_rightcontent_text">10h - 12h</p>
              <p className="quartier_rightcontent_text">Lundi</p>
              <p className="quartier_rightcontent_text">mardi</p>
              <p className="quartier_rightcontent_text rayer">Mercredi</p>
              <p className="quartier_rightcontent_text">Jeudi</p>
              <p className="quartier_rightcontent_text">Vendredi</p>
            </div>
          </div>
        </div>
      );
    }
    if (this.state.page == 6){
      return (
        <div className="Ambassadeur">
          <div className="Ambassadeur_one">
            <img className="Ambassadeur_pic" src="img/joanna.jpeg"/>
            <p className="Ambassadeur_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a className="Button_link" onClick={() => this.setState({page: 7, ambassadeur: 1})}>
                <div className="Button_Ambassadeur">
                  demander RDV
                </div>
              </a>
          </div>
          <div className="Ambassadeur_one">
            <img className="Ambassadeur_pic" src="img/yamine.jpeg"/>
            <p className="Ambassadeur_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a className="Button_link" onClick={() => this.setState({page: 7, ambassadeur: 2})}>
                <div className="Button_Ambassadeur">
                  demander RDV
                </div>
              </a>
          </div>
          <div className="Ambassadeur_one">
            <img className="Ambassadeur_pic" src="img/siegrid.jpeg"/>
            <p className="Ambassadeur_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a className="Button_link" onClick={() => this.setState({page: 7, ambassadeur: 3})}>
                <div className="Button_Ambassadeur">
                  demander RDV
                </div>
              </a>
          </div>
          <div className="Ambassadeur_one">
            <img className="Ambassadeur_pic" src="img/gildas.jpeg"/>
            <p className="Ambassadeur_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a className="Button_link" onClick={() => this.setState({page: 7, ambassadeur: 4})}>
                <div className="Button_Ambassadeur">
                  demander RDV
                </div>
              </a>
          </div>
        </div>
      );
    }
    if (this.state.page == 7){
      return (
        <Ambassadeur ambassadeur={this.state.ambassadeur}/>
      );
    }
  }
}

export default App;
