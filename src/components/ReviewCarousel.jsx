import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from 'react-bootstrap';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import reviews from '../data/reviews'

const ReviewCarousel = () => {
    return (
        <Container>
            <h1 className="fw-bold text-center" style={{ fontSize: '3rem' }}>
                Các học viên nói gì về <span style={{ color: "#00bfff" }}>talkable</span>
            </h1>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 3000 }}
                speed={800}
                slidesPerView={1}
                loop={true}
                className="review-swiper py-4"
            >
                {
                    reviews.map((r) => (
                        <SwiperSlide key={r.id}>
                            <div className="review-card d-flex align-items-stretch justify-content-center">
                                <div className="review-img rounded-start overflow-hidden">
                                    <img src={r.avatar} alt={r.name} className="h-100 w-100 object-fit-cover" />
                                </div>
                                <div className="review-content p-4 bg-light rounded-end">
                                    <h6 className="fw-bold mb-0">{r.name}</h6>
                                    <small className="text-muted">{r.country}</small>
                                    <div className="rating mt-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                color={i < r.rating ? '#ffc107' : '#e0e0e0'}
                                                size={14}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-secondary mb-0" style={{ fontSize: '0.95rem' }}>
                                        {r.content}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper >
        </Container >
    );
};

export default ReviewCarousel;
