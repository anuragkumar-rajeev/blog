# Animation & Color Palette Update

## ✅ Changes Completed

Your blog now features subtle background animations and dynamic color palettes that change based on the selected section!

## 🎨 Color Palettes by Section

### 🔵 Science (Blue Family)
**Light Mode:**
- Accent: `#2563eb` (Blue 600)
- Hover: `#1d4ed8` (Blue 700)
- Gradients: Soft blue tones

**Dark Mode:**
- Accent: `#60a5fa` (Blue 400)
- Hover: `#93c5fd` (Blue 300)
- Gradients: Deep blue tones

### 🔴 Life (Red Family)
**Light Mode:**
- Accent: `#dc2626` (Red 600)
- Hover: `#b91c1c` (Red 700)
- Gradients: Soft red tones

**Dark Mode:**
- Accent: `#f87171` (Red 400)
- Hover: `#fca5a5` (Red 300)
- Gradients: Deep red tones

### 🟢 Poetry (Green Family)
**Light Mode:**
- Accent: `#059669` (Emerald 600)
- Hover: `#047857` (Emerald 700)
- Gradients: Soft green tones

**Dark Mode:**
- Accent: `#34d399` (Emerald 400)
- Hover: `#6ee7b7` (Emerald 300)
- Gradients: Deep green tones

### 🟣 All (Purple/Indigo Family)
**Light Mode:**
- Accent: `#2563eb` (Blue 600)
- Hover: `#1d4ed8` (Blue 700)
- Gradients: Indigo/purple blend

**Dark Mode:**
- Accent: `#818cf8` (Indigo 400)
- Hover: `#a5b4fc` (Indigo 300)
- Gradients: Deep indigo tones

## 🌊 Background Animations

### Animated Orbs
- **5 floating orbs** per section
- Sizes: 300-450px (heavily blurred)
- **Three animation types**:
  1. **Float 1**: Circular motion with rotation (20-26s cycle)
  2. **Float 2**: Counter-circular motion (22-28s cycle)
  3. **Float 3**: Scale and translate (24-30s cycle)
- **Staggered delays**: 0s, 2s, 4s, 6s, 8s
- **Opacity**: 0.4 (subtle, non-distracting)

### Gradient Overlay
- **Dual radial gradients**:
  - Top-left ellipse
  - Bottom-right ellipse
- **Pulsing animation**: 8s cycle (opacity 0.3 to 0.6)
- **Colors match section theme**

### Performance Optimizations
- Fixed positioning (no layout thrashing)
- GPU-accelerated transforms
- Pointer events disabled (no interaction overhead)
- Blur filters for smooth appearance
- Z-index layering (background stays behind content)

## 🎯 What Changes Based on Section

### 1. Tab Colors
Each tab shows its section color:
- **ALL**: Purple/Indigo
- **SCIENCE**: Blue
- **LIFE**: Red
- **POETRY**: Green

Active tab is highlighted in its color with underline.

### 2. Hero Title
"Fibres of my Being" changes color to match the active section.

### 3. Article Card Hover
Cards show a colored border on hover matching the section theme.

### 4. Background Animation
Orbs and gradients transition smoothly (1s ease-in-out) when switching sections.

## 📁 New Files

### styles/sectionThemes.ts
Defines color palettes for each section in both light and dark modes:
```typescript
export const sectionThemes = {
  science: { light: {...}, dark: {...} },
  life: { light: {...}, dark: {...} },
  poetry: { light: {...}, dark: {...} },
  all: { light: {...}, dark: {...} },
};
```

### components/AnimatedBackground.tsx
Renders the animated background with:
- 5 floating orbs with different animations
- Gradient overlay with pulse effect
- Section-based colors
- Dark mode support

## 🔧 Modified Files

### components/HomePage.tsx
- Imports `AnimatedBackground` and `sectionThemes`
- Renders animated background
- Applies section colors to hero title
- Passes section theme to article cards

### components/Header.tsx
- Imports section themes
- Each tab uses its section color
- Active tab highlighted in section color
- Hover effects use section colors

### components/ArticleCard.tsx
- Accepts optional `sectionTheme` prop
- Hover border uses section accent color
- Smooth color transitions

## 🎨 Animation Details

### Keyframes

**float1**: Circular motion with rotation
```
0% → 33% → 66% → 100%
translate(0,0) → (30px,-30px) → (-20px,20px) → (0,0)
rotate(0deg) → 120deg → 240deg → 360deg
```

**float2**: Counter-circular motion
```
0% → 33% → 66% → 100%
translate(0,0) → (-40px,40px) → (20px,-20px) → (0,0)
rotate(0deg) → -120deg → -240deg → -360deg
```

**float3**: Scale and translate
```
0% → 50% → 100%
scale(1) → 1.1 → 1
translate(0,0) → (15px,15px) → (0,0)
```

**pulse**: Opacity fade
```
0% → 50% → 100%
opacity: 0.3 → 0.6 → 0.3
```

## 🌈 Visual Effect

The result is a **subtle, organic, living background** that:
- ✅ Doesn't distract from content
- ✅ Adds visual interest and depth
- ✅ Reinforces section identity through color
- ✅ Creates smooth transitions between sections
- ✅ Works beautifully in both light and dark modes
- ✅ Performs smoothly (GPU-accelerated)

## 🚀 How to Use

### View Locally
```bash
npm run dev
# Visit http://localhost:3000
# Switch between tabs to see color/animation changes
```

### Customize Colors
Edit `styles/sectionThemes.ts`:
```typescript
science: {
  light: {
    accent: '#YOUR_COLOR',
    // ... more colors
  }
}
```

### Adjust Animation Speed
Edit `components/AnimatedBackground.tsx`:
```typescript
animation: float1 ${20 + delay}s ease-in-out infinite;
// Change 20 to your preferred duration
```

### Modify Orb Count/Sizes
Edit the `orbs` array in `AnimatedBackground.tsx`:
```typescript
const orbs = [
  { size: 400, x: 10, y: 20, animation: 'float1', delay: 0 },
  // Add or remove orbs
];
```

## ✅ Build Status

- ✅ Build successful
- ✅ All animations working
- ✅ Color palettes applied
- ✅ Smooth transitions
- ✅ No performance issues
- ✅ No TypeScript errors

## 🎭 The Experience

When users switch tabs:
1. **Tabs** smoothly transition colors
2. **Hero title** changes to section color
3. **Background** fades to new color palette (1s)
4. **Orbs** continue their dance in new colors
5. **Article cards** show section-colored hover effects

The result is a **cohesive, immersive experience** where each section has its own visual identity while maintaining overall design consistency.

---

**Your blog now has beautiful, subtle animations and dynamic color theming! 🎨✨**

