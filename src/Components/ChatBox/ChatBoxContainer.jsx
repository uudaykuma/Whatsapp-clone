import React from 'react'
import './ChatBoxContainer.css'
const ChatBoxContainer = () => {
    return (
        <div className="chat-box-container">
            <p className={`chat-box-message ${true && 'chat-sender'}` }>

                <span className="Chat-userName"><strong>Uday Kumar</strong></span>
                Hello !

                <span className="current-time-stamp">10:00 AM</span>

            </p>
        </div>
    )
}

export default ChatBoxContainer