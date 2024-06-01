'use client'

import { io } from 'socket.io-client'
import { useEffect, useState } from 'react'
import { ChatSenderBox } from './ChatBox'
import { ChatRecieverBox } from './ChatBox'
import MessageInput from './MessageInput'


const ChatContainer = ({username, userImage}) => {

  const [socket, setSocket] = useState(undefined)
  const [allInfo, setAllInfo] = useState([])

  // sending all info to the socket
  const sendChatToServer = (chat) => {
    socket.emit('chat', chat)
  }

  //getting back the emitted message
  useEffect(()=>{
    const socket = io('http://localhost:3001')

    socket.on('chat', (chatRecieved) => {
      setAllInfo(chatRecieved)
    })

    setSocket(socket)
  }, [])



  // This is a function passed as prop to the messageInput component
  const addMessage = (chat) => {
    const newChat = {...chat, username, userImage}

    if(newChat.message !== ''){

      setAllInfo([...allInfo, newChat])
  
      sendChatToServer([...allInfo, newChat])

    } 

  }
  useEffect(() => {

    console.log(allInfo);

  }, [allInfo]);


  const ChatsArrangment = () => {
    return allInfo.map((info, index) => {
      if(info.username === username) return 
        <ChatSenderBox
          key={index}
          username={info.username}
          profilePic={info.userImage}
          message={info.message}
        />
        return
          <ChatRecieverBox
            key={index}
            username={info.username}
            profilePic={info.userImage}
            message={info.message}
          />  
    })
  }

  return (
    <div className=' w-full h-full p-4 chatPage'>

      <ChatsArrangment />

      <MessageInput addMessage={addMessage}/>
    </div>
  )
}

export default ChatContainer
