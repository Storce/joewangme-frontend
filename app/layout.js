import './globals.css';
import Nav from './components/Nav'; // adjust path if needed


export const metadata = {
    title: {
        default: 'Joe Wang',
        template: '%s | Joe Wang',
    },
    description:
        'I am Joe, a Computer Science student at UC Berkeley and General Manager at the Open Computing Facility. I am enthusiastic about Linux and computer infrastructure.',
    keywords: [
        'Joe Wang',
        'Zezhou Wang',
        'UC Berkeley',
        'Computer Science',
        'software engineering',
        'Open Computing Facility',
        'Linux',
        'Infrastructure',
        'Brazilian',
    ],
    metadataBase: new URL('https://joewang.me'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Joe Wang',
        description:
            'I am Joe, a Computer Science student at UC Berkeley and General Manager at the Open Computing Facility. I am enthusiastic about Linux and computer infrastructure.',
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
