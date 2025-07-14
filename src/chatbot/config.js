import { createChatBotMessage } from "react-chatbot-kit";
import logo from '../assets/logo.png';
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

const config = {
    initialMessages: [
        createChatBotMessage("Xin chào! Tôi có thể giúp gì cho bạn hôm nay?")
    ],
    botName: "Talkable Assisstant",
    customStyles: {
        botMessageBox: {
            backgroundColor: "#00bfff",
        },
        chatButton: {
            backgroundColor: "#00bfff",
        },
    },
    customComponents: {
        botAvatar: (props) => (
            <img
                src={logo}
                alt="Bot Avatar"
                style={{ width: 40, height: 40, borderRadius: "50%" }}
            />
        ),
    },
    actionProvider: ActionProvider,
    messageParser: MessageParser,
};

export default config;