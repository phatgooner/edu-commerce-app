import React from "react";
import { Modal, Button, Badge, Image } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from '../../context/UserContext'
import { ModalContext } from '../../context/ModalContext'
import { toast } from "react-toastify";

const TeacherModal = ({ show, handleClose, teacher }) => {
    const { user } = useContext(UserContext);
    const { setShow, setType } = useContext(ModalContext);
    if (!teacher) return null;

    const {
        name,
        nationality,
        languages,
        avatar,
        rating,
        certifications,
        availableSlots,
        bio,
        price
    } = teacher;

    return (
        <Modal show={show} onHide={handleClose} centered size="md">
            <Modal.Header closeButton>
                <Modal.Title>Thông tin giáo viên</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="d-flex flex-column flex-md-row gap-4">
                    {/* Ảnh đại diện */}
                    <Image
                        src={avatar}
                        alt={name}
                        roundedCircle
                        style={{ width: 120, height: 120, objectFit: "cover" }}
                    />

                    {/* Thông tin chi tiết */}
                    <div className="flex-grow-1">
                        <h2>{name}</h2>

                        <p>
                            <strong>Quốc tịch:</strong> {nationality}
                        </p>

                        <p>
                            <strong>Ngôn ngữ giảng dạy:</strong>{" "}
                            {languages.map((lang, idx) => (
                                <Badge key={idx} bg="info" className="me-2">
                                    {lang}
                                </Badge>
                            ))}
                        </p>

                        <p>
                            <strong>Rating:</strong>{" "}
                            <span className="text-warning">
                                <FaStar className="mb-1" /> {rating.toFixed(1)}
                            </span>
                        </p>

                        <p>
                            <strong>Chứng chỉ:</strong>{" "}
                            {certifications.length > 0 ? (
                                certifications.map((cert, idx) => (
                                    <Badge key={idx} bg="success" className="me-2">
                                        {cert}
                                    </Badge>
                                ))
                            ) : (
                                <span>Chưa cập nhật</span>
                            )}
                        </p>
                    </div>
                </div>
                <hr />
                <div className="d-flex flex-column px-2">
                    {/* Phần Bio */}
                    <h6>Giới thiệu</h6>
                    <p>{bio || "Giáo viên chưa cung cấp mô tả cá nhân."}</p>

                    {/* Lịch dạy */}
                    <h6>Lịch dạy:</h6>
                    <ul>
                        {availableSlots && availableSlots.length > 0 ? (
                            availableSlots.map((item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            ))
                        ) : (
                            <li>Chưa cập nhật</li>
                        )}
                    </ul>

                    {/* Học phí */}
                    <p className="mb-0 text-center fs-5">
                        <strong className="text-main">USD {price.toFixed(2)} / giờ</strong>
                    </p>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Đóng
                </Button>
                <Button variant="primary" onClick={user ? () => { toast.success('Đăng ký học thành công! Giáo viên sẽ liên hệ lại bạn để xác nhận.'); handleClose(true) } : () => { setShow(true); setType('login') }}>Đăng ký học</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TeacherModal;