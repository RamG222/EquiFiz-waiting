import React from "react";
import "./Popup.css";

const Popup = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>
        <h3>{title}</h3>
        <p>{message}</p>
        <button className="popup-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
