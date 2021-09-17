import React from 'react'
import "./SidebarSearch.css"
import { SearchOutlined } from "@material-ui/icons"
const SidebarSearch = () => {
    return (
        <div className="sidebar-search">
            <div className="serachBox">
                <SearchOutlined />
                <input className="inputBox" type="text" placeholder="Search or start new chat" />
            </div>

        </div>
    )
}

export default SidebarSearch
