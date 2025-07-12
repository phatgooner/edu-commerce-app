import BookCard from "../Cards/BookCard";
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import arraySort from '../../helpers/arraySort';

const FeaturedBooks = ({ library }) => {
    const books = arraySort(library, 'rating-desc').slice(0, 12);
    return (
        <Container>
            <h1 className="fw-bold text-center" style={{ fontSize: '3rem' }}>
                Giáo trình tốt nhất dành cho bạn
            </h1>
            <Row>
                {books.map((book) => (
                    <Col className="my-4" key={book.id} md={3} lg={2} sm={12}>
                        <BookCard book={book} />
                    </Col>
                ))}
            </Row>
            <div className="text-center"><NavLink to="/library" className='btn btn-outline-primary'>Xem thêm sách và giáo trình</NavLink></div>
        </Container>
    )
}

export default FeaturedBooks;