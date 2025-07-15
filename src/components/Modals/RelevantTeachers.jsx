import { Modal, Button } from "react-bootstrap";
import teachersData from '../../data/teachers';
import TeacherListGenerator from '../Generators/TeacherListGenerator';

const RelevantTeachers = ({ showRelevant, handleCloseRelevant, teacherRelevant }) => {
    const teachers = teachersData.filter((teacher) => {
        if (teacher.id === teacherRelevant.id) return false;

        return teacher.languages.some(lang =>
            teacherRelevant.languages.includes(lang)
        );
    });

    return (
        <Modal show={showRelevant} onHide={handleCloseRelevant} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Các giáo viên tương tự <span className="text-main">{teacherRelevant.name}</span></Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <TeacherListGenerator isFromRelevant={true} teacherList={teachers} />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseRelevant}>Đóng</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RelevantTeachers;