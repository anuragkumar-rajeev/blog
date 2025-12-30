# Fibres of my Being

A beautiful blog organized into three sections—Science, Life, and Poetry. Built with Next.js, TypeScript, and styled-components. Write in Markdown, push to GitHub, and deploy automatically to GitHub Pages.

## Features

- 🎨 **Beautiful Design** - Inspired by Quanta Magazine's clean, elegant aesthetic
- 📑 **Three Sections** - Science, Life, and Poetry with tab navigation
- 🌓 **Dark Mode** - Smooth theme switching with persistent preferences
- 📝 **Markdown Support** - Write posts in Markdown with full syntax support
- 🎯 **Type-Safe** - Built with TypeScript for reliability
- 💅 **Styled Components** - CSS-in-JS with theme support
- 🚀 **Static Export** - Fast, SEO-friendly static site generation
- 📱 **Responsive** - Looks great on all devices
- 🔄 **Auto Deploy** - GitHub Actions automatically deploys to GitHub Pages

## Quick Start

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd anurag
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your blog.

### 3. Write Your First Post

Create a new Markdown file in one of the section directories:

**For Science posts:** `content/posts/science/my-post.md`  
**For Life posts:** `content/posts/life/my-post.md`  
**For Poetry posts:** `content/posts/poetry/my-post.md`

```markdown
---
title: "My First Post"
date: "2025-12-30"
excerpt: "This is my first blog post!"
author: "Your Name"
tags: ["intro", "blog"]
---

# My First Post

Welcome to my blog!
```

## Project Structure

```
/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Homepage (server component)
│   └── posts/[slug]/      # Dynamic blog post pages
├── components/            # React components
│   ├── Header.tsx         # Navigation with tabs and dark mode
│   ├── ArticleCard.tsx    # Article preview cards with section badges
│   ├── HomePage.tsx       # Homepage content
│   ├── HomePageWrapper.tsx # Client wrapper for section filtering
│   └── ...
├── content/posts/         # Your blog posts (Markdown)
│   ├── science/          # Science articles
│   ├── life/             # Life/practical articles
│   ├── poetry/           # Philosophical/reflective articles
│   └── template.md       # Reference for all Markdown features
├── lib/
│   └── posts.ts          # Markdown parsing with section support
├── styles/
│   └── theme.ts          # Theme colors and typography
└── public/images/        # Article images
```

## The Three Sections

### 🔬 Science
Exploring the patterns of the universe—quantum computing, mathematics, climate science, and more.

### 🌱 Life
Reflections on craft and practice—design systems, web development, API design, programming patterns.

### 📜 Poetry
The philosophical threads—debugging as meditation, the evolution of ideas, reflective essays.

## Writing Posts

### Front Matter

Every post needs front matter at the top:

```yaml
---
title: "Your Post Title"           # Required
date: "2025-12-30"                 # Required (YYYY-MM-DD)
excerpt: "Brief description"       # Required
author: "Your Name"                # Required
coverImage: "/images/cover.jpg"   # Optional
tags: ["tag1", "tag2"]            # Optional
---
```

### Choosing a Section

Place your markdown file in the appropriate directory:
- `content/posts/science/` - Scientific explorations
- `content/posts/life/` - Practical reflections
- `content/posts/poetry/` - Philosophical musings

### Markdown Features

See `content/posts/template.md` for a comprehensive guide including:

- Headers (H1-H6)
- Text formatting (bold, italic, code)
- Lists (ordered, unordered, nested)
- Links and images
- Code blocks with syntax highlighting
- Blockquotes
- Tables
- And more!

## Customization

### Theme Colors

Edit `styles/theme.ts` to customize colors:

```typescript
export const lightTheme = {
  colors: {
    background: '#ffffff',
    text: '#212529',
    accent: '#2563eb',
    // ... more colors
  }
};
```

### Site Title

The site is named "Fibres of my Being". To change it, edit `components/Header.tsx`:

```typescript
<Logo href="/">Your Blog Name</Logo>
```

### Section Subtitles

Edit `components/HomePage.tsx` to customize section descriptions:

```typescript
const sectionSubtitles: Record<Section, string> = {
  all: 'Your custom subtitle',
  science: 'Your science subtitle',
  life: 'Your life subtitle',
  poetry: 'Your poetry subtitle',
};
```

### Metadata

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Blog Title",
  description: "Your blog description",
};
```

## Deployment to GitHub Pages

### 1. Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Under "Build and deployment":
   - Source: GitHub Actions

### 2. Update Base Path (if needed)

If your repo is not named `<username>.github.io`, update `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/your-repo-name',  // Uncomment and update this
  images: { unoptimized: true },
};
```

### 3. Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

GitHub Actions will automatically build and deploy your site!

### 4. Access Your Site

Your blog will be available at:
- `https://<username>.github.io/` (if repo is named `<username>.github.io`)
- `https://<username>.github.io/<repo-name>/` (otherwise)

## Navigation

### Header Layout

The header features a clean, minimalist design:

- **Top Row**: Site title on the left, About button and theme toggle on the right
- **Bottom Row** (homepage only): Section tabs in centered, uppercase sans-serif

### Section Tabs

The blog features tab navigation below the site title:

- **ALL** - Shows all posts from all sections
- **SCIENCE** - Shows only science posts
- **LIFE** - Shows only life posts
- **POETRY** - Shows only poetry posts

Active tabs are highlighted with an underline accent. Each article card displays a colored badge indicating its section.

### About Page

Visit `/about` to learn more about the blog's philosophy and the three sections (Science, Life, Poetry).

## Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding Images

1. Place images in `public/images/`
2. Reference in Markdown: `![Alt text](/images/your-image.jpg)`
3. Or in front matter: `coverImage: "/images/cover.jpg"`

## Current Content

The blog comes with 10 sample articles:

**Science (4 posts):**
- Quantum Computing Breakthrough
- Mathematics of Machine Learning
- Neural Architecture Search
- Climate Data Visualization

**Life (4 posts):**
- Design Systems at Scale
- Future of Web Development
- Art of API Design
- Functional Programming Patterns

**Poetry (2 posts):**
- Philosophy of Debugging
- Evolution of Programming Languages

Delete these when you're ready to add your own content!

## Tech Stack

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type safety
- **styled-components** - CSS-in-JS with theming
- **gray-matter** - Parse Markdown front matter
- **remark** - Markdown to HTML conversion
- **GitHub Actions** - Automated deployment

## Tips

1. **Use the template** - Copy `content/posts/template.md` as a starting point
2. **Choose the right section** - Think about where your post fits best
3. **Preview locally** - Always run `npm run dev` to preview before pushing
4. **Optimize images** - Compress images before adding to `public/images/`
5. **Write good excerpts** - They appear on the homepage cards
6. **Use tags** - Help organize and categorize your posts

## Troubleshooting

### Build fails on GitHub Actions

- Check that all front matter is valid YAML
- Ensure dates are in YYYY-MM-DD format
- Verify all referenced images exist
- Make sure posts are in the correct section directories

### Dark mode not persisting

- Check browser's localStorage is enabled
- Clear cache and reload

### Tabs not working

- Ensure JavaScript is enabled
- Check browser console for errors

## License

MIT

## Credits

Design inspired by [Quanta Magazine](https://www.quantamagazine.org)

---

**Fibres of my Being** - Threads woven through science, life, and poetry 🧵
