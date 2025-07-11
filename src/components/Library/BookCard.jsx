import React from "react";
import { Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

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
                <div className="d-flex align-items-center mb-2">
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
                <h6 className="text-main mt-auto mb-0">USD {price}</h6>
            </Card.Body>
        </Card>
    );
};

export default BookCard;