import { Avatar, IconButton } from '@material-ui/core'
import { MoreVert,SearchOutlined } from "@material-ui/icons"
import React from 'react'
import "./ChatHeader.css"
const ChatHeader = () => {
    return (
        <div className="chatHeaderBox">
            <Avatar />
            <div className="chatInfoOFUser">
                <h3>User name</h3>
                <p>Last seen at...</p>
            </div>
            <div className="chatBoxRightHeader">
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <MoreVert className="icons" />
                </IconButton>
            </div>
        </div>
    )
}

export default ChatHeader
