import BookCard from "../Cards/BookCard";
import { Row, Col } from "react-bootstrap";

const BookListGenerator = ({ isFromRelevant, bookList }) => {
    return (
        <Row>
            {bookList && bookList.length > 0 ? bookList.map(book => (
                <Col className="my-4" key={book.id} md={3} lg={2} sm={12}>
                    <BookCard isFromRelevant={isFromRelevant} book={book} />
                </Col>
            )) : <p class="text-center my-5 fs-5">Không tìm thấy sản phẩm nào trong danh sách.</p>}
        </Row>
    )
}

export default BookListGenerator;