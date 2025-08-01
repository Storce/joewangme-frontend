import css from "styled-jsx/css";

export default function About() {
    return (
        <div
            style={{
                backgroundImage: 'url("/background.png")',
                display: 'grid',
                placeItems: 'center',
            }}
        >
            <main className="main-container">
                <h1>
                    About Me
                </h1>

                <p className="centered-paragraph">
                    I currently live in the San Francisco Bay Area, city of Berkeley (U.S.), where I go to college. I&apos;ve also lived in Shanghai (China) and São Paulo (Brazil) at different moments of my life. In addition to English, I speak Portuguese, Mandarin, and some intermediate Spanish.
                </p>

                <p className="centered-paragraph">
                    I like Linux and System Engineering. I've built data pipelines at
                    {' '}
                    <a
                        href="https://investors.stone.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        Stone
                    </a>
                    {' '}
                    and cloud infrastructure at
                    {' '}
                    <a
                        href="https://www.sigmacomputing.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        Sigma
                    </a>
                    . I am also a manager at the
                    {' '}
                    <a
                        href="https://ocf.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        Open Computing Facility
                    </a>
                    , where I work on various campus
                    {' '}
                    <a
                        href="https://github.com/ocf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        IT and compute services
                    </a>
                    {' '}.
                </p>

                <p className="centered-paragraph">
                    In my spare time, I really enjoy cooking, and am considering starting a food blog (coming soon?). I'm fond of all type of racket sports, like tennis, badminton, and ping pong, though I don't consider myself a pro in any of them. I also play videos games, like
                    {' '}
                    <a
                        href="https://en.wikipedia.org/wiki/Stellaris_(video_game)"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link spaced-link"
                    >
                        Stellaris
                    </a>
                    {' '} and
                    {' '}
                    <a
                        href="https://starcraft2.blizzard.com/en-us/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link spaced-link"
                    >
                        StarCraft II
                    </a>
                    .
                </p>

                <img className='portrait-image'
                    src="/me-shush.jpg"
                    alt="Joe Wang"
                />
            </main>
        </div>
    );
}
