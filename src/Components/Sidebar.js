import React, { useState } from "react";
import './myStyles.css';
import ConversationsItem from "./ConversationsItem";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";

function Sidebar(){

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
    return <div className="sidebar-container">
        <div className="sb-header">
            <div>
                <IconButton>
                <AccountCircleIcon />
                </IconButton>
            </div>

            <div>
                <IconButton>
                    <PersonAddIcon />
                </IconButton>

                <IconButton>
                    <GroupAddIcon />
                </IconButton>

                <IconButton>
                    <AddCircleIcon />
                </IconButton>

                <IconButton>
                    <NightlightIcon />
                </IconButton>
            </div>
        </div>
        <div className="sb-search">
            <IconButton>
                <SearchIcon />
            </IconButton>
            <input placeholder="search" className="search-box" />
        </div>
        <div className="sb-conversation">
            {conversations.map((conversation) => {
                return <ConversationsItem props={conversation} key={conversation.name}/>
            })}
        </div>
    </div>
}

export default Sidebar;