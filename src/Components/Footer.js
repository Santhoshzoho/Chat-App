import React from "react";
import ReactDOM from 'react-dom/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMessage , faGear , faUser} from "@fortawesome/free-solid-svg-icons";

import './index.css'

function Footer(){
     return(
          <>
          
               <div className="Footer-Container">

                    <div className="Footer_Elements">


                         <div className="Footer_Element_Chats">
                              <div className="Footer_Icon"><FontAwesomeIcon icon={faMessage} size="xl"/>
                              </div>
                              <p className="Footer_p">Chats</p>
                         </div>
                         

                         <div className="Footer_Element_Contact">
                              <div className="Footer_Icon"><FontAwesomeIcon icon={faUser} size="xl"/></div>
                              <p className="Footer_p">Contact</p>
                         </div>


                         <div className="Footer_Element_Settings">
                              <div className="Footer_Icon"><FontAwesomeIcon icon={faGear} size="xl" /></div>
                              <p className="Footer_p">Settings</p>
                         </div>

                    </div>

               </div>
          
          </>
     )
}

export default Footer;