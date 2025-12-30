'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import styled from 'styled-components';
import { useTheme } from './ThemeProvider';
import { getSectionTheme, type SectionType } from '@/styles/sectionThemes';
import { type Section } from '@/lib/posts';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.transitions.base};
  backdrop-filter: blur(10px);
  background-color: ${({ theme }) => theme.colors.background}f0;
`;

const HeaderContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md};
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const RightButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
`;

const AboutButton = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.surface};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  transition: all ${({ theme }) => theme.transitions.fast};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const TabsContainer = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const Tab = styled(Link)<{ $active: boolean; $accentColor: string }>`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme, $active, $accentColor }) => 
    $active ? $accentColor : theme.colors.textTertiary
  };
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.xs} 0;
  border-bottom: 2px solid ${({ $active, $accentColor }) => 
    $active ? $accentColor : 'transparent'
  };
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ $accentColor }) => $accentColor};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const section = (searchParams.get('section') || 'all') as Section;
  
  const isHome = pathname === '/';
  
  // Get colors for each section
  const allTheme = getSectionTheme('all', isDark);
  const scienceTheme = getSectionTheme('science', isDark);
  const lifeTheme = getSectionTheme('life', isDark);
  const poetryTheme = getSectionTheme('poetry', isDark);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <TopRow>
          <Logo href="/">Fibres of my Being</Logo>
          <RightButtons>
            <AboutButton href="/about">About</AboutButton>
            <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
              {isDark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </ThemeToggle>
          </RightButtons>
        </TopRow>
        
        {isHome && (
          <TabsContainer>
            <Tab 
              href="/?section=all" 
              $active={section === 'all'}
              $accentColor={allTheme.accent}
            >
              All
            </Tab>
            <Tab 
              href="/?section=science" 
              $active={section === 'science'}
              $accentColor={scienceTheme.accent}
            >
              Science
            </Tab>
            <Tab 
              href="/?section=life" 
              $active={section === 'life'}
              $accentColor={lifeTheme.accent}
            >
              Life
            </Tab>
            <Tab 
              href="/?section=poetry" 
              $active={section === 'poetry'}
              $accentColor={poetryTheme.accent}
            >
              Poetry
            </Tab>
          </TabsContainer>
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
