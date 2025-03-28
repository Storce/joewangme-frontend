import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'blogs');

export function getSortedPostsData() {
    // Get file names under /blogs
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
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
}