import React from 'react'
import ChatContact from './ChatContact';
import "./Sidebar.css"
import SidebarHeader from './SidebarHeader'
import SidebarSearch from './SidebarSearch';
const Sidebar = () => {
    return (
        <div className="sidebar-conatiner">
            <SidebarHeader  />
            <SidebarSearch />
            <ChatContact />
        </div>
    )
}

export default Sidebar
