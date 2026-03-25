"use client";

import { deleteMessage } from "../services/chatService";

export default function MessageList({ messages }) {

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        alert("Copied!");
    };

    const handleDelete = async (id) => {
        // const confirmDelete = confirm("Delete this message?");
        // if (!confirmDelete) return;

        await deleteMessage(id);
    };

    return (
        <div
            style={{
                border: "1px solid #ddd",
                minHeight: 300,
                padding: 10,
                borderRadius: "10px",
                background: "#fafafa",
                marginBottom: "10px"
            }}
        >
            {(messages || []).map((m) => (
                <div
                    key={m.id}
                    style={{
                        background: "white",
                        padding: "10px",
                        borderRadius: "8px",
                        marginBottom: "10px",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                        whiteSpace: "pre-wrap"
                    }}
                >
                    {/* Message Text */}
                    <div>{m.text}</div>

                    {/* Actions */}
                    <div style={{ marginTop: "8px" }}>
                        <button
                            onClick={() => handleCopy(m.text)}
                            style={{
                                marginRight: "10px",
                                padding: "5px 10px",
                                cursor: "pointer"
                            }}
                        >
                            Copy
                        </button>

                        <button
                            onClick={() => handleDelete(m.id)}
                            style={{
                                padding: "5px 10px",
                                background: "red",
                                color: "white",
                                border: "none",
                                cursor: "pointer"
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}