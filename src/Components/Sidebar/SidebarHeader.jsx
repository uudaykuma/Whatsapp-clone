import React from 'react';
import './sidebarHeader.css'
import { Avatar, IconButton } from '@material-ui/core'
import { DonutLarge, Chat, MoreVert, AddCircleOutlineOutlined } from "@material-ui/icons";
const SidebarHeader = () => {
    return (
        <div className="sidebar-header">
            <Avatar />
            <div className="headerOptions">
                <IconButton>
                    <DonutLarge className="icons" />
                </IconButton>
                <IconButton>
                    <Chat className="icons" />
                </IconButton>
                <IconButton>
                    <AddCircleOutlineOutlined className="icons" />
                </IconButton>
                <IconButton>
                    <MoreVert className="icons" />
                </IconButton>




            </div>
        </div>
    )
}

export default SidebarHeader
