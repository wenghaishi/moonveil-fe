'use client'

import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="w-full h-full flex flex-col h-64 bg-[#0f111a] text-amber-100 p-4 border-t border-amber-700/30">
      <div className="flex-1 overflow-y-auto space-y-1 mb-2">
        {messages.map((msg, idx) => (
          <div key={idx} className="bg-amber-100 text-blue-950 px-3 py-1 rounded w-fit max-w-xs">
            {msg}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 px-3 py-2 rounded bg-[#1a1c24] text-white border border-amber-600"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
