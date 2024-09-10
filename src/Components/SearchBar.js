import React from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './index.css'

function SearchBox(){
     return(

          <>
               <div className="SearchContainer">
                    <div className="SearchBox">
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#5e5e5e" , fontSize: "20px", marginLeft: '0px'}} />
                    <input type="search" placeholder="Search Chat" style={{ fontSize: "20px", color: "#5e5e5e", marginLeft: '12px', width:'80%'}}/>
                    </div>
               </div>
          </>

     )
}

export default SearchBox;