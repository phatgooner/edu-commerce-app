import React from "react";
import BookCard from "../Cards/BookCard";
import ReactPaginate from 'react-paginate';
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import SearchBar from "../Tools/SearchBar";
import SortBar from "../Tools/SortBar";
import arraySort from "../../helpers/arraySort";

const BookList = ({ libraryData }) => {
    // Filter
    const [filters, setFilters] = useState({
        search: '',
        language: '',
        rating: '',
        price: '',
    });
    let languageList = [];
    libraryData.forEach(book => {
        !languageList.includes(book.language) && languageList.push(book.language);
    })

    const filteredBooks = libraryData.filter((book) => {
        const nameMatch = book.title.toLowerCase().includes(filters.search.toLowerCase());
        const languageMatch = filters.language ? book.language === filters.language : true;
        const ratingMatch = filters.rating ? book.rating >= parseFloat(filters.rating) : true;
        const priceMatch =
            filters.price === 'lt10' ? book.price < 10 :
                filters.price === '10to20' ? book.price >= 10 && book.price <= 20 :
                    filters.price === 'gt20' ? book.price > 20 :
                        true;

        return nameMatch && languageMatch && ratingMatch && priceMatch;
    });

    // Sort
    const [sortType, setSortType] = useState('');
    const sortedItems = arraySort(filteredBooks, sortType);

    // Pagination
    const [currentPage, setCurrentPage] = useState(0);
    const ITEMS_PER_PAGE = 12;
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
                typeName={'sách'}
                filters={filters}
                onFilterChange={setFilters}
                languageOptions={languageList} />

            {/* Sort component */}
            <SortBar onSortsChange={setSortType} />

            {/* List */}
            <Row>
                {currentItems.map(book => (
                    <Col className="my-4" key={book.id} md={3} lg={2} sm={12}>
                        <BookCard book={book} />
                    </Col>
                ))}
            </Row>

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
    );
};

export default BookList;
