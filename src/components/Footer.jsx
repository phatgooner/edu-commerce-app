import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    return (
        <footer className="bg-light text-dark pt-5 border-top">
            <Container>
                <Row>
                    {/* Logo & mô tả */}
                    <Col md={4} className="mb-4">
                        <h4 className="fw-bold text-main">talkable</h4>
                        <p>Học ngôn ngữ với giáo viên bản xứ 1 kèm 1. Tương tác trực tiếp. Đặt lịch linh hoạt.</p>
                    </Col>

                    {/* Liên kết nhanh */}
                    <Col md={2} className="mb-4">
                        <h6 className="fw-bold">Tính năng</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-decoration-none text-dark">Tìm khóa học</a></li>
                            <li><a href="#" className="text-decoration-none text-dark">Tìm giáo viên</a></li>
                            <li><a href="#" className="text-decoration-none text-dark">Danh sách yêu thích</a></li>
                        </ul>
                    </Col>

                    {/* Thông tin */}
                    <Col md={2} className="mb-4">
                        <h6 className="fw-bold">Thông tin</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-decoration-none text-dark">Giới thiệu</a></li>
                            <li><a href="#" className="text-decoration-none text-dark">Blog</a></li>
                            <li><a href="#" className="text-decoration-none text-dark">Câu hỏi thường gặp</a></li>
                        </ul>
                    </Col>

                    {/* Liên hệ */}
                    <Col md={4} className="mb-4">
                        <h6 className="fw-bold">Liên hệ</h6>
                        <ul className="list-unstyled">
                            <li>Email: support@talkable.io</li>
                            <li>Hotline: 1900 6868</li>
                            <li className="d-flex gap-3"><a href="#"><i className="bi bi-facebook fs-4 text-primary"></i></a>
                                <a href="#"><i className="bi bi-youtube fs-4 text-danger"></i></a>
                                <a href="#"><i className="bi bi-instagram fs-4 text-warning"></i></a></li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <p className="text-center text-muted">© {new Date().getFullYear()} talkable. All rights reserved.</p>
            </Container>
        </footer>
    );
};

export default Footer;