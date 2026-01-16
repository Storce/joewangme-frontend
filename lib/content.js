import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getAboutPageData() {
    try {
        const fullPath = path.join(contentDirectory, 'about.md');
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        
        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
            .use(html)
            .process(matterResult.content);
        
        const contentHtml = processedContent.toString();
        
        return {
            contentHtml,
            ...matterResult.data
        };
    } catch (error) {
        console.error('Error reading about page content:', error);
        return {
            contentHtml: '<p>Content not available</p>',
            title: 'About Me',
            description: 'Learn more about Joe Wang'
        };
    }
}