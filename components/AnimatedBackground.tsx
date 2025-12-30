'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { type Section } from '@/lib/posts';
import { getSectionTheme, type SectionType } from '@/styles/sectionThemes';
import { useTheme } from './ThemeProvider';

const float1 = keyframes`
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(120deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(240deg);
  }
`;

const float2 = keyframes`
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(-40px, 40px) rotate(-120deg);
  }
  66% {
    transform: translate(20px, -20px) rotate(-240deg);
  }
`;

const float3 = keyframes`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(15px, 15px) scale(1.1);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
`;

const colorShift = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  33% {
    filter: hue-rotate(120deg);
  }
  66% {
    filter: hue-rotate(240deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
`;

const BackgroundContainer = styled.div<{ $isAll: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
  transition: all 1s ease-in-out;
  
  ${({ $isAll }) => $isAll && css`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(255, 255, 255, 0.03) 2px,
          rgba(255, 255, 255, 0.03) 4px
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 2px,
          rgba(255, 255, 255, 0.03) 2px,
          rgba(255, 255, 255, 0.03) 4px
        );
      opacity: 0.5;
      pointer-events: none;
      z-index: 3;
    }
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
      opacity: 0.15;
      pointer-events: none;
      z-index: 4;
      mix-blend-mode: overlay;
    }
  `}
`;

const Orb = styled.div<{ $color: string; $size: number; $x: number; $y: number; $animation: string; $delay: number; $isAll: boolean; $index: number }>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  left: ${({ $x }) => $x}%;
  top: ${({ $y }) => $y}%;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, ${({ $color }) => $color}40, ${({ $color }) => $color}10);
  filter: blur(40px);
  opacity: 0.4;
  
  ${({ $animation, $delay, $isAll, $index }) => {
    const baseAnimation = $animation === 'float1' ? float1 : $animation === 'float2' ? float2 : float3;
    const duration = 20 + $delay;
    
    if ($isAll) {
      return css`
        animation: ${baseAnimation} ${duration}s ease-in-out infinite,
                   ${colorShift} ${30 + $index * 5}s linear infinite;
        animation-delay: ${$delay}s, 0s;
      `;
    } else {
      return css`
        animation: ${baseAnimation} ${duration}s ease-in-out infinite;
        animation-delay: ${$delay}s;
      `;
    }
  }}
`;

const GradientOverlay = styled.div<{ $gradient1: string; $gradient2: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at top left,
    ${({ $gradient1 }) => $gradient1},
    transparent 50%
  ),
  radial-gradient(
    ellipse at bottom right,
    ${({ $gradient2 }) => $gradient2},
    transparent 50%
  );
  animation: ${pulse} 8s ease-in-out infinite;
`;

interface AnimatedBackgroundProps {
  section: Section;
}

export default function AnimatedBackground({ section }: AnimatedBackgroundProps) {
  const { isDark } = useTheme();
  const sectionTheme = getSectionTheme(section as SectionType, isDark);
  const isAll = section === 'all';

  // For "All" section, use multiple colors
  const allColors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];
  
  const orbs = [
    { size: 400, x: 10, y: 20, animation: 'float1', delay: 0 },
    { size: 350, x: 70, y: 60, animation: 'float2', delay: 2 },
    { size: 300, x: 40, y: 80, animation: 'float3', delay: 4 },
    { size: 450, x: 80, y: 10, animation: 'float1', delay: 6 },
    { size: 320, x: 20, y: 50, animation: 'float2', delay: 8 },
  ];

  return (
    <BackgroundContainer $isAll={isAll}>
      <GradientOverlay 
        $gradient1={sectionTheme.gradient1} 
        $gradient2={sectionTheme.gradient2}
      />
      {orbs.map((orb, index) => (
        <Orb
          key={index}
          $color={isAll ? allColors[index % allColors.length] : sectionTheme.accent}
          $size={orb.size}
          $x={orb.x}
          $y={orb.y}
          $animation={orb.animation}
          $delay={orb.delay}
          $isAll={isAll}
          $index={index}
        />
      ))}
    </BackgroundContainer>
  );
}

