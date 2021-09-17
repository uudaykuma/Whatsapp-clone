import React from 'react'
import './ChatBox.css'
import ChatBoxContainer from './ChatBoxContainer';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
const ChatBox = () => {

    return (
        <div className="chatbox-container">
            <ChatHeader />
            <ChatBoxContainer />
            <ChatInput />
        </div>
    )
}

export default ChatBox
