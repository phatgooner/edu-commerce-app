import React from 'react';
import { Card, Button, Col, Row, Badge } from 'react-bootstrap';
import { FaStar, FaHeart } from 'react-icons/fa';

const TeacherCard = ({ teacher }) => {

    return (
        <Card className="shadow-sm rounded-4 overflow-hidden my-4">
            <Row className="g-0 align-items-center">
                <Col md={3} lg={2} className="position-relative text-center">
                    <img
                        src={teacher.avatar}
                        alt={teacher.name}
                        className="img-fluid rounded-pill"
                        style={{ width: '80%', height: 'auto', objectFit: "cover" }}
                    />
                </Col>

                <Col md={9} lg={10}>
                    <Card.Body>
                        <div className="d-flex justify-content-between align-items-start">
                            <div>
                                <h5 className="fw-bold mb-1">{teacher.name}
                                    <span className="text-warning fw-bold"><FaStar className='ms-2 mb-1' /> {teacher.rating.toFixed(1)}</span></h5>
                                <div className="mb-2">
                                    <span className="text-muted me-2">SPEAKS:</span>
                                    {teacher.languages.map((lang, i) => (
                                        <Badge key={i} bg="info" className="me-2">
                                            {lang}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="mb-2">
                                    <span className="text-muted me-2">Chứng chỉ:</span>
                                    {teacher.certifications.map((spec, i) => (
                                        <Badge key={i} bg="light" text="dark" className="me-2 border">
                                            {spec}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="mb-2">
                                    <span className="text-muted">{teacher.bio}</span>
                                </div>
                            </div>
                            <Button variant="primary" className="rounded-pill">
                                Xem chi tiết
                            </Button>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-2">
                            <div>
                                <span className="fw-bold fs-5">USD {teacher.rate.toFixed(2)}</span>{' '}
                                <span className="text-muted fs-6"></span>
                            </div>
                            <div className="d-flex gap-2">
                                <Button variant="outline-secondary" className='rounded-pill'>
                                    <FaHeart />
                                </Button>
                                <Button variant="primary">Đăng ký học</Button>
                            </div>
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};

export default TeacherCard;