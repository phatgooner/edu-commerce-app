// components/ChatbotWidget.js
import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";
import { FaComments, FaTimes } from "react-icons/fa";

const ChatbotWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => setIsOpen((prev) => !prev);
    const validateInput = (input) => {
        if (!input.trim()) {
            return false;
        }
        return true;
    }

    return (
        <div className="chatbot-container">
            <button
                className="btn-bubble"
                onClick={toggleChat}
            >
                {isOpen ? <FaTimes /> : <FaComments />}
            </button>

            <div className="chat-area" style={isOpen ? { display: 'block' } : { display: 'none' }}>
                <Chatbot
                    config={config}
                    actionProvider={ActionProvider}
                    messageParser={MessageParser}
                    placeholderText='Nhập nội dung tại đây...'
                    validator={validateInput}
                />
            </div>
        </div>
    );
};

export default ChatbotWidget;