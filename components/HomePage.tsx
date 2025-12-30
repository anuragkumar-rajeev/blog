'use client';

import React from 'react';
import styled from 'styled-components';
import ArticleCard from './ArticleCard';
import AnimatedBackground from './AnimatedBackground';
import { PostMetadata, type Section } from '@/lib/posts';
import { getSectionTheme, type SectionType } from '@/styles/sectionThemes';
import { useTheme } from './ThemeProvider';

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  }
`;

const Hero = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: ${({ theme }) => theme.lineHeights.tight};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  font-style: italic;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

interface HomePageProps {
  posts: PostMetadata[];
  section: Section;
}

const sectionSubtitles: Record<Section, string> = {
  all: 'Threads woven through science, life, and poetry',
  science: 'Exploring the patterns of the universe',
  life: 'Reflections on craft and practice',
  poetry: 'The philosophical threads',
};

export default function HomePage({ posts, section }: HomePageProps) {
  const { isDark } = useTheme();
  const sectionTheme = getSectionTheme(section as SectionType, isDark);

  return (
    <>
      <AnimatedBackground section={section} />
      <Container>
        <Hero>
          <HeroTitle style={{ color: sectionTheme.accent }}>
            Fibres of my Being
          </HeroTitle>
          <HeroSubtitle>{sectionSubtitles[section]}</HeroSubtitle>
        </Hero>

        <Section id="articles">
          {posts.length > 0 ? (
            <ArticleGrid>
              {posts.map((post) => (
                <ArticleCard key={post.slug} post={post} sectionTheme={sectionTheme} />
              ))}
            </ArticleGrid>
          ) : (
            <EmptyState>
              No articles in this section yet.
            </EmptyState>
          )}
        </Section>
      </Container>
    </>
  );
}
