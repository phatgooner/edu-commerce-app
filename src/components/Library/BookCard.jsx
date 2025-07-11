import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaStar, FaHeart } from "react-icons/fa";

const BookCard = ({ book }) => {
    const { title, coverImage, price, rating } = book;

    return (
        <Card className="h-100 shadow-sm">
            <Card.Img
                variant="top"
                src={coverImage}
                alt={title}
                style={{ height: "240px", objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column justify-content-between card-content">
                <Card.Title className="fs-6 fw-bold">{title}</Card.Title>
                <div className="d-flex align-items-center">
                    <span className="text-warning mb-1">
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                size={14}
                                color={i < Math.floor(rating) ? "#ffc107" : "#e4e5e9"}
                            />
                        ))}
                    </span>
                    <small className="text-muted ms-1">({rating})</small>
                </div>

                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                    <h6 className="text-main mt-auto mb-0">USD {price.toFixed(2)}</h6>
                    <Button variant="outline-primary" className='rounded-pill '>
                        <FaHeart />
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default BookCard;