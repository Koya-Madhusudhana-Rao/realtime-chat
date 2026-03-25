// Fetch messages
export const fetchMessages = async () => {
  try {
    const res = await fetch("/api/messages");
    const data = await res.json();
    return data || [];
  } catch (err) {
    console.error("Fetch error:", err);
    return [];
  }
};

// Send message
export const sendMessage = async (text) => {
  if (!text.trim()) return;

  try {
    await fetch("/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
  } catch (err) {
    console.error("Insert error:", err);
  }
};

// ✅ Delete message
export const deleteMessage = async (id) => {
  try {
    await fetch("/api/messages", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
  } catch (err) {
    console.error("Delete error:", err);
  }
};