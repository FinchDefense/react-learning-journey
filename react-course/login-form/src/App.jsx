import { useState } from 'react'
import './App.css'

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="log-in-container">
      <p className="log-in-title">Hello, welcome to my website</p>
      <div className="log-in">
        <input
          placeholder="Email"
          type="text"
          size="30"
        />
        <div className="log-in-password-and-show-btn">
          <input
            placeholder="Password"
            size="30"
            type={showPassword ? "text" : "password"}
          />
          <button 
            onClick={() => showPassword ? setShowPassword(false) : setShowPassword(true)}
            className="log-in-show-btn">
            Show
          </button>
        </div>
      </div>
      <div>
        <button className="log-in-btn">Login</button>
        <button className="log-in-btn">Sign up</button>
      </div>
    </div>
  )
}

export default App
