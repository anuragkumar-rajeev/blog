import { getAllPosts } from '@/lib/posts';
import HomePageWrapper from '@/components/HomePageWrapper';

export const dynamic = 'force-static';

export default function Page() {
  const allPosts = getAllPosts('all');
  const sciencePosts = getAllPosts('science');
  const lifePosts = getAllPosts('life');
  const poetryPosts = getAllPosts('poetry');
  
  return (
    <HomePageWrapper
      allPosts={allPosts}
      sciencePosts={sciencePosts}
      lifePosts={lifePosts}
      poetryPosts={poetryPosts}
    />
  );
}
