import { Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import FaqList from '../Lists/FaqList';

const FeaturedFaqs = ({ faqsData }) => {
    const faqs = faqsData.slice(0, 5);
    return (
        <Container>
            <h1 className="fw-bold text-center" style={{ fontSize: '3rem' }}>
                Các câu hỏi thường gặp
            </h1>
            <FaqList faqs={faqs} />
            <div className="text-center"><NavLink to="/faqs" className='btn btn-outline-primary'>Xem tất cả câu hỏi</NavLink></div>
        </Container>
    )
}

export default FeaturedFaqs;