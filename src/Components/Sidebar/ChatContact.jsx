import React from 'react'
import "./chatContact.css"
import SingleChat from './SingleChat';

const ChatContact = () => {
    return (
        <div className="chat-container">  
            <SingleChat addNewUser />
            <SingleChat />
            <SingleChat />
            <SingleChat />
            <SingleChat />
            <SingleChat />
            <SingleChat />
            <SingleChat />
        </div>
    )
}

export default ChatContact
