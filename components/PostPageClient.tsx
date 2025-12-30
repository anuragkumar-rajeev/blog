'use client';

import React from 'react';
import styled from 'styled-components';
import { Post } from '@/lib/posts';

const Article = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  }
`;

const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: ${({ theme }) => theme.lineHeights.tight};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Tags = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  flex-wrap: wrap;
`;

const Tag = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.accent}20;
  padding: 6px 14px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
`;

const CoverImage = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.accent}20,
    ${({ theme }) => theme.colors.accent}40
  );
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.text};

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-weight: 700;
    margin-top: ${({ theme }) => theme.spacing.xl};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text};
  }

  h1 { font-size: ${({ theme }) => theme.fontSizes['3xl']}; }
  h2 { font-size: ${({ theme }) => theme.fontSizes['2xl']}; }
  h3 { font-size: ${({ theme }) => theme.fontSizes.xl}; }
  h4 { font-size: ${({ theme }) => theme.fontSizes.lg}; }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: underline;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.accentHover};
    }
  }

  ul, ol {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    padding-left: ${({ theme }) => theme.spacing.lg};
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  blockquote {
    border-left: 4px solid ${({ theme }) => theme.colors.accent};
    padding-left: ${({ theme }) => theme.spacing.lg};
    margin: ${({ theme }) => theme.spacing.xl} 0;
    font-style: italic;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  code {
    font-family: ${({ theme }) => theme.fonts.mono};
    background-color: ${({ theme }) => theme.colors.code};
    color: ${({ theme }) => theme.colors.codeText};
    padding: 2px 6px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-size: 0.9em;
  }

  pre {
    background-color: ${({ theme }) => theme.colors.code};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: ${({ theme }) => theme.spacing.lg};
    overflow-x: auto;
    margin: ${({ theme }) => theme.spacing.xl} 0;

    code {
      background: none;
      padding: 0;
      color: ${({ theme }) => theme.colors.text};
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    margin: ${({ theme }) => theme.spacing.xl} 0;
  }

  hr {
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    margin: ${({ theme }) => theme.spacing['2xl']} 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: ${({ theme }) => theme.spacing.xl} 0;
  }

  th, td {
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: ${({ theme }) => theme.spacing.sm};
    text-align: left;
  }

  th {
    background-color: ${({ theme }) => theme.colors.surface};
    font-weight: 600;
  }
`;

interface PostPageClientProps {
  post: Post;
  contentHtml: string;
}

export default function PostPageClient({ post, contentHtml }: PostPageClientProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Article>
      <Header>
        <Title>{post.title}</Title>
        <Meta>
          <MetaItem>{post.author}</MetaItem>
          <MetaItem>•</MetaItem>
          <MetaItem>{formattedDate}</MetaItem>
          <MetaItem>•</MetaItem>
          <MetaItem>{post.readTime}</MetaItem>
        </Meta>
        {post.tags && post.tags.length > 0 && (
          <Tags>
            {post.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
        )}
      </Header>
      {post.coverImage && (
        <CoverImage>
          <img src={post.coverImage} alt={post.title} />
        </CoverImage>
      )}
      <Content dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </Article>
  );
}

