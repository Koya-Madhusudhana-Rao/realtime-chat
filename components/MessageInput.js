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

            {/* 🔥 Animated Footer */}
            <div style={styles.footer}>
                <span style={styles.text}>
                    made by chota vali topper
                </span>
            </div>
        </div>
    );
}

const styles = {
    footer: {
        marginTop: "15px",
        textAlign: "center",
    },

    text: {
        fontSize: "20px",
        fontWeight: "bold",
        background: "linear-gradient(270deg, #ff4d4f, #40a9ff, #73d13d, #ff4d4f)",
        backgroundSize: "600% 600%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animation: "gradientMove 5s ease infinite",
    },
};
