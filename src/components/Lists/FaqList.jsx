import { Accordion, Container } from 'react-bootstrap';
import React, { useState } from "react";

const FaqList = ({ faqs }) => {
    const [activeKey, setActiveKey] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleToggle = (key) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveKey((prevKey) => (prevKey === key ? null : key));
        setTimeout(() => {
            setIsAnimating(false);
        }, 400);
    };

    return (
        <Container className="py-5">
            <Accordion defaultActiveKey="0" flush activeKey={activeKey}>
                {faqs.map((faq, index) => (
                    <Accordion.Item eventKey={String(index)} key={index}>
                        <Accordion.Header onClick={() => handleToggle(String(index))}>{index + 1}. {faq.question}</Accordion.Header>
                        <Accordion.Body className='text-justify'>
                            {faq.answer}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </Container>
    )
}

export default FaqList