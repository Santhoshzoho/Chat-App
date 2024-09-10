import react from "react";
import ReactDOM from  "react-dom/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import './index.css';

function Navbar(){
     return(

          <>

     <div className="Navbar">
          <p className="Chat-Box-Nav-Name">Chat Box</p>
          <i className="Nav-Pen-Icon"><FontAwesomeIcon icon={faPenToSquare} size="xl"/></i>
     </div>

          </>
     )
}

export default Navbar;