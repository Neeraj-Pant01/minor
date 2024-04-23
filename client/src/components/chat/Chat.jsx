import React, { useEffect, useRef, useState } from 'react'
import "./chat.scss"
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { RiSendPlane2Fill } from "react-icons/ri";
import {useSelector} from "react-redux"
import makeApiRequest from '../../utils/makeApiRequest';
import {io} from "socket.io-client"

const Chat = ({setChat, ownerId}) => {
  const msgRef = useRef();
  const [conversation, setConversation] = useState(null)
  const [messages, setMessages] = useState([])
  const [currentMessage, setCurrentMessage] = useState("")
  // const socketRef = useRef(io("ws://localhost:8900"))
  const socketRef = useRef()

  //arrival message state for the messages send through the sockets
  const [arrivalMessage, setArrivalMessage] = useState(null)

  const user = useSelector((state)=>state.user.currentUser)


  useEffect(()=>{
    socketRef.current = io("ws://localhost:8900")

    socketRef.current.on('getmessage',(data)=>{
      setArrivalMessage({
        senderId:data.senderId,
        text:data.text,
        createdAt: Date.now()
      })
    })
  },[])

  //whenever the aarival message is changed we have to update our messages
  useEffect(()=>{
    arrivalMessage && 
    setMessages([...messages,arrivalMessage])
  },[arrivalMessage])

  useEffect(()=>{
    socketRef.current.emit('adduser', user._id)
    //get all the users
    socketRef.current.on('getusers',users=>{
      console.log("users", users)
    })
  },[user])



  useEffect(() => {
    if (msgRef.current) {
      msgRef.current?.scrollIntoView({behavior:"smooth"})
    }
  }, [messages]);

  const token = useSelector((state)=>state.user.currentUser.accesstoken)

  const api = makeApiRequest(token)

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

  console.log(messages)

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


const handleSendMessage = async () =>{

  //to send message
  socketRef.current.emit("sendmessage",{
    senderId:user._id,
    receiverId:ownerId,
    text:currentMessage
  })

  try{
    const response = await api.post(`${import.meta.env.VITE_REACT_APP_URI}/messeges/`, {
      conversationId: conversation._id,
      senderId: user._id,
      message: currentMessage,
    });
    setMessages([...messages, response.data]);
    setCurrentMessage("")
  }catch(err){
    console.log(err)
  }
}

  

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
