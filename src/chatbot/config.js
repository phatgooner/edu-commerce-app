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
        userAvatar: (props) => (
            <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="User Avatar"
                style={{ width: 40, height: 40, borderRadius: "50%" }}
            />
        ),
    },
    actionProvider: ActionProvider,
    messageParser: MessageParser,
};

export default config;