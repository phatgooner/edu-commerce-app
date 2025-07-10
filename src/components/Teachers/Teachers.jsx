import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import teachersData from '../../data/teachers';
import ReactPaginate from 'react-paginate';
import TeacherCard from './TeacherCard'

const ITEMS_PER_PAGE = 6;
const Teachers = (props) => {
    const teachers = teachersData;
    const [currentPage, setCurrentPage] = useState(0);

    const offset = currentPage * ITEMS_PER_PAGE;
    const currentItems = teachers.slice(offset, offset + ITEMS_PER_PAGE);
    const pageCount = Math.ceil(teachers.length / ITEMS_PER_PAGE);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // cuộn mượt (có thể dùng 'auto' nếu muốn cuộn nhanh)
        });
    };
    return (
        <Container className="py-5">
            <div>
                <div class="flex md:items-center flex-col md:flex-row items-start">
                    <h2 class="text-lg font-bold leading-7 text-gray1" data-cy="tec-title">Tìm gia sư dạy ngoại ngữ tốt nhất cho bạn</h2>
                </div>
                <p class="text-tiny leading-5 text-gray3 mb-0 mt-1 font-medium">Tìm gia sư dạy ngoại ngữ trực tuyến tốt nhất cho bạn: lựa chọn từ những giáo viên Tiếng Anh trực tuyến có kinh nghiệm của chúng tôi và có được trải nghiệm học tốt nhất.</p>
            </div>
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
                marginPagesDisplayed={2}
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

export default Teachers