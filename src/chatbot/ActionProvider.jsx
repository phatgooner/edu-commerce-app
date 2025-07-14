import axios from "axios";

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    handleMessage = async (message) => {
        try {
            const res = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    model: "gpt-3.5-turbo",
                    messages: [{ role: "user", content: message }],
                },
                {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            const reply = res.data.choices[0].message.content;
            const botMessage = this.createChatBotMessage(reply);

            this.setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage],
            }));
        } catch (error) {
            const errorMessage = this.createChatBotMessage(
                "Xin lỗi, tôi gặp lỗi khi phản hồi."
            );
            this.setState((prev) => ({
                ...prev,
                messages: [...prev.messages, errorMessage],
            }));
        }
    };
}

export default ActionProvider;