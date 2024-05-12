import React from "react";
import './myStyles.css';
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import { useState } from "react";
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";

function MainContainer(){

    const [conversations, setConverations] = useState([
        {
            name: "Test#1",
            lastMessage: "Last Message #1",
            timeStamp: "today",
        },
        {
            name: "Test#2",
            lastMessage: "Last Message #2",
            timeStamp: "today",
        },
        {
            name: "Test#3",
            lastMessage: "Last Message #3",
            timeStamp: "today",
        }
    ])
    
    return <div className="main-container">
        <Sidebar/>
        {/* <ChatArea props={conversations[0]}/> */}
        {/* <Welcome/> */}
        <CreateGroups/>

    </div>;
}

export default MainContainer;