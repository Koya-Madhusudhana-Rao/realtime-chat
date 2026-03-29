"use client";

import { useState } from "react";

export default function PasswordGate({ onAccess }) {
    const [password, setPassword] = useState("");

    const ROOM_PASSWORD = "hacker123";

    return (
        <div style={{ textAlign: "center", marginTop: 100 }}>
            <h2>Enter SomeThing</h2>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <br /><br />
            <button onClick={() => {
                if (password === ROOM_PASSWORD) onAccess();
                else alert("Wrong password");
            }}>
                Enter
            </button>
        </div>
    );
}
