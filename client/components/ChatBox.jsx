import React from 'react'
import {Avatar, Image} from 'antd'

export const ChatSenderBox = ({profilePic, username, message}) => {
  return (
    <div className='flex justify-end items-center my-4'>
      <div className='flex flex-row-reverse gap-2'>
        <Avatar
          size={50}
          src={
            <Image
              src={profilePic}
              className='w-48 h-48 rounded-full object-cover'
              preview={false}
            />
          }
        />

        <div className='flex flex-col gap-1 p-3 bg-white rounded-xl text-black'>
          <p className='font-bold'>{username}</p>
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}

export const ChatRecieverBox = ({profilePic, username, message}) => {
  return (
    <div className='flex justify-start items-start gap-2'>
      <Avatar
        size={50}
        src={
          <Image
            src={profilePic}
            className='w-48 h-48 rounded-full object-cover'
            preview={false}
          />
        }
      />

      <div className='flex flex-col gap-1 p-3 bg-green-300 rounded-xl text-black'>
        <p className='font-bold'>{username}</p>
        <p>{message}</p>
      </div>
    </div>
  )
}


