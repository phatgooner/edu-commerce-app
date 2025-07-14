import axios from "axios";
import teachers from '../data/teachers';
import books from '../data/library';

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    handleMessage = async (message) => {
        const prompt = `
Tôi có danh sách giáo viên sau:
${teachers.map(t => `- ${t.name}, ${t.nationality}, dạy ${t.languages.join(", ")}, giá ${t.price} USD`).join("\n")}.
Và tôi có thư viện sách như sau:
${books.map(b => `- Tiêu đề: ${b.title}, tác giả: ${b.author}, thể loại: ${b.type}, ngôn ngữ ${b.language}, giá ${b.price} USD`).join("\n")}.
Người dùng hỏi: "${message}". Nếu câu hỏi của người dùng liên quan tới tìm giáo viên hay sách thì hãy gợi ý cho người dùng 1 giáo viên hoặc 1 quyển sách phù hợp và nêu ra lý do.
`;
        try {
            const res = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    model: "gpt-3.5-turbo",
                    messages: [{ role: "user", content: prompt }],
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