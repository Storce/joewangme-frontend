import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostData, getAllPostIds } from '../../../lib/blogs';
import { remark } from 'remark';
import html from 'remark-html';

export async function generateStaticParams() {
    const posts = getAllPostIds();
    return posts.map((post) => ({
        id: post.params.id,
    }));
}

export async function generateMetadata({ params }) {
    const postData = await getPostData(params.id);
    
    if (!postData) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${postData.title} | Joe Wang`,
        description: postData.description || 'A blog post by Joe Wang',
    };
}

export default async function BlogPost({ params }) {
    const postData = await getPostData(params.id);
    
    if (!postData) {
        notFound();
    }

    // Process markdown content
    const processedContent = await remark()
        .use(html)
        .process(postData.content);
    const contentHtml = processedContent.toString();

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
                <Link
                    href="/blog"
                    style={{
                        color: 'var(--color-accent)',
                        textDecoration: 'none',
                        marginBottom: '2rem',
                        display: 'inline-block',
                    }}
                >
                    ← Back to Blog
                </Link>
                
                <article style={{ width: '100%' }}>
                    <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
                        <h1>{postData.title}</h1>
                        {postData.date && (
                            <p
                                style={{
                                    fontSize: '1rem',
                                    color: 'var(--color-foreground-light)',
                                    fontStyle: 'italic',
                                }}
                            >
                                {new Date(postData.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </p>
                        )}
                    </header>
                    
                    <div
                        className="about-content"
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                        style={{
                            lineHeight: '1.8',
                            fontSize: '1.1rem',
                        }}
                    />
                </article>
            </main>
        </div>
    );
}