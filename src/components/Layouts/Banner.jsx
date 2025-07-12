import React from 'react';
import bannerImg from '../../assets/banner.png';
import { BsChatRightDotsFill } from 'react-icons/bs';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ModalContext } from '../../context/ModalContext';
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const { setType, setShow } = useContext(ModalContext);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <h1 className="fw-bold text-center" style={{ fontSize: '3rem' }}>
                        Trở nên thành thạo bất kỳ ngôn ngữ nào
                    </h1>
                    <ul className="list-unstyled fs-6 text-muted mb-4">
                        <li className="mb-2">
                            <BsChatRightDotsFill className='text-main' /> Thực hiện bài học tùy chỉnh 1 thầy kèm 1 trò được hàng triệu người dùng tin tưởng
                        </li>
                        <li className="mb-2">
                            <BsChatRightDotsFill className='text-main' /> Học với giáo viên đã được chứng nhận phù hợp với thời khóa biểu của bạn
                        </li>
                        <li>
                            <BsChatRightDotsFill className='text-main' /> Kết nối với cộng đồng toàn cầu của những người học ngôn ngữ
                        </li>
                    </ul>
                    <Button variant="primary" size="lg" onClick={user ? () => navigate('/teachers') : () => { setType('signup'); setShow(true); }}>
                        Bắt đầu bây giờ
                    </Button>
                </Col>

                <Col md={6} className="text-center mt-4 mt-md-0">
                    <img
                        src={bannerImg}
                        alt="banner"
                        className="img-fluid"
                        style={{ maxWidth: '100%' }}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;
