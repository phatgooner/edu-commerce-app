import FaqList from "../components/FAQs/FaqList";
import faqs from '../data/faqs';

const FAQs = () => {
    return (
        <div className="faqs-content">
            <div className="container library-header pt-5 bg-white">
                <h1 className="fw-bold" style={{ fontSize: '3rem' }}>
                    Các câu hỏi thường gặp
                </h1>
            </div>
            <div className="faqs-list">
                <FaqList faqs={faqs} />
            </div>
        </div>
    )
}

export default FAQs