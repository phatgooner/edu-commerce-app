import TeacherCard from "./TeacherCard";
import teachersData from '../../data/teachers';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const teachers = teachersData.filter(teacher => teacher.rating === 5.0)
const BestTeachers = () => {
    return (
        <Container>
            <h1 className="fw-bold text-center" style={{ fontSize: '3rem' }}>
                Giáo viên tốt nhất dành cho bạn
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

export default BestTeachers;