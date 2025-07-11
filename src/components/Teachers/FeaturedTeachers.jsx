import TeacherCard from "./TeacherCard";
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const FeaturedTeachers = ({ teachersData }) => {
    const teachers = teachersData.filter(teacher => teacher.rating === 5.0)
    return (
        <Container>
            <h1 className="fw-bold text-center" style={{ fontSize: '3rem' }}>
                Giao tiếp với những giáo viên hàng đầu
            </h1>
            <Row>
                {teachers.map((teacher) => (
                    <Col key={teacher.id} md={12} lg={12}>
                        <TeacherCard teacher={teacher} />
                    </Col>
                ))}
            </Row>
            <div className="text-center"><NavLink to="/teachers" className='btn btn-outline-primary'>Xem thêm giáo viên</NavLink></div>
        </Container>
    )
}

export default FeaturedTeachers;