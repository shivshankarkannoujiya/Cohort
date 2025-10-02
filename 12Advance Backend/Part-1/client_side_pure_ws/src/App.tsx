import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [latestmessage, setLatestessages] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8000");
    socket.onopen = () => {
      console.log(`CONNECTED...`);
      setSocket(socket);
    };

    socket.onmessage = (message) => {
      console.log(`MESSAGE RECEIVED FROM SERVER: `, message.data);
      setLatestessages(message.data);
    };

    socket.onerror = (error) => console.error(`SOCKET ERROR: `, error);
    socket.onclose = () => console.log(`SOCKET CLOSED`);

    return () => {
      socket.close()
    }
  }, []);

  const sendMessage = () => {
    if (!socket || !message) return;
    socket.send(message);
    setMessage("");
  };

  if (!socket) {
    return <div>Connecting to socket server...</div>;
  }

  return (
    <>
      <input
        type="text"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        placeholder="Type your messages..."
      />
      <button onClick={sendMessage}>Send</button>
      <p>Latest message from server: {latestmessage}</p>
    </>
  );
}

export default App;
