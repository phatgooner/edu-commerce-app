import React from "react";
import BookCard from "./BookCard";
import libraryData from "../../data/library";
import { Container } from "react-bootstrap";

const BookList = () => {
    return (
        <Container className="py-2">
            <div className="row">
                {libraryData.map(book => (
                    <div className="col-lg-2 col-md-3 col-sm-12 mb-4" key={book.id}>
                        <BookCard book={book} />
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default BookList;
