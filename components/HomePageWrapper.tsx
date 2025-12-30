'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import HomePage from './HomePage';
import { PostMetadata, type Section } from '@/lib/posts';

interface HomePageWrapperProps {
  allPosts: PostMetadata[];
  sciencePosts: PostMetadata[];
  lifePosts: PostMetadata[];
  poetryPosts: PostMetadata[];
}

export default function HomePageWrapper({
  allPosts,
  sciencePosts,
  lifePosts,
  poetryPosts,
}: HomePageWrapperProps) {
  const searchParams = useSearchParams();
  const section = (searchParams.get('section') || 'all') as Section;
  
  const posts = 
    section === 'science' ? sciencePosts :
    section === 'life' ? lifePosts :
    section === 'poetry' ? poetryPosts :
    allPosts;
  
  return <HomePage posts={posts} section={section} />;
}

