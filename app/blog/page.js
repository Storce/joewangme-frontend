import { getSortedPostsData } from '../../lib/blogs';
import Link from 'next/link';

export default async function BlogPage() {
    const allPostsData = getSortedPostsData();

    return (
        <main className="mainContainer">
            <div className="paragraph">
                <h1 className="heading1" style={{ marginBottom: '1rem' }}>Blogs</h1>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {allPostsData.map(({ id, title, date }) => (
                        <li key={id} style={{ marginBottom: '1.5rem' }}>
                            <Link href={`/blog/${id}`} className="blog-title-link">
                                {title}
                            </Link>
                            <br />
                            <small style={{ color: 'gray' }}>{new Date(date).toLocaleDateString()}</small>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
