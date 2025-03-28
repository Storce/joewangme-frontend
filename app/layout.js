// app/layout.js
import Link from 'next/link';
import './globals.css';

export const metadata = {
    title: 'Joe Wang | :D',
    description: 'Joe Wang\'s Person Website',
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
                <div style={{ margin: '2rem' }}>{children}</div>
            </body>
        </html>
    );
}
