import { Modal, Button } from "react-bootstrap";
import library from '../../data/library';
import BookListGenerator from '../Generators/BookListGenerator';

const RelevantBooks = ({ showRelevant, handleCloseRelevant, bookRelevant }) => {
    const books = library.filter(b => b.language === bookRelevant.language)

    return (
        <Modal show={showRelevant} onHide={handleCloseRelevant} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Các loại sách liên quan đến <span className="text-main">{bookRelevant.title}</span></Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <BookListGenerator bookList={books} />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseRelevant}>Đóng</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RelevantBooks;