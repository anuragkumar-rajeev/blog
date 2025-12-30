import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export type Section = 'science' | 'life' | 'poetry' | 'all';

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  coverImage?: string;
  tags?: string[];
  readTime?: string;
  section: Section;
}

export interface Post extends PostMetadata {
  content: string;
}

function getPostsFromDirectory(dir: string, section: Section): PostMetadata[] {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const fileNames = fs.readdirSync(dir);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md') && fileName !== 'template.md')
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(dir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      // Calculate read time (rough estimate: 200 words per minute)
      const wordCount = content.split(/\s+/).length;
      const readTime = Math.ceil(wordCount / 200);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        author: data.author || 'Anonymous',
        coverImage: data.coverImage,
        tags: data.tags || [],
        readTime: `${readTime} min read`,
        section,
      } as PostMetadata;
    });
}

export function getAllPosts(section: Section = 'all'): PostMetadata[] {
  let allPosts: PostMetadata[] = [];

  if (section === 'all' || section === 'science') {
    const scienceDir = path.join(postsDirectory, 'science');
    allPosts = [...allPosts, ...getPostsFromDirectory(scienceDir, 'science')];
  }

  if (section === 'all' || section === 'life') {
    const lifeDir = path.join(postsDirectory, 'life');
    allPosts = [...allPosts, ...getPostsFromDirectory(lifeDir, 'life')];
  }

  if (section === 'all' || section === 'poetry') {
    const poetryDir = path.join(postsDirectory, 'poetry');
    allPosts = [...allPosts, ...getPostsFromDirectory(poetryDir, 'poetry')];
  }

  // Sort posts by date (newest first)
  return allPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string, section?: Section): Post | null {
  const sections: Section[] = section ? [section] : ['science', 'life', 'poetry'];
  
  for (const sec of sections) {
    try {
      const fullPath = path.join(postsDirectory, sec, `${slug}.md`);
      if (!fs.existsSync(fullPath)) continue;
      
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      // Calculate read time
      const wordCount = content.split(/\s+/).length;
      const readTime = Math.ceil(wordCount / 200);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        author: data.author || 'Anonymous',
        coverImage: data.coverImage,
        tags: data.tags || [],
        readTime: `${readTime} min read`,
        section: sec,
        content,
      };
    } catch (error) {
      continue;
    }
  }
  
  return null;
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html, { sanitize: false }).process(markdown);
  return result.toString();
}

export function getAllPostSlugs(): string[] {
  const slugs: string[] = [];
  const sections: Section[] = ['science', 'life', 'poetry'];

  for (const section of sections) {
    const dir = path.join(postsDirectory, section);
    if (!fs.existsSync(dir)) continue;

    const fileNames = fs.readdirSync(dir);
    const sectionSlugs = fileNames
      .filter((fileName) => fileName.endsWith('.md') && fileName !== 'template.md')
      .map((fileName) => fileName.replace(/\.md$/, ''));
    
    slugs.push(...sectionSlugs);
  }

  return slugs;
}
