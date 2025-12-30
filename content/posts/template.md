---
title: "Markdown Template & Reference Guide"
date: "2025-12-30"
excerpt: "A comprehensive reference guide showcasing all markdown features available for your blog posts. Use this as a starting point for new articles."
author: "Blog Author"
coverImage: "/images/template.jpg"
tags: ["reference", "markdown", "guide"]
---

# Markdown Template & Reference Guide

This is a comprehensive template showcasing all markdown features you can use in your blog posts. Copy this file and start writing!

## Headers

You can use headers from H1 to H6:

# H1 Header
## H2 Header
### H3 Header
#### H4 Header
##### H5 Header
###### H6 Header

## Text Formatting

You can make text **bold**, *italic*, ***bold and italic***, or ~~strikethrough~~.

You can also use `inline code` for technical terms or code snippets.

## Lists

### Unordered Lists

- First item
- Second item
- Third item
  - Nested item 1
  - Nested item 2
    - Deeply nested item

### Ordered Lists

1. First step
2. Second step
3. Third step
   1. Sub-step A
   2. Sub-step B

### Task Lists

- [x] Completed task
- [ ] Incomplete task
- [ ] Another task to do

## Links and Images

You can add [links to external sites](https://example.com) or [internal links](/posts/another-post).

Images can be embedded like this:

![Alt text for image](/images/example.jpg)

## Code Blocks

### Inline Code

Use backticks for `inline code` within sentences.

### Code Blocks with Syntax Highlighting

JavaScript example:

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
  return true;
}

const result = greet("World");
```

Python example:

```python
def calculate_fibonacci(n):
    if n <= 1:
        return n
    return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)

print(calculate_fibonacci(10))
```

CSS example:

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.button {
  background-color: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}
```

TypeScript example:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

function getUserById(id: number): User | null {
  // Implementation here
  return null;
}
```

## Blockquotes

> This is a blockquote. It's great for highlighting important information or quotes from other sources.
>
> You can have multiple paragraphs in a blockquote.

You can also nest blockquotes:

> This is the first level
>> This is nested
>>> This is deeply nested

## Horizontal Rules

You can create horizontal rules to separate sections:

---

## Tables

Tables are great for organizing data:

| Feature | Supported | Notes |
|---------|-----------|-------|
| Headers | ✅ | H1-H6 |
| Lists | ✅ | Ordered & Unordered |
| Code Blocks | ✅ | With syntax highlighting |
| Tables | ✅ | Markdown tables |
| Images | ✅ | Local and remote |

You can also align columns:

| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Left | Center | Right |
| Text | Text | Text |

## Special Characters and Escaping

You can escape special characters with backslash: \* \_ \` \[ \]

## Footnotes

You can add footnotes to your text[^1]. They will appear at the bottom of the page.

Here's another footnote reference[^2].

[^1]: This is the first footnote.
[^2]: This is the second footnote with more details.

## Emphasis and Strong Emphasis

You can use *asterisks* or _underscores_ for emphasis (italic).

You can use **double asterisks** or __double underscores__ for strong emphasis (bold).

You can combine them: **bold and _italic_** or ***all bold and italic***.

## Line Breaks

To create a line break, end a line with two or more spaces, or use a backslash:  
This text is on a new line.

Or use a blank line to create a new paragraph.

## Nested Lists with Mixed Types

1. First ordered item
   - Unordered sub-item
   - Another sub-item
     1. Nested ordered item
     2. Another nested ordered item
2. Second ordered item
   - Sub-item with `code`
   - Sub-item with **bold text**

## Definition Lists

While not standard markdown, some parsers support definition lists:

Term 1
: Definition 1

Term 2
: Definition 2a
: Definition 2b

## HTML in Markdown

You can also use HTML directly in markdown if needed:

<div style="background-color: #f0f0f0; padding: 1rem; border-radius: 0.5rem;">
  This is HTML content inside markdown.
</div>

## Best Practices

1. **Use descriptive headers** - Help readers navigate your content
2. **Break up long paragraphs** - Keep paragraphs focused and readable
3. **Add alt text to images** - Improves accessibility
4. **Use code blocks for code** - Don't use screenshots for code
5. **Link to sources** - Give credit and provide references
6. **Preview before publishing** - Check formatting and links

## Front Matter Reference

The front matter at the top of this file contains metadata:

```yaml
---
title: "Your Post Title"
date: "2025-12-30"
excerpt: "A brief description of your post"
author: "Your Name"
coverImage: "/images/your-image.jpg"
tags: ["tag1", "tag2", "tag3"]
---
```

### Front Matter Fields:

- **title**: The title of your post (required)
- **date**: Publication date in YYYY-MM-DD format (required)
- **excerpt**: A short summary for the article card (required)
- **author**: Your name or pen name (required)
- **coverImage**: Path to cover image (optional)
- **tags**: Array of tags for categorization (optional)

## Writing Tips

1. **Start with an outline** - Plan your structure before writing
2. **Use examples** - Concrete examples help readers understand
3. **Edit ruthlessly** - Remove unnecessary words
4. **Read aloud** - Catch awkward phrasing
5. **Get feedback** - Have someone else review your draft

## Conclusion

This template covers all the markdown features available in your blog. Copy this file, update the front matter, and start writing your own content!

Happy blogging! 🚀

