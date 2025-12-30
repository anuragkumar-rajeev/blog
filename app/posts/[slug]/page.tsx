import { getPostBySlug, getAllPostSlugs, markdownToHtml } from '@/lib/posts';
import { notFound } from 'next/navigation';
import PostPageClient from '@/components/PostPageClient';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content);

  return <PostPageClient post={post} contentHtml={contentHtml} />;
}
