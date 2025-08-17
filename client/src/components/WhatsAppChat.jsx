// src/components/WhatsAppChat.jsx
import React from "react";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import "./whatsapp.css"; // ✅ custom styles

export default function WhatsAppChat() {
  return (
    <div className="whatsapp-left">
      <WhatsAppWidget
        phoneNumber="917566544041" // ✅ Your WhatsApp number
        companyName="SenDevOps"
        message="Hello 👋 Need help with DevOps services?"
        sendButton="Start Chat"
      />
    </div>
  );
}
