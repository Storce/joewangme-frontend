import { FaLinkedin, FaGithub, FaEnvelope, FaUser } from 'react-icons/fa';
import CopyEmail from './components/CopyEmail';

export default function Home() {
    return (
        <div
            style={{
                backgroundImage: 'url("/background.png")',
                display: 'grid',
                placeItems: 'center',
                backgroundSize: 'cover',
            }}
        >
            <main className="main-container">
                <h1>
                    Hi! I&apos;m Joe
                </h1>

                <p className="centered-paragraph"
                    style={{
                        fontStyle: 'italic',
                        fontWeight: 400,
                    }}>
                    I also go by Zezhou, and my username Storce.
                </p>

                <p className="centered-paragraph">
                    I study Computer Science at UC Berkeley.
                </p>

                <img className='portrait-image'
                    src="./me-cooking.jpg"
                    alt="Joe Wang"
                />

                <p style={{ marginBottom: '-0.5rem' }}>
                    <FaEnvelope /> Email:
                </p>
                <p className="social-link" style={{ marginBottom: '-0.5rem' }}>
                    <CopyEmail email="joewangzz1028@gmail.com" />
                </p>
                <p className="social-link">
                    <CopyEmail email="zezhou_wang@berkeley.edu" />
                </p>

                {/* Two columns for LinkedIn and GitHub */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        gap: '2rem',
                    }}
                >
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ marginBottom: '-0.7rem' }}>
                            <FaLinkedin /> LinkedIn:
                        </p>
                        <p>
                            <a
                                href="https://www.linkedin.com/in/joseph-wang-zz/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                joe-wang-zz
                            </a>
                        </p>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <p style={{ marginBottom: '-0.7rem' }}>
                            <FaGithub /> GitHub:
                        </p>
                        <p>
                            <a
                                href="https://github.com/storce"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                storce
                            </a>
                        </p>
                    </div>
                </div>

                {/* Buddy Box Section (Using Flexbox) */}
                <p style={{ marginBottom: '0.5rem' }}><FaUser /> Buddy Box:</p>
                <div className='buddy-box'>
                    <a href="https://joewang.me" target="_blank" rel="noopener noreferrer">
                        <img src="/buddy/button.png" alt="Joe Wang" />
                    </a>
                    <a href="https://ocf.berkeley.edu" target="_blank" rel="noopener noreferrer">
                        <img src="/buddy/ocf.png" alt="OCF" />
                    </a>
                    <a href="https://jaysa.net" target="_blank" rel="noopener noreferrer">
                        <img src="/buddy/jaysa.jpg" alt="Jaysa Garcia" />
                    </a>
                    <a href="https://aly.sh" target="_blank" rel="noopener noreferrer">
                        <img src="/buddy/albert.png" alt="Albert Ye" />
                    </a>
                    <a href="https://bencuan.me" target="_blank" rel="noopener noreferrer">
                        <img src="/buddy/bencuan.gif" alt="Bencuan" />
                    </a>
   	                <a href="https://kinn.dev" target="_blank" rel="noopener noreferrer">
                        <img src="/buddy/kinn.gif" alt="Kinn" />
                    </a>
                    <a href="https://sawansri.com" target="_blank" rel="noopener noreferrer">
                        <img src="/buddy/sawansri.png" alt="Sawan" />
                    </a>
	    		<a href="https://brookemao.ca" target="_blank" rel="noopener noreferrer">
                        <img src="/buddy/brooke.png" alt="Brooke" />
                    </a>
                    <a href="https://erdaifuu.com" target="_blank" rel="noopener noreferrer">
                        <img src="/buddy/carl.gif" alt="Carl" />
                    </a>
                    <a href="https://trinityjchung.com/yolkgirl/" target="_blank" rel="noopener noreferrer">
                        <img src="/buddy/trinity.gif" alt="Trinty" />
                    </a>
                    <a href="https://chenghao.li" target="_blank" rel="noopener noreferrer">
                        <img src="/buddy/chenghao.png" alt="Chenghao" />
                    </a>
                </div>
                {/* End of Buddy Box Section */}
            </main >
        </div >
    );
}
