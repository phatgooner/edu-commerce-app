import React from "react";
import { Container } from "react-bootstrap";
import partners from "../../data/partners";

const FeaturedPartners = () => {
    return (
        <Container>
            <h1 className="fw-bold text-center" style={{ fontSize: '3rem' }}>
                Doanh nghiệp tiêu biểu đã lựa chọn <span className="text-main">talkable</span>
            </h1>
            <div className="mt-5 d-flex flex-wrap justify-content-center gap-5">
                {partners.map((company, idx) => (
                    <img
                        key={idx}
                        src={company.logo}
                        alt={company.name}
                        style={{ height: "100px", objectFit: "contain" }}
                    />
                ))}
            </div>
        </Container>
    );
};

export default FeaturedPartners;