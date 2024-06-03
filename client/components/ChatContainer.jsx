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

    // if(newChat.message !== ''){

    //   setAllInfo([...prevState, newChat]);
  
    //   sendChatToServer([...allInfo, newChat])

    // } 

    if (newChat.message !== '') {
      setAllInfo((prevState) => {
        const updatedChats = [...prevState, newChat];
        sendChatToServer(updatedChats);
      return updatedChats;
      });
    }
  }

  useEffect(() => {

    console.log(allInfo);

  }, [allInfo]);


  const ChatsArrangement = ({ data, username }) => {
  return data.map((info, index) => {
    if (username === info.username) {
      return (
        <ChatSenderBox
          key={index}
          username={info.username}
          profilePic={info.userImage}
          message={info.message}
        />
      );
    } else {
      return (
        <ChatRecieverBox
          key={index}
          username={info.username}
          profilePic={info.userImage}
          message={info.message}
        />
      );
    }
  });
};


  return (
    <>
      <div className=' w-full h-[609px] p-4 chatPage border-2 border-red-50 overflow-auto pb'>
        {allInfo.length && <ChatsArrangement data={allInfo} username={username}/>}
      </div>
      <MessageInput addMessage={addMessage}/>
    </>
  )
}

export default ChatContainer
