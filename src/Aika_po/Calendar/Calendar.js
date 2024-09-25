import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Calendar() {
    /* 서브메뉴 내부링크 관련 */
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    return <div id="calendar" className="Calendar"></div>;
}
