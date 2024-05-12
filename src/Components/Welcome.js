import React from "react";
import logo from "../2936956.png"

function Welcome(){
    return(
        <div className="welcome-container">
            <img src={logo} alt="logo" className="welcome-logo"></img>
            <p>View and text directlyto people present in the Chat Rooms.</p>
        </div>
    );
}

export default Welcome;