import React from 'react'
import "./chat.scss"
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Chat = ({setChat}) => {
  return (
    <div className='chat-wrapper'>
      <div className="navigate-back">
        <AiOutlineArrowLeft onClick={()=>setChat(false)}/>
      </div>
      <span>under maintainanace</span>
    </div>
  )
}

export default Chat
