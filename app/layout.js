import './globals.css';
import Nav from './components/Nav'; // adjust path if needed


export const metadata = {
    title: {
        default: 'Joe Wang',
        template: '%s | Joe Wang',
    },
    description:
        'I am Joe Wang. I study Computer Science at UC Berkeley.',
    keywords: [
        'Joe Wang',
        'Zezhou Wang',
        'UC Berkeley',
        'Computer Science',
        'Systems Engineering',
        'software engineering',
        'Open Computing Facility',
        'Linux',
    ],
    metadataBase: new URL('https://joewang.me'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Joe Wang',
        description:
            'I am Joe Wang. I study Computer Science at UC Berkeley.',
        url: 'https://joewang.me',
        siteName: 'Joe Wang',
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
    },
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Nav />
                {children}
            </body>
        </html>
    );
}
