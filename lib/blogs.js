import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'blogs');

export function getSortedPostsData() {
    try {
        // Get file names under /blogs
        const fileNames = fs.readdirSync(postsDirectory);
        const allPostsData = fileNames
            .filter((fileName) => fileName.endsWith('.md'))
            .map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        const serializedData = Object.fromEntries(
            Object.entries(matterResult.data).map(([key, value]) => [
                key,
                key === 'date' ? new Date(value).toISOString() :
                    typeof value === 'object' ? JSON.stringify(value) : value,
            ])
        );

        return {
            id,
            ...serializedData,
        };
    });
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if (isNaN(dateA) && isNaN(dateB)) {
            return 0; // Both dates are invalid
        } else if (isNaN(dateA)) {
            return 1; // Only a.date is invalid
        } else if (isNaN(dateB)) {
            return -1; // Only b.date is invalid
        }

        return dateB - dateA; // Sort descending by valid dates
    });
    } catch (error) {
        console.warn('Blogs directory not found or error reading blogs:', error);
        return [];
    }
}

export async function getPostData(id) {
    try {
        const fullPath = path.join(postsDirectory, `${id}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        return {
            id,
            content: matterResult.content,
            ...matterResult.data,
        };
    } catch (error) {
        console.error('Error reading blog post:', error);
        return null;
    }
}

export function getAllPostIds() {
    try {
        const fileNames = fs.readdirSync(postsDirectory);
        return fileNames
            .filter((fileName) => fileName.endsWith('.md'))
            .map((fileName) => ({
                params: {
                    id: fileName.replace(/\.md$/, ''),
                },
            }));
    } catch (error) {
        console.warn('Error reading blog directory:', error);
        return [];
    }
}