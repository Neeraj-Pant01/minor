import React, { useEffect, useRef, useState } from 'react'
import "./chat.scss"
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { RiSendPlane2Fill } from "react-icons/ri";
import {useSelector} from "react-redux"
import makeApiRequest from '../../utils/makeApiRequest';

const Chat = ({setChat, ownerId}) => {
  const msgRef = useRef();
  const [conversation, setConversation] = useState(null)
  const [messages, setMessages] = useState([])
  const [currentMessage, setCurrentMessage] = useState("")

  useEffect(() => {
    if (msgRef.current) {
      msgRef.current?.scrollIntoView({behavior:"smooth"})
    }
  }, [currentMessage]);

  const user = useSelector((state)=>state.user.currentUser)
  const token = useSelector((state)=>state.user.currentUser.accesstoken)

  const api = makeApiRequest(token)
  const owner = messages

  useEffect(()=>{
    const getConversation = async () =>{
      try{
        const response = await api.get(`${import.meta.env.VITE_REACT_APP_URI}/conversation/${user._id}/${ownerId}`)
        setConversation(response.data)
        if(!response.data?._id){
          const response = await api.post(`${import.meta.env.VITE_REACT_APP_URI}/conversation/`,{senderId:user._id, receiverId:ownerId})
          setConversation(response.data)
        }
      }catch(err){
        console.log(err)
      }
    }
    getConversation()
  },[])


  useEffect(() => {
    console.log("status", conversation);
    const getAllMessages = async () => {
      try {
        const response = await api.get(`${import.meta.env.VITE_REACT_APP_URI}/messeges/${conversation._id}`);
        setMessages(response.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    if (conversation?._id) {
      getAllMessages();
    }
  }, [conversation?._id]);



  const handleSendMessage = async () => {
    if (currentMessage.trim() === "") {
      return;
    }
  
    setMessages((prevMessages) => [...prevMessages, { message: currentMessage, senderId: user._id }]);
    const newMessageRef = msgRef.current.parentNode.children[messages.length - 1].children[0];
    msgRef.current = newMessageRef;
    setCurrentMessage("");
  
    // Optimistic update
    try {
      const newMessage = await api.post(`${import.meta.env.VITE_REACT_APP_URI}/messeges/`, {
        conversationId: conversation._id,
        senderId: user._id,
        message: currentMessage,
      });
    
      setMessages(prevMessages => {
        const updatedMessages = [...prevMessages];
        updatedMessages.pop();
        updatedMessages.push(newMessage.data.message);
        return updatedMessages;
      });
  
      setTimeout(() => {
        if (newMessageRef) {
          newMessageRef.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }, 500);
  
    } catch (err) {
      console.log(err.message);
  
      // Revert the state if the API call fails
      setMessages(prevMessages => {
        const updatedMessages = [...prevMessages];
        updatedMessages.pop();
        return updatedMessages;
      });
  
      setCurrentMessage(currentMessage);
    }
  };
  

  return (
    <div className='chat-wrapper'>
      <div className="navigate-back">
        <AiOutlineArrowLeft onClick={()=>setChat(false)}/>
      </div>
      {/* <span>under maintainanace</span> */}
      <div className='all-messages'>

        {
          messages.length >0 
          ?
          <div className="messeges">
          {
            messages.map((m,i)=>{
              return (
                <div key={i} className={m.senderId === user._id ? 'sender' : 'receiver'}>
                  <p ref={msgRef} >
                  {
                    m.message
                  }
                  </p>
              </div>
              )
            })
          }
        </div>
        :
        <div style={{color:"grey", textAlign:"center"}}>send messages to start conversation</div>
        }
       

        <div className='type'>
          <input type='text' value={currentMessage} placeholder='enter message' onChange={(e)=>setCurrentMessage(e.target.value)}/>
          <RiSendPlane2Fill className='send-icon' onClick={handleSendMessage}/>
        </div>
      </div>
    </div>
  )
}

export default Chat
