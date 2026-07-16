import { useState, useEffect } from 'react' 
import { ChatInput } from './components/ChatInput.jsx'
import {ChatMessage} from './components/ChatMessage.jsx' // Named export
import ChatMessages from './components/ChatMessages.jsx' // Default export
import { Chatbot } from 'supersimpledev'
import './App.css'

function App() {
  // Load from localStorage, but only keep messages that have a 'message'
  const saved = localStorage.getItem('messages');
  let initialMessages = saved ? JSON.parse(saved) : [];
  
  // Remove any messages that don't have a message property
  initialMessages = initialMessages.filter(msg => msg.message);

  const [chatMessages, setChatMessages] = useState(initialMessages);

  // This is array destructuring again:
  // Sets chatMessages to array[0] and setChatMessages to array[1], order matters!

  /*
  const [chatMessages, setChatMessages] = array;
  const chatMessages = array[0];
  const setChatMessages = array[1];
  */

  // Save to localStorage whenever messages change
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);
  
  // Set up custom responses for the chatbot (runs once on mount)
  useEffect(() => {
    Chatbot.addResponses({
      'goodbye': 'Goodbye. Have a great day!',
      'give me a unique id': function() {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      },
    });
  }, [])

  // (Removed the print effect – it was causing an error)

  return (
    <div className="app-container">
      <p className="welcome-message">{chatMessages.length === 0 ? "Welcome to the chatbot project! Send a message using the textbox below." : ""}</p>
      <ChatMessages 
        chatMessages={chatMessages} 
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;