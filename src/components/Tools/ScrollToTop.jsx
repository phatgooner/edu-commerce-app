import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Mỗi khi route thay đổi, cuộn lên top
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // hoặc 'auto'
        });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
