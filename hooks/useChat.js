"use client";

import { useEffect, useState } from "react";
import { subscribeMessages } from "../services/chatService";

export default function useChat() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const unsubscribe = subscribeMessages(setMessages);
        return () => unsubscribe();
    }, []);

    return { messages };
}