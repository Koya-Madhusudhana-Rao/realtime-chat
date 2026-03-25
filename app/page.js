"use client";

import { useState } from "react";
import ChatBox from "../components/ChatBox";
import PasswordGate from "../components/PasswordGate";

export default function Home() {
  const [access, setAccess] = useState(false);

  if (!access) {
    return <PasswordGate onAccess={() => setAccess(true)} />;
  }

  return <ChatBox />;
}