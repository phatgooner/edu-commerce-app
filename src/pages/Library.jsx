import BookList from "../components/Library/BookList"

const Library = () => {
    return (
        <div className="library-content">
            <div className="container library-header py-5 bg-white">
                <h1 className="fw-bold mb-4" style={{ fontSize: '3rem' }}>
                    Tìm giáo trình học ngoại ngữ tốt nhất cho bạn
                </h1>
                <p class="leading-5 text-gray3 mb-0 mt-1 fs-5">Lựa chọn từ những tác giả hàng đầu để có được trải nghiệm học tốt nhất.</p>
            </div>
            <div className="book-list bg-light">
                <BookList />
            </div>

        </div>
    )
}

export default Library