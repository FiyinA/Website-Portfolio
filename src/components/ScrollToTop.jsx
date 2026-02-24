import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to top only when navigating to /blog
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/blog') {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }, [pathname]);

    return null;
};

export default ScrollToTop;
