// src/components/WhatsAppChat.jsx
import React, { useEffect, useState } from "react";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import "./whatsapp.css";

export default function WhatsAppChat() {
  const [config, setConfig] = useState({ number: "", message: "" });

  useEffect(() => {
    fetch("http://localhost:4000/api/whatsapp") // ✅ Change to your domain in production
      .then((res) => res.json())
      .then((data) => setConfig(data))
      .catch((err) => console.error("Failed to load WhatsApp config", err));
  }, []);

  if (!config.number) return null; // avoid rendering until loaded

  return (
    <div className="whatsapp-left">
      <WhatsAppWidget
        phoneNumber={config.number}
        companyName="SenDevOps"
        message={config.message}
        sendButton="Start Chat"
      />
    </div>
  );
}
