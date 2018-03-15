import React, { Component } from 'react';
import './landing.css';


class Landing extends Component {
  render(){
    return(
      <nav>
        <div>
                <div class="div-block"><div class="text-block" data-ix="title">
                        <strong>Renouer</strong> avec mes droits<br/> près de chez moi</div>
                    <img src="http://uploads.webflow.com/5a744327578ac200014e4a51/5aa97defc3237811918fd10a_20150428-cloud-computing.0.jpg" width="1920" srcset="http://uploads.webflow.com/5a744327578ac200014e4a51/5aa97defc3237811918fd10a_20150428-cloud-computing.0-p-1080.jpeg 1080w, http://uploads.webflow.com/5a744327578ac200014e4a51/5aa97defc3237811918fd10a_20150428-cloud-computing.0.jpg 1200w" sizes="100vw" class="image-2"/>
                    <div class="div-block-3">
                        <a href="https://mes-aides.gouv.fr" id="start" target="_blank" class="button w-button" data-ix="title">Commencer !</a>
         </div>
        </div>
       </div>
      </nav>
    )
  }
}

export default Landing
