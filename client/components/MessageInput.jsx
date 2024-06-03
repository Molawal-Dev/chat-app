'use client'
import React, { useState } from 'react'

const MessageInput = ({addMessage}) => {

  const [message, setMessage] = useState('')

  const sendMessage = () => {

    addMessage({
      message
    })

    setMessage('')
  }

  return (
    <div className='fixed bottom-0 right-0 w-full text-black p-3 flex justify-between items-center border-t-2 border-gray-800 bg-white'>
      <textarea
        placeholder='Type your message...'
        className='rounded-2xl p-3 flex items-center text-black font-medium bg-slate-300 w-[80%] focus:outline-none max-md:w-[72%]'
        value={message}
        onChange={(e)=> setMessage(e.target.value)}
      >
      </textarea>

      <button 
        onClick={() => sendMessage()}
        className='text-white font-medium py-2 px-5 rounded-full link'
      >
        SEND
      </button>
    </div>
  )
}

export default MessageInput