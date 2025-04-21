import Image from 'next/image';

export default function About() {
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
                <div className="paragraph">
                    <h1 className="heading1" style={{ marginBottom: '0.5rem' }}>About Me</h1>
                    <p className="paragraph" style={{ marginBottom: '1rem' }}>
                        I am a Computer Science student currently residing in the U.S., Berkeley, CA. I&apos;ve also lived in Shanghai (China) and São Paulo (Brazil) at different moments of my life. I speak fluent Portuguese, Mandarin, English, some intermediate Spanish, and Shanghainese.
                    </p>
                    <p className="paragraph" style={{ marginBottom: '1rem' }}>
                        I am really into <b>Linux</b> and <b>computer systems and infrastructure</b>. I run my own homelab and teach a class on system administration. I also really like mathematics and have competed in olympiads at national levels. Some cool classes I&apos;ve enjoyed at Berkeley are EE120 Signal Processing, and EE122 Communication Networks.
                    </p>
                    <p className="paragraph" style={{ marginBottom: '1rem' }}>
                        I do a lot of things for the{' '}
                        <a
                            href="https://ocf.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#27548A', textDecoration: 'none' }}
                        >
                            Open Computing Facility
                        </a>{' '}
                        (
                        <a
                            href="https://ocf.io/github"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#27548A', textDecoration: 'none' }}
                        >
                            Github
                        </a>
                        ), where I spend an unhealthy amount of time. At the OCF, we run a powerful Linux computer cluster serving 45K students and faculty at Berkeley. As of Spring 2025, I serve as the Co-General Manager, contributing both technically and administratively.
                    </p>
                    <p className="paragraph" style={{ marginBottom: '1rem' }}>
                        In my spare time, I enjoy games like
                        <a
                            href="https://en.wikipedia.org/wiki/Stellaris_(video_game)"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#27548A', textDecoration: 'none', marginLeft: '0.3rem' }}
                        >
                            Stellaris
                        </a>,
                        <a
                            href="https://starcraft2.blizzard.com/en-us/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#27548A', textDecoration: 'none', marginLeft: '0.3rem' }}
                        >
                            StarCraft II
                        </a>, and
                        <a
                            href="https://terraria.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#27548A', textDecoration: 'none', marginLeft: '0.3rem' }}
                        >
                            Terraria
                        </a>.
                        I also love tennis, piano and cooking.
                    </p>
                    <div style={{
                        padding: '1rem',
                        border: '2px dashed rgba(24, 59, 78, 0.63)',
                        borderRadius: '8px',
                        display: 'inline-block',
                        marginBottom: '2rem',
                    }}>
                        <Image
                            src="/me-about.jpg"
                            alt="Joe Wang"
                            width={300}
                            height={400} // approximate height or adjust to match aspect ratio
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
