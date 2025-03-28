import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { getSortedPostsData } from '../../../lib/blogs';
import { remark } from 'remark';
import html from 'remark-html';

// Path to markdown files
const postsDirectory = path.join(process.cwd(), 'blogs');

// Helper to get post data
async function getPostData(slug) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
        throw new Error(`Post file ${slug}.md not found`);
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Convert markdown -> HTML
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        ...matterResult.data,
        contentHtml,
    };
}

// Static params
export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map(post => ({
        slug: post.id,
    }));
}

// Post page
export default async function PostPage({ params }) {
    const { slug } = await params;
    let postData;

    try {
        postData = await getPostData(slug);
    } catch (error) {
        console.error(error);
        return <div>Post not found</div>;
    }

    return (
        <main className="mainContainer">
            <div className='paragraph-blog'>
                <h1>{postData.title}</h1>
                <p style={{ marginTop: "-1.5rem", color: 'gray' }}>{postData.date}</p>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                <p>
                    <Link
                        href="/blog"
                        style={{ color: '#27548A', textDecoration: 'none' }}>
                        ← Back to Index
                    </Link>
                </p>
            </div>
        </main>
    );
}
