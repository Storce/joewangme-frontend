import { getAboutPageData } from '../../lib/content';

export async function generateMetadata() {
    const aboutData = await getAboutPageData();
    
    return {
        title: aboutData.title,
        description: aboutData.description,
    };
}

export default async function About() {
    const aboutData = await getAboutPageData();
    
    return (
        <div
            style={{
                backgroundImage: 'url("/background.png")',
                display: 'grid',
                placeItems: 'center',
                backgroundSize: 'cover',
            }}
        >
            <main className="main-container">
                <h1>
                    {aboutData.title}
                </h1>
                
                <div 
                    className="about-content"
                    dangerouslySetInnerHTML={{ __html: aboutData.contentHtml }}
                />
            </main>
        </div>
    );
}
