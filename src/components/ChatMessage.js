import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
        <img
        className='h-8'
        alt="user-icon"
        src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNy1hZXctMTM5LWtsaGRkM2FuLmpwZw.jpg"/>
    <span className='px-2 font-bold'>{name}</span>
    <span>{message}</span>
    </div>
  )
}

export default ChatMessage