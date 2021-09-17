import React from 'react'
import "./SingleChat.css"
import { Avatar, Button,Modal,Box, Typography } from "@material-ui/core"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const SingleChat = ({ addNewUser }) => {
    const randomNum = Math.floor(Math.random() * 1000)

    const [open, setOpen] = React.useState(false);
    const [inputVal,setINputVal] = React.useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleNewChatUser = () => {
        if(inputVal){
        }
    }
    return !addNewUser ? (
        <div className="single-user-chat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${randomNum}.svg`} />
            <div className="chat-info">
                <h3>User Name</h3>
                <p>Last Message....</p>
            </div>
        </div>
    ) : (
        <div  className="single-user-chat" >
            <Button onClick={handleOpen}>Add a new user</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="boxmOdal">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <input className="input-new-username" type="text" placeholder="Enter user name" onChange={(e) => setINputVal(e.target.value)} />
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Button color="primary" onClick={handleNewChatUser}>Submit</Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default SingleChat
