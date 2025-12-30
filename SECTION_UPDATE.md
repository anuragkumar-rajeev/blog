# Section Update Summary

## ✅ Changes Completed

Your blog has been reorganized into three sections with tab navigation!

## 🎨 New Structure

### Blog Name
**"Fibres of my Being"** - Threads woven through science, life, and poetry

### Three Sections

#### 🔬 Science (4 posts)
*"Exploring the patterns of the universe"*
- quantum-computing-breakthrough.md
- mathematics-of-machine-learning.md
- neural-architecture-search.md
- climate-data-visualization.md

#### 🌱 Life (4 posts)
*"Reflections on craft and practice"*
- design-systems-at-scale.md
- future-of-web-development.md
- art-of-api-design.md
- functional-programming-patterns.md

#### 📜 Poetry (2 posts)
*"The philosophical threads"*
- philosophy-of-debugging.md
- evolution-of-programming-languages.md

## 🎯 New Features

### Tab Navigation
At the top of the homepage, users can switch between:
- **All** - Shows all 10 posts
- **Science** - Shows 4 science posts
- **Life** - Shows 4 life posts
- **Poetry** - Shows 2 poetry posts

### Section Badges
Each article card now displays a colored badge:
- 🔵 Blue for Science
- 🟢 Green for Life
- 🟣 Purple for Poetry

### Dynamic Filtering
The homepage dynamically filters posts based on the selected tab, with client-side navigation for instant switching.

## 📁 New Directory Structure

```
content/posts/
├── science/
│   ├── quantum-computing-breakthrough.md
│   ├── mathematics-of-machine-learning.md
│   ├── neural-architecture-search.md
│   └── climate-data-visualization.md
├── life/
│   ├── design-systems-at-scale.md
│   ├── future-of-web-development.md
│   ├── art-of-api-design.md
│   └── functional-programming-patterns.md
├── poetry/
│   ├── philosophy-of-debugging.md
│   └── evolution-of-programming-languages.md
└── template.md
```

## 🔧 Technical Changes

### Updated Files

1. **lib/posts.ts**
   - Added `Section` type: `'science' | 'life' | 'poetry' | 'all'`
   - Updated `getAllPosts()` to filter by section
   - Modified `getPostBySlug()` to search across sections
   - Added section metadata to all posts

2. **components/Header.tsx**
   - Changed site name to "Fibres of my Being"
   - Added tab navigation with 4 tabs (All, Science, Life, Poetry)
   - Tabs only show on homepage
   - Active tab highlighting

3. **components/HomePage.tsx**
   - Added section-specific titles and subtitles
   - Dynamic content based on selected section
   - Updated hero subtitle to be more poetic

4. **components/ArticleCard.tsx**
   - Added `SectionBadge` component with color coding
   - Displays section badge before tags
   - Color scheme: Blue (Science), Green (Life), Purple (Poetry)

5. **app/page.tsx**
   - Pre-loads all sections for static export
   - Passes data to client wrapper

6. **components/HomePageWrapper.tsx** (New)
   - Client component that handles URL search params
   - Filters posts based on selected section
   - Enables client-side tab switching

7. **app/layout.tsx**
   - Updated metadata title to "Fibres of my Being"
   - Updated description to match theme

## 🚀 How to Use

### Writing New Posts

Place your markdown file in the appropriate section:

```bash
# Science post
content/posts/science/my-science-post.md

# Life post
content/posts/life/my-life-post.md

# Poetry post
content/posts/poetry/my-poetry-post.md
```

### Viewing Sections

Navigate using tabs or URLs:
- `/?section=all` - All posts
- `/?section=science` - Science posts only
- `/?section=life` - Life posts only
- `/?section=poetry` - Poetry posts only

## ✅ Build Status

- ✅ Build successful
- ✅ All 10 posts in correct sections
- ✅ Tab navigation working
- ✅ Section badges displaying
- ✅ Static export generated
- ✅ No TypeScript errors
- ✅ No linting errors

## 🎨 Design Philosophy

The three sections represent different "fibres" of thought:

- **Science** - The analytical fibre, exploring patterns and systems
- **Life** - The practical fibre, reflections on craft and creation
- **Poetry** - The philosophical fibre, contemplative and reflective

Each section has its own color and character, woven together into a unified whole.

## 📝 Next Steps

1. **Test locally**: `npm run dev` and try switching between tabs
2. **Customize**: Adjust section colors in `ArticleCard.tsx`
3. **Add content**: Write new posts in the appropriate sections
4. **Deploy**: Push to GitHub and let Actions deploy

---

**Your blog is now organized into three beautiful sections! 🧵**

