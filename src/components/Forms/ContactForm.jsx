import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

const ContactForm = () => {
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        checkbox: false
    });

    const [isSending, setSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true)
        const currentToast = {};
        currentToast.current = toast.loading('Đang gửi yêu cầu...')
        setTimeout(() => {
            setContactForm({
                name: '',
                email: '',
                phone: '',
                message: '',
                checkbox: false
            });
            setSending(false);
            toast.update(currentToast.current, {
                render: "Gửi yêu cầu thành công. Chúng tôi sẽ sớm liên hệ lại bạn.",
                type: "success",
                isLoading: false,
                autoClose: 3000
            })
        }, 2000)
    }

    const handleChange = (e) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleChecked = (e) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.checked,
        });
    };

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Họ tên</Form.Label>
                            <Form.Control name="name" type="text" value={contactForm.name} placeholder="Nhập họ tên" required onChange={(e) => handleChange(e)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" value={contactForm.email} placeholder="Nhập email" required onChange={(e) => handleChange(e)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Điện thoại liên hệ</Form.Label>
                            <Form.Control name="phone" type="text" value={contactForm.phone} placeholder="Số điện thoại" required onChange={(e) => handleChange(e)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Nội dung</Form.Label>
                            <Form.Control name="message" as="textarea" value={contactForm.message} rows={5} placeholder="Nhập nội dung" required onChange={(e) => handleChange(e)} />
                        </Form.Group>

                        <div className="mb-3 border p-2 d-flex align-items-center justify-content-between" style={{ background: "#f9f9f9" }}>
                            <Form.Check name="checkbox" type="checkbox" checked={contactForm.checkbox} label="I'm not a robot" required onChange={(e) => handleChecked(e)} />
                            <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="recaptcha" height="32" />
                        </div>

                        <Button variant="primary" type="submit" className="w-100" disabled={isSending ? true : false}>
                            Gửi yêu cầu
                        </Button>
                    </Form>
                </Col>

                <Col md={6}>
                    <div className="ps-md-4 mt-4 mt-md-0">
                        <p><strong>CÔNG TY TNHH GIÁO DỤC VÀ ĐÀO TẠO TALKABLE.</strong><br />
                            64 Nguyễn Trường Tộ, P. Tân Thành, Q. Tân Phú, TP Hồ Chí Minh, Việt Nam.<br />
                        </p>
                        <hr />
                        <p>
                            Hotline: 1900 6868<br />
                            support@talkable.io
                        </p>

                        <div className="d-flex gap-3 fs-5">
                            <Link to="https://www.facebook.com/" target='blank'><i className="bi bi-facebook fs-4 text-primary"></i></Link>
                            <Link to="https://www.youtube.com/" target='blank'><i className="bi bi-youtube fs-4 text-danger"></i></Link>
                            <Link to="https://www.instagram.com/" target='blank'><i className="bi bi-instagram fs-4 text-warning"></i></Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactForm;