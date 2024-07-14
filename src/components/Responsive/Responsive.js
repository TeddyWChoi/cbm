import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({
        query: '(max-width:1200px)',
    });
    return <>{isMobile && children}</>;
};

export const Pc = ({ children }) => {
    const isPc = useMediaQuery({
        query: '(min-width:1201px)',
    });
    return <>{isPc && children}</>;
};
