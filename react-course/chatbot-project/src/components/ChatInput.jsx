import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css';
// Import the loading spinner image (make sure the path is correct)
import LoadingSpinner from '../assets/loading-spinner.gif';

// This is a component! All components must use PascalCase(each word starts with a capital letter)
export function ChatInput({ chatMessages, setChatMessages }) {
  // When using state, always put the 'initial value' within the brackets
  // The first argument is always the "CURRENT DATA"
  // The second argument is always the "UPDATER FUNCTION", conventionally named 'set' + first_argument

  // HOOKS insert React features into our components
  // ALL hooks start with 'use' and then ______
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") sendMessage();
    if (event.key === "Escape") setInputText("");
  }

  // If there is nothing between tags, we can just add a / so for ex. <input />

  async function sendMessage() {
    if (isLoading || inputText.trim() === '') {
      return;
    }
    
    setIsLoading(true);
    const messageToSend = inputText; // ✅ Save before clearing
    setInputText(""); // ✅ Clear after saving

    // Create a new message with a timestamp (so each message knows when it was sent)
    const newChatMessages = [
      ...chatMessages,
      {
        message: messageToSend,
        sender: "user",
        id: crypto.randomUUID(),      // every message gets a unique id
        timestamp: Date.now(),
      },
    ];

    setChatMessages([
      ...newChatMessages,
      // This creates a temporary Loading... message.
      // Because we don't save this message in newChatMessages,
      // it will be removed later, when we add the response.
      {
        message: <img src={LoadingSpinner} className="loading-spinner" />,
        sender: 'robot',
        id: crypto.randomUUID(),
        timestamp: Date.now(),
      }
    ]);

    // Use messageToSend instead of inputText (inputText is already cleared)
    const response = await Chatbot.getResponseAsync(messageToSend);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
        timestamp: Date.now(),
      },
    ]);

    setIsLoading(false)
  }

  function clearAllMessages() {
    setChatMessages([]);
  }

  return (
    // These empty tags are called fragments; function as divs but won't add divs to the DOM
    // Anything that starts with "on" is an event handler
    // onChange runs the function within its curly brackets every time something changes
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={handleKeyDown}
        className="chat-input"
      />
      <button 
        onClick={sendMessage}
        className="send-button"
        >Send
      </button>
      <button
        onClick={clearAllMessages}
        className="clear-button"
      >Clear</button>
    </div>
  );
}