import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import SearchBar from '../Tools/SearchBar';
import SortBar from '../Tools/SortBar';
import arraySort from '../../helpers/arraySort';
import TeacherListGenerator from '../Generators/TeacherListGenerator';

const TeacherList = ({ teachers }) => {
    // Filter
    const [filters, setFilters] = useState({
        search: '',
        language: '',
        rating: '',
        price: '',
    });
    let languageList = [];
    teachers && teachers.length > 0 && teachers.forEach(teacher => {
        teacher.languages.forEach(language => {
            !languageList.includes(language) && languageList.push(language);
        })
    })

    const filteredTeachers = teachers.filter((t) => {
        const nameMatch = t.name.toLowerCase().includes(filters.search.toLowerCase());
        const languageMatch = filters.language ? t.languages.includes(filters.language) : true;
        const ratingMatch = filters.rating ? t.rating >= parseFloat(filters.rating) : true;
        const priceMatch =
            filters.price === 'lt10' ? t.price < 10 :
                filters.price === '10to20' ? t.price >= 10 && t.price <= 20 :
                    filters.price === 'gt20' ? t.price > 20 :
                        true;

        return nameMatch && languageMatch && ratingMatch && priceMatch;
    });

    // Sort
    const [sortType, setSortType] = useState('');
    const sortedItems = arraySort(filteredTeachers, sortType);

    // Pagination
    const [currentPage, setCurrentPage] = useState(0);
    const ITEMS_PER_PAGE = 5;
    const offset = currentPage * ITEMS_PER_PAGE;
    const currentItems = sortedItems.slice(offset, offset + ITEMS_PER_PAGE);
    const pageCount = Math.ceil(sortedItems.length / ITEMS_PER_PAGE);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        setCurrentPage(0);
    }, [filters, sortType])

    // Render
    return (
        <Container className="py-2">
            {/* Filter component */}
            <SearchBar
                typeName={'giáo viên'}
                filters={filters}
                onFilterChange={setFilters}
                languageOptions={languageList} />

            {/* Sort component */}
            <SortBar onSortsChange={setSortType} />

            {/* List */}
            <TeacherListGenerator teacherList={currentItems} />

            {/* Pagination component */}
            <ReactPaginate
                previousLabel={'← Trước'}
                nextLabel={'Tiếp →'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                forcePage={currentPage}
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

export default TeacherList