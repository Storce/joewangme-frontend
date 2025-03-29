// app/layout.js
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname
import './globals.css';

// export const metadata = {
//     title: {
//         default: 'Joe Wang | :D',
//     },
//     description: 'Personal website of Joe Wang, a Computer Science undergrad at UC Berkeley.',
// };

export default function RootLayout({ children }) {
    const pathname = usePathname(); // Get the current route

    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body style={{ backgroundColor: '#F5EEDC', color: 'black' }}>
                <nav
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '2rem',
                        padding: '1rem 2rem',
                        background: '#183B4E',
                    }}
                >
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>
                </nav>
                <div key={pathname} className="page-transition">
                    {/* Use key based on pathname to trigger animation */}
                    {children}
                </div>
            </body>
        </html>
    );
}
