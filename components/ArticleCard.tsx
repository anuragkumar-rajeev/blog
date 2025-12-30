'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { PostMetadata } from '@/lib/posts';
import { type SectionTheme } from '@/styles/sectionThemes';

const Card = styled(Link)<{ $accentColor: string }>`
  display: block;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.base};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px ${({ theme }) => theme.colors.shadowMedium};
    border-color: ${({ $accentColor }) => $accentColor};
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.accent}20,
    ${({ theme }) => theme.colors.accent}40
  );
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.slow};
  }

  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 700;
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const Tags = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
`;

const Tag = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.accent}20;
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
`;

const SectionBadge = styled.span<{ $section: string }>`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme, $section }) => 
    $section === 'science' ? '#2563eb' :
    $section === 'life' ? '#059669' :
    '#9333ea'
  };
  background-color: ${({ theme, $section }) => 
    $section === 'science' ? '#2563eb20' :
    $section === 'life' ? '#05966920' :
    '#9333ea20'
  };
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  text-transform: capitalize;
  letter-spacing: 0.5px;
  font-weight: 600;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: ${({ theme }) => theme.lineHeights.tight};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const Excerpt = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textTertiary};
  padding-top: ${({ theme }) => theme.spacing.sm};
  border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

interface ArticleCardProps {
  post: PostMetadata;
  sectionTheme?: SectionTheme;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ post, sectionTheme }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const accentColor = sectionTheme?.accent || '#2563eb';

  return (
    <Card href={`/posts/${post.slug}`} $accentColor={accentColor}>
      <ImageContainer>
        {post.coverImage ? (
          <img src={post.coverImage} alt={post.title} />
        ) : (
          <Placeholder>{post.title.charAt(0)}</Placeholder>
        )}
      </ImageContainer>
      <Content>
        <Tags>
          <SectionBadge $section={post.section}>{post.section}</SectionBadge>
          {post.tags && post.tags.slice(0, 2).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <Title>{post.title}</Title>
        <Excerpt>{post.excerpt}</Excerpt>
        <Meta>
          <MetaItem>{post.author}</MetaItem>
          <MetaItem>•</MetaItem>
          <MetaItem>{formattedDate}</MetaItem>
          <MetaItem>•</MetaItem>
          <MetaItem>{post.readTime}</MetaItem>
        </Meta>
      </Content>
    </Card>
  );
};

export default ArticleCard;

