import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/his_airness.jpg';
import dayjs from 'dayjs';
import './ChatMessage.css'

// Doing { message, sender } instead of props is called destructuring
// Now we also accept a 'timestamp' prop
export function ChatMessage({ message, sender, timestamp }) {
  // const message = props.message;
  // const sender = props.sender;
  // const { message, sender } = props;

  /*
  if (sender === "robot") {
    return (
      <div>
        <img src="robot.png" width="50" />
        {message}
      </div>
    );f
  }
  */

  // Use the passed timestamp, or fallback to now if missing (but we always pass one)
  const timeToDisplay = timestamp || Date.now();

  return (
    <div className={
      sender === 'user' 
        ? 'chat-message-user' 
        : 'chat-message-robot'
    }>
      {sender === "robot" && (
        <img src={RobotProfileImage}
        className="chat-message-profile"
          />
      )}
      <div className="chat-message-text">
        {message}
        <div className="time-of-message">
          {dayjs(timeToDisplay).format('h:mma')}
        </div>
      </div>
      {sender === "user" && (
        <img src={UserProfileImage}
        className="chat-message-profile"
          />
      )}
    </div>
  );
}