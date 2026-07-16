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
      {chatMessages.map((msg, index) => {
        // Use the id if it exists, otherwise fallback to the index.
        // This ensures every item has a unique key and prevents the React warning.
        return (
          <ChatMessage
            message={msg.message}
            sender={msg.sender}
            key={msg.id || index}       // fallback key
            timestamp={msg.timestamp}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;