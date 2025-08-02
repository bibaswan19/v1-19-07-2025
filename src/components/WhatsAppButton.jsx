import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css"; 

const WhatsAppButton = () => {
  const phoneNumber = "9641592339"; // 

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp size={26} />
    </a>
  );
};

export default WhatsAppButton;
