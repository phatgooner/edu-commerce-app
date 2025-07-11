import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const SortBar = ({ onSortsChange }) => {
    const [selectedType, setType] = useState('')

    const handleClick = (e) => {
        setType(e.target.name)
        onSortsChange(
            e.target.name
        );
    }

    return (
        <div className="g-3 d-flex">
            <h5 className='me-4 my-auto'>Sắp xếp theo:</h5>
            <Button className='me-3'
                variant={selectedType === 'price-asc' ? 'primary' : 'outline-primary'}
                name='price-asc'
                onClick={(e) => handleClick(e)}>Giá tăng dần</Button>
            <Button className='me-3'
                variant={selectedType === 'price-desc' ? 'primary' : 'outline-primary'}
                name='price-desc'
                onClick={(e) => handleClick(e)}>Giá giảm dần</Button>
            <Button className='me-3'
                variant={selectedType === 'rating-asc' ? 'primary' : 'outline-primary'}
                name='rating-asc'
                onClick={(e) => handleClick(e)}>Rating tăng dần</Button>
            <Button className='me-3'
                variant={selectedType === 'rating-desc' ? 'primary' : 'outline-primary'}
                name='rating-desc'
                onClick={(e) => handleClick(e)}>Rating giảm dần</Button>
        </div>
    );
};

export default SortBar;