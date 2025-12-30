'use client';

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: ${({ theme }) => theme.lineHeights.tight};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const Content = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.text};

  p {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: 700;
    margin-top: ${({ theme }) => theme.spacing['2xl']};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: 600;
    margin-top: ${({ theme }) => theme.spacing.xl};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  ul {
    list-style: disc;
    padding-left: ${({ theme }) => theme.spacing.xl};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: underline;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.accentHover};
    }
  }

  blockquote {
    border-left: 4px solid ${({ theme }) => theme.colors.accent};
    padding-left: ${({ theme }) => theme.spacing.lg};
    margin: ${({ theme }) => theme.spacing.xl} 0;
    font-style: italic;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export default function AboutPageClient() {
  return (
    <Container>
      <Title>About Me</Title>
      <Content>
        <p>
          Welcome to <strong>Fibres of my Being</strong> — a space where threads of thought 
          weave through science, life, and poetry.
        </p>

        <h2>The Three Fibres</h2>
        
        <h3>🔬 Science</h3>
        <p>
          The analytical fibre. Here I explore the patterns of the universe — from quantum 
          mechanics to machine learning, from climate systems to mathematical beauty. 
          Science is the lens through which we understand the fundamental structures of reality.
        </p>

        <h3>🌱 Life</h3>
        <p>
          The practical fibre. Reflections on craft and creation — design systems, 
          programming paradigms, API architecture, and the art of building things that work. 
          This is where theory meets practice, where ideas become tangible.
        </p>

        <h3>📜 Poetry</h3>
        <p>
          The philosophical fibre. Contemplative essays that examine the deeper questions — 
          the philosophy of debugging, the evolution of ideas, the meditation in code. 
          Here, technical practice becomes a form of wisdom.
        </p>

        <h2>Why "Fibres of my Being"?</h2>
        <p>
          We are not single threads but woven tapestries. The scientist in me cannot be 
          separated from the builder, nor the builder from the philosopher. Each fibre 
          strengthens the others, creating something more resilient and beautiful than 
          any single strand could be.
        </p>

        <blockquote>
          "The whole is greater than the sum of its parts."
        </blockquote>

        <h2>What You'll Find Here</h2>
        <ul>
          <li><strong>Deep dives</strong> into technical topics with clarity and context</li>
          <li><strong>Practical insights</strong> from building real systems</li>
          <li><strong>Philosophical reflections</strong> on the nature of creation and understanding</li>
          <li><strong>Connections</strong> between seemingly disparate fields</li>
        </ul>

        <h2>Get in Touch</h2>
        <p>
          I'd love to hear from you. Whether you want to discuss an article, share your 
          own insights, or just say hello, feel free to reach out.
        </p>
        <p>
          <em>Email: your.email@example.com</em><br />
          <em>Twitter/X: @yourhandle</em><br />
          <em>GitHub: github.com/yourhandle</em>
        </p>

        <p style={{ marginTop: '3rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
          Thank you for reading. May you find threads worth following.
        </p>
      </Content>
    </Container>
  );
}

