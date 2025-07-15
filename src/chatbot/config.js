import { createChatBotMessage } from "react-chatbot-kit";
import logo from '../assets/logo.png';
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import Options from './Options';

const config = {
    initialMessages: [
        createChatBotMessage("Xin chào mình là trợ lý ảo Talkable! Bạn cần hỗ trợ gì hôm nay?", { widget: "mainOptions", })
    ],
    botName: "Talkable Assisstant",
    customStyles: {
        chatButton: {
            backgroundColor: "#00bfff",
        },
    },
    customComponents: {
        header: () => <div className="react-chatbot-kit-chat-header">Trò chuyện cùng Talkable Assisstant</div>,
        botAvatar: () => (
            <img
                src={logo}
                alt="Bot Avatar"
                style={{ width: 40, height: 40, borderRadius: "50%" }}
            />
        ),
        userAvatar: () => (
            <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="User Avatar"
                style={{ width: 40, height: 40, borderRadius: "50%" }}
            />
        ),
    },
    widgets: [
        {
            widgetName: "mainOptions",
            widgetFunc: (props) => <Options {...props} />,
        }
    ],
    actionProvider: ActionProvider,
    messageParser: MessageParser,
};

export default config;