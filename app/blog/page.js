import Link from 'next/link';
import { getSortedPostsData } from '../../lib/blogs';

export default function Blog() {
    const posts = getSortedPostsData();

    return (
        <div
            style={{
                backgroundImage: 'url("/background.png")',
                display: 'grid',
                placeItems: 'center',
                backgroundSize: 'cover',
                minHeight: '100vh',
            }}
        >
            <main className="main-container">
                <h1>Blog</h1>
                
                <div style={{ width: '100%' }}>
                    {posts.length === 0 ? (
                        <p className="centered-paragraph">Joe has been lazy, check back sometime!</p>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {posts.map((post) => (
                                <article
                                    key={post.id}
                                    style={{
                                        border: '1px solid var(--color-accent)',
                                        borderRadius: '8px',
                                        padding: '1.5rem',
                                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    }}
                                >
                                    <h2 style={{ marginBottom: '0.5rem' }}>
                                        <Link
                                            href={`/blog/${post.id}`}
                                            style={{
                                                textDecoration: 'none',
                                                color: 'var(--color-foreground)',
                                            }}
                                        >
                                            {post.title}
                                        </Link>
                                    </h2>
                                    {post.date && (
                                        <p
                                            style={{
                                                fontSize: '0.9rem',
                                                color: 'var(--color-foreground-light)',
                                                marginBottom: '1rem',
                                            }}
                                        >
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            })}
                                        </p>
                                    )}
                                    {post.description && (
                                        <p style={{ lineHeight: '1.6' }}>{post.description}</p>
                                    )}
                                    <Link
                                        href={`/blog/${post.id}`}
                                        style={{
                                            color: 'var(--color-accent)',
                                            textDecoration: 'none',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Read more →
                                    </Link>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
