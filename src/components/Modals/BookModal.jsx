import React, { useContext, useState, } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { UserContext } from '../../context/UserContext'
import { ModalContext } from '../../context/ModalContext'
import { toast } from "react-toastify";
import RelevantBooks from './RelevantBooks';

const BookModal = ({ show, handleClose, book }) => {
    const { user } = useContext(UserContext);
    const { setShow, setType } = useContext(ModalContext);
    const [showRelevantModal, setShowRelevantModal] = useState(false);

    if (!book) return null;

    return (
        <>
            <RelevantBooks
                showRelevant={showRelevantModal}
                handleCloseRelevant={() => setShowRelevantModal(false)}
                bookRelevant={book}
            />

            <Modal show={show} onHide={handleClose} centered size="md">
                <Modal.Header closeButton>
                    <Modal.Title>{book.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body className="d-flex flex-column gap-2">
                    <div className="d-flex flex-column flex-md-row gap-4">
                        <div className="flex-shrink-0" style={{ maxWidth: "200px" }}>
                            <img
                                src={book.coverImage}
                                alt={book.title}
                                className="img-fluid rounded"
                            />
                        </div>

                        <div className="flex-grow-1">
                            <p><strong>Tác giả:</strong> {book.author}</p>
                            <p><strong>Ngôn ngữ:</strong> {book.language}</p>
                            <p><strong>Thể loại:</strong> {book.type}</p>
                            <p><strong>Cấp độ:</strong> {book.level}</p>
                            <p><strong>Đánh giá:</strong> <span className="text-warning">
                                <FaStar className="mb-1" /> {book.rating}
                            </span></p>
                            <p><strong>Giá:</strong> <span className="text-danger fw-bold">${book.price.toFixed(2)}</span></p>
                        </div>
                    </div>
                    <Button variant="outline-primary" onClick={() => { handleClose(true); setShowRelevantModal(true); }}>Xem các sản phẩm liên quan</Button>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Đóng</Button>
                    <Button variant="primary" onClick={user ? () => { toast.success('Đăng ký mua sách thành công'); handleClose(true) } : () => { handleClose(true); setShow(true); setType('login') }}>Đăng ký mua sách</Button>
                </Modal.Footer>
            </Modal>
        </>

    );
};

export default BookModal;