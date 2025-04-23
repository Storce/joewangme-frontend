import Image from 'next/image';
import { FaLinkedin, FaGithub, FaEnvelope, FaUser } from 'react-icons/fa';
import CopyEmail from './components/CopyEmail';

export default function Home() {
    return (
        <div
            style={{
                backgroundImage: 'url("/background.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0rem',
            }}
        >
            <main className="mainContainer"
                style={{
                    backgroundColor: '#F5EEDC',
                    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                    maxWidth: '600px',
                    width: '50%',
                }} >
                <h1 style={{ marginBottom: '0.5rem', marginTop: '1.3rem' }}>Hi! I&apos;m Joe</h1>
                <h2 className="italic-subtitles" style={{ marginTop: '0rem', marginBottom: '0rem' }}>
                    I also go by Zezhou, and my username Storce.
                </h2>
                <p className="paragraph" style={{ marginBottom: '1rem', textAlign: 'center' }}>
                    I am a Computer Science undergrad at UC Berkeley.
                </p>

                <div style={{
                    padding: '1rem',
                    border: '2px dashed rgba(24, 59, 78, 0.63)',
                    borderRadius: '8px',
                    display: 'inline-block',
                    marginBottom: '2rem',
                    maxWidth: '70%',
                    textAlign: 'center',
                    margin: '1rem',
                }}>
                    <Image
                        src="./me.jpg"
                        alt="Joe Wang"
                        layout="responsive"
                        width={300}
                        height={300}
                    />
                </div>

                <div
                    className="contact-box"
                    style={{
                        marginTop: '-0.2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ marginBottom: '-0.5rem' }}><FaEnvelope /> Email:</p>
                        <p className="paragraph" style={{ marginBottom: '-0.5rem' }}>
                            <CopyEmail email="joewangzz1028@gmail.com" />
                        </p>
                        <p className="paragraph" style={{ marginBottom: '0.8rem' }}>
                            <CopyEmail email="zezhou_wang@berkeley.edu" />
                        </p>

                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '1rem',
                                flexWrap: 'wrap',
                            }}
                        >
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ marginBottom: '-0.5rem' }}><FaLinkedin /> LinkedIn:</p>
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
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <p style={{ marginBottom: '-0.5rem' }}><FaGithub /> GitHub:</p>
                                <p className="paragraph" style={{ marginBottom: '1rem' }}>
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
                        </div>
                    </div>
                </div>

                {/* Buddy Box Section (Using Flexbox) */}
                <div className="buddy-box-section" style={{ textAlign: 'center', marginTop: '1rem' }}>
                    <p style={{ marginBottom: '0.5rem' }}><FaUser /> Buddy Box:</p>
                    <div // <<<< THIS is the Flex Container
                        style={{
                            // Flexbox layout properties:
                            display: 'flex',      // Use Flexbox
                            flexWrap: 'wrap',     // Allow items to wrap to the next line
                            justifyContent: 'center', // Center items horizontally on each line
                            gap: '0.2rem',          // Space between items
                            padding: '1rem',        // Padding inside the container

                            // Container sizing and centering (keep these):
                            maxWidth: '90%',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    >
                        {/* Flex Items (Direct Children) - REMOVED inline-block style */}
                        <a href="https://joewang.me" target="_blank" rel="noopener noreferrer">
                            {/* Use your actual paths */}
                            <Image src="/buddy/button.png" alt="Joe" width={88} height={31} style={{ display: 'block' }} />
                        </a>
                        <a href="https://ocf.berkeley.edu" target="_blank" rel="noopener noreferrer">
                            <Image src="/buddy/ocf.png" alt="OCF" width={88} height={31} style={{ display: 'block' }} />
                        </a>
                        <a href="https://jaysa.net" target="_blank" rel="noopener noreferrer">
                            <Image src="/buddy/jaysa.jpg" alt="Jaysa" width={88} height={31} style={{ display: 'block' }} />
                        </a>

                        {/* Add more friends here - they will wrap */}

                    </div>
                </div>
                {/* End of Buddy Box Section */}
            </main >
        </div >
    );
}
