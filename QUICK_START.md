# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: View Your Blog Locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser. You'll see:
- 10 sample blog posts
- Dark mode toggle
- Beautiful Quanta-inspired design

### Step 2: Write Your First Post

1. Copy the template:
```bash
cp content/posts/template.md content/posts/my-first-post.md
```

2. Edit the front matter:
```yaml
---
title: "My First Post"
date: "2025-12-30"
excerpt: "This is my first blog post!"
author: "Your Name"
tags: ["intro"]
---
```

3. Write your content in Markdown below the `---`

4. Refresh your browser - your post appears!

### Step 3: Deploy to GitHub Pages

1. **Create a GitHub repository** (if you haven't already)

2. **Update the base path** in `next.config.ts` (if your repo is not `<username>.github.io`):
```typescript
basePath: '/your-repo-name',  // Uncomment this line
```

3. **Push to GitHub**:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

4. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: **GitHub Actions**
   - Wait 2-3 minutes for deployment

5. **Visit your site**:
   - `https://<username>.github.io/` (if repo is `<username>.github.io`)
   - `https://<username>.github.io/<repo-name>/` (otherwise)

## 📝 Writing Tips

### Front Matter (Required)
Every post needs this at the top:
```yaml
---
title: "Your Title"
date: "2025-12-30"
excerpt: "Brief description"
author: "Your Name"
tags: ["tag1", "tag2"]
coverImage: "/images/cover.jpg"  # Optional
---
```

### Markdown Features
See `content/posts/template.md` for examples of:
- Headers, lists, tables
- Code blocks with syntax highlighting
- Images and links
- Blockquotes
- And more!

### Adding Images
1. Put images in `public/images/`
2. Reference: `![Alt text](/images/your-image.jpg)`

## 🎨 Customization

### Change Site Title
Edit `components/Header.tsx`:
```typescript
<Logo href="/">Your Blog Name</Logo>
```

### Change Colors
Edit `styles/theme.ts`:
```typescript
export const lightTheme = {
  colors: {
    accent: '#2563eb',  // Change this!
    // ... more colors
  }
};
```

### Change Metadata
Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Blog Title",
  description: "Your description",
};
```

## 🔧 Common Commands

```bash
npm run dev      # Development server
npm run build    # Build for production
npm run start    # Preview production build
npm run lint     # Check for errors
```

## 📚 Sample Content

Your blog comes with 10 sample articles:
1. Quantum Computing Breakthrough
2. Design Systems at Scale
3. Mathematics of Machine Learning
4. Future of Web Development
5. Philosophy of Debugging
6. Neural Architecture Search
7. Art of API Design
8. Climate Data Visualization
9. Functional Programming Patterns
10. Evolution of Programming Languages

**Delete them** when you're ready to add your own content!

## 🐛 Troubleshooting

### Build fails?
- Check front matter is valid YAML
- Ensure dates are YYYY-MM-DD format
- Verify all images exist in `public/images/`

### Dark mode not working?
- Clear browser cache
- Check localStorage is enabled

### Posts not showing?
- Restart dev server: `npm run dev`
- Check file is in `content/posts/`
- Ensure file ends with `.md`

## 📖 Full Documentation

See `README.md` for complete documentation.

---

**Happy blogging! 🎉**

Questions? Check the template file or README for more examples.

