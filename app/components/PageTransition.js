'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }) {
    const pathname = usePathname();
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        setAnimating(true);
        const timeout = setTimeout(() => setAnimating(false), 200); // match CSS duration
        return () => clearTimeout(timeout);
    }, [pathname]);

    return (
        <div className={`page-transition ${animating ? 'animating' : ''}`}>
            {children}
        </div>
    );
}
