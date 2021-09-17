import React from 'react'
import ChatContact from './ChatContact';
import "./Sidebar.css"
import SidebarHeader from './SidebarHeader'
import SidebarSearch from './SidebarSearch';

const Sidebar = () => {
    const [allContact,setAllContact] = React.useState([])

    React.useEffect(() => {
        // db.collection('rooms').onSnapshot(snap => (
        //     setAllContact(snap.docs.map(item => 
        //             ({
        //                 id : item.id,
        //                 data:item.data()
        //             })
        //         ))
        // ))
    },[])
    return (
        <div className="sidebar-conatiner">
            <SidebarHeader  />
            <SidebarSearch />
            <ChatContact />
        </div>
    )
}

export default Sidebar
