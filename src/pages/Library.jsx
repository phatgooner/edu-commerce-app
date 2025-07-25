import BookList from "../components/Lists/BookList";
import libraryData from "../data/library";

const Library = () => {
    return (
        <div className="library-content">
            <div className="container library-header py-5 bg-white">
                <h1 className="fw-bold mb-4" style={{ fontSize: '3rem' }}>
                    Tìm giáo trình học ngoại ngữ tốt nhất cho bạn
                </h1>
                <p class="mb-0 mt-1 fs-5">Lựa chọn từ những tác giả hàng đầu để có được trải nghiệm học tốt nhất.</p>
            </div>
            <div className="book-list bg-light">
                <BookList libraryData={libraryData} />
            </div>

        </div>
    )
}

export default Library