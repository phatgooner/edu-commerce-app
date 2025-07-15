import { Row, Col } from 'react-bootstrap';
import TeacherCard from '../Cards/TeacherCard';

const TeacherListGenerator = ({ teacherList, isFromRelevant }) => {
    return (
        <Row>
            {teacherList && teacherList.length > 0 ? teacherList.map((teacher) => (
                <Col key={teacher.id} md={12} lg={12}>
                    <TeacherCard isFromRelevant={isFromRelevant} teacher={teacher} />
                </Col>
            )) : <p class="text-center my-5 fs-5">Không tìm thấy giáo viên nào trong danh sách.</p>}
        </Row>
    )
}

export default TeacherListGenerator;