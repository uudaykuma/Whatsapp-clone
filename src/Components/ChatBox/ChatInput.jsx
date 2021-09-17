import React from 'react'
import './ChatInput.css'
import { InsertEmoticon, AttachFile, Mic,Send } from "@material-ui/icons"
const ChatInput = () => {
    const [message,setMessage] = React.useState('')

    const sendMessage = (e) => {
        e.preventDefault()

        alert(message)
        setMessage("")
    }
    return (
        <div className="chat-inputs">
            <InsertEmoticon />
            <AttachFile />
                <form>
                    <input onChange={(e) => setMessage(e.target.value)} value={message} type="text" placeholder="Type a message" />
                    <button onClick={sendMessage} type="submit"><Send className="send-btn" /></button>
                </form>
            <Mic />
        </div>
    )
}

export default ChatInput
