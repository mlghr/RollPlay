import React from 'react';
import "./ChatRoom.css";
import { w3cwebsocket as W3CWebSocket } from "websocket";

function ChatRoom() {

  const [messages, setMessages] = useState([]);
  const webSocket = useRef(null);

  useEffect(() => {
      webSocket.current = new W3CWebSocket("ws://localhost:3000");
      webSocket.current.onmessage = (message) => {
          setMessages(prev => [...prev, message.data]);
      };
  }, []);


  return (
    <>
      <h1>FUCK</h1>
      <p>{messages.join(" ")}</p>
    </>
  );
}

export default ChatRoom;