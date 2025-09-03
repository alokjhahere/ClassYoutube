import { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, getQuote } from '../utils/helper';


const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("")
    const dispatch = useDispatch();
    const ChatMessages = useSelector((store)=>store.chat.messages);

   useEffect(()=>{
     const timer =  setInterval(()=>{
         //API polling 
        
         console.log("API polling");
         dispatch(
            addMessage({
              name : generateRandomName(),
              message : getQuote()
         }))

         }, 1000);
     

         return () => clearInterval(timer);
  }, [])


  return (
    <>
    <div className='w-full h-[500] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {ChatMessages.map((c, index)=><ChatMessage key={index} name = {c.name} message={c.message}/>)}
      
    </div>
    <form onSubmit={(e)=>{
      e.preventDefault()
      dispatch(addMessage({
          name: "Alok Jha",
          message: liveMessage
      }))
      setLiveMessage("")
      }}>
      <input type='text' 
      className='w-96 p-2 ml-2 border border-black' 
      value={liveMessage} 
      onChange={e=>setLiveMessage(e.target.value)}/> 

      <button className='px-2 p-2 mx-2 bg-blue-400 text-white' >Send</button>
    </form>
    </>
  )
}

export default LiveChat
