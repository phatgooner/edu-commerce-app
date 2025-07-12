import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <Container>
            <div class="text-center py-5">
                <i class="bi bi-exclamation-triangle display-1 text-main"></i>
                <h1 class="display-1 fw-bold">404 - Không tìm thấy trang</h1>
                <h1 class="mb-4">Trang bạn yêu cầu không tồn tại hoặc đã bị xóa.</h1>
                <Link to="/">
                    <button className="btn btn-primary mt-3">Quay về trang chủ</button>
                </Link>
            </div>
        </Container>
    );
};

export default Error;
