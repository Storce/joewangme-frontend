'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
    const pathname = usePathname();

    return (
        <nav
            key={pathname}
            style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                padding: '1rem 2rem',
                background: '#0d0d2a',
            }}
        >
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
        </nav>
    );
}
