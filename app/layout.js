// app/layout.js
import Link from 'next/link';
import './globals.css';

export const metadata = {
    title: {
        default: 'Joe Wang | :D',
    },
    description: 'My personal website',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
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
                <div className="page-transition">
                    {/* Use CSS animations for transitions */}
                    {children}
                </div>
            </body>
        </html>
    );
}
