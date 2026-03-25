"use client";

import { useEffect, useState } from "react";
import {
  fetchMessages,
  deleteMessage,
} from "../services/chatService";
import MessageInput from "./MessageInput";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);

  const loadMessages = async () => {
    const data = await fetchMessages();
    setMessages(data);
  };

  useEffect(() => {
    loadMessages();

    const interval = setInterval(() => {
      loadMessages();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // ✅ Copy function
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  // ✅ Delete function
  const handleDelete = async (id) => {
    await deleteMessage(id);
    loadMessages(); // refresh instantly
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Chat</h2>

      <div
        style={{
          border: "1px solid #ccc",
          height: "400px",
          overflowY: "auto",
          padding: "10px",
          marginBottom: "10px",
          background: "#fff",
        }}
      >
        {(messages || []).map((msg) => (
          <div
            key={msg.id}
            style={{
              marginBottom: "10px",
              padding: "10px",
              borderBottom: "1px solid #eee",
            }}
          >
            {/* Message */}
            <div style={{ whiteSpace: "pre-wrap" }}>
              {msg.content}
            </div>

            {/* Buttons */}
            <div style={{ marginTop: "5px" }}>
              <button
                onClick={() => handleCopy(msg.content)}
                style={{
                  marginRight: "10px",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                Copy
              </button>

              <button
                onClick={() => handleDelete(msg.id)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <MessageInput onSend={loadMessages} />
    </div>
  );
}