import React, { useContext, useState } from 'react';
import { Card, Button, Col, Row, Badge } from 'react-bootstrap';
import { FaStar, FaHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { ModalContext } from '../../context/ModalContext';
import { UserContext } from '../../context/UserContext';
import TeacherModal from '../Modals/TeacherModal';

const TeacherCard = ({ teacher }) => {
    const { user, setFavoriteTeacher, removeFavoriteTeacher } = useContext(UserContext);
    const { setShow, setType } = useContext(ModalContext);
    const [showModal, setShowModal] = useState(false)

    return (
        <Card className="shadow-sm rounded-4 overflow-hidden my-4">
            <TeacherModal
                show={showModal}
                handleClose={() => setShowModal(false)}
                teacher={teacher}
            />

            <Row className="g-0 align-items-center card-content">
                <Col md={3} lg={2} className="position-relative text-center" role='button' onClick={() => setShowModal(true)}>
                    <img
                        src={teacher.avatar}
                        alt={teacher.name}
                        className="img-fluid rounded-pill"
                        style={{ width: '80%', height: 'auto', objectFit: "cover" }}
                    />
                </Col>

                <Col md={9} lg={10}>
                    <Card.Body>
                        <div role='button' className="d-flex justify-content-between align-items-start" onClick={() => setShowModal(true)}>
                            <div className='w-75'>
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
                                Chi tiết
                            </Button>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-2">
                            <div>
                                <span className="fw-bold fs-5">USD {teacher.price.toFixed(2)}</span>
                            </div>
                            <div className="d-flex gap-2">
                                {user && user.likedTeachers.includes(teacher.id) ? <Button variant={"danger"} className='rounded-pill' onClick={() => { removeFavoriteTeacher(teacher.id); toast.success('Đã xóa khỏi danh sách yêu thích') }}>
                                    <FaHeart />
                                </Button> :
                                    <Button variant={"outline-primary"} className='rounded-pill' onClick={user ? () => { setFavoriteTeacher(teacher.id); toast.success('Đã thêm vào danh sách yêu thích') } : () => { setType('login'); setShow(true); }}>
                                        <FaHeart />
                                    </Button>}
                                <Button variant="primary"
                                    onClick={user ? () => { toast.success('Đăng ký học thành công! Giáo viên sẽ liên hệ lại bạn để xác nhận.') } : () => { setType('login'); setShow(true); }}>Đăng ký học</Button>
                            </div>
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};

export default TeacherCard;