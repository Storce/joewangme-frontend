// app/page.js
'use client';

import { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

// Import images (adjust the paths if needed)
import myImage from '../public/me.jpg';

export default function Home() {
    const [notification, setNotification] = useState('');

    const copyEmailToClipboard_1 = () => {
        navigator.clipboard.writeText('joewangzz1028@gmail.com');
        setNotification('Email copied to clipboard!');
        setTimeout(() => setNotification(''), 1000);
    };

    const copyEmailToClipboard_2 = () => {
        navigator.clipboard.writeText('zezhou_wang@berkeley.edu');
        setNotification('Email copied to clipboard!');
        setTimeout(() => setNotification(''), 1000);
    };

    return (
        <main style={{ padding: '0rem', textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '0.5rem' }}>Hi! I&apos;m Joe</h1>
            <h2 className="italic-subtitles" style={{ marginTop: '0rem', marginBottom: '0rem' }}>
                I also go by Zezhou, and my username Storce.
            </h2>
            <p className="paragraph" style={{ marginBottom: '1rem', textAlign: 'center' }}>
                I am a Computer Science undergrad at UC Berkeley.
            </p>
            <div
                style={{
                    padding: '1rem',
                    border: '2px dashed rgba(24, 59, 78, 0.63)', // Adjusted border transparency
                    borderRadius: '8px',
                    display: 'inline-block',
                    marginBottom: '1rem',
                }}
            >
                <img
                    src={myImage}
                    alt="Joe Wang"
                    width={300}
                    height={300}
                    style={{ height: 'auto' }}
                />
            </div>
            {/* Centering the contact box using flexbox */}
            <div
                className="contact-box"
                style={{
                    marginTop: '-1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <div style={{ textAlign: 'center' }}>
                    <p style={{ marginBottom: '-0.8rem' }}>
                        <FaEnvelope /> Email:{' '}
                    </p>
                    <p className="paragraph" style={{ marginBottom: '-0.5rem' }}>
                        <span
                            onClick={copyEmailToClipboard_1}
                            style={{ textDecoration: 'underline', cursor: 'pointer' }}
                        >
                            joewangzz1028@gmail.com
                        </span>
                    </p>
                    <p className="paragraph" style={{ marginBottom: '0.8rem' }}>
                        <span
                            onClick={copyEmailToClipboard_2}
                            style={{ textDecoration: 'underline', cursor: 'pointer' }}
                        >
                            zezhou_wang@berkeley.edu
                        </span>
                    </p>
                    <p style={{ marginBottom: '-0.8rem' }}>
                        <FaLinkedin /> LinkedIn:{' '}
                    </p>
                    <p className="paragraph" style={{ marginBottom: '0.8rem' }}>
                        <a
                            href="https://www.linkedin.com/in/joseph-wang-zz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'underline', color: "#000000" }}
                        >
                            Joe Wang
                        </a>
                    </p>
                    <p style={{ marginBottom: '-0.8rem' }}>
                        <FaGithub /> GitHub:{' '}
                    </p>
                    <p className="paragraph" style={{ marginBottom: '0rem' }}>
                        <a
                            href="https://github.com/storce"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'underline', color: "#000000" }}
                        >
                            storce
                        </a>
                    </p>
                </div>
                {notification && (
                    <div style={{ marginTop: '1rem', color: 'green' }}>
                        {notification}
                    </div>
                )}
            </div>
            {/* <div className="buddy-box" style={{ marginTop: '-1rem' }}>
                <p className="paragraph" style={{ marginBottom: '0.5rem' }}>Buddy Box [in construction]</p> */}
            {/* Uncomment below to add a clickable buddy image */}
            {/* 
                <a href="https://www.buddy-website.com" target="_blank" rel="noopener noreferrer">
                  <Image src={buddyImage} alt="Buddy" />
                </a> 
                */}
            {/* </div> */}
        </main>
    );
}
