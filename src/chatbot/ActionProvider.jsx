import axios from "axios";
import teachers from '../data/teachers';
import books from '../data/library';
import { createClientMessage } from "react-chatbot-kit";
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    };

    handleLanguageLearning = () => {
        const userMsg = this.createClientMessage("Tư vấn học ngoại ngữ");
        const botMsg = this.createChatBotMessage("Bạn muốn học ngoại ngữ nào? (Tiếng Anh, Nhật, Hàn...)");

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, userMsg, botMsg],
        }));
    };

    handleBookAdvice = () => {
        const userMsg = this.createClientMessage("Tư vấn chọn sách");
        const botMsg = this.createChatBotMessage("Bạn muốn tìm sách thuộc lĩnh vực nào?");

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, userMsg, botMsg],
        }));
    };

    handleMessage = async (message) => {
        let botMessage = this.createChatBotMessage("Đang lấy dữ liệu...", { loading: true });
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));

        const prompt = `
Bạn là 1 trợ lý ảo chuyên tư vấn khóa học và sách của 1 trung tâm giáo dục về ngoại ngữ.
Có một người dùng nhắn tin với bạn như sau: "${message}". Hãy trả lời người dùng một cách thân thiện nhất.
Nếu tin nhắn đó của người dùng có liên quan tới tìm giáo viên hay sách thì hãy gợi ý cho người dùng 1 giáo viên hoặc 1 quyển sách phù hợp và nêu ra lý do.
Trung tâm có danh sách giáo viên như sau:
${teachers.map(t => `- ${t.name}, ${t.nationality}, dạy ${t.languages.join(", ")}, giá ${t.price} USD`).join("\n")}.
Và trung tâm có thư viện sách như sau:
${books.map(b => `- Tiêu đề: ${b.title}, tác giả: ${b.author}, thể loại: ${b.type}, ngôn ngữ ${b.language}, giá ${b.price} USD`).join("\n")}.
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
            botMessage = this.createChatBotMessage(reply, { loading: false });

            this.setState((prev) => {
                const prevMessages = [...prev.messages];
                prevMessages.pop();
                return ({
                    ...prev,
                    messages: [...prevMessages, botMessage],
                })
            });
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