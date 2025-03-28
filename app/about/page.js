'use client';
import myImage from '../../public/me-about.jpg'; // Import the image

export default function About() {
    return (
        <main style={{ textAlign: 'center' }}>
            <div className="paragraph"> {/* Limit the width of the text box and justify text */}
                <h1 className="heading1" style={{ marginBottom: '0.5rem' }}>About Me</h1> {/* Apply heading1 class */}
                <p className="paragraph" style={{ marginBottom: '1rem' }}>
                    I am a Computer Science student currently residing in the U.S., Berkeley, CA. I&apos;ve also lived in Shanghai (China) and São Paulo (Brazil) at different moments of my life. I speak fluent Portuguese, Mandarin, English, some intermediate Spanish, and Shanghainese.
                </p>
                <p className="paragraph" style={{ marginBottom: '1rem' }}>
                    I am really into <b>Linux</b> and <b>computer systems and infrastructure</b>. I run my own homelab and teach a class on system administration. I also really like mathematics and have competed in olympiads at national levels. Some cool classes I&apos;ve enjoyed at Berkeley are EE120 Signal Processing, and EE122 Communication Networks.
                </p>
                <p className="paragraph" style={{ marginBottom: '1rem' }}>
                    I do a lot of things for the{' '}
                    <a
                        href="https://ocf.io"  // Replace with the actual URL
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#007BFF', textDecoration: 'none' }} // Optional: Customize link appearance
                    >
                        Open Computing Facility
                    </a>{' '}
                    ({''}
                    <a
                        href="https://ocf.io/github"  // Replace with the actual URL
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#007BFF', textDecoration: 'none' }} // Optional: Customize link appearance
                    >
                        Github
                    </a>
                    ), where I spend an unhealthy amount of time. As of January 2024, I serve as the Co-General Manager, contributing both technically and administratively.
                </p>

                <p className="paragraph" style={{ marginBottom: '1rem' }}>
                    In my spare time, I enjoy games like <a
                        href="https://en.wikipedia.org/wiki/Stellaris_(video_game)"  // Replace with the actual URL
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#007BFF', textDecoration: 'none' }} // Optional: Customize link appearance
                    > Stellaris</a>,
                    <a
                        href="https://starcraft2.blizzard.com/en-us/"  // Replace with the actual URL
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#007BFF', textDecoration: 'none' }} // Optional: Customize link appearance
                    > StarCraft II</a>, and
                    <a
                        href="https://terraria.org/"  // Replace with the actual URL
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#007BFF', textDecoration: 'none' }} // Optional: Customize link appearance
                    > Terraria</a>.
                    I also love tennis, piano and cooking.
                </p>
                <div style={{ padding: '1rem' }}>
                    <img src={myImage} alt="Joe Wang" style={{ width: '300px', height: 'auto' }} /> {/* Made the image smaller */}
                </div>
            </div>
        </main>
    );
}

