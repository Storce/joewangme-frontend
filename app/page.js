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
                <h1 style={{ marginBottom: '0.5rem', marginTop: '3rem' }}>Hi! I&apos;m Joe</h1>
                <h2 className="italic-subtitles" style={{ marginTop: '0rem', marginBottom: '0rem' }}>
                    I also go by Zezhou, and my username Storce.
                </h2>
                <p className="paragraph" style={{ marginBottom: '1rem', textAlign: 'center' }}>
                    I am a Computer Science undergrad at UC Berkeley.
                </p>

                <div
                    style={{
                        padding: '1rem',
                        border: '2px dashed #050524',
                        borderRadius: '8px',
                        display: 'inline-block',
                        marginBottom: '1rem',
                    }}
                >
                    <Image
                        src="./me.jpg"
                        alt="Joe Wang"
                        width={300}
                        height={300}
                        style={{ height: 'auto' }}
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

                {/* Buddy Box Section */}
                <div className="buddy-box" style={{ marginTop: '-1rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '-0.8rem' }}><FaUser /> Buddy Box:</p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <div className="buddy-box" style={{ marginTop: '-1rem', textAlign: 'center' }}>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: '0.3rem',
                                justifyItems: 'center',
                                padding: '0.5rem'

                            }}>
                                <a href="https://joewang.me" target="_blank" rel="noopener noreferrer">
                                    <Image src="./buddy/button.png" alt="Joe" width={88} height={31} />
                                </a>
                                <a href="https://ocf.berkeley.edu" target="_blank" rel="noopener noreferrer">
                                    <Image src="./buddy/ocf.png" alt="OCF" width={88} height={31} />
                                </a>
                                <a href="https://jaysa.net" target="_blank" rel="noopener noreferrer" style={{ marginBottom: '4rem', }}>
                                    <Image src="./buddy/jaysa.jpg" alt="Jaysa" width={88} height={31} />
                                </a>

                                {/* <a href="https://example-friend3.com" target="_blank" rel="noopener noreferrer">
                                    <Image src="./buddy/jaysa.jpg" alt="nyxgirl" style={{ width: '88px', height: '33px' }} />
                                </a> */}
                                {/* Add more buddies as needed */}
                            </div>
                        </div>

                        {/* Add more friends below */}
                    </ul>
                </div>
            </main>
        </div>
    );
}
