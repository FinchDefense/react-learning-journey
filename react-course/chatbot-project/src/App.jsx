import { useState } from 'react' 
import { ChatInput } from './components/ChatInput.jsx'
import {ChatMessage} from './components/ChatMessage.jsx' // Named export
import ChatMessages from './components/ChatMessages.jsx' // Default export
import { Chatbot } from 'supersimpledev'
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([]);
  // This is array destructuring again:
  // Sets chatMessages to array[0] and setChatMessages to array[1], order matters!

  /*
  const [chatMessages, setChatMessages] = array;
  const chatMessages = array[0];
  const setChatMessages = array[1];
  */

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

export default App
