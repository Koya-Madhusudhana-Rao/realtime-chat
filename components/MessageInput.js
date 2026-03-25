"use client";

import { useState } from "react";
import { sendMessage } from "../services/chatService";

export default function MessageInput({ onSend }) {
    const [text, setText] = useState("");

    const handleSend = async () => {
        await sendMessage(text);
        setText("");
        onSend();
    };

    return (
        <div>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={5}
                placeholder="Type your message..."
                style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    resize: "none",
                    whiteSpace: "pre-wrap",
                }}
            />

            <button
                onClick={handleSend}
                style={{
                    marginTop: "10px",
                    padding: "10px 20px",
                    cursor: "pointer",
                }}
            >
                Send
            </button>
        </div>
    );
}