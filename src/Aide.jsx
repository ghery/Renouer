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
              <p className="Aide_titleText">Aide Personnalisée au Logement (APL) </p>
            </div>
            <div className="Aide_under">
              <div className="Aide_underText">
              </div>
              <div className="Aide_Checkbox">
                <p className="Aide_CheckboxText">choisir cette aide:</p>
                <Checkbox className="Aide_Checkbox_Checkbox"/>
              </div>
            </div>
          </div>

          <div className="Aide_aide">
            <div className="Aide_title">
              <p className="Aide_titleText">Allocation de Logement Familiale (ALF)</p>
            </div>
            <div className="Aide_under">
              <div className="Aide_underText">
                pour les familles :)
              </div>
              <div className="Aide_Checkbox">
                <p className="Aide_CheckboxText">choisir cette aide:</p>
                <Checkbox className="Aide_Checkbox_Checkbox"/>
              </div>
            </div>
          </div>

        <div className="Aide_aide">
          <div className="Aide_title">
            <p className="Aide_titleText">Allocation de Logement à caractère Social (ALS)</p>
          </div>
          <div className="Aide_under">
            <div className="Aide_underText">
              pour tous les autres !
            </div>
            <div className="Aide_Checkbox">
              <p className="Aide_CheckboxText">choisir cette aide:</p>
              <Checkbox className="Aide_Checkbox_Checkbox"/>
            </div>
          </div>
        </div>

        <div className="Aide_aide">
          <div className="Aide_title">
            <p className="Aide_titleText">La prime de déménagement</p>
          </div>
          <div className="Aide_under">
            <div className="Aide_underText">
              vous avez au moins deux enfants et vous attendez un autre ? vous déménagez ? bénéficiez d’une aide pour vos frais de déménagement
            </div>
            <div className="Aide_Checkbox">
              <p className="Aide_CheckboxText">choisir cette aide:</p>
              <Checkbox className="Aide_Checkbox_Checkbox"/>
            </div>
          </div>
        </div>

        <div className="Aide_aide">
          <div className="Aide_title">
            <p className="Aide_titleText">le prêt à l’amélioration de l’habitat</p>
          </div>
          <div className="Aide_under">
            <div className="Aide_underText">
              vous souhaitez faire des travaux chez vous et bénéficiez d’une prestation ?
            </div>
            <div className="Aide_Checkbox">
              <p className="Aide_CheckboxText">choisir cette aide:</p>
              <Checkbox className="Aide_Checkbox_Checkbox"/>
            </div>
          </div>
        </div>

      <div className="Aide_aide">
        <div className="Aide_title">
          <p className="Aide_titleText">Revenu de Solidarité Active (RSA)</p>
        </div>
        <div className="Aide_under">
          <div className="Aide_underText">
            vous avez plus de 25 ans et vous gagnez peu ou pas d’argent ? Le RSA est une somme qui vous est versée pendant que vous cherchez du travail. Un.e spécialiste vous accompagne dans votre recherche.
          </div>
          <div className="Aide_Checkbox">
            <p className="Aide_CheckboxText">choisir cette aide:</p>
            <Checkbox className="Aide_Checkbox_Checkbox"/>
          </div>
        </div>
      </div>

      <div className="Aide_aide">
        <div className="Aide_title">
          <p className="Aide_titleText">Prime d’activité</p>
        </div>
        <div className="Aide_under">
          <div className="Aide_underText">
            vous travaillez et gagnez de l’argent, mais vos ressources sont modestes ? La prime d’activité complète vos revenus pour assurer que vous avez un cadre de vie décent.
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
          <div className="Aide_aide">
            <div className="Aide_title">
              <p className="Aide_titleText">Aide Personnalisée au Logement (APL) </p>
            </div>
            <div className="Aide_under">
              <div className="Aide_underText">
              </div>
              <div className="Aide_Checkbox">
                <p className="Aide_CheckboxText">choisir cette aide:</p>
                <Checkbox className="Aide_Checkbox_Checkbox"/>
              </div>
            </div>
          </div>

          <div className="Aide_aide">
            <div className="Aide_title">
              <p className="Aide_titleText">Allocation de Logement Familiale (ALF)</p>
            </div>
            <div className="Aide_under">
              <div className="Aide_underText">
                pour les familles :)
              </div>
              <div className="Aide_Checkbox">
                <p className="Aide_CheckboxText">choisir cette aide:</p>
                <Checkbox className="Aide_Checkbox_Checkbox"/>
              </div>
            </div>
          </div>

        <div className="Aide_aide">
          <div className="Aide_title">
            <p className="Aide_titleText">Allocation de Logement à caractère Social (ALS)</p>
          </div>
          <div className="Aide_under">
            <div className="Aide_underText">
              pour tous les autres !
            </div>
            <div className="Aide_Checkbox">
              <p className="Aide_CheckboxText">choisir cette aide:</p>
              <Checkbox className="Aide_Checkbox_Checkbox"/>
            </div>
          </div>
        </div>

        <div className="Aide_aide">
          <div className="Aide_title">
            <p className="Aide_titleText">La prime de déménagement</p>
          </div>
          <div className="Aide_under">
            <div className="Aide_underText">
              vous avez au moins deux enfants et vous attendez un autre ? vous déménagez ? bénéficiez d’une aide pour vos frais de déménagement
            </div>
            <div className="Aide_Checkbox">
              <p className="Aide_CheckboxText">choisir cette aide:</p>
              <Checkbox className="Aide_Checkbox_Checkbox"/>
            </div>
          </div>
        </div>

        <div className="Aide_aide">
          <div className="Aide_title">
            <p className="Aide_titleText">le prêt à l’amélioration de l’habitat</p>
          </div>
          <div className="Aide_under">
            <div className="Aide_underText">
              vous souhaitez faire des travaux chez vous et bénéficiez d’une prestation ?
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
    else if(this.props.type == 2) {
      return(
        <div className="Aide_content">
          <div className="Aide_aide">
            <div className="Aide_title">
              <p className="Aide_titleText">Revenu de Solidarité Active (RSA)</p>
            </div>
            <div className="Aide_under">
              <div className="Aide_underText">
                vous avez plus de 25 ans et vous gagnez peu ou pas d’argent ? Le RSA est une somme qui vous est versée pendant que vous cherchez du travail. Un.e spécialiste vous accompagne dans votre recherche.
              </div>
              <div className="Aide_Checkbox">
                <p className="Aide_CheckboxText">choisir cette aide:</p>
                <Checkbox className="Aide_Checkbox_Checkbox"/>
              </div>
            </div>
          </div>

          <div className="Aide_aide">
            <div className="Aide_title">
              <p className="Aide_titleText">Prime d’activité</p>
            </div>
            <div className="Aide_under">
              <div className="Aide_underText">
                vous travaillez et gagnez de l’argent, mais vos ressources sont modestes ? La prime d’activité complète vos revenus pour assurer que vous avez un cadre de vie décent.
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
