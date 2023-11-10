import React,{useEffect, useState} from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomNames, makeRandomMessages } from '../utils/helper'

const LiveChat = () => {
    const [liveMsg, setLiveMsg] = useState('')
    const dispatch = useDispatch()
    const chatMessages = useSelector((store)=> store.chat.messages)


    useEffect(()=>{
        const i = setInterval(()=>{
            dispatch(addMessage({
                name:generateRandomNames(),
                message:makeRandomMessages(24)
            }))
            
        },2000)
       
        return ()=> clearInterval(i)
    },[])

  return (
    <>
        <div className='w-full h-[400px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
            { chatMessages.map((chatMessage, index) => <ChatMessage key={index} name={chatMessage.name} message={chatMessage.message}/>)}
        </div>
        <form className='w-full p-2 ml-2 border border-black'
        onSubmit={(e)=>{
            e.preventDefault()
            console.log("submit", liveMsg)
            dispatch(addMessage({name:'Rachana', message:liveMsg}))
            setLiveMsg("")
        }}>
            <input className='w-86 border p-2 border-black' type='text' value={liveMsg} onChange={(e)=>setLiveMsg(e.target.value)}/>
            <button className='mx-2 px-2 bg-green-100'>send</button>
        </form>
    </>
  )
}

export default LiveChat