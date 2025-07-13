import TeacherList from '../components/Lists/TeacherList'
import teachersData from '../data/teachers';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';
import Error from './Error'

const LikedTeachers = () => {
    const { user } = useContext(UserContext);
    const favTeachers = user ? teachersData.filter(t => user.likedTeachers.includes(t.id)) : [];

    return user ?
        (
            <div className="teachers-content">
                <div className="container teachers-header py-5 bg-white">
                    <h1 className="fw-bold mb-4" style={{ fontSize: '3rem' }}>
                        Các gia sư yêu thích của bạn
                    </h1>
                </div>
                <div className="teacher-list bg-light">
                    <TeacherList teachers={favTeachers} />
                </div>
            </div>
        ) :
        (<Error />)
}

export default LikedTeachers