import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import teachers from '../../data/teachers';
import ReactPaginate from 'react-paginate';
import TeacherCard from './TeacherCard';
import SearchBar from '../SearchBar';

const TeachersList = (props) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [filters, setFilters] = useState({
        search: '',
        language: '',
        rating: '',
        price: '',
    });
    let languageList = [];
    teachers.forEach(teacher => {
        teacher.languages.forEach(language => {
            !languageList.includes(language) && languageList.push(language);
        })
    })

    const filteredTeachers = teachers.filter((t) => {
        const nameMatch = t.name.toLowerCase().includes(filters.search.toLowerCase());
        const languageMatch = filters.language ? t.languages.includes(filters.language) : true;
        const ratingMatch = filters.rating ? t.rating >= parseFloat(filters.rating) : true;
        const priceMatch =
            filters.price === 'lt10' ? t.rate < 10 :
                filters.price === '10to20' ? t.rate >= 10 && t.rate <= 20 :
                    filters.price === 'gt20' ? t.rate > 20 :
                        true;

        return nameMatch && languageMatch && ratingMatch && priceMatch;
    });

    // Pagination
    const ITEMS_PER_PAGE = 5;
    const offset = currentPage * ITEMS_PER_PAGE;
    const currentItems = filteredTeachers.slice(offset, offset + ITEMS_PER_PAGE);
    const pageCount = Math.ceil(filteredTeachers.length / ITEMS_PER_PAGE);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Container className="py-2">
            <SearchBar filters={filters}
                onFilterChange={setFilters}
                languageOptions={languageList} />
            <Row>
                {currentItems.map((teacher) => (
                    <Col key={teacher.id} md={12} lg={12}>
                        <TeacherCard teacher={teacher} />
                    </Col>
                ))}
            </Row>
            <ReactPaginate
                previousLabel={'← Trước'}
                nextLabel={'Tiếp →'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
            />
        </Container>
    )
}

export default TeachersList