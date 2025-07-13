import { Accordion, Container } from 'react-bootstrap';

const FaqList = ({ faqs }) => {
    return (
        <Container className="py-5">
            <Accordion defaultActiveKey="0" flush>
                {faqs.map((faq, index) => (
                    <Accordion.Item eventKey={index} key={index}>
                        <Accordion.Header>{index + 1}. {faq.question}</Accordion.Header>
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