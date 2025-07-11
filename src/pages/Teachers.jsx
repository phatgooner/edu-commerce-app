import TeacherList from '../components/Teachers/TeacherList'

const Teachers = () => {
    return (
        <div className="teachers-content">
            <div className="container teachers-header py-5 bg-white">
                <h1 className="fw-bold mb-4" style={{ fontSize: '3rem' }}>
                    Tìm gia sư dạy ngoại ngữ tốt nhất cho bạn
                </h1>
                <p class="leading-5 text-gray3 mb-0 mt-1 fs-5">Lựa chọn từ những giáo viên ngoại ngữ trực tuyến có kinh nghiệm của chúng tôi để có được trải nghiệm học tốt nhất.</p>
            </div>
            <div className="teacher-list bg-light">
                <TeacherList />
            </div>

        </div>

    )
}

export default Teachers