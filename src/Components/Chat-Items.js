import React from "react";
import ReactDOM from "react-dom/client"
import Profile from '../Assets/Profile.jpg';

function ChatItems(){
     return(
          
          <>

          <div className="Chat-Container">
               <div className="Chat-Element">

                    <div className="Chat_Img">
                         <img src={Profile} alt="Profile" />
                    </div>

                    <div className="Chat_Item">
                         <div className="Chat_Name">User_Name</div>
                         <div className="Chat_Message">User_Message</div>
                    </div>

                    <div className="Chat_Message_Recived">1</div>


               </div>
          </div>
          </>

          )
}

export default ChatItems;