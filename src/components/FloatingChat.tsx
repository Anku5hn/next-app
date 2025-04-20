import React from 'react'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
const FloatingChat:React.FC = () =>{
    const floatingCSS: string = `
    .chat-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 100; 
        }`
    return(
        <>
        <style>{floatingCSS}</style>
         <button className="chat-button bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full shadow-lg hidden md:block lg:block cursor-pointer">
       <ChatBubbleIcon/>
    </button>

        </>
    )
}
export default FloatingChat;