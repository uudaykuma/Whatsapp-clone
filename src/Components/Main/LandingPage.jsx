import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './landingPage.css'
import ChatBox from './../ChatBox/ChatBox';
const LandingPage = () => {
    return (
        <div className="main-conatiner">
            {/* side bar */}
            <Sidebar />

            {/* chat box */}
            <ChatBox />
        </div>
    )
}

export default LandingPage
