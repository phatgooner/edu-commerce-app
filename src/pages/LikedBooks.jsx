import BookList from '../components/Lists/BookList'
import booksData from '../data/library';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';
import Error from './Error'

const LikedBooks = () => {
    const { user } = useContext(UserContext);
    const favBooks = user ? booksData.filter(b => user.likedBooks.includes(b.id)) : [];

    return user ?
        (
            <div className="books-content">
                <div className="container books-header py-5 bg-white">
                    <h1 className="fw-bold mb-4" style={{ fontSize: '3rem' }}>
                        Thư viện sách yêu thích của bạn
                    </h1>
                </div>
                <div className="book-list bg-light">
                    <BookList libraryData={favBooks} />
                </div>
            </div>
        ) :
        (<Error />)
}

export default LikedBooks