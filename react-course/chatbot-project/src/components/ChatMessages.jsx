import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage.jsx'
import './ChatMessages.css'

function useAutoScroll(dependencies) {
  const chatMessagesRef = useRef(null);
  
  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [dependencies]);
  
  return chatMessagesRef; 
}

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll(chatMessages);
  
  return (
    <div 
    className="chat-messages-container"
    ref={chatMessagesRef}>
      {chatMessages.map((chatMessages) => {
        return (
          <ChatMessage
            message={chatMessages.message}
            sender={chatMessages.sender}
            key={chatMessages.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;